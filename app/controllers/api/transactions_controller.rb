class Api::TransactionsController < PlaidController
  def create
    client = plaid_client
    item = Item.find_by_user_id(params[:user_id]);
    user = User.find_by_id(params[:user_id]);

    if Transaction.where(item_id: item)

      Transaction.where(item_id: item).destroy_all
      transaction_response = client.transactions.get(item.access_token, '2019-06-21', '2019-06-29')
      transactions = transaction_response.transactions

      while transactions.length < transaction_response['total_transactions']
        transaction_response = client.transactions.get(
                                            access_token,
                                            '2019-06-21',
                                            '2019-06-29',
                                            offset: transactions.length)
        transactions += transaction_response.transactions
      end

      roundup = 0


      for transaction in transactions do
        singleRoundup = 0
        @transaction = Transaction.new()
        @transaction.name = transaction.name
        @transaction.amount = transaction.amount
        if transaction.amount > 0
          singleRoundup = (transaction.amount.ceil - transaction.amount).round(2)
          roundup += singleRoundup.round(2)
        end
        @transaction.roundup = singleRoundup
        @transaction.date = transaction.date
        @transaction.category_id = transaction.category_id
        @transaction.item = item
        @transaction.save
      end

      user.current_roundup_balance = roundup
      user.save

    end

    @trans = Transaction.where(item_id: item)

    render :json => {
      transaction: @trans,
      roundup: roundup
    }


  end

end

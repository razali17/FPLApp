class AddRoundupToTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :roundup, :decimal
  end
end

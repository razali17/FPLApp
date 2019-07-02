class AddTotalBalToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :total_balance, :float
  end
end

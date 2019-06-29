require 'plaid'
class PlaidController < ApplicationController

  def plaid_client
   @client ||= Plaid::Client.new(env: :development,
                           client_id: "5d0a6368ed25af0014b175e6",
                           secret: "2ae89ce59b9f812475f71e0d9aba50",
                           public_key: "48e15550400c53058eab7f1f034c39",)
  end

end

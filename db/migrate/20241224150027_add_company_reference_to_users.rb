class AddCompanyReferenceToUsers < ActiveRecord::Migration[7.1]
  disable_ddl_transaction!

  def change
    add_reference :users, :company, index: { algorithm: :concurrently }
  end
end

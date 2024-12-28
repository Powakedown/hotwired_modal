class AddCompanyReferenceToQuotes < ActiveRecord::Migration[7.1]
  disable_ddl_transaction!

  def change
    add_reference :quotes, :company, index: { algorithm: :concurrently }
  end
end

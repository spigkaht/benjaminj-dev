class ContactsController < ApplicationController
  def create
    name = params[:name]
    email = params[:email]
    message = params[:message]

    # Example: Send email using ActionMailer (if configured)
    ContactMailer.with(name: name, email: email, message: message).send_contact.deliver_now

    flash[:notice] = "Thank you for your message!"
    redirect_to root_path
  end
end

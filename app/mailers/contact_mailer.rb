class ContactMailer < ApplicationMailer
  def send_contact
    @name = params[:name]
    @message = params[:message]
    mail(to: 'benjamin.j.web@gmail.com', from: params[:email], subject: 'New Message for benjaminj.dev')
  end
end

ActionMailer::Base.smtp_settings = {
  address:        'smtp.gmail.com',
  port:           587,
  domain:         'gmail.com',
  user_name:      ENV['GMAIL_USERNAME'],
  password:       ENV['GMAIL_PASSWORD'],
  authentication: :plain,
  enable_starttls_auto: true
}

ActionMailer::Base.default_url_options = {
  host: 'https://benjaminj-dev-4cfee212cd59.herokuapp.com/', # Update this with your production domain when deploying
}
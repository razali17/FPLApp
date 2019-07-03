# The Change Collective

Collaborators:

[Raza Ali](https://github.com/razali17) & [Kayley Luftig](https://github.com/krl87)

An application designed for those who wants to make a change in the world! This application connects to your bank account using [Plaid](https://plaid.com/) and collects the round-ups from your purchases to collective fund, which then gets donated to charities based on the the total collective choices. Using YOUR change to make a change!


## Starting the Application

You need **TWO** terminals for this.

In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default). Run `bin/rails s` to run the server.

In the other terminal, `cd` into `client`. Run `npm install`. Then run `npm start` and go to `localhost:3000` in your browser.

NOTE: You need at least Ruby~ 2.6.2 in order to run bundle. Please update your RVM first!

## Final Product

![Homepage](https://i.imgur.com/vlltSGq.png)
![Registration](https://i.imgur.com/zLx7RAc.png)
![Plaid Agreement](https://i.imgur.com/qf8xoHZ.png)
![Select Your Bank](https://i.imgur.com/sCETTYt.png)
![Login Your Bank Account](https://i.imgur.com/bqQQclt.png)
![View Your Round-ups](https://i.imgur.com/4HPMQZb.png)
![Goals Completed With Collective Funds](https://i.imgur.com/1lBsNQV.png)
![Your/Collective Vote Results](https://i.imgur.com/e511NZF.png)

## Future Implementations

Short-term stretches:
-Implement more charity options . 
-Allow users to edit their profile options such as select their round-up denominations(closest dime, dollar etc. ) . 
-Using ActionMailer to send confirmation emails to users . 
-Refactor codes to make it more dry  

Long-term stretches:
-Implement live support chat using WebSockets . 
-Connect with STRIPE to implement actual payment towards charities . 
-Allow multiple accounts per user through Plaid . 


# Portfolio

Single Page Application built with Nodejs + React, but not Next.js

## Development

Run `npm run dev`. This command starts two servers

- frontend: port 3000
- mail service: port 8890

To run the mail service, make sure to add `.env` file at root. Here's the contents

```
NODE_ENV=<DEVELOPMENT_OR_PRODUCTION>
PORT=8890 // has to match your webpack proxy, at least for local dev
MAIL_USER=<GET_FROM_YOUR_GMAIL_ACCOUNT> // using quebec3 gmail
MAIL_PASS=<GET_FROM_YOUR_GMAIL_ACCOUNT>
MAIL_HOST=<GET_FROM_YOUR_GMAIL_ACCOUNT>
MAIL_PORT=<GET_FROM_YOUR_GMAIL_ACCOUNT>
MAIL_DESTINATION=<YOUR_MAIN_EMAIL_ADDRESS>
RECAPTCHA_SECRET_KEY=<YOUR_RECAPTCHA_SECRET_KEY>
```

## Deployment

### Github actions

CI/CD using Github actions has been set. It's triggered on push to master branch.

### CI/CD process

1. Pushing your changes to master triggers Github actions
2. Action runner copies `dist/` to `/var/www/daishodesign/` after build
3. PM2 is always running, but in case the process gets destroyed, use below command to set it up.

```bash
pm2 start --name ddesign /home/ubuntu/actions-runner-daishodesign/daishodesign/portfolio-v4/portfolio-v4/src/server/server.js --watch
```

4. Otherwise, the action runner handles pm2 restart

ssh-key login has been set with the oracle cloud server. The way to login using the ssh key is a bit different from what I'm used to.

```bash
ssh -i ~/.ssh/<your_private_ssh_key_file_name> <user_name_for_your_server>@<ip_address_of_your_server>
```

## Troubleshooting

### Unresponsive less compiler

If you update css variables in variables.less, open the consumer file of the variable and save the file otherwise the change won't apply.

### HTTPS redirect is not working for mobile devices

- User who goes to none SSL URL `http://...` should be redirected to `https://...`. This works fine for desktop, but not wih mobile (android and iOS). RCA is unknown at this point of writing (Jan 1, 2022)

### Sending message won't work in localhost

- Make sure mail service is up and running. It requires `.env` file.
- Make sure the list of domains contains `localhost` or `127.0.0.1` with your reCAPTCHA account (https://www.google.com/recaptcha)

## Miscellaneous

Project icons: [Devicon](https://devicon.dev/)

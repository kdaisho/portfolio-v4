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

### Add a remote for production to use Git Hooks

Git Hooks has already been set with production server. [How to set up Git Hooks](https://github.com/kdaisho/Blog/wiki/How-to-set-up-Git-Hooks)

Make sure to add a `remote` for `production`, just like you usually do for `origin`, to push your changes to the server.

```
git remote add production ssh://<USERNAME>@<YOUR_SERVER_IP_ADDRESS>/var/repo/site-daishodesign.git
```

### Steps to deploy

1. Run `git push production master`
2. Login to the server on digitalocean (password login disabled)
3. Navigate to application root
4. Run `npm run build`
5. Move the hero image: `highlights-en.jpg` into `dist/` folder. This is for open graph link.
6. PM2 handles the rest (If not run `pm2 restart <application_name>`)

## Troubleshooting

### Unresponsive less compiler

If you update css variables in variables.less, open the consumer file of the variable and save the file otherwise the change won't apply.

### Sending message won't work in localhost

- Make sure mail service is up and running. It requires `.env` file.
- Make sure the list of domains contains `localhost` or `127.0.0.1` with your reCAPTCHA account (https://www.google.com/recaptcha)

## Miscellaneous

## Image dimensions for side projects section

### Thumbnails

#### Original Dimensions

272 \* 136

#### Image dimensions and quality

454 \* 272 (quality: 90%)

### Hero

#### Original dimensions

600 \* 250

#### Image dimensions and quality

900 \* 525 (quality: 60%)

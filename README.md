# Portfolio

Single Page Application built with Nodejs + React, but not Next.js

## Deployment

1. `git push production master`
2. Login to the server on Digitalocean (password login disabled)
3. Navigate to the root directory
4. `npm run build`
5. PM2 handles the rest (If not, `pm2 restart <application_name>`)

## Troubleshooting

### Unresponsive less compiler

If you update css variables in variables.less, open the consumer file of the variable and save the file otherwise the change won't apply.

### Sending message won't work in localhost

Make sure there's an `.env` file at root, it should contain these;

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

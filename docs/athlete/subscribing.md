# Subscribing & Payments

boostME offers two types of paid subscriptions:

- **WOD subscription** — access to Daily WODs and the leaderboard (9,99 EUR / month)
- **Coach booking** — ongoing coaching with a specific human coach (monthly fee set by the coach)

Both are processed through **Stripe Hosted Checkout**. boostME never sees or stores your card details.

## How to subscribe

You can start a paid subscription from:

- The **WOD list** page — tap the subscribe button on the top banner
- A **WOD detail** page — tap the paywall prompt
- A **coach profile card** — tap **Book {FirstName} — {fee} EUR/mo**

## The consent dialog

Before you are sent to Stripe, a consent dialog opens. You must tick **all three** checkboxes before the **Continue to payment** button becomes active:

1. I accept the **Terms of Service**
2. I accept the **Privacy Policy**
3. I expressly request that the service starts **before the end of the 14-day revocation period**, and I acknowledge that I lose my right of revocation once the service has been fully provided

Each checkbox label includes a link that opens the respective document in a new tab. You can read all three before agreeing.

!!! warning "Why the third checkbox matters"
    EU consumer law normally gives you 14 days to revoke a subscription. By ticking the third box you ask boostME to start providing the service immediately, which means you waive that 14-day cooling-off window. Your regular cancellation right (see below) is not affected — it just means there is no automatic money-back during the first 14 days.

Once all three boxes are ticked, tap **Continue to payment** to be redirected to Stripe. After payment you return to the page you started on; a toast confirms success or cancellation.

## After a successful coach booking

When the Stripe payment for a coach booking succeeds, you are taken directly to the full-page chat with that coach so you can send your first message right away.

## Canceling a subscription

You can cancel a WOD or coach subscription at any time from the Stripe billing portal. Your access remains active until the end of the current billing period.

Because of the immediate-start waiver in the consent dialog, there is no automatic 14-day refund — but you keep the normal cancel-any-time flexibility.

## Free launch phase

!!! tip
    During the current launch phase, WOD subscriptions are **free** for all users. The consent dialog and checkout flow still apply (so we can record your agreement to the terms), but you will not be charged.

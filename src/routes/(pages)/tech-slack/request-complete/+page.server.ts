
import { TURNSTILE_SECRETKEY, SLACK_WEBHOOK_URL } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        
            const data = await request.formData();

            //Validate turnstile
            // Turnstile injects a token in "cf-turnstile-response".
            const token = data.get('cf-turnstile-response');
            const ip = request.headers.get('CF-Connecting-IP');
          
            // Validate the token by calling the
            // "/siteverify" API endpoint.
            const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
            const result = await fetch(url, {
              body: JSON.stringify({
                secret: TURNSTILE_SECRETKEY,
                response: token,
                remoteip: ip
              }),
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            });
          
            const outcome = await result.json();

            if (!outcome.success) {
              error(500, {
                message: ['Turnstile validation failed.', ...outcome.messages].join(' '),
              });
            } 

            const name = data.get('name');
            const email = data.get('email');
            const requestData = JSON.parse(atob(data.get('requestData') as string));
            const {role, ...checklistItems} = requestData;

            console.log(name, email, requestData);
          
            await fetch(SLACK_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  "blocks": [
                    {
                      "type": "header",
                      "text": {
                        "type": "plain_text",
                        "text": `${name} is requesting access to Slack as a ${role}`,
                        "emoji": false
                      }
                    },
                    {
                      "type": "section",
                      "text": {
                        "type": "mrkdwn",
                        "text": `*Email:* ${email}`
                      }
                    },
                    {
                      "type": "divider"
                    },
                    ...Object.entries(checklistItems).map(([key, value]) => ({
                      "type": "section",
                      "text": {
                        "type": "mrkdwn",
                        "text": `${value === 'Yes' ? '✅' : '❌'} ${key}`
                      }
                    })),
                    {
                      "type": "divider"
                    },
                  ]
                })
            });


            return {
                success: true,
                message: 'Request completed successfully'
            };

        
    }
};


/*
{
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Jack Heaton:*\n*<mailto:jackheaton@me.com|jackheaton@me.com>*"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "✅ Agrees to this"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "❌ But not this"
			}
		}
	]
}
*/
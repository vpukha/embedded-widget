(()=>{
    const ueid = '5300f45e-7a70-47e6-9bc1-9cbd5178665c-' + ~~(Math.random() * 1e6);
    const target = undefined;
    const root = ((uuid,target)=>{
        const makeElement = (type,classes,attributes,content)=>{
            const element = document.createElement(type);
            if (classes)
                classes.forEach(c=>element.classList.add(c));
            if (attributes)
                Object.entries(attributes).forEach(([key,value])=>element.setAttribute(key, value));
            if (content)
                element.innerHTML = content;
            return element;
        }
        ;
        if (!target) {
            document.write(`<div id="IMT_WEB_EMBED_${uuid}"></div>`);
            target = `IMT_WEB_EMBED_${uuid}`;
        }
        const root = document.getElementById(target);
        if (!root)
            return;
        root.innerHTML = '';
        if (!document.querySelector('link[data-vendor="integromat-embed"]')) {
            const style = makeElement('link', [], {
                rel: 'stylesheet',
                type: 'text/css',
                href: `embed.css`,
                'data-vendor': 'integromat-embed'
            });
            document.head.appendChild(style);
        }
        return root;
    }
    )(ueid, target);
    if (root) {
        ((uuid,root,html,drawMode,overrides)=>{
            root.innerHTML = html;
            const wrapper = root.getElementsByClassName('integromat-embed-wrapper')[0];
            if (wrapper) {
                new ResizeObserver(([entry])=>{
                    const currentWidth = entry.contentRect.width;
                    const element = entry.target;
                    const breakpoint = 834;
                    const breakpointClass = `integromat-embed-${overrides.narrowClass || drawMode}-narrow`;
                    if (currentWidth <= breakpoint && !(element.classList.contains(breakpointClass))) {
                        element.classList.add(breakpointClass);
                    } else if (currentWidth > breakpoint && element.classList.contains(breakpointClass)) {
                        element.classList.remove(breakpointClass);
                    }
                }
                ).observe(wrapper);
                const showMoreButton = wrapper.getElementsByClassName('integromat-embed-show-more')[0];
                if (showMoreButton) {
                    showMoreButton.addEventListener('click', ()=>{
                        const templates = wrapper.getElementsByClassName('integromat-embed-showmore-wrapper');
                        [...templates].forEach(template=>{
                            template.style.display = '';
                        }
                        );
                        showMoreButton.classList.add('integromat-embed-hidden');
                    }
                    );
                }
                const utmLinks = wrapper.getElementsByClassName('integromat-embed-utm-link');
                if (utmLinks.length) {
                    [...utmLinks].forEach(utmLink=>{
                        const url = new URL(utmLink.getAttribute('href'));
                        if (!url)
                            return;
                        if (overrides.brand) {
                            url.searchParams.append(`utm_campaign`, 'clicksend-partner-program');
                            url.searchParams.append(`utm_medium`, overrides.utmMedium || 'referral');
                            url.searchParams.append(`utm_source`, window.location.hostname);
                        }
                        url.searchParams.append(`source`, 'embed-builder');
                        utmLink.setAttribute('href', url.toString());
                    }
                    );
                }
            }
        }
        )(ueid, root, `<div style="display: none" class="integromat-embed-wrapper integromat-embed-list integromat-embed-light"> <span> <a class="integromat-embed-utm-link" href="https://www.make.com"> <img
        src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2F35Gu2L4O8IiyIaVL3PyWax%2F72f6b0676358bc4ac136e66753aba955%2FLogo.svg&w=256&q=90"
        alt="Make"> </a> </span>
<div class="integromat-embed-showmore-wrapper" style="">
<div>
    <div style="background: #0fa763"> <img
            src="https://make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-google-sheets%2F9c3036d5ad86e8b490db87adcd28131b%2Fgoogle-sheets.png&w=3840&q=90"
            alt="Icon of app Google Sheets"> </div>
    <div style="background: #00a5ff"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-clicksend%2F167e22b2317ee07b055a05d5181332e8%2Fclicksend.png&w=3840&q=90"
            alt="Icon of app ClickSend SMS"> </div>
</div>
<div>
    <div>Send ClickSend SMS messages for new Google Sheets rows</div>
    <div>Google Sheets + ClickSend SMS</div>
</div>
<div>
    <div> <a class="integromat-embed-utm-link"
            href="https://www.make.com/en/templates/2735-send-clicksend-sms-messages-for-new-google-sheets-rows"
            target="_blank" rel="noopener noreferrer">Use</a> </div>
</div>
</div>
<div class="integromat-embed-showmore-wrapper" style="">
<div>
    <div style="background: #4a154b"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-slack%2F739bcf24c85033596cfdfafb796a41c7%2Fslack.png&w=3840&q=90"
            alt="Icon of app Slack"> </div>
    <div style="background: #00a5ff"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-clicksend%2F167e22b2317ee07b055a05d5181332e8%2Fclicksend.png&w=3840&q=90"
            alt="Icon of app ClickSend SMS"> </div>
</div>
<div>
    <div>Send ClickSend SMS messages when new files are received on Slack</div>
    <div>Slack + ClickSend SMS</div>
</div>
<div>
    <div> <a class="integromat-embed-utm-link"
            href="https://www.make.com/en/templates/6598-send-clicksend-sms-messages-when-new-files-are-received-on-slack"
            target="_blank" rel="noopener noreferrer">Use</a> </div>
</div>
</div>
<div class="integromat-embed-showmore-wrapper" style="">
<div>
    <div style="background: #00a5ff"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-clicksend%2F167e22b2317ee07b055a05d5181332e8%2Fclicksend.png&w=3840&q=90"
            alt="Icon of app ClickSend SMS"> </div>
    <div style="background: #179cde"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-telegram%2F8e04aab1af66a01a27597c5940e83a6f%2Ftelegram.png&w=3840&q=90"
            alt="Icon of app Telegram Bot"> </div>
</div>
<div>
    <div>Receive incoming ClickSend SMS messages in Telegram</div>
    <div>ClickSend SMS + Telegram Bot</div>
</div>
<div>
    <div> <a class="integromat-embed-utm-link"
            href="https://www.make.com/en/templates/2752-receive-incoming-clicksend-sms-messages-in-telegram"
            target="_blank" rel="noopener noreferrer">Use</a> </div>
</div>
</div>
<div class="integromat-embed-showmore-wrapper" style="">
<div>
    <div style="background: #96bf48"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-shopify%2F8eb38f598342768cf5ffb88fea1bd057%2Fshopify.png&w=3840&q=90"
            alt="Icon of app Shopify"> </div>
    <div style="background: #00a5ff"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-clicksend%2F167e22b2317ee07b055a05d5181332e8%2Fclicksend.png&w=3840&q=90"
            alt="Icon of app ClickSend SMS"> </div>
</div>
<div>
    <div>Add new Shopify customers to ClickSend</div>
    <div>Shopify + ClickSend SMS</div>
</div>
<div>
    <div> <a class="integromat-embed-utm-link"
            href="https://www.make.com/en/templates/2741-add-new-shopify-customers-to-clicksend" target="_blank"
            rel="noopener noreferrer">Use</a> </div>
</div>
</div>
<div class="integromat-embed-showmore-wrapper" style="display: none !important">
<div>
    <div style="background: #434a54"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-pipedrive%2F4bc6013739147cfe5e1ba264facba9b5%2Fpipedrive.png&w=3840&q=90"
            alt="Icon of app Pipedrive"> </div>
    <div style="background: #00a5ff"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-clicksend%2F167e22b2317ee07b055a05d5181332e8%2Fclicksend.png&w=3840&q=90"
            alt="Icon of app ClickSend SMS"> </div>
</div>
<div>
    <div>Add new people from Pipedrive CRM to ClickSend</div>
    <div>Pipedrive + ClickSend SMS</div>
</div>
<div>
    <div> <a class="integromat-embed-utm-link"
            href="https://www.make.com/en/templates/2747-add-new-people-from-pipedrive-crm-to-clicksend"
            target="_blank" rel="noopener noreferrer">Use</a> </div>
</div>
</div>
<div class="integromat-embed-showmore-wrapper" style="display: none !important">
<div>
    <div style="background: #a46497"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-woocommerce%2Fd9c678bf77ba48c57297aef1a21a2206%2Fwoocommerce.png&w=3840&q=90"
            alt="Icon of app WooCommerce"> </div>
    <div style="background: #00a5ff"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-clicksend%2F167e22b2317ee07b055a05d5181332e8%2Fclicksend.png&w=3840&q=90"
            alt="Icon of app ClickSend SMS"> </div>
</div>
<div>
    <div>Send ClickSend SMS messages for WooCommerce orders</div>
    <div>WooCommerce + ClickSend SMS</div>
</div>
<div>
    <div> <a class="integromat-embed-utm-link"
            href="https://www.make.com/en/templates/2726-send-clicksend-sms-messages-for-woocommerce-orders"
            target="_blank" rel="noopener noreferrer">Use</a> </div>
</div>
</div>
<div class="integromat-embed-showmore-wrapper" style="display: none !important">
<div>
    <div style="background: #019cdc"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-salesforce%2Fec25974b81a2bcd13bbe136b386640e6%2Fsalesforce.png&w=3840&q=90"
            alt="Icon of app Salesforce"> </div>
    <div style="background: #00a5ff"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-clicksend%2F167e22b2317ee07b055a05d5181332e8%2Fclicksend.png&w=3840&q=90"
            alt="Icon of app ClickSend SMS"> </div>
</div>
<div>
    <div>Add new Salesforce contacts to ClickSend</div>
    <div>Salesforce + ClickSend SMS</div>
</div>
<div>
    <div> <a class="integromat-embed-utm-link"
            href="https://www.make.com/en/templates/2749-add-new-salesforce-contacts-to-clicksend"
            target="_blank" rel="noopener noreferrer">Use</a> </div>
</div>
</div>
<div class="integromat-embed-showmore-wrapper" style="display: none !important">
<div>
    <div style="background: #13b5ea"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-xero%2F7b4ac2698b9a0903c5e5c190227feece%2Fxero.png&w=3840&q=90"
            alt="Icon of app Xero"> </div>
    <div style="background: #00a5ff"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-clicksend%2F167e22b2317ee07b055a05d5181332e8%2Fclicksend.png&w=3840&q=90"
            alt="Icon of app ClickSend SMS"> </div>
</div>
<div>
    <div>Send ClickSend SMS messages for new Xero credit notes</div>
    <div>Xero + ClickSend SMS</div>
</div>
<div>
    <div> <a class="integromat-embed-utm-link"
            href="https://www.make.com/en/templates/2728-send-clicksend-sms-messages-for-new-xero-credit-notes"
            target="_blank" rel="noopener noreferrer">Use</a> </div>
</div>
</div>
<div class="integromat-embed-showmore-wrapper" style="display: none !important">
<div>
    <div style="background: #6633cc"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-google-forms%2F5984eb9463fe49c324cb416821af6f1e%2Fgoogle-forms.png&w=3840&q=90"
            alt="Icon of app Google Forms"> </div>
    <div style="background: #00a5ff"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-clicksend%2F167e22b2317ee07b055a05d5181332e8%2Fclicksend.png&w=3840&q=90"
            alt="Icon of app ClickSend SMS"> </div>
</div>
<div>
    <div>Send ClickSend SMS messages when someone completes your Google Forms form</div>
    <div>ClickSend SMS + Google Forms</div>
</div>
<div>
    <div> <a class="integromat-embed-utm-link"
            href="https://www.make.com/en/templates/2732-send-clicksend-sms-messages-when-someone-completes-your-google-forms-form"
            target="_blank" rel="noopener noreferrer">Use</a> </div>
</div>
</div>
<div class="integromat-embed-showmore-wrapper" style="display: none !important">
<div>
    <div style="background: #179cde"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-telegram%2F8e04aab1af66a01a27597c5940e83a6f%2Ftelegram.png&w=3840&q=90"
            alt="Icon of app Telegram Bot"> </div>
    <div style="background: #00a5ff"> <img
            src="https://www.make.com/en/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqqlj6g4ee76j%2FappIcon-clicksend%2F167e22b2317ee07b055a05d5181332e8%2Fclicksend.png&w=3840&q=90"
            alt="Icon of app ClickSend SMS"> </div>

</div>
<div>
    <div>Send ClickSend SMS messages for new Telegram messages
    </div>
    <div>Telegram Bot + ClickSend SMS</div>
</div>
<div>
    <div> <a class="integromat-embed-utm-link"
            href="https://www.make.com/en/templates/2755-send-clicksend-sms-messages-for-new-telegram-messages"
            target="_blank" rel="noopener noreferrer">Use</a> </div>
</div>
</div>

<span> <a class="integromat-embed-show-more" href="#"> Show more <svg aria-hidden="true" focusable="false"
        data-prefix="fal" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-8" role="img"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
        <path fill="currentColor"
            d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z">
        </path>
    </svg> </a> </span>
</div>`, 'list', {
            narrowClass: undefined,
            utmMedium: 'partner',
            brand: true
        });
    }
}
)();

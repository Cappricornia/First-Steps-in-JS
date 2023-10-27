function extractEmails(text) {
    const regex = /(?:^|\s)([A-Za-z0-9]+(?:[A-Za-z0-9._-]*[A-Za-z0-9]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+)(?=\s|.|$)/g;
    let matches = text.match(regex);
    let increm = 1;

    if (matches) {
        console.log(`Valid emails:\n==========================`);
        for (let email of matches) {
            console.log(`${increm++}: ${email} => Status OK`);
        }
    }
}

const text = "--123@gmail.com, …@mail.bg, .info@info.info, _steve@yahoo.cn, mike@helloworld, mike@.unknown.soft., s.johnson@invalid-. Please contact us at: support@github.com  a.graham@ymail.com h.baylis@gomman.co.uk.";
extractEmails(text);

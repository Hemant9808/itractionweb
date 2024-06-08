document.addEventListener("DOMContentLoaded", (t) => {
  var e;
  wpcf7_recaptcha = {
    ...(null !== (e = wpcf7_recaptcha) && void 0 !== e ? e : {}),
  };
  const c = wpcf7_recaptcha.sitekey,
    { homepage: n, contactform: a } = wpcf7_recaptcha.actions,
    o = (t) => {
      const { action: e, func: n, params: a } = t;
      grecaptcha
        .execute(c, { action: e })
        .then((t) => {
          const c = new CustomEvent("wpcf7grecaptchaexecuted", {
            detail: { action: e, token: t },
          });
          document.dispatchEvent(c);
        })
        .then(() => {
          "function" == typeof n && n(...a);
        })
        .catch((t) => console.error(t));
    };
  if (
    (grecaptcha.ready(() => {
      o({ action: n });
    }),
    document.addEventListener("change", (t) => {
      o({ action: a });
    }),
    "undefined" != typeof wpcf7 && "function" == typeof wpcf7.submit)
  ) {
    const t = wpcf7.submit;
    wpcf7.submit = function (e) {
      let c =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      o({ action: a, func: t, params: [e, c] });
    };
  }
  document.addEventListener("wpcf7grecaptchaexecuted", (t) => {
    const e = document.querySelectorAll(
      'form.wpcf7-form input[name="_wpcf7_recaptcha_response"]'
    );
    for (let c = 0; c < e.length; c++)
      e[c].setAttribute("value", t.detail.token);
  });
});


document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("home-banner");
    const images = ["bg1", "bg2", "bg3"];
    let currentIndex = 0;
  
    function changeBackground() {
      banner.classList.remove(images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
      banner.classList.add(images[currentIndex]);
    }
  
    setInterval(changeBackground, 2000); // Change image every 2 seconds
  });
  
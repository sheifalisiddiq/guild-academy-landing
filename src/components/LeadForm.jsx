import { forwardRef, useState } from 'react';
import { SUBMIT_ENDPOINT, THANK_YOU_URL, form } from '../content';
import { cx, useReveal } from '../hooks/useReveal';
import './LeadForm.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

const SOURCE_LABELS = {
  tiktok: 'TikTok',
  facebook: 'Facebook',
  instagram: 'Instagram',
};

function readSource() {
  try {
    const utm = new URLSearchParams(window.location.search).get('utm_source');
    return SOURCE_LABELS[(utm || '').trim().toLowerCase()] || 'Direct';
  } catch {
    return 'Direct';
  }
}

const initialValues = {
  name: '',
  email: '',
  dialCode: form.dialCodes[0].code,
  phone: '',
  experience: '',
};

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  const digits = values.phone.replace(/\D/g, '');
  if (digits.length < 6 || digits.length > 15) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.experience) {
    errors.experience = 'Please select your experience level.';
  }

  return errors;
}

const LeadForm = forwardRef(function LeadForm(_props, ref) {
  const [revealRef, isVisible] = useReveal({ threshold: 0.15 });
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | error

  const setField = (field) => (e) => {
    const { value } = e.target;
    setValues((v) => ({ ...v, [field]: value }));
    // Clear an existing error as soon as the field changes, but never raise a
    // new one mid-keystroke — errors appear on blur and on submit only.
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleBlur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    const fieldErrors = validate(values);
    setErrors((prev) => {
      const next = { ...prev };
      if (fieldErrors[field]) next[field] = fieldErrors[field];
      else delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true, experience: true });

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = document.querySelector(
        '.field.has-error input, .field.has-error select'
      );
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    setStatus('submitting');

    // The exact shape a GoHighLevel inbound webhook will receive.
    const payload = {
      name: values.name.trim(),
      email: values.email.trim().toLowerCase(),
      phone: values.dialCode + values.phone.replace(/\D/g, ''),
      trading_experience: values.experience,
      source: readSource(),
      submitted_at: new Date().toISOString(),
    };

    if (!SUBMIT_ENDPOINT) {
      // DEMO MODE — nothing is sent anywhere. Set SUBMIT_ENDPOINT in
      // src/content.js to switch the real POST below on.
      console.info('[GUILD Academy] Demo mode — lead payload not sent:', payload);
      await new Promise((resolve) => setTimeout(resolve, 800));
      window.location.assign(THANK_YOU_URL);
      return;
    }

    try {
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed: ' + res.status);
      window.location.assign(THANK_YOU_URL);
    } catch (err) {
      console.error('[GUILD Academy] Lead submission failed:', err);
      setStatus('error');
    }
  };

  const submitting = status === 'submitting';

  return (
    <section className="section signup" id="get-started" ref={ref}>
      <div className="container container--narrow">
        <div ref={revealRef} className={cx('signup__card reveal', isVisible && 'is-visible')}>
          <div className="signup__head">
            <span className="eyebrow">{form.eyebrow}</span>
            <h2 className="section-title signup__title">{form.title}</h2>
            <p className="signup__supporting">{form.supporting}</p>
          </div>

          <form className="signup__form" onSubmit={handleSubmit} noValidate>
            <Field id="name" label="Full name" error={touched.name && errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={values.name}
                onChange={setField('name')}
                onBlur={handleBlur('name')}
                aria-invalid={Boolean(touched.name && errors.name)}
                aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
              />
            </Field>

            <Field id="email" label="Email address" error={touched.email && errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={setField('email')}
                onBlur={handleBlur('email')}
                aria-invalid={Boolean(touched.email && errors.email)}
                aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
              />
            </Field>

            <Field id="phone" label="Phone / WhatsApp" error={touched.phone && errors.phone}>
              <div className="field__phone">
                <select
                  className="field__dial"
                  name="dialCode"
                  aria-label="Country dialling code"
                  value={values.dialCode}
                  onChange={setField('dialCode')}
                >
                  {form.dialCodes.map((d) => (
                    <option key={d.code} value={d.code}>
                      {d.label}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="50 123 4567"
                  value={values.phone}
                  onChange={setField('phone')}
                  onBlur={handleBlur('phone')}
                  aria-invalid={Boolean(touched.phone && errors.phone)}
                  aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
                />
              </div>
            </Field>

            <Field
              id="experience"
              label="Trading experience"
              error={touched.experience && errors.experience}
            >
              <select
                id="experience"
                name="experience"
                className={cx(!values.experience && 'is-empty')}
                value={values.experience}
                onChange={setField('experience')}
                onBlur={handleBlur('experience')}
                aria-invalid={Boolean(touched.experience && errors.experience)}
                aria-describedby={
                  touched.experience && errors.experience ? 'experience-error' : undefined
                }
              >
                <option value="" disabled>
                  Select your level
                </option>
                {form.experienceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            {status === 'error' && (
              <p className="signup__form-error" role="alert">
                Something went wrong sending your details. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="btn btn--primary btn--block signup__submit"
              disabled={submitting}
            >
              {submitting ? form.submitting : form.submit}
            </button>

            <p className="signup__privacy">{form.privacy}</p>
          </form>
        </div>
      </div>
    </section>
  );
});

function Field({ id, label, error, children }) {
  return (
    <div className={cx('field', error && 'has-error')}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && (
        <p className="field__error" id={id + '-error'}>
          {error}
        </p>
      )}
    </div>
  );
}

export default LeadForm;

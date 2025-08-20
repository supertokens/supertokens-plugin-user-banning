import { jsxs as g, jsx as n } from 'react/jsx-runtime';
import { useMemo as N, Fragment as S, useState as x, useCallback as u } from 'react';
import { SessionAuth as E } from 'supertokens-auth-react/recipe/session';
import { PermissionClaim as C } from 'supertokens-auth-react/recipe/userroles';
const R = 'supertokens-plugin-user-banning',
  U = (e) => async (i, r, { withSession: d, params: h }) => {
    const a = h ? `?${new URLSearchParams(h).toString()}` : '',
      b = `${e}${i}${a}`,
      c = {};
    d && (c.credentials = 'include');
    let s;
    try {
      s = await fetch(b, {
        ...c,
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(r),
      });
    } catch (t) {
      const l = new Error(`Fetch failed: ${t}`);
      let p = t;
      try {
        p = JSON.parse(t);
      } catch {}
      throw ((l.payload = p), l);
    }
    if (!s.ok) {
      const t = await s.text(),
        l = new Error(`Fetch failed: ${t}`);
      let p = t;
      try {
        p = JSON.parse(t);
      } catch {}
      throw ((l.payload = p), l);
    }
    return s.json();
  },
  $ = (e) => async (i, { withSession: r, params: d }) => {
    const h = d ? `?${new URLSearchParams(d).toString()}` : '',
      a = `${e}${i}${h}`,
      b = {};
    r && (b.credentials = 'include');
    let c;
    try {
      c = await fetch(a, {
        ...b,
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      });
    } catch (s) {
      const t = new Error(`Fetch failed: ${s}`);
      let l = s;
      try {
        l = JSON.parse(s);
      } catch {}
      throw ((t.payload = l), t);
    }
    if (!c.ok) {
      const s = await c.text(),
        t = new Error(`Fetch failed: ${s}`);
      let l = s;
      try {
        l = JSON.parse(s);
      } catch {}
      throw ((t.payload = l), t);
    }
    return c.json();
  },
  O = (e) => ({ get: $(e), post: U(e) }),
  T = (e) => N(() => O(e), [e]),
  j =
    '.supertokens-plugin-user-banning .container{margin:26px auto;width:420px;text-align:center;border-radius:8px;box-shadow:1px 1px 10px #00000029;background-color:#fff}.supertokens-plugin-user-banning .row{margin:0 auto;width:76%;padding-top:30px;padding-bottom:10px}.supertokens-plugin-user-banning .headerTitle{font-size:24px;line-height:27.6px;letter-spacing:.58px;font-weight:700;margin-bottom:20px;color:#000}.supertokens-plugin-user-banning .divider{margin-top:1.5em;margin-bottom:1.5em;border-bottom:.3px solid #dddddd;align-items:center;padding-bottom:5px}.supertokens-plugin-user-banning .formRow{display:flex;flex-direction:column;padding-top:0;padding-bottom:20px}.supertokens-plugin-user-banning .formRow .label{text-align:left;font-weight:700;font-size:12px;line-height:24px;color:#000}.supertokens-plugin-user-banning .formRow .inputContainer{margin-top:6px}.supertokens-plugin-user-banning .formRow .inputWrapper{box-sizing:border-box;width:100%;display:flex;align-items:center;background-color:#fafafa;height:34px;border-radius:6px;border:1px solid rgb(224,224,224)}.supertokens-plugin-user-banning .formRow input{box-sizing:border-box;padding-left:15px;filter:none;color:#000;background-color:transparent;border-radius:6px;font-size:14px;border:none;padding-right:25px;letter-spacing:1.2px;flex:9 1 75%;width:75%;height:32px;-webkit-text-fill-color:rgb(0,0,0)}.supertokens-plugin-user-banning .formRow input:focus{border:none;outline:none}.supertokens-plugin-user-banning .button{font-family:Arial,sans-serif;background-color:#1c222a;color:#fff;width:100%;height:34px;font-weight:600;border-width:1px;border-style:solid;border-radius:6px;border-color:#2d3644;background-position:center;transition:all .4s;background-size:12000%;cursor:pointer}.supertokens-plugin-user-banning .button:disabled{border:none;cursor:no-drop;opacity:.7}.generalError{background:#fff1eb;margin-bottom:10px;margin-top:24px;padding:10px 18px;letter-spacing:.2px;font-size:14px;border-radius:8px;color:#ff1717;animation:swing-in-top-fwd 1s cubic-bezier(.175,.885,.32,1.275) both;word-wrap:break-word}',
  B = (e) => {
    if (typeof e.payload.message == 'string') return e.payload.message;
    if (typeof (e == null ? void 0 : e.message) == 'string') return e.message;
    if (e)
      try {
        return 'Unknown error: ' + JSON.stringify(e);
      } catch {
        return 'Unknown error';
      }
  },
  q = ({ children: e, userStyles: i }) =>
    /* @__PURE__ */ g(S, {
      children: [
        e,
        /* @__PURE__ */ n('style', {
          children: i.join(`
`),
        }),
      ],
    });
function z(e) {
  const [i, r] = x(),
    [d, h] = x('public'),
    [a, b] = x(),
    [c, s] = x(null),
    t = T(e.apiDomain),
    l = u(() => {
      setTimeout(() => {
        r(void 0);
      }, 1e4);
    }, []),
    p = u(
      (o) => {
        r(B(o)), l();
      },
      [l],
    ),
    m = u(
      (o) =>
        t
          .get('/plugin/supertokens-plugin-user-banning/ban', {
            withSession: !0,
            params: { tenantId: d, email: o },
          })
          .then((v) => {
            r(void 0), s(v.banned);
          })
          .catch(p),
      [t, d],
    ),
    f = u(
      (o) =>
        t
          .post(
            '/plugin/supertokens-plugin-user-banning/ban',
            {
              email: a,
              isBanned: o,
            },
            {
              withSession: !0,
              params: { tenantId: d },
            },
          )
          .then(() => {
            r(void 0), s(o);
          })
          .catch(p),
      [t, d, a],
    ),
    w = u(
      (o) => {
        if ((o.preventDefault(), !a)) {
          r('Email is required');
          return;
        }
        m(a);
      },
      [m, a],
    ),
    y = u(
      (o) => {
        o.preventDefault(), f(!0);
      },
      [f, a],
    ),
    k = u(
      (o) => {
        if ((o.preventDefault(), !a)) {
          r('Email is required');
          return;
        }
        f(!1);
      },
      [f, a],
    );
  return /* @__PURE__ */ n(E, {
    overrideGlobalClaimValidators: (o) => [
      ...o,
      {
        ...C.validators.includes('ban-user'),
        onFailureRedirection: () => '/',
      },
    ],
    children: /* @__PURE__ */ n(q, {
      userStyles: [j],
      children: /* @__PURE__ */ n('div', {
        className: 'supertokens-plugin-user-banning',
        children: /* @__PURE__ */ n('div', {
          className: 'container',
          children: /* @__PURE__ */ g('div', {
            className: 'row',
            children: [
              /* @__PURE__ */ n('div', { className: 'headerTitle', children: 'Ban User' }),
              /* @__PURE__ */ n('p', {
                children:
                  'This page is used to ban and unban users. It is useful for preventing users from accessing your application.',
              }),
              /* @__PURE__ */ n('div', { className: 'divider' }),
              !!i && /* @__PURE__ */ n('div', { className: 'generalError', children: i }),
              /* @__PURE__ */ g('form', {
                noValidate: !0,
                children: [
                  /* @__PURE__ */ g('div', {
                    className: 'formRow',
                    children: [
                      /* @__PURE__ */ n('div', { className: 'label', children: 'Tenant ID' }),
                      /* @__PURE__ */ n('div', {
                        className: 'inputContainer',
                        children: /* @__PURE__ */ n('div', {
                          className: 'inputWrapper',
                          children: /* @__PURE__ */ n('input', {
                            type: 'text',
                            value: d,
                            autoComplete: 'on',
                            placeholder: 'Tenant ID',
                            onChange: (o) => h(o.target.value),
                          }),
                        }),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ g('div', {
                    className: 'formRow',
                    children: [
                      /* @__PURE__ */ n('div', { className: 'label', children: 'User Email' }),
                      /* @__PURE__ */ n('div', {
                        className: 'inputContainer',
                        children: /* @__PURE__ */ n('div', {
                          className: 'inputWrapper',
                          children: /* @__PURE__ */ n('input', {
                            type: 'email',
                            value: a,
                            disabled: !d,
                            autoComplete: 'on',
                            placeholder: 'User Email',
                            onChange: (o) => b(o.target.value),
                          }),
                        }),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ n('div', {
                    className: 'formRow',
                    children: /* @__PURE__ */ g('button', {
                      className: 'button',
                      onClick: w,
                      disabled: !(d && a),
                      children: [
                        'Check Status (',
                        typeof c == 'boolean'
                          ? c
                            ? /* @__PURE__ */ n('span', { style: { color: 'red' }, children: 'Banned' })
                            : /* @__PURE__ */ n('span', { style: { color: 'green' }, children: 'Not Banned' })
                          : ' - ',
                        ')',
                      ],
                    }),
                  }),
                  typeof c == 'boolean' &&
                    /* @__PURE__ */ g('div', {
                      className: 'formRow',
                      style: { flexDirection: 'row' },
                      children: [
                        /* @__PURE__ */ n('button', {
                          className: 'button',
                          disabled: c,
                          onClick: y,
                          style: { marginRight: '20px' },
                          children: 'Ban',
                        }),
                        /* @__PURE__ */ n('button', {
                          className: 'button',
                          disabled: !c,
                          onClick: k,
                          children: 'Unban',
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
const D = ({ apiDomain: e }) => ({
    id: R,
    routeHandlers: [
      {
        path: '/admin/ban-user',
        handler: () => z.call(null, { apiDomain: e }),
      },
    ],
    overrideMap: {
      emailpassword: {
        functions(i) {
          return {
            ...i,
            signUp(r) {
              return console.log('signUp', r), i.signUp(r);
            },
            signIn: async (r) => (console.log('signIn', r), i.signIn(r)),
          };
        },
      },
      session: {
        recipeInitRequired: !0,
        functions: (i) => ({
          ...i,
          signOut(r) {
            return console.log('signOut', r), i.signOut(r);
          },
        }),
      },
    },
  }),
  A = { init: D };
export { R as PLUGIN_ID, A as default, D as init };

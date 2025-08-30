/*! For license information please see bundle.js.LICENSE.txt */
;(() => {
    'use strict'
    var t = {
            16: (t, e, n) => {
                n.d(e, { A: () => a })
                var r = n(601),
                    o = n.n(r),
                    i = n(314),
                    c = n.n(i)()(o())
                c.push([
                    t.id,
                    'body {\n  margin: 0;\n  font-family: "Exo 2", sans-serif;\n  font-optical-sizing: auto;\n}\n\n.app-header {\n  padding: 2px 10px;\n  box-shadow: 1.4px 1.4px gainsboro;\n}\n\nmain {\n  padding: 10px;\n  \n}\n\n.form-container {\n    border: 1px solid black;\n    border-radius: 4.5px;\n    display: none;\n}\n\nh2 {\n    font-size: 1.2rem;\n    margin: 0;\n    padding: 5px;\n    border-bottom: 1px solid black;\n    background-color: #ccc;\n}\n  \nform {\n    padding: 10px;\n    padding-top: 0;\n}\nform p {\n    display: flex;\n    flex-direction: column;\n}\n\nform p input,\nform p textarea {\n    padding: 5px;\n    border: 1px solid black;\n    border-radius: 4.5px;\n    font-size: 1rem;\n}\n\n.archive-option {\n    margin-top: 10px;\n    padding: 10px;\n    \n    border-bottom: solid 1px black;\n}\n\n.archive-option label {\n    font-size: 1rem;\n    margin-right: 10px;\n}\n',
                    '',
                ])
                const a = c
            },
            56: (t, e, n) => {
                t.exports = function (t) {
                    var e = n.nc
                    e && t.setAttribute('nonce', e)
                }
            },
            72: (t) => {
                var e = []
                function n(t) {
                    for (var n = -1, r = 0; r < e.length; r++)
                        if (e[r].identifier === t) {
                            n = r
                            break
                        }
                    return n
                }
                function r(t, r) {
                    for (var i = {}, c = [], a = 0; a < t.length; a++) {
                        var u = t[a],
                            l = r.base ? u[0] + r.base : u[0],
                            f = i[l] || 0,
                            s = ''.concat(l, ' ').concat(f)
                        i[l] = f + 1
                        var p = n(s),
                            d = {
                                css: u[1],
                                media: u[2],
                                sourceMap: u[3],
                                supports: u[4],
                                layer: u[5],
                            }
                        if (-1 !== p) (e[p].references++, e[p].updater(d))
                        else {
                            var y = o(d, r)
                            ;((r.byIndex = a),
                                e.splice(a, 0, {
                                    identifier: s,
                                    updater: y,
                                    references: 1,
                                }))
                        }
                        c.push(s)
                    }
                    return c
                }
                function o(t, e) {
                    var n = e.domAPI(e)
                    return (
                        n.update(t),
                        function (e) {
                            if (e) {
                                if (
                                    e.css === t.css &&
                                    e.media === t.media &&
                                    e.sourceMap === t.sourceMap &&
                                    e.supports === t.supports &&
                                    e.layer === t.layer
                                )
                                    return
                                n.update((t = e))
                            } else n.remove()
                        }
                    )
                }
                t.exports = function (t, o) {
                    var i = r((t = t || []), (o = o || {}))
                    return function (t) {
                        t = t || []
                        for (var c = 0; c < i.length; c++) {
                            var a = n(i[c])
                            e[a].references--
                        }
                        for (var u = r(t, o), l = 0; l < i.length; l++) {
                            var f = n(i[l])
                            0 === e[f].references &&
                                (e[f].updater(), e.splice(f, 1))
                        }
                        i = u
                    }
                }
            },
            113: (t) => {
                t.exports = function (t, e) {
                    if (e.styleSheet) e.styleSheet.cssText = t
                    else {
                        for (; e.firstChild; ) e.removeChild(e.firstChild)
                        e.appendChild(document.createTextNode(t))
                    }
                }
            },
            314: (t) => {
                t.exports = function (t) {
                    var e = []
                    return (
                        (e.toString = function () {
                            return this.map(function (e) {
                                var n = '',
                                    r = void 0 !== e[5]
                                return (
                                    e[4] &&
                                        (n += '@supports ('.concat(
                                            e[4],
                                            ') {'
                                        )),
                                    e[2] && (n += '@media '.concat(e[2], ' {')),
                                    r &&
                                        (n += '@layer'.concat(
                                            e[5].length > 0
                                                ? ' '.concat(e[5])
                                                : '',
                                            ' {'
                                        )),
                                    (n += t(e)),
                                    r && (n += '}'),
                                    e[2] && (n += '}'),
                                    e[4] && (n += '}'),
                                    n
                                )
                            }).join('')
                        }),
                        (e.i = function (t, n, r, o, i) {
                            'string' == typeof t && (t = [[null, t, void 0]])
                            var c = {}
                            if (r)
                                for (var a = 0; a < this.length; a++) {
                                    var u = this[a][0]
                                    null != u && (c[u] = !0)
                                }
                            for (var l = 0; l < t.length; l++) {
                                var f = [].concat(t[l])
                                ;(r && c[f[0]]) ||
                                    (void 0 !== i &&
                                        (void 0 === f[5] ||
                                            (f[1] = '@layer'
                                                .concat(
                                                    f[5].length > 0
                                                        ? ' '.concat(f[5])
                                                        : '',
                                                    ' {'
                                                )
                                                .concat(f[1], '}')),
                                        (f[5] = i)),
                                    n &&
                                        (f[2]
                                            ? ((f[1] = '@media '
                                                  .concat(f[2], ' {')
                                                  .concat(f[1], '}')),
                                              (f[2] = n))
                                            : (f[2] = n)),
                                    o &&
                                        (f[4]
                                            ? ((f[1] = '@supports ('
                                                  .concat(f[4], ') {')
                                                  .concat(f[1], '}')),
                                              (f[4] = o))
                                            : (f[4] = ''.concat(o))),
                                    e.push(f))
                            }
                        }),
                        e
                    )
                }
            },
            540: (t) => {
                t.exports = function (t) {
                    var e = document.createElement('style')
                    return (
                        t.setAttributes(e, t.attributes),
                        t.insert(e, t.options),
                        e
                    )
                }
            },
            601: (t) => {
                t.exports = function (t) {
                    return t[1]
                }
            },
            659: (t) => {
                var e = {}
                t.exports = function (t, n) {
                    var r = (function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t)
                            if (
                                window.HTMLIFrameElement &&
                                n instanceof window.HTMLIFrameElement
                            )
                                try {
                                    n = n.contentDocument.head
                                } catch (t) {
                                    n = null
                                }
                            e[t] = n
                        }
                        return e[t]
                    })(t)
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        )
                    r.appendChild(n)
                }
            },
            825: (t) => {
                t.exports = function (t) {
                    if ('undefined' == typeof document)
                        return {
                            update: function () {},
                            remove: function () {},
                        }
                    var e = t.insertStyleElement(t)
                    return {
                        update: function (n) {
                            !(function (t, e, n) {
                                var r = ''
                                ;(n.supports &&
                                    (r += '@supports ('.concat(
                                        n.supports,
                                        ') {'
                                    )),
                                    n.media &&
                                        (r += '@media '.concat(n.media, ' {')))
                                var o = void 0 !== n.layer
                                ;(o &&
                                    (r += '@layer'.concat(
                                        n.layer.length > 0
                                            ? ' '.concat(n.layer)
                                            : '',
                                        ' {'
                                    )),
                                    (r += n.css),
                                    o && (r += '}'),
                                    n.media && (r += '}'),
                                    n.supports && (r += '}'))
                                var i = n.sourceMap
                                ;(i &&
                                    'undefined' != typeof btoa &&
                                    (r +=
                                        '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(i)
                                                    )
                                                )
                                            ),
                                            ' */'
                                        )),
                                    e.styleTagTransform(r, t, e.options))
                            })(e, t, n)
                        },
                        remove: function () {
                            !(function (t) {
                                if (null === t.parentNode) return !1
                                t.parentNode.removeChild(t)
                            })(e)
                        },
                    }
                }
            },
        },
        e = {}
    function n(r) {
        var o = e[r]
        if (void 0 !== o) return o.exports
        var i = (e[r] = { id: r, exports: {} })
        return (t[r](i, i.exports, n), i.exports)
    }
    ;((n.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t
        return (n.d(e, { a: e }), e)
    }),
        (n.d = (t, e) => {
            for (var r in e)
                n.o(e, r) &&
                    !n.o(t, r) &&
                    Object.defineProperty(t, r, { enumerable: !0, get: e[r] })
        }),
        (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (n.nc = void 0))
    var r = n(72),
        o = n.n(r),
        i = n(825),
        c = n.n(i),
        a = n(659),
        u = n.n(a),
        l = n(56),
        f = n.n(l),
        s = n(540),
        p = n.n(s),
        d = n(113),
        y = n.n(d),
        b = n(16),
        v = {}
    ;((v.styleTagTransform = y()),
        (v.setAttributes = f()),
        (v.insert = u().bind(null, 'head')),
        (v.domAPI = c()),
        (v.insertStyleElement = p()),
        o()(b.A, v),
        b.A && b.A.locals && b.A.locals)
    var h = !0
    function m(t) {
        return (
            (m =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t
                      }
                    : function (t) {
                          return t &&
                              'function' == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? 'symbol'
                              : typeof t
                      }),
            m(t)
        )
    }
    function g(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;((r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, w(r.key), r))
        }
    }
    function w(t) {
        var e = (function (t) {
            if ('object' != m(t) || !t) return t
            var e = t[Symbol.toPrimitive]
            if (void 0 !== e) {
                var n = e.call(t, 'string')
                if ('object' != m(n)) return n
                throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                )
            }
            return String(t)
        })(t)
        return 'symbol' == m(e) ? e : e + ''
    }
    function O(t) {
        return (
            (O =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t
                      }
                    : function (t) {
                          return t &&
                              'function' == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? 'symbol'
                              : typeof t
                      }),
            O(t)
        )
    }
    function j() {
        var t,
            e,
            n = 'function' == typeof Symbol ? Symbol : {},
            r = n.iterator || '@@iterator',
            o = n.toStringTag || '@@toStringTag'
        function i(n, r, o, i) {
            var u = r && r.prototype instanceof a ? r : a,
                l = Object.create(u.prototype)
            return (
                S(
                    l,
                    '_invoke',
                    (function (n, r, o) {
                        var i,
                            a,
                            u,
                            l = 0,
                            f = o || [],
                            s = !1,
                            p = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: d,
                                f: d.bind(t, 4),
                                d: function (e, n) {
                                    return (
                                        (i = e),
                                        (a = 0),
                                        (u = t),
                                        (p.n = n),
                                        c
                                    )
                                },
                            }
                        function d(n, r) {
                            for (
                                a = n, u = r, e = 0;
                                !s && l && !o && e < f.length;
                                e++
                            ) {
                                var o,
                                    i = f[e],
                                    d = p.p,
                                    y = i[2]
                                n > 3
                                    ? (o = y === r) &&
                                      ((u = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                                      (i[4] = i[5] = t))
                                    : i[0] <= d &&
                                      ((o = n < 2 && d < i[1])
                                          ? ((a = 0), (p.v = r), (p.n = i[1]))
                                          : d < y &&
                                            (o = n < 3 || i[0] > r || r > y) &&
                                            ((i[4] = n),
                                            (i[5] = r),
                                            (p.n = y),
                                            (a = 0)))
                            }
                            if (o || n > 1) return c
                            throw ((s = !0), r)
                        }
                        return function (o, f, y) {
                            if (l > 1)
                                throw TypeError('Generator is already running')
                            for (
                                s && 1 === f && d(f, y), a = f, u = y;
                                (e = a < 2 ? t : u) || !s;

                            ) {
                                i ||
                                    (a
                                        ? a < 3
                                            ? (a > 1 && (p.n = -1), d(a, u))
                                            : (p.n = u)
                                        : (p.v = u))
                                try {
                                    if (((l = 2), i)) {
                                        if ((a || (o = 'next'), (e = i[o]))) {
                                            if (!(e = e.call(i, u)))
                                                throw TypeError(
                                                    'iterator result is not an object'
                                                )
                                            if (!e.done) return e
                                            ;((u = e.value), a < 2 && (a = 0))
                                        } else
                                            (1 === a &&
                                                (e = i.return) &&
                                                e.call(i),
                                                a < 2 &&
                                                    ((u = TypeError(
                                                        "The iterator does not provide a '" +
                                                            o +
                                                            "' method"
                                                    )),
                                                    (a = 1)))
                                        i = t
                                    } else if (
                                        (e = (s = p.n < 0)
                                            ? u
                                            : n.call(r, p)) !== c
                                    )
                                        break
                                } catch (e) {
                                    ;((i = t), (a = 1), (u = e))
                                } finally {
                                    l = 1
                                }
                            }
                            return { value: e, done: s }
                        }
                    })(n, o, i),
                    !0
                ),
                l
            )
        }
        var c = {}
        function a() {}
        function u() {}
        function l() {}
        e = Object.getPrototypeOf
        var f = [][r]
                ? e(e([][r]()))
                : (S((e = {}), r, function () {
                      return this
                  }),
                  e),
            s = (l.prototype = a.prototype = Object.create(f))
        function p(t) {
            return (
                Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, l)
                    : ((t.__proto__ = l), S(t, o, 'GeneratorFunction')),
                (t.prototype = Object.create(s)),
                t
            )
        }
        return (
            (u.prototype = l),
            S(s, 'constructor', l),
            S(l, 'constructor', u),
            (u.displayName = 'GeneratorFunction'),
            S(l, o, 'GeneratorFunction'),
            S(s),
            S(s, o, 'Generator'),
            S(s, r, function () {
                return this
            }),
            S(s, 'toString', function () {
                return '[object Generator]'
            }),
            (j = function () {
                return { w: i, m: p }
            })()
        )
    }
    function S(t, e, n, r) {
        var o = Object.defineProperty
        try {
            o({}, '', {})
        } catch (t) {
            o = 0
        }
        ;((S = function (t, e, n, r) {
            function i(e, n) {
                S(t, e, function (t) {
                    return this._invoke(e, n, t)
                })
            }
            e
                ? o
                    ? o(t, e, {
                          value: n,
                          enumerable: !r,
                          configurable: !r,
                          writable: !r,
                      })
                    : (t[e] = n)
                : (i('next', 0), i('throw', 1), i('return', 2))
        }),
            S(t, e, n, r))
    }
    function _(t, e, n, r, o, i, c) {
        try {
            var a = t[i](c),
                u = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(u) : Promise.resolve(u).then(r, o)
    }
    function x(t) {
        return function () {
            var e = this,
                n = arguments
            return new Promise(function (r, o) {
                var i = t.apply(e, n)
                function c(t) {
                    _(i, r, o, c, a, 'next', t)
                }
                function a(t) {
                    _(i, r, o, c, a, 'throw', t)
                }
                c(void 0)
            })
        }
    }
    function k(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;((r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, P(r.key), r))
        }
    }
    function P(t) {
        var e = (function (t) {
            if ('object' != O(t) || !t) return t
            var e = t[Symbol.toPrimitive]
            if (void 0 !== e) {
                var n = e.call(t, 'string')
                if ('object' != O(n)) return n
                throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                )
            }
            return String(t)
        })(t)
        return 'symbol' == O(e) ? e : e + ''
    }
    window.showForm = function () {
        var t = document.getElementById('form-container')
        h
            ? ((t.style.display = 'block'), (h = !1))
            : ((t.style.display = 'none'), (h = !0))
    }
    var T = new ((function () {
        return (
            (t = function t() {
                ;(!(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t),
                    (this._loadingIndicator =
                        document.getElementById('loading-indicator')))
            }),
            (e = [
                {
                    key: 'showLoading',
                    value: function () {
                        this._loadingIndicator.innerHTML =
                            '<loading-overlay></loading-overlay>'
                    },
                },
                {
                    key: 'hideLoading',
                    value: function () {
                        this._loadingIndicator.innerHTML = ''
                    },
                },
            ]) && g(t.prototype, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
        )
        var t, e
    })())()
    T.showLoading()
    const E = (function () {
        return (
            (t = function t() {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, t)
            }),
            (e = [
                {
                    key: 'getNotes',
                    value:
                        ((c = x(
                            j().m(function t() {
                                var e, n, r, o
                                return j().w(
                                    function (t) {
                                        for (;;)
                                            switch ((t.p = t.n)) {
                                                case 0:
                                                    return (
                                                        (e =
                                                            document.querySelector(
                                                                'note-list'
                                                            )),
                                                        (t.p = 1),
                                                        (t.n = 2),
                                                        fetch(
                                                            'https://notes-api.dicoding.dev/v2/notes'
                                                        )
                                                    )
                                                case 2:
                                                    return (
                                                        (n = t.v),
                                                        (t.n = 3),
                                                        n.json()
                                                    )
                                                case 3:
                                                    ;((r = t.v),
                                                        e.setAttribute(
                                                            'notes-data',
                                                            JSON.stringify(
                                                                r.data
                                                            )
                                                        ),
                                                        console.log(r),
                                                        (t.n = 5))
                                                    break
                                                case 4:
                                                    ;((t.p = 4),
                                                        (o = t.v),
                                                        console.error(o),
                                                        alert(
                                                            'Check your Internet!'
                                                        ),
                                                        T.hideLoading())
                                                case 5:
                                                    return (
                                                        (t.p = 5),
                                                        T.hideLoading(),
                                                        t.f(5)
                                                    )
                                                case 6:
                                                    return t.a(2)
                                            }
                                    },
                                    t,
                                    null,
                                    [[1, 4, 5, 6]]
                                )
                            })
                        )),
                        function () {
                            return c.apply(this, arguments)
                        }),
                },
                {
                    key: 'postNotes',
                    value:
                        ((i = x(
                            j().m(function t(e) {
                                var n, r, o, i, c
                                return j().w(
                                    function (t) {
                                        for (;;)
                                            switch ((t.p = t.n)) {
                                                case 0:
                                                    return (
                                                        (n = e.title),
                                                        (r = e.body),
                                                        T.showLoading(),
                                                        (t.p = 1),
                                                        (t.n = 2),
                                                        fetch(
                                                            'https://notes-api.dicoding.dev/v2/notes',
                                                            {
                                                                method: 'POST',
                                                                headers: {
                                                                    'content-type':
                                                                        'application/json',
                                                                },
                                                                body: JSON.stringify(
                                                                    {
                                                                        title: n,
                                                                        body: r,
                                                                    }
                                                                ),
                                                            }
                                                        )
                                                    )
                                                case 2:
                                                    return (
                                                        (o = t.v),
                                                        (t.n = 3),
                                                        o.json()
                                                    )
                                                case 3:
                                                    ;((i = t.v),
                                                        console.log(i),
                                                        (t.n = 5))
                                                    break
                                                case 4:
                                                    ;((t.p = 4),
                                                        (c = t.v),
                                                        console.error(c),
                                                        T.hideLoading)
                                                case 5:
                                                    return (
                                                        (t.p = 5),
                                                        this.getNotes(),
                                                        t.f(5)
                                                    )
                                                case 6:
                                                    return t.a(2)
                                            }
                                    },
                                    t,
                                    this,
                                    [[1, 4, 5, 6]]
                                )
                            })
                        )),
                        function (t) {
                            return i.apply(this, arguments)
                        }),
                },
                {
                    key: 'deleteNotes',
                    value:
                        ((o = x(
                            j().m(function t(e) {
                                var n, r, o
                                return j().w(
                                    function (t) {
                                        for (;;)
                                            switch ((t.p = t.n)) {
                                                case 0:
                                                    return (
                                                        T.showLoading(),
                                                        (t.p = 1),
                                                        (t.n = 2),
                                                        fetch(
                                                            'https://notes-api.dicoding.dev/v2/notes/'.concat(
                                                                e
                                                            ),
                                                            { method: 'DELETE' }
                                                        )
                                                    )
                                                case 2:
                                                    return (
                                                        (n = t.v),
                                                        (t.n = 3),
                                                        n.json()
                                                    )
                                                case 3:
                                                    ;((r = t.v),
                                                        console.log(r),
                                                        (t.n = 5))
                                                    break
                                                case 4:
                                                    ;((t.p = 4),
                                                        (o = t.v),
                                                        console.error(o),
                                                        T.hideLoading())
                                                case 5:
                                                    return (
                                                        (t.p = 5),
                                                        this.getNotes(),
                                                        t.f(5)
                                                    )
                                                case 6:
                                                    return t.a(2)
                                            }
                                    },
                                    t,
                                    this,
                                    [[1, 4, 5, 6]]
                                )
                            })
                        )),
                        function (t) {
                            return o.apply(this, arguments)
                        }),
                },
                {
                    key: 'toogleArchive',
                    value:
                        ((r = x(
                            j().m(function t(e, n) {
                                var r, o, i, c, a, u
                                return j().w(
                                    function (t) {
                                        for (;;)
                                            switch ((t.p = t.n)) {
                                                case 0:
                                                    if ((T.showLoading(), !n)) {
                                                        t.n = 7
                                                        break
                                                    }
                                                    return (
                                                        (t.p = 1),
                                                        (t.n = 2),
                                                        fetch(
                                                            'https://notes-api.dicoding.dev/v2/notes/'.concat(
                                                                e,
                                                                '/unarchive'
                                                            ),
                                                            { method: 'POST' }
                                                        )
                                                    )
                                                case 2:
                                                    return (
                                                        (r = t.v),
                                                        (t.n = 3),
                                                        r.json()
                                                    )
                                                case 3:
                                                    ;((o = t.v),
                                                        console.log(o),
                                                        (t.n = 5))
                                                    break
                                                case 4:
                                                    ;((t.p = 4),
                                                        (a = t.v),
                                                        console.error(a),
                                                        T.hideLoading())
                                                case 5:
                                                    return (
                                                        (t.p = 5),
                                                        this.getNoteByArchive(
                                                            n
                                                        ),
                                                        t.f(5)
                                                    )
                                                case 6:
                                                    t.n = 12
                                                    break
                                                case 7:
                                                    return (
                                                        (t.p = 7),
                                                        (t.n = 8),
                                                        fetch(
                                                            'https://notes-api.dicoding.dev/v2/notes/'.concat(
                                                                e,
                                                                '/archive'
                                                            ),
                                                            { method: 'POST' }
                                                        )
                                                    )
                                                case 8:
                                                    return (
                                                        (i = t.v),
                                                        (t.n = 9),
                                                        i.json()
                                                    )
                                                case 9:
                                                    ;((c = t.v),
                                                        console.log(c),
                                                        (t.n = 11))
                                                    break
                                                case 10:
                                                    ;((t.p = 10),
                                                        (u = t.v),
                                                        console.error(u),
                                                        T.hideLoading())
                                                case 11:
                                                    return (
                                                        (t.p = 11),
                                                        this.getNotes(),
                                                        t.f(11)
                                                    )
                                                case 12:
                                                    return t.a(2)
                                            }
                                    },
                                    t,
                                    this,
                                    [
                                        [7, 10, 11, 12],
                                        [1, 4, 5, 6],
                                    ]
                                )
                            })
                        )),
                        function (t, e) {
                            return r.apply(this, arguments)
                        }),
                },
                {
                    key: 'getNoteByArchive',
                    value:
                        ((n = x(
                            j().m(function t(e) {
                                var n, r, o, i
                                return j().w(
                                    function (t) {
                                        for (;;)
                                            switch ((t.p = t.n)) {
                                                case 0:
                                                    if (
                                                        ((n =
                                                            document.querySelector(
                                                                'note-list'
                                                            )),
                                                        T.showLoading(),
                                                        !e)
                                                    ) {
                                                        t.n = 7
                                                        break
                                                    }
                                                    return (
                                                        (t.p = 1),
                                                        (t.n = 2),
                                                        fetch(
                                                            'https://notes-api.dicoding.dev/v2/notes/archived'
                                                        )
                                                    )
                                                case 2:
                                                    return (
                                                        (r = t.v),
                                                        (t.n = 3),
                                                        r.json()
                                                    )
                                                case 3:
                                                    ;((o = t.v),
                                                        n.setAttribute(
                                                            'notes-data',
                                                            JSON.stringify(
                                                                o.data
                                                            )
                                                        ),
                                                        console.log(o),
                                                        (t.n = 5))
                                                    break
                                                case 4:
                                                    ;((t.p = 4),
                                                        (i = t.v),
                                                        console.error(i),
                                                        alert(
                                                            'Check your Internet!'
                                                        ),
                                                        T.hideLoading())
                                                case 5:
                                                    return (
                                                        (t.p = 5),
                                                        T.hideLoading(),
                                                        t.f(5)
                                                    )
                                                case 6:
                                                    t.n = 8
                                                    break
                                                case 7:
                                                    this.getNotes()
                                                case 8:
                                                    return t.a(2)
                                            }
                                    },
                                    t,
                                    this,
                                    [[1, 4, 5, 6]]
                                )
                            })
                        )),
                        function (t) {
                            return n.apply(this, arguments)
                        }),
                },
            ]),
            e && k(t.prototype, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
        )
        var t, e, n, r, o, i, c
    })()
    function R() {
        var t,
            e,
            n = 'function' == typeof Symbol ? Symbol : {},
            r = n.iterator || '@@iterator',
            o = n.toStringTag || '@@toStringTag'
        function i(n, r, o, i) {
            var u = r && r.prototype instanceof a ? r : a,
                l = Object.create(u.prototype)
            return (
                C(
                    l,
                    '_invoke',
                    (function (n, r, o) {
                        var i,
                            a,
                            u,
                            l = 0,
                            f = o || [],
                            s = !1,
                            p = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: d,
                                f: d.bind(t, 4),
                                d: function (e, n) {
                                    return (
                                        (i = e),
                                        (a = 0),
                                        (u = t),
                                        (p.n = n),
                                        c
                                    )
                                },
                            }
                        function d(n, r) {
                            for (
                                a = n, u = r, e = 0;
                                !s && l && !o && e < f.length;
                                e++
                            ) {
                                var o,
                                    i = f[e],
                                    d = p.p,
                                    y = i[2]
                                n > 3
                                    ? (o = y === r) &&
                                      ((u = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                                      (i[4] = i[5] = t))
                                    : i[0] <= d &&
                                      ((o = n < 2 && d < i[1])
                                          ? ((a = 0), (p.v = r), (p.n = i[1]))
                                          : d < y &&
                                            (o = n < 3 || i[0] > r || r > y) &&
                                            ((i[4] = n),
                                            (i[5] = r),
                                            (p.n = y),
                                            (a = 0)))
                            }
                            if (o || n > 1) return c
                            throw ((s = !0), r)
                        }
                        return function (o, f, y) {
                            if (l > 1)
                                throw TypeError('Generator is already running')
                            for (
                                s && 1 === f && d(f, y), a = f, u = y;
                                (e = a < 2 ? t : u) || !s;

                            ) {
                                i ||
                                    (a
                                        ? a < 3
                                            ? (a > 1 && (p.n = -1), d(a, u))
                                            : (p.n = u)
                                        : (p.v = u))
                                try {
                                    if (((l = 2), i)) {
                                        if ((a || (o = 'next'), (e = i[o]))) {
                                            if (!(e = e.call(i, u)))
                                                throw TypeError(
                                                    'iterator result is not an object'
                                                )
                                            if (!e.done) return e
                                            ;((u = e.value), a < 2 && (a = 0))
                                        } else
                                            (1 === a &&
                                                (e = i.return) &&
                                                e.call(i),
                                                a < 2 &&
                                                    ((u = TypeError(
                                                        "The iterator does not provide a '" +
                                                            o +
                                                            "' method"
                                                    )),
                                                    (a = 1)))
                                        i = t
                                    } else if (
                                        (e = (s = p.n < 0)
                                            ? u
                                            : n.call(r, p)) !== c
                                    )
                                        break
                                } catch (e) {
                                    ;((i = t), (a = 1), (u = e))
                                } finally {
                                    l = 1
                                }
                            }
                            return { value: e, done: s }
                        }
                    })(n, o, i),
                    !0
                ),
                l
            )
        }
        var c = {}
        function a() {}
        function u() {}
        function l() {}
        e = Object.getPrototypeOf
        var f = [][r]
                ? e(e([][r]()))
                : (C((e = {}), r, function () {
                      return this
                  }),
                  e),
            s = (l.prototype = a.prototype = Object.create(f))
        function p(t) {
            return (
                Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, l)
                    : ((t.__proto__ = l), C(t, o, 'GeneratorFunction')),
                (t.prototype = Object.create(s)),
                t
            )
        }
        return (
            (u.prototype = l),
            C(s, 'constructor', l),
            C(l, 'constructor', u),
            (u.displayName = 'GeneratorFunction'),
            C(l, o, 'GeneratorFunction'),
            C(s),
            C(s, o, 'Generator'),
            C(s, r, function () {
                return this
            }),
            C(s, 'toString', function () {
                return '[object Generator]'
            }),
            (R = function () {
                return { w: i, m: p }
            })()
        )
    }
    function C(t, e, n, r) {
        var o = Object.defineProperty
        try {
            o({}, '', {})
        } catch (t) {
            o = 0
        }
        ;((C = function (t, e, n, r) {
            function i(e, n) {
                C(t, e, function (t) {
                    return this._invoke(e, n, t)
                })
            }
            e
                ? o
                    ? o(t, e, {
                          value: n,
                          enumerable: !r,
                          configurable: !r,
                          writable: !r,
                      })
                    : (t[e] = n)
                : (i('next', 0), i('throw', 1), i('return', 2))
        }),
            C(t, e, n, r))
    }
    function L(t, e, n, r, o, i, c) {
        try {
            var a = t[i](c),
                u = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(u) : Promise.resolve(u).then(r, o)
    }
    var A = document.querySelector('form'),
        M = A.elements.title,
        N = A.elements.body,
        B = (document.getElementById('out'), new E())
    function F() {
        var t,
            e,
            n = 'function' == typeof Symbol ? Symbol : {},
            r = n.iterator || '@@iterator',
            o = n.toStringTag || '@@toStringTag'
        function i(n, r, o, i) {
            var u = r && r.prototype instanceof a ? r : a,
                l = Object.create(u.prototype)
            return (
                H(
                    l,
                    '_invoke',
                    (function (n, r, o) {
                        var i,
                            a,
                            u,
                            l = 0,
                            f = o || [],
                            s = !1,
                            p = {
                                p: 0,
                                n: 0,
                                v: t,
                                a: d,
                                f: d.bind(t, 4),
                                d: function (e, n) {
                                    return (
                                        (i = e),
                                        (a = 0),
                                        (u = t),
                                        (p.n = n),
                                        c
                                    )
                                },
                            }
                        function d(n, r) {
                            for (
                                a = n, u = r, e = 0;
                                !s && l && !o && e < f.length;
                                e++
                            ) {
                                var o,
                                    i = f[e],
                                    d = p.p,
                                    y = i[2]
                                n > 3
                                    ? (o = y === r) &&
                                      ((u = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                                      (i[4] = i[5] = t))
                                    : i[0] <= d &&
                                      ((o = n < 2 && d < i[1])
                                          ? ((a = 0), (p.v = r), (p.n = i[1]))
                                          : d < y &&
                                            (o = n < 3 || i[0] > r || r > y) &&
                                            ((i[4] = n),
                                            (i[5] = r),
                                            (p.n = y),
                                            (a = 0)))
                            }
                            if (o || n > 1) return c
                            throw ((s = !0), r)
                        }
                        return function (o, f, y) {
                            if (l > 1)
                                throw TypeError('Generator is already running')
                            for (
                                s && 1 === f && d(f, y), a = f, u = y;
                                (e = a < 2 ? t : u) || !s;

                            ) {
                                i ||
                                    (a
                                        ? a < 3
                                            ? (a > 1 && (p.n = -1), d(a, u))
                                            : (p.n = u)
                                        : (p.v = u))
                                try {
                                    if (((l = 2), i)) {
                                        if ((a || (o = 'next'), (e = i[o]))) {
                                            if (!(e = e.call(i, u)))
                                                throw TypeError(
                                                    'iterator result is not an object'
                                                )
                                            if (!e.done) return e
                                            ;((u = e.value), a < 2 && (a = 0))
                                        } else
                                            (1 === a &&
                                                (e = i.return) &&
                                                e.call(i),
                                                a < 2 &&
                                                    ((u = TypeError(
                                                        "The iterator does not provide a '" +
                                                            o +
                                                            "' method"
                                                    )),
                                                    (a = 1)))
                                        i = t
                                    } else if (
                                        (e = (s = p.n < 0)
                                            ? u
                                            : n.call(r, p)) !== c
                                    )
                                        break
                                } catch (e) {
                                    ;((i = t), (a = 1), (u = e))
                                } finally {
                                    l = 1
                                }
                            }
                            return { value: e, done: s }
                        }
                    })(n, o, i),
                    !0
                ),
                l
            )
        }
        var c = {}
        function a() {}
        function u() {}
        function l() {}
        e = Object.getPrototypeOf
        var f = [][r]
                ? e(e([][r]()))
                : (H((e = {}), r, function () {
                      return this
                  }),
                  e),
            s = (l.prototype = a.prototype = Object.create(f))
        function p(t) {
            return (
                Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, l)
                    : ((t.__proto__ = l), H(t, o, 'GeneratorFunction')),
                (t.prototype = Object.create(s)),
                t
            )
        }
        return (
            (u.prototype = l),
            H(s, 'constructor', l),
            H(l, 'constructor', u),
            (u.displayName = 'GeneratorFunction'),
            H(l, o, 'GeneratorFunction'),
            H(s),
            H(s, o, 'Generator'),
            H(s, r, function () {
                return this
            }),
            H(s, 'toString', function () {
                return '[object Generator]'
            }),
            (F = function () {
                return { w: i, m: p }
            })()
        )
    }
    function H(t, e, n, r) {
        var o = Object.defineProperty
        try {
            o({}, '', {})
        } catch (t) {
            o = 0
        }
        ;((H = function (t, e, n, r) {
            function i(e, n) {
                H(t, e, function (t) {
                    return this._invoke(e, n, t)
                })
            }
            e
                ? o
                    ? o(t, e, {
                          value: n,
                          enumerable: !r,
                          configurable: !r,
                          writable: !r,
                      })
                    : (t[e] = n)
                : (i('next', 0), i('throw', 1), i('return', 2))
        }),
            H(t, e, n, r))
    }
    function G(t, e, n, r, o, i, c) {
        try {
            var a = t[i](c),
                u = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(u) : Promise.resolve(u).then(r, o)
    }
    function I(t) {
        return function () {
            var e = this,
                n = arguments
            return new Promise(function (r, o) {
                var i = t.apply(e, n)
                function c(t) {
                    G(i, r, o, c, a, 'next', t)
                }
                function a(t) {
                    G(i, r, o, c, a, 'throw', t)
                }
                c(void 0)
            })
        }
    }
    A.addEventListener(
        'submit',
        (function () {
            var t,
                e =
                    ((t = R().m(function t(e) {
                        var n
                        return R().w(function (t) {
                            for (;;)
                                switch (t.n) {
                                    case 0:
                                        ;(e.preventDefault(),
                                            (n = {
                                                id: 'notes-'.concat(
                                                    Math.random()
                                                        .toString(36)
                                                        .substr(2, 9)
                                                ),
                                                title: M.value,
                                                body: N.value,
                                                createdAt:
                                                    new Date().toISOString(),
                                                archived: !1,
                                            }),
                                            B.postNotes({
                                                title: n.title,
                                                body: n.body,
                                            }),
                                            (M.value = ''),
                                            (N.value = ''))
                                    case 1:
                                        return t.a(2)
                                }
                        }, t)
                    })),
                    function () {
                        var e = this,
                            n = arguments
                        return new Promise(function (r, o) {
                            var i = t.apply(e, n)
                            function c(t) {
                                L(i, r, o, c, a, 'next', t)
                            }
                            function a(t) {
                                L(i, r, o, c, a, 'throw', t)
                            }
                            c(void 0)
                        })
                    })
            return function (t) {
                return e.apply(this, arguments)
            }
        })()
    )
    var D = new E()
    function z(t) {
        return (
            (z =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t
                      }
                    : function (t) {
                          return t &&
                              'function' == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? 'symbol'
                              : typeof t
                      }),
            z(t)
        )
    }
    function J(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;((r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, W(r.key), r))
        }
    }
    function q(t) {
        var e = 'function' == typeof Map ? new Map() : void 0
        return (
            (q = function (t) {
                if (
                    null === t ||
                    !(function (t) {
                        try {
                            return (
                                -1 !==
                                Function.toString
                                    .call(t)
                                    .indexOf('[native code]')
                            )
                        } catch (e) {
                            return 'function' == typeof t
                        }
                    })(t)
                )
                    return t
                if ('function' != typeof t)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t)
                    e.set(t, n)
                }
                function n() {
                    return (function (t, e, n) {
                        if (U()) return Reflect.construct.apply(null, arguments)
                        var r = [null]
                        r.push.apply(r, e)
                        var o = new (t.bind.apply(t, r))()
                        return (n && K(o, n.prototype), o)
                    })(t, arguments, Q(this).constructor)
                }
                return (
                    (n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                    K(n, t)
                )
            }),
            q(t)
        )
    }
    function U() {
        try {
            var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            )
        } catch (t) {}
        return (U = function () {
            return !!t
        })()
    }
    function K(t, e) {
        return (
            (K = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return ((t.__proto__ = e), t)
                  }),
            K(t, e)
        )
    }
    function Q(t) {
        return (
            (Q = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                  }),
            Q(t)
        )
    }
    function V(t, e, n) {
        return (
            (e = W(e)) in t
                ? Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (t[e] = n),
            t
        )
    }
    function W(t) {
        var e = (function (t) {
            if ('object' != z(t) || !t) return t
            var e = t[Symbol.toPrimitive]
            if (void 0 !== e) {
                var n = e.call(t, 'string')
                if ('object' != z(n)) return n
                throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                )
            }
            return String(t)
        })(t)
        return 'symbol' == z(e) ? e : e + ''
    }
    ;(document.addEventListener(
        'DOMContentLoaded',
        I(
            F().m(function t() {
                return F().w(function (t) {
                    for (;;)
                        switch (t.n) {
                            case 0:
                                D.getNotes()
                            case 1:
                                return t.a(2)
                        }
                }, t)
            })
        )
    ),
        document
            .getElementById('show-archive')
            .addEventListener('change', function () {
                var t = this.checked
                D.getNoteByArchive(t)
            }))
    var X = (function (t) {
        function e() {
            var t
            return (
                (function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, e),
                V(
                    (t = (function (t, e, n) {
                        return (
                            (e = Q(e)),
                            (function (t, e) {
                                if (
                                    e &&
                                    ('object' == z(e) || 'function' == typeof e)
                                )
                                    return e
                                if (void 0 !== e)
                                    throw new TypeError(
                                        'Derived constructors may only return object or undefined'
                                    )
                                return (function (t) {
                                    if (void 0 === t)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called"
                                        )
                                    return t
                                })(t)
                            })(
                                t,
                                U()
                                    ? Reflect.construct(
                                          e,
                                          n || [],
                                          Q(t).constructor
                                      )
                                    : e.apply(t, n)
                            )
                        )
                    })(this, e)),
                    '_shadowRoot',
                    null
                ),
                V(t, '_style', null),
                (t._shadowRoot = t.attachShadow({ mode: 'open' })),
                (t._style = document.createElement('style')),
                t
            )
        }
        return (
            (function (t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                ;((t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    e && K(t, e))
            })(e, t),
            (n = e),
            (r = [
                {
                    key: '_updateStyle',
                    value: function () {
                        this._style.textContent =
                            '\n      :host {\n        display: block;\n        width: 100%;\n        \n        color: white;\n        \n        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);\n        background-color: black;\n      }\n      \n      div {\n        padding: 20px 18px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n      }\n\n      .app-name {\n        margin: 0;\n  \n        font-size: 1.2rem;\n      }\n      \n      button {\n        background-color: white;\n        border: none;\n      }\n      \n      button:active {\n        background-color: #ccc;\n        color: white;\n      }\n\n      button:hover {\n        background-color: #ddd;\n      }\n      '
                    },
                },
                {
                    key: '_emptyContent',
                    value: function () {
                        this._shadowRoot.innerHTML = ''
                    },
                },
                {
                    key: 'connectedCallback',
                    value: function () {
                        this.render()
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        ;(this._emptyContent(),
                            this._updateStyle(),
                            this._shadowRoot.appendChild(this._style),
                            (this._shadowRoot.innerHTML +=
                                '\n    \n      <div>\n        <h1 class="app-name">Catatan</h1>\n        <button id="showFormBtn" onclick="showForm()" name="showFormBtn">Tambah Catatan</button>\n      </div>\n      \n    '))
                    },
                },
            ]) && J(n.prototype, r),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            n
        )
        var n, r
    })(q(HTMLElement))
    function Y(t) {
        return (
            (Y =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t
                      }
                    : function (t) {
                          return t &&
                              'function' == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? 'symbol'
                              : typeof t
                      }),
            Y(t)
        )
    }
    function Z(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;((r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, ot(r.key), r))
        }
    }
    function $(t) {
        var e = 'function' == typeof Map ? new Map() : void 0
        return (
            ($ = function (t) {
                if (
                    null === t ||
                    !(function (t) {
                        try {
                            return (
                                -1 !==
                                Function.toString
                                    .call(t)
                                    .indexOf('[native code]')
                            )
                        } catch (e) {
                            return 'function' == typeof t
                        }
                    })(t)
                )
                    return t
                if ('function' != typeof t)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t)
                    e.set(t, n)
                }
                function n() {
                    return (function (t, e, n) {
                        if (tt())
                            return Reflect.construct.apply(null, arguments)
                        var r = [null]
                        r.push.apply(r, e)
                        var o = new (t.bind.apply(t, r))()
                        return (n && et(o, n.prototype), o)
                    })(t, arguments, nt(this).constructor)
                }
                return (
                    (n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                    et(n, t)
                )
            }),
            $(t)
        )
    }
    function tt() {
        try {
            var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            )
        } catch (t) {}
        return (tt = function () {
            return !!t
        })()
    }
    function et(t, e) {
        return (
            (et = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return ((t.__proto__ = e), t)
                  }),
            et(t, e)
        )
    }
    function nt(t) {
        return (
            (nt = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                  }),
            nt(t)
        )
    }
    function rt(t, e, n) {
        return (
            (e = ot(e)) in t
                ? Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (t[e] = n),
            t
        )
    }
    function ot(t) {
        var e = (function (t) {
            if ('object' != Y(t) || !t) return t
            var e = t[Symbol.toPrimitive]
            if (void 0 !== e) {
                var n = e.call(t, 'string')
                if ('object' != Y(n)) return n
                throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                )
            }
            return String(t)
        })(t)
        return 'symbol' == Y(e) ? e : e + ''
    }
    customElements.define('app-bar', X)
    var it = (function (t) {
        function e() {
            var t
            return (
                (function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, e),
                rt(
                    (t = (function (t, e, n) {
                        return (
                            (e = nt(e)),
                            (function (t, e) {
                                if (
                                    e &&
                                    ('object' == Y(e) || 'function' == typeof e)
                                )
                                    return e
                                if (void 0 !== e)
                                    throw new TypeError(
                                        'Derived constructors may only return object or undefined'
                                    )
                                return (function (t) {
                                    if (void 0 === t)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called"
                                        )
                                    return t
                                })(t)
                            })(
                                t,
                                tt()
                                    ? Reflect.construct(
                                          e,
                                          n || [],
                                          nt(t).constructor
                                      )
                                    : e.apply(t, n)
                            )
                        )
                    })(this, e)),
                    '_shadowRoot',
                    null
                ),
                rt(t, '_style', null),
                (t._shadowRoot = t.attachShadow({ mode: 'open' })),
                (t._style = document.createElement('style')),
                t
            )
        }
        return (
            (function (t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                ;((t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    e && et(t, e))
            })(e, t),
            (n = e),
            (r = [
                {
                    key: '_updateStyle',
                    value: function () {
                        this._style.textContent =
                            '\n      :host {\n        display: block;\n      }\n \n      div {\n        padding: 24px 20px;\n        border-top: 1px solid black;\n        text-align: center;\n      }\n    '
                    },
                },
                {
                    key: '_emptyContent',
                    value: function () {
                        this._shadowRoot.innerHTML = ''
                    },
                },
                {
                    key: 'connectedCallback',
                    value: function () {
                        this.render()
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        ;(this._emptyContent(),
                            this._updateStyle(),
                            this._shadowRoot.appendChild(this._style),
                            (this._shadowRoot.innerHTML +=
                                "      \n      <div>\n        MAHRUS 'ALI 'AMR &copy; 2025\n      </div>\n    "))
                    },
                },
            ]) && Z(n.prototype, r),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            n
        )
        var n, r
    })($(HTMLElement))
    function ct(t) {
        return (
            (ct =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t
                      }
                    : function (t) {
                          return t &&
                              'function' == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? 'symbol'
                              : typeof t
                      }),
            ct(t)
        )
    }
    function at(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;((r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, ut(r.key), r))
        }
    }
    function ut(t) {
        var e = (function (t) {
            if ('object' != ct(t) || !t) return t
            var e = t[Symbol.toPrimitive]
            if (void 0 !== e) {
                var n = e.call(t, 'string')
                if ('object' != ct(n)) return n
                throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                )
            }
            return String(t)
        })(t)
        return 'symbol' == ct(e) ? e : e + ''
    }
    function lt(t) {
        var e = 'function' == typeof Map ? new Map() : void 0
        return (
            (lt = function (t) {
                if (
                    null === t ||
                    !(function (t) {
                        try {
                            return (
                                -1 !==
                                Function.toString
                                    .call(t)
                                    .indexOf('[native code]')
                            )
                        } catch (e) {
                            return 'function' == typeof t
                        }
                    })(t)
                )
                    return t
                if ('function' != typeof t)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t)
                    e.set(t, n)
                }
                function n() {
                    return (function (t, e, n) {
                        if (ft())
                            return Reflect.construct.apply(null, arguments)
                        var r = [null]
                        r.push.apply(r, e)
                        var o = new (t.bind.apply(t, r))()
                        return (n && st(o, n.prototype), o)
                    })(t, arguments, pt(this).constructor)
                }
                return (
                    (n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                    st(n, t)
                )
            }),
            lt(t)
        )
    }
    function ft() {
        try {
            var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            )
        } catch (t) {}
        return (ft = function () {
            return !!t
        })()
    }
    function st(t, e) {
        return (
            (st = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return ((t.__proto__ = e), t)
                  }),
            st(t, e)
        )
    }
    function pt(t) {
        return (
            (pt = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                  }),
            pt(t)
        )
    }
    customElements.define('footer-bar', it)
    var dt = (function (t) {
        function e() {
            var t
            return (
                (function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, e),
                (t = (function (t, e, n) {
                    return (
                        (e = pt(e)),
                        (function (t, e) {
                            if (
                                e &&
                                ('object' == ct(e) || 'function' == typeof e)
                            )
                                return e
                            if (void 0 !== e)
                                throw new TypeError(
                                    'Derived constructors may only return object or undefined'
                                )
                            return (function (t) {
                                if (void 0 === t)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    )
                                return t
                            })(t)
                        })(
                            t,
                            ft()
                                ? Reflect.construct(
                                      e,
                                      n || [],
                                      pt(t).constructor
                                  )
                                : e.apply(t, n)
                        )
                    )
                })(this, e)).attachShadow({ mode: 'open' }),
                t
            )
        }
        return (
            (function (t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                ;((t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    e && st(t, e))
            })(e, t),
            (n = e),
            (o = [
                {
                    key: 'observedAttributes',
                    get: function () {
                        return ['id', 'title', 'body', 'created-at', 'archived']
                    },
                },
            ]),
            (r = [
                {
                    key: 'attributeChangedCallback',
                    value: function (t, e, n) {
                        this.render()
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        this.shadowRoot.innerHTML = ''
                        var t = this.getAttribute('id') || '',
                            e = this.getAttribute('title') || 'Tidak ada Judul',
                            n = this.getAttribute('body') || 'Tidak ada Isi',
                            r = this.getAttribute('created-at') || '',
                            o = 'true' === this.getAttribute('archived')
                        this.shadowRoot.innerHTML =
                            '\n      <style>\n        .note-item {\n          background-color: #f9f9f9;\n          border: 1px solid #ddd;\n          border-radius: 8px;\n          padding: 15px;\n          margin-bottom: 10px;\n          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n        }\n        .note-title {\n          font-size: 1.2em;\n          font-weight: bold;\n          color: #333;\n        }\n        .note-content {\n          margin-top: 5px;\n          color: #666;\n        }\n        small {\n          color: #999;\n        }\n        #delete-button {\n          margin-top: 10px;\n          padding: 8px 12px;\n          background-color: #e74c3c;\n          color: white;\n          border: none;\n          border-radius: 4px;\n          cursor: pointer;\n          position: relative;\n          left: 0;\n        }\n\n        #delete-button:hover {\n          background-color: #c0392b;\n        }\n        #archive-button {\n          margin-top: 10px;\n          padding: 8px 12px;\n          background-color: #3498db;\n          color: white;\n          border: none;\n          border-radius: 4px;\n          cursor: pointer;\n          position: relative;\n          left: 10px;\n        }\n        #archive-button:hover {\n          background-color: #2980b9;\n        }\n\n      </style>\n      <div class="note-item">\n        <h3 class="note-title">'
                                .concat(
                                    e,
                                    '</h3>\n        <p class="note-content">'
                                )
                                .concat(n, '</p>\n        <small>Created at: ')
                                .concat(
                                    new Date(r).toLocaleString(),
                                    '</small>\n        <br>\n        <small>Archived: '
                                )
                                .concat(
                                    o,
                                    '</small><br>\n        <button id="delete-button" onclick="deleteNote(\''
                                )
                                .concat(
                                    t,
                                    '\')">Delete</button>\n        <button id="archive-button" onclick="toggleArchive(\''
                                )
                                .concat(t, "',")
                                .concat(o, ')">')
                                .concat(
                                    o ? 'Unarchive' : 'Archive',
                                    '</button>\n      </div>\n    '
                                )
                    },
                },
            ]) && at(n.prototype, r),
            o && at(n, o),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            n
        )
        var n, r, o
    })(lt(HTMLElement))
    function yt(t) {
        return (
            (yt =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t
                      }
                    : function (t) {
                          return t &&
                              'function' == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? 'symbol'
                              : typeof t
                      }),
            yt(t)
        )
    }
    function bt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;((r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, wt(r.key), r))
        }
    }
    function vt(t) {
        var e = 'function' == typeof Map ? new Map() : void 0
        return (
            (vt = function (t) {
                if (
                    null === t ||
                    !(function (t) {
                        try {
                            return (
                                -1 !==
                                Function.toString
                                    .call(t)
                                    .indexOf('[native code]')
                            )
                        } catch (e) {
                            return 'function' == typeof t
                        }
                    })(t)
                )
                    return t
                if ('function' != typeof t)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t)
                    e.set(t, n)
                }
                function n() {
                    return (function (t, e, n) {
                        if (ht())
                            return Reflect.construct.apply(null, arguments)
                        var r = [null]
                        r.push.apply(r, e)
                        var o = new (t.bind.apply(t, r))()
                        return (n && mt(o, n.prototype), o)
                    })(t, arguments, gt(this).constructor)
                }
                return (
                    (n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                    mt(n, t)
                )
            }),
            vt(t)
        )
    }
    function ht() {
        try {
            var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            )
        } catch (t) {}
        return (ht = function () {
            return !!t
        })()
    }
    function mt(t, e) {
        return (
            (mt = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return ((t.__proto__ = e), t)
                  }),
            mt(t, e)
        )
    }
    function gt(t) {
        return (
            (gt = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                  }),
            gt(t)
        )
    }
    function wt(t) {
        var e = (function (t) {
            if ('object' != yt(t) || !t) return t
            var e = t[Symbol.toPrimitive]
            if (void 0 !== e) {
                var n = e.call(t, 'string')
                if ('object' != yt(n)) return n
                throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                )
            }
            return String(t)
        })(t)
        return 'symbol' == yt(e) ? e : e + ''
    }
    customElements.define('note-item', dt)
    var Ot = (function (t) {
        function e() {
            var t, n, r
            return (
                (function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, e),
                (t = (function (t, e, n) {
                    return (
                        (e = gt(e)),
                        (function (t, e) {
                            if (
                                e &&
                                ('object' == yt(e) || 'function' == typeof e)
                            )
                                return e
                            if (void 0 !== e)
                                throw new TypeError(
                                    'Derived constructors may only return object or undefined'
                                )
                            return (function (t) {
                                if (void 0 === t)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    )
                                return t
                            })(t)
                        })(
                            t,
                            ht()
                                ? Reflect.construct(
                                      e,
                                      n || [],
                                      gt(t).constructor
                                  )
                                : e.apply(t, n)
                        )
                    )
                })(this, e)),
                (n = t),
                (r = wt((r = '_style'))) in n
                    ? Object.defineProperty(n, r, {
                          value: null,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (n[r] = null),
                t.attachShadow({ mode: 'open' }),
                (t._style = document.createElement('style')),
                t
            )
        }
        return (
            (function (t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                ;((t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    e && mt(t, e))
            })(e, t),
            (n = e),
            (r = [
                {
                    key: 'attributeChangedCallback',
                    value: function (t, e, n) {
                        'notes-data' === t && this.renderNotes()
                    },
                },
                {
                    key: '_updateStyle',
                    value: function () {
                        this._style.textContent =
                            '\n    :host {\n      margin-block: 1rem;\n\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      column-gap: 14px;\n      row-gap: 22px;\n    }\n    @media screen and (max-width: 576px) {\n      :host {\n      grid-template-columns: 1fr;\n      }\n    }\n    @media screen and (min-width: 577px) and (max-width: 828px) {\n      :host {\n      grid-template-columns: repeat(2, 1fr);\n      }\n    }\n    '
                    },
                },
                {
                    key: 'renderNotes',
                    value: function () {
                        var t = this
                        ;((this.shadowRoot.innerHTML = ''),
                            this._updateStyle(),
                            this.shadowRoot.appendChild(this._style),
                            (this.shadowRoot.innerHTML += ''),
                            JSON.parse(
                                this.getAttribute('notes-data') || '[]'
                            ).forEach(function (e) {
                                var n = document.createElement('note-item')
                                ;(n.setAttribute('id', e.id),
                                    n.setAttribute('title', e.title),
                                    n.setAttribute('body', e.body),
                                    n.setAttribute('created-at', e.createdAt),
                                    n.setAttribute('archived', e.archived),
                                    t.shadowRoot.appendChild(n))
                            }))
                    },
                },
            ]),
            (o = [
                {
                    key: 'observedAttributes',
                    get: function () {
                        return ['notes-data']
                    },
                },
            ]),
            r && bt(n.prototype, r),
            o && bt(n, o),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            n
        )
        var n, r, o
    })(vt(HTMLElement))
    function jt(t) {
        return (
            (jt =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t
                      }
                    : function (t) {
                          return t &&
                              'function' == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? 'symbol'
                              : typeof t
                      }),
            jt(t)
        )
    }
    function St(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;((r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, Et(r.key), r))
        }
    }
    function _t(t) {
        var e = 'function' == typeof Map ? new Map() : void 0
        return (
            (_t = function (t) {
                if (
                    null === t ||
                    !(function (t) {
                        try {
                            return (
                                -1 !==
                                Function.toString
                                    .call(t)
                                    .indexOf('[native code]')
                            )
                        } catch (e) {
                            return 'function' == typeof t
                        }
                    })(t)
                )
                    return t
                if ('function' != typeof t)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t)
                    e.set(t, n)
                }
                function n() {
                    return (function (t, e, n) {
                        if (xt())
                            return Reflect.construct.apply(null, arguments)
                        var r = [null]
                        r.push.apply(r, e)
                        var o = new (t.bind.apply(t, r))()
                        return (n && kt(o, n.prototype), o)
                    })(t, arguments, Pt(this).constructor)
                }
                return (
                    (n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                    kt(n, t)
                )
            }),
            _t(t)
        )
    }
    function xt() {
        try {
            var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            )
        } catch (t) {}
        return (xt = function () {
            return !!t
        })()
    }
    function kt(t, e) {
        return (
            (kt = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return ((t.__proto__ = e), t)
                  }),
            kt(t, e)
        )
    }
    function Pt(t) {
        return (
            (Pt = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                  }),
            Pt(t)
        )
    }
    function Tt(t, e, n) {
        return (
            (e = Et(e)) in t
                ? Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (t[e] = n),
            t
        )
    }
    function Et(t) {
        var e = (function (t) {
            if ('object' != jt(t) || !t) return t
            var e = t[Symbol.toPrimitive]
            if (void 0 !== e) {
                var n = e.call(t, 'string')
                if ('object' != jt(n)) return n
                throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                )
            }
            return String(t)
        })(t)
        return 'symbol' == jt(e) ? e : e + ''
    }
    customElements.define('note-list', Ot)
    var Rt = (function (t) {
        function e() {
            var t
            return (
                (function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function')
                })(this, e),
                Tt(
                    (t = (function (t, e, n) {
                        return (
                            (e = Pt(e)),
                            (function (t, e) {
                                if (
                                    e &&
                                    ('object' == jt(e) ||
                                        'function' == typeof e)
                                )
                                    return e
                                if (void 0 !== e)
                                    throw new TypeError(
                                        'Derived constructors may only return object or undefined'
                                    )
                                return (function (t) {
                                    if (void 0 === t)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called"
                                        )
                                    return t
                                })(t)
                            })(
                                t,
                                xt()
                                    ? Reflect.construct(
                                          e,
                                          n || [],
                                          Pt(t).constructor
                                      )
                                    : e.apply(t, n)
                            )
                        )
                    })(this, e)),
                    '_shadowRoot',
                    null
                ),
                Tt(t, '_style', null),
                (t._shadowRoot = t.attachShadow({ mode: 'open' })),
                (t._style = document.createElement('style')),
                t
            )
        }
        return (
            (function (t, e) {
                if ('function' != typeof e && null !== e)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                ;((t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    e && kt(t, e))
            })(e, t),
            (n = e),
            (r = [
                {
                    key: 'connectedCallback',
                    value: function () {
                        this.render()
                    },
                },
                {
                    key: '_updateStyle',
                    value: function () {
                        this._style.textContent =
                            '\n        \n#loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(66, 65, 65, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.loader {\n  border: 7px solid #f3f3f3; /* Light grey */\n  border-top: 7px solid #3498db; /* Blue */\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg);}\n}'
                    },
                },
                {
                    key: '_emptyContent',
                    value: function () {
                        this._shadowRoot.innerHTML = ''
                    },
                },
                {
                    key: 'render',
                    value: function () {
                        ;(this._emptyContent(),
                            this._updateStyle(),
                            this._shadowRoot.appendChild(this._style),
                            (this._shadowRoot.innerHTML +=
                                '\n        <div id="loading-overlay">\n          <div class="loader"></div>\n        </div>\n      '))
                    },
                },
            ]) && St(n.prototype, r),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            n
        )
        var n, r
    })(_t(HTMLElement))
    customElements.define('loading-overlay', Rt)
    var Ct = new E()
    ;((window.toggleArchive = function (t, e) {
        Ct.toogleArchive(t, e)
    }),
        (window.deleteNote = function (t) {
            Ct.deleteNotes(t)
        }))
})()

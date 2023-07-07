! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Seatchart = t()
}(this, function() {
    "use strict";
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            })(e, t)
    };

    function e(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var m = function() {
        return (m = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }).apply(this, arguments)
    };

    function y(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function t(e) {
        this.element = e
    }
    var a, C = (e(n, a = t), n.prototype.stateEventListener = function(e) {
        var t = e.current,
            n = t.index,
            r = t.state,
            a = t.label,
            i = t.type,
            o = this.store.getTypeOptions(i);
        this.index.row === n.row && this.index.col === n.col && (this.element.textContent = a, this.element.className = "sc-seat sc-seat-".concat(r, " ").concat(o.cssClass))
    }, n.prototype.seatClick = function() {
        var e = this.store.getSeat(this.index);
        if ("reserved" !== e.state && "disabled" !== e.state) {
            var t = "selected" === e.state ? "available" : "selected";
            this.store.setSeat(e.index, {
                state: t
            }, !0)
        }
    }, n);

    function n(e, t) {
        var n = this,
            r = document.createElement("div");
        return (n = a.call(this, r) || this).store = t, n.index = e, n.seatClick = n.seatClick.bind(n), r.addEventListener("click", n.seatClick), n.stateEventListener = n.stateEventListener.bind(n), n.store.addEventListener("seatchange", n.stateEventListener, {
            index: e
        }), n
    }
    var i, g = (e(o, i = t), o);

    function o() {
        var e = document.createElement("div");
        return e.textContent = "PLATNO", e.className = "sc-front", i.call(this, e) || this
    }
    var s, l = (e(c, s = t), c);

    function c(e) {
        var t = document.createElement("div");
        return t.className = "sc-seat-indexer", t.textContent = e, s.call(this, t) || this
    }
    var d, b = (e(u, d = t), u);

    function u() {
        var e = document.createElement("div");
        return e.className = "sc-spacer", d.call(this, e) || this
    }
    var p, E = (e(h, p = t), h);

    function h(e, t) {
        var a = document.createElement("div");
        a.className = "sc-indexer sc-indexer-".concat(e);
        for (var n = t.getOptions().map, i = "rows" === e ? n.rowSpacers : n.columnSpacers, r = "rows" === e ? n.rows : n.columns, o = "rows" === e ? t.getRowLabel : t.getColumnLabel, s = function(t) {
                var e = o(t),
                    n = new l(e);
                if (null == i ? void 0 : i.some(function(e) {
                        return e === t
                    })) {
                    var r = new b;
                    a.appendChild(r.element)
                }
                a.appendChild(n.element)
            }, c = 0; c < r; c += 1) s(c);
        return p.call(this, a) || this
    }
    var w, v = (e(f, w = t), f);

    function f(i) {
        var e = i.getOptions().map,
            t = e.rows,
            o = e.columns,
            s = e.rowSpacers,
            c = e.columnSpacers,
            n = e.indexerRows,
            r = e.indexerColumns,
            a = e.frontVisible,
            l = document.createElement("div");
        l.classList.add("sc-seats-container");
        for (var d = function(r) {
                var a = document.createElement("div");
                if (a.className = "sc-seat-row", null == s ? void 0 : s.find(function(e) {
                        return e === r
                    })) {
                    var e = new b;
                    l.appendChild(e.element)
                }
                for (var t = function(t) {
                        if (null == c ? void 0 : c.find(function(e) {
                                return e === t
                            })) {
                            var e = new b;
                            a.appendChild(e.element)
                        }
                        var n = new C({
                            row: r,
                            col: t
                        }, i);
                        a.appendChild(n.element)
                    }, n = 0; n < o; n += 1) t(n);
                l.appendChild(a)
            }, u = 0; u < t; u += 1) d(u);
        var p = document.createElement("div");
        if (p.className = "sc-map-inner-container", void 0 === a || a) {
            var h = new g;
            p.appendChild(h.element)
        }
        if (void 0 === (null == r ? void 0 : r.visible) || r.visible) {
            var v = new E("columns", i);
            p.appendChild(v.element)
        }
        p.appendChild(l);
        var f = document.createElement("div");
        if (f.className = "sc-map", void 0 === (null == n ? void 0 : n.visible) || n.visible) {
            var m = new E("rows", i);
            f.appendChild(m.element)
        }
        return f.appendChild(p), w.call(this, f) || this
    }
    var x, L = (e(T, x = t), T.prototype.updateTotalText = function() {
        var e = this.store.getCartTotal();
        this.element.textContent = "Ukupno: ".concat(this.currency).concat(e.toFixed(2))
    }, T);

    function T(e) {
        var t = this,
            n = document.createElement("p");
        n.className = "sc-cart-total", (t = x.call(this, n) || this).store = e;
        var r = t.store.getOptions().cart;
        return t.currency = (null == r ? void 0 : r.currency) || "€", t.updateTotalText(), t.updateTotalText = t.updateTotalText.bind(t), t.store.addEventListener("cartchange", t.updateTotalText), t.store.addEventListener("cartclear", t.updateTotalText), t.store.addEventListener("seatchange", t.updateTotalText), t
    }
    var S, N = (e(k, S = t), k);

    function k(e) {
        var t = new L(e),
            n = document.createElement("div");
        n.className = "sc-cart-footer";
        var r = e.getOptions().cart,
            a = document.createElement("button");
        return a.className = "sc-cart-btn sc-cart-btn-submit", a.textContent = (null == r ? void 0 : r.submitLabel) || "Checkout", a.type = "button", a.onclick = function() {
            return e.submit()
        }, n.appendChild(t.element), n.appendChild(a), S.call(this, n) || this
    }
    var O, I = (e(P, O = t), P);

    function P(e) {
        var t = document.createElement("div");
        t.className = "sc-cart-btn-icon";
        var n = document.createElement("button");
        return n.className = "sc-cart-btn sc-cart-btn-delete", n.type = "button", n.appendChild(t), n.onclick = e, O.call(this, n) || this
    }
    var R, j = (e(_, R = t), _.prototype.deleteAllClick = function() {
        this.store.clearCart(!0)
    }, _.prototype.updateCartTitle = function() {
        var e = this.store.countCartItems();
        this.title.textContent = "Rezervisano (".concat(e, ")")
    }, _);

    function _(e) {
        var t = this,
            n = document.createElement("div");
        n.className = "sc-cart-header", t = R.call(this, n) || this;
        var r = document.createElement("p");
        r.className = "sc-cart-title", t.deleteAllClick = t.deleteAllClick.bind(t);
        var a = new I(t.deleteAllClick);
        return n.appendChild(r), n.appendChild(a.element), t.store = e, t.title = r, t.updateCartTitle(), t.updateCartTitle = t.updateCartTitle.bind(t), t.store.addEventListener("cartclear", t.updateCartTitle), t.store.addEventListener("cartchange", t.updateCartTitle), t
    }
    var A, K = (e(F, A = t), F.prototype.update = function(e, t) {
        this.element.className = "sc-ticket ".concat(t.cssClass), this.seatTypeContainer.textContent = t.label, this.seatLabelContainer.textContent = e
    }, F);

    function F(e, t) {
        var n = this,
            r = document.createElement("div");
        r.className = "sc-ticket ".concat(t.cssClass), n = A.call(this, r) || this;
        var a = document.createElement("div");
        return a.className = "sc-ticket-stripes", n.seatLabelContainer = document.createElement("div"), n.seatLabelContainer.textContent = e, n.seatLabelContainer.className = "sc-ticket-seat-label", n.seatTypeContainer = document.createElement("div"), n.seatTypeContainer.textContent = t.label, n.seatTypeContainer.className = "sc-ticket-seat-type", r.appendChild(a), r.appendChild(n.seatLabelContainer), r.appendChild(n.seatTypeContainer), r.appendChild(a.cloneNode(!0)), n
    }
    var V, M = (e(B, V = t), B.prototype.deleteClick = function() {
        this.store.setSeat(this.seatIndex, {
            state: "available"
        }, !0)
    }, B.prototype.formatPrice = function(e) {
        return "".concat(this.currency).concat(e.toFixed(2))
    }, B.prototype.update = function(e, t) {
        this.ticket.update(e, t), this.seatPriceTd.textContent = this.formatPrice(t.price)
    }, B);

    function B(e, t) {
        var n = this,
            r = document.createElement("tr");
        n = V.call(this, r) || this;
        var a = t.getSeat(e),
            i = t.getTypeOptions(a.type);
        n.ticket = new K(a.label, i);
        var o = document.createElement("td");
        o.appendChild(n.ticket.element);
        var s = t.getOptions().cart;
        n.currency = (null == s ? void 0 : s.currency) || "€", n.seatPriceTd = document.createElement("td"), n.seatPriceTd.textContent = n.formatPrice(i.price), n.deleteClick = n.deleteClick.bind(n);
        var c = new I(n.deleteClick),
            l = document.createElement("td");
        return l.appendChild(c.element), r.appendChild(o), r.appendChild(n.seatPriceTd), r.appendChild(l), n.store = t, n.seatIndex = a.index, n
    }
    var D, G = (e(H, D = t), H.prototype.findItem = function(t) {
        return this.items.findIndex(function(e) {
            return e.seatIndex.row === t.row && e.seatIndex.col === t.col
        })
    }, H.prototype.cartChangeEventListener = function(e) {
        if ("add" === e.action) {
            var t = new M(e.seat.index, this.store);
            this.element.appendChild(t.element), this.items.push(t)
        } else if ("remove" === e.action) {
            var n = this.findItem(e.seat.index);
            0 <= n && (this.items[n].element.remove(), this.items.splice(n, 1))
        }
    }, H.prototype.cartClearEventListener = function() {
        var t, e;
        try {
            for (var n = y(this.items), r = n.next(); !r.done; r = n.next()) r.value.element.remove()
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (e = n.return) && e.call(n)
            } finally {
                if (t) throw t.error
            }
        }
        this.items = []
    }, H.prototype.seatChangeEventListener = function(e) {
        var t = this.findItem(e.current.index);
        if (0 <= t) {
            var n = this.store.getOptions().map.seatTypes[e.current.type];
            this.items[t].update(e.current.label, n)
        }
    }, H);

    function H(e) {
        var t = this,
            n = document.createElement("table");
        return n.className = "sc-cart-table", (t = D.call(this, n) || this).store = e, t.items = [], t.cartChangeEventListener = t.cartChangeEventListener.bind(t), t.cartClearEventListener = t.cartClearEventListener.bind(t), t.seatChangeEventListener = t.seatChangeEventListener.bind(t), t.store.addEventListener("cartchange", t.cartChangeEventListener), t.store.addEventListener("cartclear", t.cartClearEventListener), t.store.addEventListener("seatchange", t.seatChangeEventListener), t
    }
    var J, Q = (e(U, J = t), U);

    function U(e) {
        var t = new G(e),
            n = document.createElement("div");
        n.className = "sc-cart-table-container", n.appendChild(t.element);
        var r = new j(e),
            a = new N(e),
            i = document.createElement("div");
        return i.className = "sc-cart", i.appendChild(r.element), i.appendChild(n), i.appendChild(a.element), J.call(this, i) || this
    }
    var W, X = (e(Y, W = t), Y);

    function Y(e, t) {
        var n = document.createElement("li");
        n.className = "sc-legend-item";
        var r = document.createElement("div");
        r.className = "sc-legend-bullet ".concat(t);
        var a = document.createElement("p");
        return a.className = "sc-legend-description", a.textContent = e, n.appendChild(r), n.appendChild(a), W.call(this, n) || this
    }
    var Z, q = (e(z, Z = t), z);

    function z(e) {
        var t, n, r = e.getOptions(),
            a = r.cart,
            i = r.map,
            o = document.createElement("ul");
        o.className = "sc-legend";
        var s = (null == a ? void 0 : a.currency) || "€",
            c = i.seatTypes,
            l = Object.keys(c);
        l.sort(function(e, t) {
            return c[t].price - c[e].price
        });
        try {
            for (var d = y(l), u = d.next(); !u.done; u = d.next()) {
                var p = u.value,
                    h = c[p],
                    v = "".concat(h.label, " (").concat(s).concat(h.price, ")"),
                    f = new X(v, h.cssClass);
                o.appendChild(f.element)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                u && !u.done && (n = d.return) && n.call(d)
            } finally {
                if (t) throw t.error
            }
        }
        var m = new X("Reserved", "sc-seat-reserved");
        return o.appendChild(m.element), Z.call(this, o) || this
    }
    var $ = function(e, t) {
            for (; e.firstChild;) e.firstChild.remove();
            e.classList.add("sc-main-container");
            var n = new v(t);
            e.appendChild(n.element);
            var r = document.createElement("div");
            r.className = "sc-right-container";
            var a = t.getOptions();
            if (!a.cart || void 0 === a.cart.visible || a.cart.visible) {
                var i = new Q(t);
                null == r || r.appendChild(i.element)
            }
            if (void 0 === a.legendVisible || a.legendVisible) {
                var o = new q(t);
                null == r || r.appendChild(o.element)
            }
            0 < r.childElementCount && e.appendChild(r)
        },
        ee = (te.prototype.init = function() {
            for (var t, e, n = this.options.map, r = n.rows, a = n.columns, c = n.disabledSeats, l = n.reservedSeats, d = n.selectedSeats, u = 0; u < r; u++) {
                this.seats[u] = [];
                for (var i = function(e) {
                        var t = {
                                row: u,
                                col: e
                            },
                            n = m({}, p.seats[u][e]),
                            r = "available";
                        (null == c ? void 0 : c.some(p.isSameSeat(t))) ? r = "disabled": (null == l ? void 0 : l.some(p.isSameSeat(t))) ? r = "reserved" : (null == d ? void 0 : d.some(p.isSameSeat(t))) && (r = "selected");
                        var a = p.getSeatLabel(t),
                            i = p.getSeatType(t);
                        p.seats[u][e] = {
                            index: t,
                            label: a,
                            state: r,
                            type: i
                        };
                        var o = p.seats[u][e],
                            s = p.listenerKey(t);
                        p.singleSeatChangeEventListeners[s].forEach(function(e) {
                            return e({
                                previous: n,
                                current: o
                            })
                        }), p.eventListeners.seatchange.forEach(function(e) {
                            return e({
                                previous: n,
                                current: o
                            })
                        })
                    }, p = this, o = 0; o < a; o++) i(o)
            }
            if (d) {
                var s = function(e) {
                        var t = h.seats[e.row][e.col];
                        h.cart.push(t), h.eventListeners.cartchange.forEach(function(e) {
                            return e({
                                action: "add",
                                seat: t
                            })
                        })
                    },
                    h = this;
                try {
                    for (var v = y(d), f = v.next(); !f.done; f = v.next()) s(f.value)
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        f && !f.done && (e = v.return) && e.call(v)
                    } finally {
                        if (t) throw t.error
                    }
                }
            }
        }, te.prototype.getOptions = function() {
            return this.options
        }, te.prototype.getTypeOptions = function(e) {
            return this.options.map.seatTypes[e]
        }, te.prototype.setSeat = function(e, t, n) {
            this.validateIndex(e), this.validateType(t.type);
            var r = e.row,
                a = e.col,
                i = m({}, this.seats[r][a]);
            this.seats[r][a] = m(m({}, i), t);
            var o = this.seats[r][a];
            if (i.state !== t.state && ("selected" === o.state ? this.addToCart(o.index, n) : "selected" === i.state && this.removeFromCart(o.index, n)), Object.keys(t).some(function(e) {
                    return t[e] && i[e] !== t[e]
                }) && n) {
                var s = this.listenerKey(e);
                this.singleSeatChangeEventListeners[s].forEach(function(e) {
                    return e({
                        previous: i,
                        current: o
                    })
                }), this.eventListeners.seatchange.forEach(function(e) {
                    return e({
                        previous: i,
                        current: o
                    })
                })
            }
        }, te.prototype.getSeat = function(e) {
            return this.validateIndex(e), this.seats[e.row][e.col]
        }, te.prototype.clearCart = function(e) {
            var t, n, r, a, i = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, a = 0, i = t.length; a < i; a++) !r && a in t || ((r = r || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
                return e.concat(r || Array.prototype.slice.call(t))
            }([], function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, a, i = n.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || 0 < t--) && !(r = i.next()).done;) o.push(r.value)
                } catch (e) {
                    a = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return o
            }(this.cart), !1);
            this.cart = [];
            try {
                for (var o = y(i), s = o.next(); !s.done; s = o.next()) s.value.state = "available"
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    s && !s.done && (n = o.return) && n.call(o)
                } finally {
                    if (t) throw t.error
                }
            }
            if (e) {
                0 < i.length && this.eventListeners.cartclear.forEach(function(e) {
                    return e({
                        seats: i
                    })
                });
                var c = function(t) {
                        l.eventListeners.cartchange.forEach(function(e) {
                            return e({
                                action: "remove",
                                seat: t
                            })
                        });
                        var n = m(m({}, t), {
                                state: "selected"
                            }),
                            e = l.listenerKey(t.index);
                        l.singleSeatChangeEventListeners[e].forEach(function(e) {
                            return e({
                                previous: n,
                                current: t
                            })
                        }), l.eventListeners.seatchange.forEach(function(e) {
                            return e({
                                previous: n,
                                current: t
                            })
                        })
                    },
                    l = this;
                try {
                    for (var d = y(i), u = d.next(); !u.done; u = d.next()) c(u.value)
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        u && !u.done && (a = d.return) && a.call(d)
                    } finally {
                        if (r) throw r.error
                    }
                }
            }
        }, te.prototype.submit = function() {
            var t = this,
                n = this.getCartTotal();
            this.eventListeners.submit.forEach(function(e) {
                return e({
                    cart: t.cart,
                    total: n
                })
            })
        }, te.prototype.getCart = function() {
            return this.cart
        }, te.prototype.getCartTotal = function() {
            var t, e, n = this.options.map.seatTypes,
                r = 0;
            try {
                for (var a = y(this.cart), i = a.next(); !i.done; i = a.next()) r += n[i.value.type].price
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (e = a.return) && e.call(a)
                } finally {
                    if (t) throw t.error
                }
            }
            return r
        }, te.prototype.countCartItems = function() {
            return this.cart.length
        }, te.prototype.getRowLabel = function(e) {
            var t, n = null === (t = this.options.map.indexerRows) || void 0 === t ? void 0 : t.label;
            if (n) return n(e);
            var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                a = Math.floor(e / r.length);
            return r[e - r.length * a].repeat(a + 1)
        }, te.prototype.getColumnLabel = function(e) {
            var t, n = null === (t = this.options.map.indexerColumns) || void 0 === t ? void 0 : t.label;
            return n ? n(e) : (e + 1).toString()
        }, te.prototype.addEventListener = function(e, t, n) {
            if (n) {
                var r = this.listenerKey(n.index);
                this.singleSeatChangeEventListeners[r].push(t)
            } else this.eventListeners[e].push(t)
        }, te.prototype.removeEventListener = function(e, t, n) {
            if (n) {
                var r = this.listenerKey(n.index);
                this.singleSeatChangeEventListeners[r] = this.singleSeatChangeEventListeners[r].filter(function(e) {
                    return e !== t
                })
            } else this.eventListeners[e] = this.eventListeners[e].filter(function(e) {
                return e !== t
            })
        }, te.prototype.validateIndex = function(e) {
            if (e.row < 0 || e.col < 0 || e.row >= this.options.map.rows || e.col >= this.options.map.columns) throw RangeError("Seat index is out of range")
        }, te.prototype.validateType = function(e) {
            if (void 0 !== e && !this.options.map.seatTypes[e]) throw TypeError("Seat type does not exist")
        }, te.prototype.listenerKey = function(e) {
            return "".concat(e.row, "_").concat(e.col)
        }, te.prototype.isSameSeat = function(t) {
            return function(e) {
                return t.row === e.row && t.col === e.col
            }
        }, te.prototype.addToCart = function(e, t) {
            if (this.cart.push(this.seats[e.row][e.col]), t) {
                var n = this.getSeat(e);
                this.eventListeners.cartchange.forEach(function(e) {
                    return e({
                        action: "add",
                        seat: n
                    })
                })
            }
        }, te.prototype.removeFromCart = function(t, e) {
            var n = this.cart.findIndex(function(e) {
                return t.row === e.index.row && t.col === e.index.col
            });
            if (0 <= n && (this.cart.splice(n, 1), e)) {
                var r = this.getSeat(t);
                this.eventListeners.cartchange.forEach(function(e) {
                    return e({
                        action: "remove",
                        seat: r
                    })
                })
            }
        }, te.prototype.getSeatType = function(t) {
            var n, e, r, a, i, o = this.options.map.seatTypes,
                s = Object.keys(o);
            try {
                for (var c = y(s), l = c.next(); !l.done; l = c.next()) {
                    var d = l.value,
                        u = o[d];
                    if ((null === (r = u.seats) || void 0 === r ? void 0 : r.some(this.isSameSeat(t))) || (null === (a = u.seatColumns) || void 0 === a ? void 0 : a.some(function(e) {
                            return e === t.col
                        })) || (null === (i = u.seatRows) || void 0 === i ? void 0 : i.some(function(e) {
                            return e === t.row
                        }))) return d
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    l && !l.done && (e = c.return) && e.call(c)
                } finally {
                    if (n) throw n.error
                }
            }
            return "default"
        }, te.prototype.getSeatLabel = function(e) {
            var t = this.options.map.seatLabel;
            if (t) return t(e);
            var n = this.getRowLabel(e.row),
                r = this.getColumnLabel(e.col);
            return "".concat(n).concat(r)
        }, te);

    function te(e) {
        this.cart = [], this.seats = [], this.singleSeatChangeEventListeners = {}, this.options = e, this.getColumnLabel = this.getColumnLabel.bind(this), this.getRowLabel = this.getRowLabel.bind(this), this.eventListeners = {
            cartchange: [],
            cartclear: [],
            seatchange: [],
            submit: []
        };
        for (var t = e.map, n = t.rows, r = t.columns, a = 0; a < n; a++)
            for (var i = 0; i < r; i++) {
                var o = this.listenerKey({
                    row: a,
                    col: i
                });
                this.singleSeatChangeEventListeners[o] = []
            }
    }

    function ne(e, t) {
        this.element = e, this.options = t, this.store = new ee(t), this.ui = new $(e, this.store), this.store.init()
    }
    return ne.prototype.addEventListener = function(e, t) {
        this.store.addEventListener(e, t)
    }, ne.prototype.removeEventListener = function(e, t) {
        this.store.removeEventListener(e, t)
    }, ne.prototype.getSeat = function(e) {
        return this.store.getSeat(e)
    }, ne.prototype.setSeat = function(e, t) {
        this.store.setSeat(e, t, !0)
    }, ne.prototype.getCart = function() {
        return this.store.getCart()
    }, ne.prototype.getCartTotal = function() {
        return this.store.getCartTotal()
    }, ne.prototype.clearCart = function() {
        this.store.clearCart(!0)
    }, ne
});
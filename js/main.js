// Initialize AOS
AOS.init();
// Auto Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();
// Add To Favorite & Show Favorite Button
let starsBtns = document.querySelectorAll(".star");
let showFavoriteBtn = document.querySelector(".fav-btn i");
let FavoriteList = document.querySelector(".favorite-list");
starsBtns.forEach((starBtn) => {
  starBtn.addEventListener("click", () => {
    showFavoriteBtn.classList.add("show-fave-btn");
    starBtn.classList.toggle("active-star");
    // Add Item To List
    let FavoriteListItems = document.querySelector(".items");
    let item = `<div class="item">
    <img src=${starBtn.parentElement.parentElement.childNodes[1].src} alt="img">
    <span class="delete" onclick="deleteItem()"><i class="fa-solid fa-trash-can"></i></span>
  </div>`;
    FavoriteListItems.innerHTML += item;
  });
});
// Remove Item To List
function deleteItem() {
  document.querySelectorAll(".delete").forEach((deleteBtn) => {
    deleteBtn.parentElement.remove();
    starsBtns.forEach((starBtn) => {
      starBtn.classList.remove("active-star");
    });
    showFavoriteBtn.classList.remove("show-fave-btn");
  });
}

// Delet Item From List
// let items = document.querySelectorAll(".item");
// let deleteBtns = document.querySelectorAll(".item .delete");
// deleteBtns.forEach((deleteBtn) => {
//   deleteBtn.addEventListener("click", () => {
//     items.forEach((item) => {
//       item.style.display = "none";
//     });
//   });
// });

// Show & Hide Favorite List
// Show

showFavoriteBtn.addEventListener("click", () => {
  FavoriteList.classList.add("active-list");
  FavoriteList.classList.remove("hide-list");
});
// Hide
let closeListBtn = document.querySelector(".close-icon i");
closeListBtn.addEventListener("click", () => {
  FavoriteList.classList.remove("active-list");
  FavoriteList.classList.add("hide-list");
});

// Scroll To Top
let btn = document.querySelector("span.to-top i");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Loder
let bgLoading = document.getElementById("bgLoading");
let bgLoadingCont = document.querySelector("#bgLoading .loading-container");
window.onload = () => {
  setTimeout(function () {
    bgLoadingCont.style.opacity = "0";
    bgLoading.style.pointerEvents = "none";
    bgLoading.style.backdropFilter = "blur(0px)";
    setTimeout(function () {
      bgLoadingCont.style.display = "none";
      bgLoading.style.display = "none";
    }, 1000);
  }, 1000);
};

// Phone List
const icon = document.querySelector(".nav-icon");
const navList = document.querySelector(".phone-list");
icon.addEventListener("click", () => {
  icon.classList.toggle("open");
  navList.classList.toggle("active");
});

// Keep Code Safety
var message = "Copy Code Not Allowed";
function clickIE4() {
  if (2 == event.button) return alert(message), !1;
}
function clickNS4(e) {
  if (
    (document.layers || (document.getElementById && !document.all)) &&
    (2 == e.which || 3 == e.which)
  )
    return alert(message), !1;
}
document.layers
  ? (document.captureEvents(Event.MOUSEDOWN), (document.onmousedown = clickNS4))
  : document.all &&
    !document.getElementById &&
    (document.onmousedown = clickIE4),
  (document.oncontextmenu = new Function("alert(message);return false"));
!(function t() {
  try {
    !(function t(n) {
      (1 === ("" + n / n).length && 0 !== n) ||
        function () {}.constructor("debugger")(),
        t(++n);
    })(0);
  } catch (n) {
    setTimeout(t, 5e3);
  }
})();
(shortcut = {
  all_shortcuts: {},
  add: function (e, t, a) {
    var o = {
      type: "keydown",
      propagate: !1,
      disable_in_input: !1,
      target: document,
      keycode: !1,
    };
    if (a) for (var r in o) void 0 === a[r] && (a[r] = o[r]);
    else a = o;
    (o = a.target),
      "string" == typeof a.target && (o = document.getElementById(a.target)),
      (e = e.toLowerCase()),
      (r = function (o) {
        var r;
        if (
          ((o = o || window.event), a.disable_in_input) &&
          (o.target ? (r = o.target) : o.srcElement && (r = o.srcElement),
          3 == r.nodeType && (r = r.parentNode),
          "INPUT" == r.tagName || "TEXTAREA" == r.tagName)
        )
          return;
        o.keyCode ? (code = o.keyCode) : o.which && (code = o.which),
          (r = String.fromCharCode(code).toLowerCase()),
          188 == code && (r = ","),
          190 == code && (r = ".");
        var n = e.split("+"),
          c = 0,
          l = {
            "`": "~",
            1: "!",
            2: "@",
            3: "#",
            4: "$",
            5: "%",
            6: "^",
            7: "&",
            8: "*",
            9: "(",
            0: ")",
            "-": "_",
            "=": "+",
            ";": ":",
            "'": '"',
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|",
          },
          s = {
            esc: 27,
            escape: 27,
            tab: 9,
            space: 32,
            return: 13,
            enter: 13,
            backspace: 8,
            scrolllock: 145,
            scroll_lock: 145,
            scroll: 145,
            capslock: 20,
            caps_lock: 20,
            caps: 20,
            numlock: 144,
            num_lock: 144,
            num: 144,
            pause: 19,
            break: 19,
            insert: 45,
            home: 36,
            delete: 46,
            end: 35,
            pageup: 33,
            page_up: 33,
            pu: 33,
            pagedown: 34,
            page_down: 34,
            pd: 34,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            f1: 112,
            f2: 113,
            f3: 114,
            f4: 115,
            f5: 116,
            f6: 117,
            f7: 118,
            f8: 119,
            f9: 120,
            f10: 121,
            f11: 122,
            f12: 123,
          },
          i = !1,
          d = !1,
          p = !1,
          u = !1,
          h = !1,
          f = !1,
          g = !1,
          v = !1;
        o.ctrlKey && (u = !0),
          o.shiftKey && (d = !0),
          o.altKey && (f = !0),
          o.metaKey && (v = !0);
        for (var y = 0; (k = n[y]), y < n.length; y++)
          "ctrl" == k || "control" == k
            ? (c++, (p = !0))
            : "shift" == k
            ? (c++, (i = !0))
            : "alt" == k
            ? (c++, (h = !0))
            : "meta" == k
            ? (c++, (g = !0))
            : 1 < k.length
            ? s[k] == code && c++
            : a.keycode
            ? a.keycode == code && c++
            : r == k
            ? c++
            : l[r] && o.shiftKey && ((r = l[r]), r == k && c++);
        if (
          c == n.length &&
          u == p &&
          d == i &&
          f == h &&
          v == g &&
          (t(o), !a.propagate)
        )
          return (
            (o.cancelBubble = !0),
            (o.returnValue = !1),
            o.stopPropagation && (o.stopPropagation(), o.preventDefault()),
            !1
          );
      }),
      (this.all_shortcuts[e] = { callback: r, target: o, event: a.type }),
      o.addEventListener
        ? o.addEventListener(a.type, r, !1)
        : o.attachEvent
        ? o.attachEvent("on" + a.type, r)
        : (o["on" + a.type] = r);
  },
  remove: function (e) {
    e = e.toLowerCase();
    var t = this.all_shortcuts[e];
    if ((delete this.all_shortcuts[e], t)) {
      e = t.event;
      var a = t.target;
      t = t.callback;
      a.detachEvent
        ? a.detachEvent("on" + e, t)
        : a.removeEventListener
        ? a.removeEventListener(e, t, !1)
        : (a["on" + e] = !1);
    }
  },
}),
  shortcut.add("Ctrl+U", function () {
    alert("Cmon, you better than this");
  }),
  shortcut.add("Meta+Alt+U", function () {
    alert("This is joke right?");
  }),
  shortcut.add("Meta+C", function () {
    alert("This is joke right?");
  });

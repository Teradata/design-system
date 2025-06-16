import B from "../NavItem/index.js";
import { useState as h } from "react";
import { DropdownMenu as S } from "../DropdownMenu/index.js";
import U from "../Blackout/index.js";
import O from "../Icon/index.js";
import V from "../Sidenav/index.js";
import P from "../LanguageDropdown/index.js";
import { jsxs as l, Fragment as H, jsx as e } from "react/jsx-runtime";
import '../../assets/index5.css';const j = "_containerWide_oufsl_1", q = "_siteHeader_oufsl_37", z = "_headerUtility_oufsl_41", G = "_containerWideWithAnnouncment_oufsl_58", J = "_headerNavWrapper_oufsl_86", K = "_headerNav_oufsl_86", Q = "_headerNavMobile_oufsl_109", R = "_headerNavElement_oufsl_113", X = "_headerNavLogoText_oufsl_119", Y = "_headerNavMainMenu_oufsl_129", y = "_headerNavActions_oufsl_139", e2 = "_headerNavActionItem_oufsl_145", a2 = "_headerNavLogo_oufsl_119", o2 = "_headerNavVDivider_oufsl_161", l2 = "_headerNavMobileWrapper_oufsl_184", t2 = "_teradataLogo_oufsl_190", i2 = "_headerNavMobileLogoText_oufsl_202", r2 = "_headerNavMobileTopLinks_oufsl_210", n2 = "_headerNavMobileMenuIcon_oufsl_221", c2 = "_headerNavMobileFooter_oufsl_230", d2 = "_headerNavMobileDropdownMenu_oufsl_249", s2 = "_headerNavMobileActions_oufsl_253", h2 = "_headerNavMobileSecondaryMenu_oufsl_260", v2 = "_show_oufsl_264", N2 = "_headerNavMobileIcon_oufsl_268", m2 = "_sidenavHeader_oufsl_272", _2 = "_sidenavContent_oufsl_288", p2 = "_activeMobileMenu_oufsl_314", M2 = "_pageBlackout_oufsl_314", a = {
  containerWide: j,
  siteHeader: q,
  headerUtility: z,
  containerWideWithAnnouncment: G,
  headerNavWrapper: J,
  headerNav: K,
  headerNavMobile: Q,
  headerNavElement: R,
  headerNavLogoText: X,
  headerNavMainMenu: Y,
  headerNavActions: y,
  headerNavActionItem: e2,
  headerNavLogo: a2,
  headerNavVDivider: o2,
  headerNavMobileWrapper: l2,
  teradataLogo: t2,
  headerNavMobileLogoText: i2,
  headerNavMobileTopLinks: r2,
  headerNavMobileMenuIcon: n2,
  headerNavMobileFooter: c2,
  headerNavMobileDropdownMenu: d2,
  headerNavMobileActions: s2,
  headerNavMobileSecondaryMenu: h2,
  show: v2,
  headerNavMobileIcon: N2,
  sidenavHeader: m2,
  sidenavContent: _2,
  activeMobileMenu: p2,
  pageBlackout: M2
}, w = "data:image/svg+xml,%3csvg%20id='teradata-logo'%20viewBox='0%200%20148%2029'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eTeradata%20logo%3c/title%3e%3cpath%20d='M0%203.17767H5.11585V7.90138H10.8217V12.4272H5.11585V20.3384C5.11585%2022.3855%206.17716%2023.0547%207.67378%2023.0547H10.8217V27.5805H7.67378C2.4392%2027.5805%200%2025.2996%200%2020.3384V3.17767Z'%20fill='%23FF5F02'/%3e%3cpath%20d='M23.0609%2028.0482C16.765%2028.0482%2012.5522%2023.9145%2012.5522%2017.7769C12.5522%2011.6393%2016.6859%207.42649%2022.7839%207.42649C28.8819%207.42649%2032.8573%2011.4415%2032.8573%2017.5791C32.8573%2018.1691%2032.8177%2018.7987%2032.699%2019.547H17.9055C18.3768%2022.3028%2020.0713%2023.6015%2023.1401%2023.6015C25.0684%2023.6015%2026.4859%2022.7741%2027.0363%2021.6732H32.3105C31.1304%2025.4903%2027.8242%2028.0482%2023.0609%2028.0482ZM17.9846%2015.3773H27.5076C26.9967%2012.8985%2025.5001%2011.7185%2022.7839%2011.7185C20.226%2011.7185%2018.5747%2012.9777%2017.9846%2015.3773Z'%20fill='%23FF5F02'/%3e%3cpath%20d='M35.6923%207.89779H40.6102V10.2578C42.4199%208.44823%2044.5856%207.54162%2046.6327%207.89779V12.6215C44.0748%2012.3085%2042.4235%2013.4885%2040.8081%2015.5716V27.5733H35.6923V7.89779Z'%20fill='%23FF5F02'/%3e%3cpath%20d='M53.0041%2027.8108C49.3849%2027.8108%2046.5104%2025.6845%2046.5104%2021.2774C46.5104%2017.6582%2048.7913%2015.1794%2053.9071%2015.1794H58.3538V14.5894C58.3538%2012.7798%2057.2134%2012.0315%2054.3784%2012.0315C52.4897%2012.0315%2050.993%2012.2294%2048.946%2012.8194V8.21438C50.5218%207.78266%2052.4897%207.50564%2054.8102%207.50564C60.7139%207.50564%2063.4661%209.74698%2063.4661%2014.5894V27.5769H58.469V26.4365L57.3285%2026.9078C55.8715%2027.4978%2054.3784%2027.8144%2053.0005%2027.8144L53.0041%2027.8108ZM55.7995%2023.2058L58.3574%2022.1049V19.1944H54.4612C52.6911%2019.1944%2051.6262%2020.0219%2051.6262%2021.3206C51.6262%2022.8568%2052.6875%2023.6015%2054.0259%2023.6015C54.5763%2023.6015%2055.2059%2023.4432%2055.7959%2023.2094L55.7995%2023.2058Z'%20fill='%23FF5F02'/%3e%3cpath%20d='M81.5731%2027.5769V26.2782L81.2996%2026.3969C79.49%2027.2639%2077.5617%2027.6956%2075.7125%2027.6956C70.7945%2027.6956%2066.4629%2024.5081%2066.4629%2017.7409C66.4629%2010.9738%2070.7909%207.74668%2075.7521%207.74668C77.5617%207.74668%2079.49%208.1784%2081.2996%209.04543L81.4579%209.12458V0.421875H86.5738V27.5769H81.5731ZM76.6551%2022.9719C77.7559%2022.9719%2078.9755%2022.6949%2080.2347%2022.1049L81.4543%2021.5149V13.9598L80.2347%2013.3698C78.9755%2012.7798%2077.7559%2012.5028%2076.6551%2012.5028C73.8201%2012.5028%2071.6975%2014.2728%2071.6975%2017.7373C71.6975%2021.2019%2073.8237%2022.9719%2076.6551%2022.9719Z'%20fill='%23FF5F02'/%3e%3cpath%20d='M95.8197%2027.8108C92.2005%2027.8108%2089.326%2025.6845%2089.326%2021.2774C89.326%2017.6582%2091.6069%2015.1794%2096.7227%2015.1794H101.169V14.5894C101.169%2012.7798%20100.029%2012.0315%2097.194%2012.0315C95.3053%2012.0315%2093.8086%2012.2294%2091.7616%2012.8194V8.21438C93.3373%207.78266%2095.3053%207.50564%2097.6257%207.50564C103.529%207.50564%20106.282%209.74698%20106.282%2014.5894V27.5769H101.285V26.4365L100.144%2026.9078C98.687%2027.4978%2097.194%2027.8144%2095.8161%2027.8144L95.8197%2027.8108ZM98.6151%2023.2058L101.173%2022.1049V19.1944H97.2768C95.5067%2019.1944%2094.4418%2020.0219%2094.4418%2021.3206C94.4418%2022.8568%2095.5031%2023.6015%2096.8415%2023.6015C97.3919%2023.6015%2098.0215%2023.4432%2098.6115%2023.2094L98.6151%2023.2058Z'%20fill='%23FF5F02'/%3e%3cpath%20d='M110.063%203.17767H115.179V7.90138H120.885V12.4272H115.179V20.3384C115.179%2022.3855%20116.24%2023.0547%20117.737%2023.0547H120.885V27.5805H117.737C112.502%2027.5805%20110.063%2025.2996%20110.063%2020.3384V3.17767Z'%20fill='%23FF5F02'/%3e%3cpath%20d='M129.148%2027.8108C125.529%2027.8108%20122.655%2025.6845%20122.655%2021.2774C122.655%2017.6582%20124.935%2015.1794%20130.051%2015.1794H134.498V14.5894C134.498%2012.7798%20133.358%2012.0315%20130.523%2012.0315C128.634%2012.0315%20127.137%2012.2294%20125.09%2012.8194V8.21438C126.666%207.78266%20128.634%207.50564%20130.954%207.50564C136.858%207.50564%20139.61%209.74698%20139.61%2014.5894V27.5769H134.613V26.4365L133.473%2026.9078C132.016%2027.4978%20130.523%2027.8144%20129.145%2027.8144L129.148%2027.8108ZM131.944%2023.2058L134.502%2022.1049V19.1944H130.605C128.835%2019.1944%20127.77%2020.0219%20127.77%2021.3206C127.77%2022.8568%20128.832%2023.6015%20130.17%2023.6015C130.721%2023.6015%20131.35%2023.4432%20131.94%2023.2094L131.944%2023.2058Z'%20fill='%23FF5F02'/%3e%3cpath%20d='M142.568%2025.332C142.568%2023.8354%20143.748%2022.6553%20145.284%2022.6553C146.82%2022.6553%20148%2023.8354%20148%2025.332C148%2026.8286%20146.78%2028.0482%20145.284%2028.0482C143.787%2028.0482%20142.568%2026.8286%20142.568%2025.332Z'%20fill='%23FF5F02'/%3e%3c/svg%3e", F = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M6.22505%2018.8248L5.17505%2017.7748L10.95%2011.9998L5.17505%206.2248L6.22505%205.1748L12%2010.9498L17.775%205.1748L18.825%206.2248L13.05%2011.9998L18.825%2017.7748L17.775%2018.8248L12%2013.0498L6.22505%2018.8248Z'%20fill='%23001F36'/%3e%3c/svg%3e", f2 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M3%2018V16.5H21V18H3ZM3%2012.75V11.25H21V12.75H3ZM3%207.5V6H21V7.5H3Z'%20fill='%2300233C'/%3e%3c/svg%3e", u2 = ({
  title: s,
  titleLink: m = "",
  navItems: r = [],
  languages: _,
  headerActions: n,
  onLanguageChange: I,
  selectedLanguage: x,
  secondaryMenu: t,
  announcementContent: v
}) => {
  const [p, M] = h(r.findIndex((o) => o.active)), [d, W] = h(!1), [f, u] = h(!1), [g, T] = h(!1), C = n == null ? void 0 : n.find((o) => o.type === "search"), k = (o) => {
    r[o].navItems || M(o);
  }, Z = () => {
    W(!d);
  }, b = () => {
    T(!g), u(!f);
  }, A = (o) => {
    const i = r.some((c) => c.isOpen);
    return o === p && !i;
  }, D = (o, i) => {
    var c;
    if (!i) {
      const N = p, E = (((c = r[o].navItems) == null ? void 0 : c.findIndex(($) => $.active)) || null) !== -1 ? o : N;
      M(E);
    }
    r[o].isOpen = i, u(r.some((N) => N.isOpen));
  }, L = ({
    menuPosition: o = "bottom"
  }) => _ && /* @__PURE__ */ l(H, {
    children: [/* @__PURE__ */ e("li", {
      children: /* @__PURE__ */ e("div", {
        className: a.headerNavVDivider
      })
    }), /* @__PURE__ */ e("li", {
      children: /* @__PURE__ */ e(P, {
        languages: _,
        selectedLanguage: x,
        onLanguageChange: I,
        menuPosition: o
      })
    })]
  });
  return /* @__PURE__ */ l(H, {
    children: [/* @__PURE__ */ l("nav", {
      className: `${a.headerNavWrapper} navbar`,
      "aria-label": "Primary navigation",
      children: [/* @__PURE__ */ e("section", {
        className: a.headerUtility,
        children: /* @__PURE__ */ l("div", {
          className: `${a.containerWide} ${v ? a.containerWideWithAnnouncment : ""}`,
          children: [v && v, /* @__PURE__ */ l("ul", {
            className: a.headerUtilityNav,
            children: [/* @__PURE__ */ e("li", {
              children: /* @__PURE__ */ e("a", {
                href: "https://www.teradata.com/",
                target: "_self",
                children: "Teradata.com"
              })
            }), /* @__PURE__ */ e(L, {})]
          })]
        })
      }), /* @__PURE__ */ l("section", {
        id: "site-header",
        className: a.siteHeader,
        children: [/* @__PURE__ */ e("header", {
          className: `${a.headerNav} ${a.containerWide}`,
          children: /* @__PURE__ */ l("nav", {
            children: [/* @__PURE__ */ e("div", {
              className: a.headerNavElement,
              children: /* @__PURE__ */ l("span", {
                className: a.headerNavLogo,
                children: [/* @__PURE__ */ e("a", {
                  href: "https://www.teradata.com/",
                  target: "_self",
                  children: /* @__PURE__ */ e("img", {
                    className: a.teradataLogo,
                    src: w,
                    alt: "Teradata Logo"
                  })
                }), s && /* @__PURE__ */ e("a", {
                  href: m,
                  target: "_self",
                  children: /* @__PURE__ */ e("span", {
                    className: a.headerNavLogoText,
                    children: s
                  })
                })]
              })
            }), r && /* @__PURE__ */ e("div", {
              className: a.headerNavElement,
              children: /* @__PURE__ */ e("ul", {
                className: a.headerNavMainMenu,
                children: r.map((o, i) => /* @__PURE__ */ e(B, {
                  active: A(i),
                  href: o.href,
                  onClick: () => k(i),
                  onMenuChange: (c) => D(i, c),
                  nestedNavItems: o.navItems,
                  label: o.label
                }, i))
              })
            }), /* @__PURE__ */ e("ul", {
              className: `${a.headerNavActions} ${a.headerNavElement}`,
              children: n && n.map((o, i) => /* @__PURE__ */ e("li", {
                className: a.headerNavActionItem,
                children: o.actionElement
              }, i))
            })]
          })
        }), /* @__PURE__ */ l("header", {
          className: a.headerNavMobile,
          children: [/* @__PURE__ */ l("nav", {
            children: [/* @__PURE__ */ l("section", {
              className: a.headerNavMobileWrapper,
              children: [/* @__PURE__ */ l("span", {
                className: a.headerNavLogo,
                children: [/* @__PURE__ */ e("a", {
                  href: "http://www.teradata.com/",
                  target: "_self",
                  children: /* @__PURE__ */ e("img", {
                    className: a.teradataLogo,
                    src: w,
                    alt: "Teradata Logo"
                  })
                }), s && /* @__PURE__ */ e("a", {
                  href: m,
                  target: "_self",
                  children: /* @__PURE__ */ e("span", {
                    className: a.headerNavMobileLogoText,
                    children: s
                  })
                })]
              }), /* @__PURE__ */ l("ul", {
                className: a.headerNavMobileTopLinks,
                children: [C && /* @__PURE__ */ e("li", {
                  children: C.actionElement
                }), /* @__PURE__ */ e("li", {
                  children: /* @__PURE__ */ e("button", {
                    id: "showMenu",
                    "aria-label": "Click or Press enter to open menu",
                    tabIndex: 0,
                    className: a.headerNavMobileMenuIcon,
                    onClick: Z,
                    children: /* @__PURE__ */ e("img", {
                      src: d ? F : f2,
                      alt: "Mobile Menu"
                    })
                  })
                })]
              })]
            }), (t == null ? void 0 : t.menuElement) && /* @__PURE__ */ e("section", {
              className: a.headerNavMobileSecondaryMenu,
              children: /* @__PURE__ */ e("span", {
                onClick: b,
                children: /* @__PURE__ */ e(O, {
                  className: `fa-sharp fa-regular fa-rectangle-list ${a.headerNavMobileIcon}`
                })
              })
            })]
          }), /* @__PURE__ */ e("aside", {
            children: /* @__PURE__ */ l(V, {
              show: g,
              left: !0,
              style: t != null && t.menuElement ? {
                paddingTop: "6.5rem"
              } : {},
              children: [/* @__PURE__ */ l("div", {
                className: a.sidenavHeader,
                children: [/* @__PURE__ */ e("h3", {
                  children: t == null ? void 0 : t.title
                }), /* @__PURE__ */ e("img", {
                  src: F,
                  onClick: b,
                  alt: "Docs Menu"
                })]
              }), /* @__PURE__ */ e("div", {
                className: a.sidenavContent,
                children: t == null ? void 0 : t.menuElement
              })]
            })
          }), /* @__PURE__ */ e("section", {
            id: "mobile-slide",
            children: /* @__PURE__ */ l(V, {
              show: d,
              style: {
                width: "100%",
                paddingTop: t != null && t.menuElement ? "6.5rem" : "3.5rem"
              },
              children: [/* @__PURE__ */ e("div", {
                className: a.headerNavMobileDropdownMenu,
                children: /* @__PURE__ */ e(S, {
                  navItems: r
                })
              }), /* @__PURE__ */ l("footer", {
                children: [/* @__PURE__ */ e("ul", {
                  className: `${a.headerNavActions} ${a.headerNavElement} ${a.headerNavMobileActions}`,
                  children: n && n.map((o, i) => o.type === "button" && /* @__PURE__ */ e("li", {
                    children: o.actionElement
                  }, i))
                }), /* @__PURE__ */ e("div", {
                  className: a.headerNavMobileFooter,
                  children: /* @__PURE__ */ l("ul", {
                    children: [/* @__PURE__ */ e("li", {
                      children: /* @__PURE__ */ e("a", {
                        href: "https://teradata.com",
                        target: "_self",
                        rel: "noopener",
                        children: "Teradata.com"
                      })
                    }), /* @__PURE__ */ e(L, {
                      menuPosition: "top"
                    })]
                  })
                })]
              })]
            })
          })]
        })]
      })]
    }), /* @__PURE__ */ e(U, {
      active: d || f,
      className: `${d ? a.activeMobileMenu : ""} ${a.pageBlackout}`
    })]
  });
};
u2.displayName = "Header";
export {
  u2 as default
};

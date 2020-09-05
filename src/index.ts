import { performance } from 'perf_hooks';

export type Browser = 'chrome' | 'firefox' | 'brave' | 'safari' | 'ie' | 'edge';

export interface ScreenData {
  availWidth: number;
  availHeight: number;
  width: number;
  height: number;
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
}

export interface BrowserData {
  lang: string;
  userAgent: string;
  screenData: ScreenData;
}

const UNSUPPORTED_BROWSER_ERROR = new Error('Browser not fully supported. Please contribute.');

const randomRange = (min: number, max: number): number => ~~(Math.random() * (max - min + 1)) + min;

class Abck {
  /**
   * @param cookieChecks Append an ! (exclamation mark) for negative outlook. E.g. ["==", "~-1", "!-1"]
   */
  static validateCookie(cookieChecks: string[], abck: string): boolean {
    return cookieChecks.every((s) =>
      s.startsWith('!') ? !abck.includes(s.substr(1)) : abck.includes(s),
    );
  }

  static d3(): number {
    return Date.now() % 1e7;
  }

  private static rir(t: number, a: number, e: number, n: number): number {
    return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a), t;
  }

  static od(t: string, a: string): string {
    try {
      t = String(t);
      a = String(a);
      let e = [];
      const n = a.length;
      if (n > 0) {
        for (var o = 0; o < t.length; o++) {
          let m = t.charCodeAt(o);
          let r = t.charAt(o);
          const i = a.charCodeAt(o % n);
          m = this.rir(m, 47, 57, i);
          m != t.charCodeAt(o) && (r = String.fromCharCode(m));
          e.push(r);
        }
        if (e.length > 0) return e.join('');
      }
    } catch (t) {}
    return t;
  }

  static ab(t: string): number {
    if (null == t) return -1;
    try {
      let a = 0;
      for (let e = 0; e < t.length; e++) {
        const n = t.charCodeAt(e);
        n < 128 && (a += n);
      }
      return a;
    } catch (t) {
      return -2;
    }
  }

  static uar(userAgent: string): string {
    return userAgent.replace(/\\|"/g, '');
  }

  static fas(browser: Browser): number {
    switch (browser) {
      case 'chrome':
        return 30261693;
      case 'firefox':
        return 26067385;
      case 'brave':
        throw UNSUPPORTED_BROWSER_ERROR;
      case 'safari':
        throw UNSUPPORTED_BROWSER_ERROR;
      case 'ie':
        throw UNSUPPORTED_BROWSER_ERROR;
      case 'edge':
        throw UNSUPPORTED_BROWSER_ERROR;
      default:
        throw UNSUPPORTED_BROWSER_ERROR;
    }
  }

  static sed(): string {
    return '0,0,0,0,1,0,0';
  }

  static np(browser: Browser): string {
    switch (browser) {
      case 'chrome':
        return '10321144241322243122';
      case 'firefox':
        return '11133333331333333333';
      case 'brave':
        throw UNSUPPORTED_BROWSER_ERROR;
      case 'safari':
        throw UNSUPPORTED_BROWSER_ERROR;
      case 'ie':
        throw UNSUPPORTED_BROWSER_ERROR;
      case 'edge':
        throw UNSUPPORTED_BROWSER_ERROR;
      default:
        throw UNSUPPORTED_BROWSER_ERROR;
    }
  }

  private static cal_dis(t: number[]): number {
    var a = t[0] - t[1],
      e = t[2] - t[3],
      n = t[4] - t[5],
      o = Math.sqrt(a * a + e * e + n * n);
    return Math.floor(o);
  }

  static jrs(t: number): number[] {
    let a = Math.floor(1e5 * Math.random() + 1e4);
    let o = [];
    for (let e = String(t * a), n = 0, m = e.length >= 18; o.length < 6; ) {
      o.push(parseInt(e.slice(n, n + 2))), (n = m ? n + 3 : n + 2);
    }
    return [a, this.cal_dis(o)];
  }

  private static cc(t: number) {
    let a = t % 4;
    2 == a && (a = 3);
    const e = 42 + a;
    let n = (_t: number, _a: number) => 0;
    if (42 == e) {
      n = (t, a) => t * a;
    } else if (43 == e) {
      n = (t, a) => t + a;
    } else {
      n = (t, a) => t - a;
    }
    return n;
  }

  static o9(d3: number): number {
    let a = d3;
    for (let n = 0; n < 5; n++) {
      const o = Math.floor(d3 / Math.pow(10, n)) % 10;
      const m = o + 1;
      const op = this.cc(o);
      a = op(a, m);
    }
    return a * 3;
  }

  static getType(t: string): number {
    t = t.toLowerCase();
    return 'text' == t || 'search' == t || 'url' == t || 'email' == t || 'tel' == t || 'number' == t
      ? 0
      : 'password' == t
      ? 1
      : 2;
  }

  static z1(startTimestamp: number): number {
    return Math.floor(startTimestamp / (2016 * 2016));
  }

  static gd(
    browser: Browser,
    browserData: BrowserData,
    startTimestamp: number,
    d3: number,
  ): string {
    const userAgent = this.uar(browserData.userAgent);
    const randomNumber = Math.random();
    let xagg: number;
    let psub: number;
    let plen: number;
    let bd: string;

    switch (browser) {
      case 'chrome':
        xagg = 12147;
        psub = 20030107;
        plen = 3;
        bd = ',cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1';
        break;
      case 'firefox':
        xagg = 11059;
        psub = 20100101;
        plen = 0;
        bd = `,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:1,sc:0,wrc:1,isc:${randomRange(
          60,
          100,
        )},vib:1,bat:0,x11:0,x12:1`;
        break;
      case 'brave':
        throw UNSUPPORTED_BROWSER_ERROR;
      case 'safari':
        throw UNSUPPORTED_BROWSER_ERROR;
      case 'ie':
        throw UNSUPPORTED_BROWSER_ERROR;
      case 'edge':
        throw UNSUPPORTED_BROWSER_ERROR;
      default:
        throw UNSUPPORTED_BROWSER_ERROR;
    }
    return (
      userAgent +
      ',' +
      'uaend' +
      ',' +
      xagg +
      ',' +
      psub +
      ',' +
      browserData.lang +
      ',' +
      'Gecko' +
      ',' +
      plen +
      '0,0,0' +
      ',' +
      this.z1(startTimestamp) +
      ',' +
      d3 +
      ',' +
      browserData.screenData.availWidth +
      ',' +
      browserData.screenData.availHeight +
      ',' +
      browserData.screenData.width +
      ',' +
      browserData.screenData.height +
      ',' +
      browserData.screenData.innerWidth +
      ',' +
      browserData.screenData.innerHeight +
      ',' +
      browserData.screenData.outerWidth +
      ',' +
      bd +
      ',' +
      this.ab(userAgent) +
      ',' +
      String(randomNumber).slice(0, 11) +
      String(Math.floor((1000 * randomNumber) / 2)) +
      ',' +
      startTimestamp / 2 +
      ',' +
      0 +
      ',' +
      'loc:'
    );
  }

  /**
   * Needs to be executed inside browser/electron app (returns weird results in node)
   * @returns getmr
   */
  static getmr(): string {
    const e = [
      Math.abs,
      Math.acos,
      Math.asin,
      Math.atanh,
      Math.cbrt,
      Math.exp,
      Math.random,
      Math.round,
      Math.sqrt,
      isFinite,
      isNaN,
      parseFloat,
      parseInt,
      JSON.parse,
    ];
    let t = '';
    for (let n = 0; n < e.length; n++) {
      const o = [];
      let m = 0;
      const r = performance.now();
      let i = 0;
      let c = 0;
      if (void 0 !== e[n]) {
        for (i = 0; i < 1000 && m < 0.6; i++) {
          const b = performance.now();
          // @ts-ignore
          for (let d = 0; d < 4e3; d++) e[n](3.14);
          const k = performance.now();
          o.push(Math.round(1e3 * (k - b))), (m = k - r);
        }
        const s = o.sort();
        c = s[Math.floor(s.length / 2)] / 5;
      }
      t = `${t}${c},`;
    }
    return t;
  }
}
export default Abck;

module.exports = Abck;
module.exports.default = Abck;
module.exports.__esModule = true;

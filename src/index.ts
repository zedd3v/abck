import { performance } from 'perf_hooks';
import mn_s from './mn_s';

class Abck {
  public static get_cf_date(): number {
    return Date.now ? Date.now() : +new Date();
  }

  public static uar(userAgent: string): string {
    return userAgent.replace(/\\|"/g, '');
  }

  /**
   * Needs to be executed inside browser/electron app (returns weird results in node)
   * @returns getmr
   */
  public static getmr(): string {
    const functions = [
      Math.abs,
      Math.acos,
      Math.asin,
      Math.atanh,
      Math.cbrt,
      Math.exp,
      Math.random,
      Math.round,
      Math.sqrt,
      // eslint-disable-next-line no-restricted-globals
      isFinite,
      // eslint-disable-next-line no-restricted-globals
      isNaN,
      parseFloat,
      parseInt,
      JSON.parse,
    ];
    let t = '';
    functions.forEach((func) => {
      const o = [];
      let m = 0;
      const r = performance.now();
      let i = 0;
      let c = 0;
      if (undefined !== func) {
        for (i = 0; i < 1000 && m < 0.6; i++) {
          const b = performance.now();
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          for (let d = 0; d < 4e3; d++) func(3.14);
          const k = performance.now();
          o.push(Math.round(1e3 * (k - b)));
          m = k - r;
        }
        const s = o.sort();
        c = s[Math.floor(s.length / 2)] / 5;
      }
      t = `${t}${c},`;
    });
    return t;
  }

  public static sed(): string {
    return '0,0,0,0,1,0,0';
  }

  public static x2(): number {
    return this.get_cf_date();
  }

  public static ab(t: string): number {
    if (t === null) return -1;
    try {
      let a = 0;
      for (let i = 0; i < t.length; i++) {
        const n = t.charCodeAt(i);
        if (n < 128) a += n;
      }
      return a;
    } catch {
      return -2;
    }
  }

  public static ff(a: number): string {
    return String.fromCharCode(a);
  }

  private static cal_dis(t: number[]): number {
    const first = t[0] - t[1];
    const second = t[2] - t[3];
    const third = t[4] - t[5];
    const o = Math.sqrt(first * first + second * second + third * third);
    return Math.floor(o);
  }

  public static to(): { d3: number; o9: number } {
    let o9 = -654321;
    const a = this.x2() % 1e7;
    const d3 = a;
    let t = a;
    const x = Number.parseInt(this.ff(51), 10);
    for (let n = 0; n < 5; n++) {
      const o = Math.floor(a / 10 ** n) % 10;
      const m = o + 1;
      const op = this.cc(o);
      t = op(t, m);
    }
    o9 = t * x;
    return { d3, o9 };
  }

  public static jrs(a: number): number[] {
    const t = Math.floor(1e5 * Math.random() + 1e4);
    const x = String(a * t);
    const o = [];
    for (let n = 0, m = x.length >= 18; o.length < 6; ) {
      o.push(Number.parseInt(x.slice(n, n + 2), 10));
      n = m ? n + 3 : n + 2;
    }
    return [t, this.cal_dis(o)];
  }

  private static cc(t: number) {
    let a = t % 4;
    if (a === 2) a = 3;
    const x = 42 + a;
    // eslint-disable-next-line unicorn/consistent-function-scoping, @typescript-eslint/no-unused-vars
    let n = (_l: number, _k: number) => 0;
    if (x === 42) {
      n = (l, k) => l * k;
    } else if (x === 43) {
      n = (l, k) => l + k;
    } else {
      n = (l, k) => l - k;
    }
    return n;
  }

  public static isIgn(fidcnt: number, activeElement: Element, keyCode: number): number {
    if (activeElement === null) return 0;
    const type = activeElement.getAttribute('type');
    return (type === null ? -1 : this.get_type(type)) === 1 && fidcnt > 12 && keyCode === -2
      ? 1
      : 0;
  }

  public static getFloatVal(a: number): string {
    try {
      if (this.chknull(a) !== -1 && !Number.isNaN(a)) {
        const t = Math.floor(a);
        if (!Number.isNaN(t)) return t.toFixed(2);
      }
      // eslint-disable-next-line no-empty
    } catch {}
    return '-1';
  }

  private static get_type(type: string): number {
    let value = 2;
    switch (type.toLowerCase()) {
      case 'text':
        value = 0;
        break;
      case 'search':
        value = 0;
        break;
      case 'url':
        value = 0;
        break;
      case 'email':
        value = 0;
        break;
      case 'tel':
        value = 0;
        break;
      case 'number':
        value = 0;
        break;
      case 'password':
        value = 1;
        break;
      default:
        break;
    }
    return value;
  }

  private static chknull(a: number): number {
    return a === null ? -1 : a;
  }

  public static x1(): string {
    return Math.floor(16777216 * (1 + Math.random())).toString(36);
  }

  public static od(x: string, y: string): string {
    try {
      const t = String(x);
      const a = String(y);
      const array = [];
      const n = a.length;
      if (n > 0) {
        for (let o = 0; o < t.length; o++) {
          let m = t.charCodeAt(o);
          let r = t.charAt(o);
          const i = a.charCodeAt(o % n);
          m = this.rir(m, 47, 57, i);
          if (m !== t.charCodeAt(o)) r = String.fromCharCode(m);
          array.push(r);
        }
        if (array.length > 0) return array.join('');
      }
      // eslint-disable-next-line no-empty
    } catch {}
    return x;
  }

  // eslint-disable-next-line unicorn/prevent-abbreviations
  private static rir(t: number, a: number, e: number, n: number): number {
    // eslint-disable-next-line no-return-assign, no-param-reassign, no-sequences
    return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a), t;
  }

  public static encode(a: string): string {
    return Buffer.from(a).toString('base64');
  }

  public static get_mn_params_from_abck(abck: string): (string | number)[][] {
    const a = [[]];
    try {
      if (abck) {
        const splitted = decodeURIComponent(abck).split('~');
        if (splitted.length >= 5) {
          const n = splitted[0];
          const o = splitted[4];
          const m = o.split('||');
          if (m.length > 0) {
            m.forEach((i) => {
              const c = i.split('-');
              if (c.length >= 5) {
                const b = Number.parseInt(c[0], 10);
                const d = c[1];
                const k = Number.parseInt(c[2], 10);
                const s = Number.parseInt(c[3], 10);
                const l = Number.parseInt(c[4], 10);
                let u = 1;
                if (c.length >= 6) u = Number.parseInt(c[5], 10);
                const array = [b, n, d, k, s, l, u] as never[];
                if (u === 2) {
                  a.splice(0, 0, array);
                } else {
                  a.push(array);
                }
              }
            });
          }
        }
      }
      // eslint-disable-next-line no-empty
    } catch {}
    return a;
  }

  public static mn_get_current_challenges(abck: string): string[] {
    const array = this.get_mn_params_from_abck(abck);
    const t: string[] = [];
    if (array !== null) {
      array.forEach((subArray) => {
        if (subArray.length > 0) {
          const o = (subArray[1] as string) + (subArray[2] as string);
          const m = subArray[6] as number;
          t[m] = o;
        }
      });
    }
    return t;
  }

  public static mn_s(a: string): number[] {
    return mn_s(a);
  }

  public static bdm(a: number[], t: number): number {
    let f = 0;
    a.forEach((number) => {
      f = ((f << 8) | number) >>> 0;
      f %= t;
    });
    return f;
  }

  public static ats(a: number[]): string {
    let t = '';
    a.forEach((number) => {
      const x = number.toString(16);
      t += x.length === 2 ? x : `0${x}`;
    });
    return t;
  }

  /**
   * @param cookieChecks Append an ! (exclamation mark) for negative outlook. E.g. ["==", "~-1", "!-1"]
   */
  public static validateCookie(cookieChecks: string[], abck: string): boolean {
    return cookieChecks.every((s) =>
      s.startsWith('!') ? !abck.includes(s.slice(1)) : abck.includes(s),
    );
  }
}
export default Abck;

module.exports = Abck;
module.exports.default = Abck;
// eslint-disable-next-line no-underscore-dangle
module.exports.__esModule = true;

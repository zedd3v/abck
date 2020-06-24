import { performance } from 'perf_hooks';

interface CustomScreen {
    availWidth: number;
    availHeight: number;
    width: number;
    height: number;
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
}

// interface WebsiteObject {
// 	url: string;
// 	/**
// 	 * Headers used on all requests (initialAbck, formInfo...)
// 	 */
// 	// eslint-disable-next-line @typescript-eslint/ban-types
// 	headers: object;
// 	/**
// 	 * Optional custom url to fetch form info from.
// 	 */
// 	getFormInfoUrl?: string;
// }

class Abck {
	/**
     * Validates cookie
     * @param cookieChecks Append an ! (exclamation mark) for negative outlook. E.g. ["!==", "~-1"]
     * @param abck 
     * @returns boolean
     */
    static validateCookie(cookieChecks: string[], abck: string): boolean {
        return cookieChecks.every(s => s.startsWith("!") ? !abck.includes(s.substr(1)) : abck.includes(s));
    }

    static sed(): string {
        return "0,0,0,0,1,0,0";
    }

    private static uar(userAgent: string): string {
        return userAgent.replace(/\\|"/g, "");
    }

    static ab(t: string): string {
        if (t == null) return "-1";
        try {
            let a = 0;
            for (let e = 0; e < t.length; e++) {
                const n = t.charCodeAt(e);
                n < 128 && (a += n)
            }
            return a.toString();
        } catch (e) {
            return "-2";
        }
    }

    static np(): string {
        return "10321144241322243122";
    }

	/**
	 * Needs to be executed inside electron app (returns weird results on node)
	 * @returns getmr 
	 */
    static getmr(): string {
        const e = [Math.abs, Math.acos, Math.asin, Math.atanh, Math.cbrt, Math.exp, Math.random, Math.round, Math.sqrt, isFinite, isNaN, parseFloat, parseInt, JSON.parse];
        let t = "";
        for (let n = 0; n < e.length; n++) {
            const o = [];
            let m = 0;
            const r = performance.now();
            let i = 0;
            let c = 0;
            if (void 0 !== e[n]) {
                for (i = 0; i < 1000 && m < .6; i++) {
                    const b = performance.now()
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    for (let d = 0; d < 4e3; d++) e[n](3.14);
                    const k = performance.now();
                    o.push(Math.round(1e3 * (k - b))), m = k - r
                }
                const s = o.sort();
                c = s[Math.floor(s.length / 2)] / 5
            }
            t = `${t}${c},`
        }
        return t;
    }

	/**
     * @param userAgent 
     * @param startTimestamp Use Date.now()
     * @param screenData CustomScreen Object
     * @returns gd value 
     */
    static gd(startTimestamp: number, d3: number, userAgent: string, screenData: CustomScreen): string {
        const t = this.uar(userAgent);
        const d = Math.random();
        return `${t},uaend,12147,20030107,en-US,Gecko,3,0,0,0,${parseInt((startTimestamp / 4064256).toString())},${d3},${screenData.availWidth},${screenData.availHeight},${screenData.width},${screenData.height},${screenData.innerWidth},${screenData.innerHeight},${screenData.outerWidth},,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,${this.ab(t)},${d.toString().slice(0, 11) + parseInt((1000 * d / 2).toString())},${startTimestamp / 2},loc:`;
    }

    static d3(): number {
        return Date.now() % 1e7;
    }

    static od(t: string, a: string): string {
        try {
            t = String(t),
                a = String(a);
            const e = [];
            if (a.length > 0) {
                for (let o = 0; o < t.length; o++) {
                    let m = t.charCodeAt(o);
                    let r = t.charAt(o);
                    const i = a.charCodeAt(o % a.length);
                    m = this.rir(m, 47, 57, i);
                    m != t.charCodeAt(o) && (r = String.fromCharCode(m));
                    e.push(r);
                }
                if (e.length > 0) return e.join("")
            }
        } catch (t) {
            throw new Error(t);
        }
        return t;
    }

    private static rir(t: number, a: number, e: number, n: number): number {
        return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a), t;
    }

    static o9(d3: number): number {
        let a = d3;
        for (let n = 0; n < 5; n++) {
            const o = d3 / Math.pow(10, n) % 10;
            const m = o + 1;
            const op = this.cc(o);
            a = op(a, m);
        }
        return a * parseInt(String.fromCharCode(51));
    }

    private static cc(t: number) {
        let a = t % 4;
        2 == a && (a = 3);
        const e = 42 + a;
        let n: {
            (t: number, a: number): number;
            (t: number, a: number): number;
            (t: number, a: number): number;
        };
        if (42 == e) {
            n = function (t: number, a: number) {
                return t * a
            }
        } else if (43 == e) {
            n = function (t: number, a: number) {
                return t + a
            }
        } else {
            n = function (t: number, a: number) {
                return t - a
            }
        }
        return n;
    }
}
export default Abck;

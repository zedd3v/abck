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
// 	 * Append an ! (exclamation mark) for negative outlook. E.g. ["!=="].
// 	 */
// 	cookieChecks: string[];
// 	/**
// 	 * Optional custom url to fetch form info from.
// 	 */
// 	getFormInfoUrl?: string;
// }

class Abck {
	cookieChecks: string[];
	// website: WebsiteObject;
	startTimestamp: number;
	userAgent: string;
	screenData: CustomScreen;

	/**
	 * Creates an instance of abck.
	 * @param cookieChecks Append an ! (exclamation mark) for negative outlook. E.g. ["!=="]
	 * @param startTimestamp Use Date.now()
	 * @param userAgent 
	 * @param screenData 
	 */
	constructor(
		cookieChecks: string[],
		// website: WebsiteObject,
		startTimestamp: number,
		userAgent: string,
		screenData: CustomScreen,
	) {
		Object.assign(this, {
			cookieChecks,
			// website,
			startTimestamp,
			userAgent,
			screenData,
		});
	}

	validateCookie(abck: string): boolean {
		return this.cookieChecks.every(s => s.startsWith("!") ? !abck.includes(s.substr(1)) : abck.includes(s));
	}

	sed(): string {
		return "0,0,0,0,1,0,0";
	}

	uar(userAgent: string): string {
		return userAgent.replace(/\\|"/g, "");
	}

	ab(t: string): string {
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

	np(): string {
		return "10321144241322243122";
	}

	/**
	 * Needs to be executed inside electron app (returns weird results on node)
	 * @returns getmr 
	 */
	getmr(): string {
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

	gd(): string {
		const t = this.uar(this.userAgent);
		const d = Math.random();
		return `${t},uaend,12147,20030107,en-US,Gecko,3,0,0,0,${parseInt((this.startTimestamp / 4064256).toString())},${Date.now() % 1e7},${this.screenData.availWidth},${this.screenData.availHeight},${this.screenData.width},${this.screenData.height},${this.screenData.innerWidth},${this.screenData.innerHeight},${this.screenData.outerWidth},,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,${this.ab(t)},${d.toString().slice(0, 11) + parseInt((1000 * d / 2).toString())},${this.startTimestamp / 2},loc:`;
	}
}

export default Abck;

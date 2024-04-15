import { generateId } from 'lucia';
import scrypt from './encrypter';

export const generateHashWithScrypt = async (s: string) => {
	const salt = generateId(16);
	const key = await hashWithScrypt(s.normalize('NFKC'), salt);
	return `hifn:${salt}:${key}`;
};

const hashWithScrypt = async (s: string, salt: string, blockSize = 16) => {
	const keyUint8Array = await scrypt(new TextEncoder().encode(s), new TextEncoder().encode(salt), {
		N: 16384,
		r: blockSize,
		p: 1,
		dkLen: 64
	});
	return convertUint8ArrayToHex(keyUint8Array);
};

export const validateScryptHash = async (s: string, hash: string) => {
	const hashed_pass_array = hash.split(':');
	const [version, salt, key] = hashed_pass_array;
	if (version === 'hifn') {
		const targetKey = await hashWithScrypt(s, salt);
		return constantTimeEqual(targetKey, key);
	}
	return false;
};

const constantTimeEqual = (a: string, b: string) => {
	if (a.length !== b.length) {
		return false;
	}
	const aUint8Array = new TextEncoder().encode(a);
	const bUint8Array = new TextEncoder().encode(b);

	let c = 0;
	for (let i = 0; i < a.length; i++) {
		c |= aUint8Array[i] ^ bUint8Array[i]; // ^: XOR operator
	}
	return c === 0;
};

const convertUint8ArrayToHex = (arr: Uint8Array) => {
	return [...arr].map((x) => x.toString(16).padStart(2, '0')).join('');
};

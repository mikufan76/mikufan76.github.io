'use strict';

let exports = {};

Object.defineProperty(exports, '__esModule', { value: true });

const REVISION = '144dev';
const MOUSE = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
};
const TOUCH = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
};
const CullFaceNone = 0;
const CullFaceBack = 1;
const CullFaceFront = 2;
const CullFaceFrontBack = 3;
const BasicShadowMap = 0;
const PCFShadowMap = 1;
const PCFSoftShadowMap = 2;
const VSMShadowMap = 3;
const FrontSide = 0;
const BackSide = 1;
const DoubleSide = 2;
const NoBlending = 0;
const NormalBlending = 1;
const AdditiveBlending = 2;
const SubtractiveBlending = 3;
const MultiplyBlending = 4;
const CustomBlending = 5;
const AddEquation = 100;
const SubtractEquation = 101;
const ReverseSubtractEquation = 102;
const MinEquation = 103;
const MaxEquation = 104;
const ZeroFactor = 200;
const OneFactor = 201;
const SrcColorFactor = 202;
const OneMinusSrcColorFactor = 203;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const DstAlphaFactor = 206;
const OneMinusDstAlphaFactor = 207;
const DstColorFactor = 208;
const OneMinusDstColorFactor = 209;
const SrcAlphaSaturateFactor = 210;
const NeverDepth = 0;
const AlwaysDepth = 1;
const LessDepth = 2;
const LessEqualDepth = 3;
const EqualDepth = 4;
const GreaterEqualDepth = 5;
const GreaterDepth = 6;
const NotEqualDepth = 7;
const MultiplyOperation = 0;
const MixOperation = 1;
const AddOperation = 2;
const NoToneMapping = 0;
const LinearToneMapping = 1;
const ReinhardToneMapping = 2;
const CineonToneMapping = 3;
const ACESFilmicToneMapping = 4;
const CustomToneMapping = 5;
const UVMapping = 300;
const CubeReflectionMapping = 301;
const CubeRefractionMapping = 302;
const EquirectangularReflectionMapping = 303;
const EquirectangularRefractionMapping = 304;
const CubeUVReflectionMapping = 306;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipMapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const NearestMipMapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipMapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const LinearMipMapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const UnsignedInt248Type = 1020;
const AlphaFormat = 1021;
const RGBFormat = 1022; // @deprecated since r137

const RGBAFormat = 1023;
const LuminanceFormat = 1024;
const LuminanceAlphaFormat = 1025;
const DepthFormat = 1026;
const DepthStencilFormat = 1027;
const RedFormat = 1028;
const RedIntegerFormat = 1029;
const RGFormat = 1030;
const RGIntegerFormat = 1031;
const RGBAIntegerFormat = 1033;
const RGB_S3TC_DXT1_Format = 33776;
const RGBA_S3TC_DXT1_Format = 33777;
const RGBA_S3TC_DXT3_Format = 33778;
const RGBA_S3TC_DXT5_Format = 33779;
const RGB_PVRTC_4BPPV1_Format = 35840;
const RGB_PVRTC_2BPPV1_Format = 35841;
const RGBA_PVRTC_4BPPV1_Format = 35842;
const RGBA_PVRTC_2BPPV1_Format = 35843;
const RGB_ETC1_Format = 36196;
const RGB_ETC2_Format = 37492;
const RGBA_ETC2_EAC_Format = 37496;
const RGBA_ASTC_4x4_Format = 37808;
const RGBA_ASTC_5x4_Format = 37809;
const RGBA_ASTC_5x5_Format = 37810;
const RGBA_ASTC_6x5_Format = 37811;
const RGBA_ASTC_6x6_Format = 37812;
const RGBA_ASTC_8x5_Format = 37813;
const RGBA_ASTC_8x6_Format = 37814;
const RGBA_ASTC_8x8_Format = 37815;
const RGBA_ASTC_10x5_Format = 37816;
const RGBA_ASTC_10x6_Format = 37817;
const RGBA_ASTC_10x8_Format = 37818;
const RGBA_ASTC_10x10_Format = 37819;
const RGBA_ASTC_12x10_Format = 37820;
const RGBA_ASTC_12x12_Format = 37821;
const RGBA_BPTC_Format = 36492;
const LoopOnce = 2200;
const LoopRepeat = 2201;
const LoopPingPong = 2202;
const InterpolateDiscrete = 2300;
const InterpolateLinear = 2301;
const InterpolateSmooth = 2302;
const ZeroCurvatureEnding = 2400;
const ZeroSlopeEnding = 2401;
const WrapAroundEnding = 2402;
const NormalAnimationBlendMode = 2500;
const AdditiveAnimationBlendMode = 2501;
const TrianglesDrawMode = 0;
const TriangleStripDrawMode = 1;
const TriangleFanDrawMode = 2;
const LinearEncoding = 3000;
const sRGBEncoding = 3001;
const BasicDepthPacking = 3200;
const RGBADepthPacking = 3201;
const TangentSpaceNormalMap = 0;
const ObjectSpaceNormalMap = 1; // Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.

const NoColorSpace = '';
const SRGBColorSpace = 'srgb';
const LinearSRGBColorSpace = 'srgb-linear';
const ZeroStencilOp = 0;
const KeepStencilOp = 7680;
const ReplaceStencilOp = 7681;
const IncrementStencilOp = 7682;
const DecrementStencilOp = 7683;
const IncrementWrapStencilOp = 34055;
const DecrementWrapStencilOp = 34056;
const InvertStencilOp = 5386;
const NeverStencilFunc = 512;
const LessStencilFunc = 513;
const EqualStencilFunc = 514;
const LessEqualStencilFunc = 515;
const GreaterStencilFunc = 516;
const NotEqualStencilFunc = 517;
const GreaterEqualStencilFunc = 518;
const AlwaysStencilFunc = 519;
const StaticDrawUsage = 35044;
const DynamicDrawUsage = 35048;
const StreamDrawUsage = 35040;
const StaticReadUsage = 35045;
const DynamicReadUsage = 35049;
const StreamReadUsage = 35041;
const StaticCopyUsage = 35046;
const DynamicCopyUsage = 35050;
const StreamCopyUsage = 35042;
const GLSL1 = '100';
const GLSL3 = '300 es';
const _SRGBAFormat = 1035; // fallback for WebGL 1

class Vector2 {
	constructor(x = 0, y = 0) {
		Vector2.prototype.isVector2 = true;
		this.x = x;
		this.y = y;
	}

	get width() {
		return this.x;
	}

	set width(value) {
		this.x = value;
	}

	get height() {
		return this.y;
	}

	set height(value) {
		this.y = value;
	}

	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}

	setScalar(scalar) {
		this.x = scalar;
		this.y = scalar;
		return this;
	}

	setX(x) {
		this.x = x;
		return this;
	}

	setY(y) {
		this.y = y;
		return this;
	}

	setComponent(index, value) {
		switch (index) {
			case 0:
				this.x = value;
				break;

			case 1:
				this.y = value;
				break;

			default:
				throw new Error('index is out of range: ' + index);
		}

		return this;
	}

	getComponent(index) {
		switch (index) {
			case 0:
				return this.x;

			case 1:
				return this.y;

			default:
				throw new Error('index is out of range: ' + index);
		}
	}

	clone() {
		return new this.constructor(this.x, this.y);
	}

	copy(v) {
		this.x = v.x;
		this.y = v.y;
		return this;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	}

	addScalar(s) {
		this.x += s;
		this.y += s;
		return this;
	}

	addVectors(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		return this;
	}

	addScaledVector(v, s) {
		this.x += v.x * s;
		this.y += v.y * s;
		return this;
	}

	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}

	subScalar(s) {
		this.x -= s;
		this.y -= s;
		return this;
	}

	subVectors(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		return this;
	}

	multiply(v) {
		this.x *= v.x;
		this.y *= v.y;
		return this;
	}

	multiplyScalar(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}

	divide(v) {
		this.x /= v.x;
		this.y /= v.y;
		return this;
	}

	divideScalar(scalar) {
		return this.multiplyScalar(1 / scalar);
	}

	applyMatrix3(m) {
		const x = this.x,
					y = this.y;
		const e = m.elements;
		this.x = e[0] * x + e[3] * y + e[6];
		this.y = e[1] * x + e[4] * y + e[7];
		return this;
	}

	min(v) {
		this.x = Math.min(this.x, v.x);
		this.y = Math.min(this.y, v.y);
		return this;
	}

	max(v) {
		this.x = Math.max(this.x, v.x);
		this.y = Math.max(this.y, v.y);
		return this;
	}

	clamp(min, max) {
		// assumes min < max, componentwise
		this.x = Math.max(min.x, Math.min(max.x, this.x));
		this.y = Math.max(min.y, Math.min(max.y, this.y));
		return this;
	}

	clampScalar(minVal, maxVal) {
		this.x = Math.max(minVal, Math.min(maxVal, this.x));
		this.y = Math.max(minVal, Math.min(maxVal, this.y));
		return this;
	}

	clampLength(min, max) {
		const length = this.length();
		return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
	}

	floor() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	}

	ceil() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	}

	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	}

	roundToZero() {
		this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
		this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
		return this;
	}

	negate() {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	}

	dot(v) {
		return this.x * v.x + this.y * v.y;
	}

	cross(v) {
		return this.x * v.y - this.y * v.x;
	}

	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}

	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}

	normalize() {
		return this.divideScalar(this.length() || 1);
	}

	angle() {
		// computes the angle in radians with respect to the positive x-axis
		const angle = Math.atan2(-this.y, -this.x) + Math.PI;
		return angle;
	}

	distanceTo(v) {
		return Math.sqrt(this.distanceToSquared(v));
	}

	distanceToSquared(v) {
		const dx = this.x - v.x,
					dy = this.y - v.y;
		return dx * dx + dy * dy;
	}

	manhattanDistanceTo(v) {
		return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
	}

	setLength(length) {
		return this.normalize().multiplyScalar(length);
	}

	lerp(v, alpha) {
		this.x += (v.x - this.x) * alpha;
		this.y += (v.y - this.y) * alpha;
		return this;
	}

	lerpVectors(v1, v2, alpha) {
		this.x = v1.x + (v2.x - v1.x) * alpha;
		this.y = v1.y + (v2.y - v1.y) * alpha;
		return this;
	}

	equals(v) {
		return v.x === this.x && v.y === this.y;
	}

	fromArray(array, offset = 0) {
		this.x = array[offset];
		this.y = array[offset + 1];
		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this.x;
		array[offset + 1] = this.y;
		return array;
	} // fromBufferAttribute( attribute, index ) {
	// 	this.x = attribute.getX( index );
	// 	this.y = attribute.getY( index );
	// 	return this;
	// }


	rotateAround(center, angle) {
		const c = Math.cos(angle),
					s = Math.sin(angle);
		const x = this.x - center.x;
		const y = this.y - center.y;
		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;
		return this;
	}

	random() {
		this.x = Math.random();
		this.y = Math.random();
		return this;
	}

	*[Symbol.iterator]() {
		yield this.x;
		yield this.y;
	}

}

const _lut = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff'];
let _seed = 1234567;
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI; // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

function generateUUID() {
	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' + _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' + _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] + _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff]; // .toLowerCase() here flattens concatenated strings to save heap memory space.

	return uuid.toLowerCase();
}

function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
} // compute euclidean modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation


function euclideanModulo(n, m) {
	return (n % m + m) % m;
} // Linear mapping from range <a1, a2> to range <b1, b2>


function mapLinear(x, a1, a2, b1, b2) {
	return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
} // https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/


function inverseLerp(x, y, value) {
	if (x !== y) {
		return (value - x) / (y - x);
	} else {
		return 0;
	}
} // https://en.wikipedia.org/wiki/Linear_interpolation


function lerp(x, y, t) {
	return (1 - t) * x + t * y;
} // http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/


function damp(x, y, lambda, dt) {
	return lerp(x, y, 1 - Math.exp(-lambda * dt));
} // https://www.desmos.com/calculator/vcsjnyz7x4


function pingpong(x, length = 1) {
	return length - Math.abs(euclideanModulo(x, length * 2) - length);
} // http://en.wikipedia.org/wiki/Smoothstep


function smoothstep(x, min, max) {
	if (x <= min) return 0;
	if (x >= max) return 1;
	x = (x - min) / (max - min);
	return x * x * (3 - 2 * x);
}

function smootherstep(x, min, max) {
	if (x <= min) return 0;
	if (x >= max) return 1;
	x = (x - min) / (max - min);
	return x * x * x * (x * (x * 6 - 15) + 10);
} // Random integer from <low, high> interval


function randInt(low, high) {
	return low + Math.floor(Math.random() * (high - low + 1));
} // Random float from <low, high> interval


function randFloat(low, high) {
	return low + Math.random() * (high - low);
} // Random float from <-range/2, range/2> interval


function randFloatSpread(range) {
	return range * (0.5 - Math.random());
} // Deterministic pseudo-random float in the interval [ 0, 1 ]


function seededRandom(s) {
	if (s !== undefined) _seed = s; // Mulberry32 generator

	let t = _seed += 0x6D2B79F5;
	t = Math.imul(t ^ t >>> 15, t | 1);
	t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function degToRad(degrees) {
	return degrees * DEG2RAD;
}

function radToDeg(radians) {
	return radians * RAD2DEG;
}

function isPowerOfTwo(value) {
	return (value & value - 1) === 0 && value !== 0;
}

function ceilPowerOfTwo(value) {
	return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
}

function floorPowerOfTwo(value) {
	return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
}

function setQuaternionFromProperEuler(q, a, b, c, order) {
	// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles
	// rotations are applied to the axes in the order specified by 'order'
	// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
	// angles are in radians
	const cos = Math.cos;
	const sin = Math.sin;
	const c2 = cos(b / 2);
	const s2 = sin(b / 2);
	const c13 = cos((a + c) / 2);
	const s13 = sin((a + c) / 2);
	const c1_3 = cos((a - c) / 2);
	const s1_3 = sin((a - c) / 2);
	const c3_1 = cos((c - a) / 2);
	const s3_1 = sin((c - a) / 2);

	switch (order) {
		case 'XYX':
			q.set(c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13);
			break;

		case 'YZY':
			q.set(s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13);
			break;

		case 'ZXZ':
			q.set(s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13);
			break;

		case 'XZX':
			q.set(c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13);
			break;

		case 'YXY':
			q.set(s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13);
			break;

		case 'ZYZ':
			q.set(s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13);
			break;

		default:
			console.warn('THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order);
	}
}

function denormalize(value, array) {
	switch (array.constructor) {
		case Float32Array:
			return value;

		case Uint16Array:
			return value / 65535.0;

		case Uint8Array:
			return value / 255.0;

		case Int16Array:
			return Math.max(value / 32767.0, -1.0);

		case Int8Array:
			return Math.max(value / 127.0, -1.0);

		default:
			throw new Error('Invalid component type.');
	}
}

function normalize(value, array) {
	switch (array.constructor) {
		case Float32Array:
			return value;

		case Uint16Array:
			return Math.round(value * 65535.0);

		case Uint8Array:
			return Math.round(value * 255.0);

		case Int16Array:
			return Math.round(value * 32767.0);

		case Int8Array:
			return Math.round(value * 127.0);

		default:
			throw new Error('Invalid component type.');
	}
}

var MathUtils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	DEG2RAD: DEG2RAD,
	RAD2DEG: RAD2DEG,
	generateUUID: generateUUID,
	clamp: clamp,
	euclideanModulo: euclideanModulo,
	mapLinear: mapLinear,
	inverseLerp: inverseLerp,
	lerp: lerp,
	damp: damp,
	pingpong: pingpong,
	smoothstep: smoothstep,
	smootherstep: smootherstep,
	randInt: randInt,
	randFloat: randFloat,
	randFloatSpread: randFloatSpread,
	seededRandom: seededRandom,
	degToRad: degToRad,
	radToDeg: radToDeg,
	isPowerOfTwo: isPowerOfTwo,
	ceilPowerOfTwo: ceilPowerOfTwo,
	floorPowerOfTwo: floorPowerOfTwo,
	setQuaternionFromProperEuler: setQuaternionFromProperEuler,
	normalize: normalize,
	denormalize: denormalize
});

class Quaternion {
	constructor(x = 0, y = 0, z = 0, w = 1) {
		this.isQuaternion = true;
		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;
	}

	static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
		// fuzz-free, array-based Quaternion SLERP operation
		let x0 = src0[srcOffset0 + 0],
				y0 = src0[srcOffset0 + 1],
				z0 = src0[srcOffset0 + 2],
				w0 = src0[srcOffset0 + 3];
		const x1 = src1[srcOffset1 + 0],
					y1 = src1[srcOffset1 + 1],
					z1 = src1[srcOffset1 + 2],
					w1 = src1[srcOffset1 + 3];

		if (t === 0) {
			dst[dstOffset + 0] = x0;
			dst[dstOffset + 1] = y0;
			dst[dstOffset + 2] = z0;
			dst[dstOffset + 3] = w0;
			return;
		}

		if (t === 1) {
			dst[dstOffset + 0] = x1;
			dst[dstOffset + 1] = y1;
			dst[dstOffset + 2] = z1;
			dst[dstOffset + 3] = w1;
			return;
		}

		if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
			let s = 1 - t;
			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
						dir = cos >= 0 ? 1 : -1,
						sqrSin = 1 - cos * cos; // Skip the Slerp for tiny steps to avoid numeric problems:

			if (sqrSin > Number.EPSILON) {
				const sin = Math.sqrt(sqrSin),
							len = Math.atan2(sin, cos * dir);
				s = Math.sin(s * len) / sin;
				t = Math.sin(t * len) / sin;
			}

			const tDir = t * dir;
			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir; // Normalize in case we just did a lerp:

			if (s === 1 - t) {
				const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;
			}
		}

		dst[dstOffset] = x0;
		dst[dstOffset + 1] = y0;
		dst[dstOffset + 2] = z0;
		dst[dstOffset + 3] = w0;
	}

	static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
		const x0 = src0[srcOffset0];
		const y0 = src0[srcOffset0 + 1];
		const z0 = src0[srcOffset0 + 2];
		const w0 = src0[srcOffset0 + 3];
		const x1 = src1[srcOffset1];
		const y1 = src1[srcOffset1 + 1];
		const z1 = src1[srcOffset1 + 2];
		const w1 = src1[srcOffset1 + 3];
		dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
		dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
		dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
		dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
		return dst;
	}

	get x() {
		return this._x;
	}

	set x(value) {
		this._x = value;

		this._onChangeCallback();
	}

	get y() {
		return this._y;
	}

	set y(value) {
		this._y = value;

		this._onChangeCallback();
	}

	get z() {
		return this._z;
	}

	set z(value) {
		this._z = value;

		this._onChangeCallback();
	}

	get w() {
		return this._w;
	}

	set w(value) {
		this._w = value;

		this._onChangeCallback();
	}

	set(x, y, z, w) {
		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;
	}

	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}

	copy(quaternion) {
		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;
	}

	setFromEuler(euler, update) {
		const x = euler._x,
					y = euler._y,
					z = euler._z,
					order = euler._order; // http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		const cos = Math.cos;
		const sin = Math.sin;
		const c1 = cos(x / 2);
		const c2 = cos(y / 2);
		const c3 = cos(z / 2);
		const s1 = sin(x / 2);
		const s2 = sin(y / 2);
		const s3 = sin(z / 2);

		switch (order) {
			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'YXZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'ZXY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'ZYX':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'YZX':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'XZY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			default:
				console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order);
		}

		if (update !== false) this._onChangeCallback();
		return this;
	}

	setFromAxisAngle(axis, angle) {
		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
		// assumes axis is normalized
		const halfAngle = angle / 2,
					s = Math.sin(halfAngle);
		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos(halfAngle);

		this._onChangeCallback();

		return this;
	}

	setFromRotationMatrix(m) {
		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
		const te = m.elements,
					m11 = te[0],
					m12 = te[4],
					m13 = te[8],
					m21 = te[1],
					m22 = te[5],
					m23 = te[9],
					m31 = te[2],
					m32 = te[6],
					m33 = te[10],
					trace = m11 + m22 + m33;

		if (trace > 0) {
			const s = 0.5 / Math.sqrt(trace + 1.0);
			this._w = 0.25 / s;
			this._x = (m32 - m23) * s;
			this._y = (m13 - m31) * s;
			this._z = (m21 - m12) * s;
		} else if (m11 > m22 && m11 > m33) {
			const s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
			this._w = (m32 - m23) / s;
			this._x = 0.25 * s;
			this._y = (m12 + m21) / s;
			this._z = (m13 + m31) / s;
		} else if (m22 > m33) {
			const s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
			this._w = (m13 - m31) / s;
			this._x = (m12 + m21) / s;
			this._y = 0.25 * s;
			this._z = (m23 + m32) / s;
		} else {
			const s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
			this._w = (m21 - m12) / s;
			this._x = (m13 + m31) / s;
			this._y = (m23 + m32) / s;
			this._z = 0.25 * s;
		}

		this._onChangeCallback();

		return this;
	}

	setFromUnitVectors(vFrom, vTo) {
		// assumes direction vectors vFrom and vTo are normalized
		let r = vFrom.dot(vTo) + 1;

		if (r < Number.EPSILON) {
			// vFrom and vTo point in opposite directions
			r = 0;

			if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
				this._x = -vFrom.y;
				this._y = vFrom.x;
				this._z = 0;
				this._w = r;
			} else {
				this._x = 0;
				this._y = -vFrom.z;
				this._z = vFrom.y;
				this._w = r;
			}
		} else {
			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3
			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;
		}

		return this.normalize();
	}

	angleTo(q) {
		return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
	}

	rotateTowards(q, step) {
		const angle = this.angleTo(q);
		if (angle === 0) return this;
		const t = Math.min(1, step / angle);
		this.slerp(q, t);
		return this;
	}

	identity() {
		return this.set(0, 0, 0, 1);
	}

	invert() {
		// quaternion is assumed to have unit length
		return this.conjugate();
	}

	conjugate() {
		this._x *= -1;
		this._y *= -1;
		this._z *= -1;

		this._onChangeCallback();

		return this;
	}

	dot(v) {
		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
	}

	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}

	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}

	normalize() {
		let l = this.length();

		if (l === 0) {
			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;
		} else {
			l = 1 / l;
			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;
		}

		this._onChangeCallback();

		return this;
	}

	multiply(q) {
		return this.multiplyQuaternions(this, q);
	}

	premultiply(q) {
		return this.multiplyQuaternions(q, this);
	}

	multiplyQuaternions(a, b) {
		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
		const qax = a._x,
					qay = a._y,
					qaz = a._z,
					qaw = a._w;
		const qbx = b._x,
					qby = b._y,
					qbz = b._z,
					qbw = b._w;
		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this._onChangeCallback();

		return this;
	}

	slerp(qb, t) {
		if (t === 0) return this;
		if (t === 1) return this.copy(qb);
		const x = this._x,
					y = this._y,
					z = this._z,
					w = this._w; // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if (cosHalfTheta < 0) {
			this._w = -qb._w;
			this._x = -qb._x;
			this._y = -qb._y;
			this._z = -qb._z;
			cosHalfTheta = -cosHalfTheta;
		} else {
			this.copy(qb);
		}

		if (cosHalfTheta >= 1.0) {
			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;
			return this;
		}

		const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

		if (sqrSinHalfTheta <= Number.EPSILON) {
			const s = 1 - t;
			this._w = s * w + t * this._w;
			this._x = s * x + t * this._x;
			this._y = s * y + t * this._y;
			this._z = s * z + t * this._z;
			this.normalize();

			this._onChangeCallback();

			return this;
		}

		const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
		const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
		const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
					ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
		this._w = w * ratioA + this._w * ratioB;
		this._x = x * ratioA + this._x * ratioB;
		this._y = y * ratioA + this._y * ratioB;
		this._z = z * ratioA + this._z * ratioB;

		this._onChangeCallback();

		return this;
	}

	slerpQuaternions(qa, qb, t) {
		return this.copy(qa).slerp(qb, t);
	}

	random() {
		// Derived from http://planning.cs.uiuc.edu/node198.html
		// Note, this source uses w, x, y, z ordering,
		// so we swap the order below.
		const u1 = Math.random();
		const sqrt1u1 = Math.sqrt(1 - u1);
		const sqrtu1 = Math.sqrt(u1);
		const u2 = 2 * Math.PI * Math.random();
		const u3 = 2 * Math.PI * Math.random();
		return this.set(sqrt1u1 * Math.cos(u2), sqrtu1 * Math.sin(u3), sqrtu1 * Math.cos(u3), sqrt1u1 * Math.sin(u2));
	}

	equals(quaternion) {
		return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
	}

	fromArray(array, offset = 0) {
		this._x = array[offset];
		this._y = array[offset + 1];
		this._z = array[offset + 2];
		this._w = array[offset + 3];

		this._onChangeCallback();

		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this._x;
		array[offset + 1] = this._y;
		array[offset + 2] = this._z;
		array[offset + 3] = this._w;
		return array;
	} // fromBufferAttribute( attribute, index ) {
	// 	this._x = attribute.getX( index );
	// 	this._y = attribute.getY( index );
	// 	this._z = attribute.getZ( index );
	// 	this._w = attribute.getW( index );
	// 	return this;
	// }


	_onChange(callback) {
		this._onChangeCallback = callback;
		return this;
	}

	_onChangeCallback() {}

	*[Symbol.iterator]() {
		yield this._x;
		yield this._y;
		yield this._z;
		yield this._w;
	}

}

class Vector3 {
	constructor(x = 0, y = 0, z = 0) {
		Vector3.prototype.isVector3 = true;
		this.x = x;
		this.y = y;
		this.z = z;
	}

	set(x, y, z) {
		if (z === undefined) z = this.z; // sprite.scale.set(x,y)

		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	setScalar(scalar) {
		this.x = scalar;
		this.y = scalar;
		this.z = scalar;
		return this;
	}

	setX(x) {
		this.x = x;
		return this;
	}

	setY(y) {
		this.y = y;
		return this;
	}

	setZ(z) {
		this.z = z;
		return this;
	}

	setComponent(index, value) {
		switch (index) {
			case 0:
				this.x = value;
				break;

			case 1:
				this.y = value;
				break;

			case 2:
				this.z = value;
				break;

			default:
				throw new Error('index is out of range: ' + index);
		}

		return this;
	}

	getComponent(index) {
		switch (index) {
			case 0:
				return this.x;

			case 1:
				return this.y;

			case 2:
				return this.z;

			default:
				throw new Error('index is out of range: ' + index);
		}
	}

	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}

	copy(v) {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		return this;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		return this;
	}

	addScalar(s) {
		this.x += s;
		this.y += s;
		this.z += s;
		return this;
	}

	addVectors(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		return this;
	}

	addScaledVector(v, s) {
		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		return this;
	}

	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		return this;
	}

	subScalar(s) {
		this.x -= s;
		this.y -= s;
		this.z -= s;
		return this;
	}

	subVectors(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		return this;
	}

	multiply(v) {
		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		return this;
	}

	multiplyScalar(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	}

	multiplyVectors(a, b) {
		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;
		return this;
	}

	applyEuler(euler) {
		return this.applyQuaternion(_quaternion$1.setFromEuler(euler));
	}

	applyAxisAngle(axis, angle) {
		return this.applyQuaternion(_quaternion$1.setFromAxisAngle(axis, angle));
	}

	applyMatrix3(m) {
		const x = this.x,
					y = this.y,
					z = this.z;
		const e = m.elements;
		this.x = e[0] * x + e[3] * y + e[6] * z;
		this.y = e[1] * x + e[4] * y + e[7] * z;
		this.z = e[2] * x + e[5] * y + e[8] * z;
		return this;
	}

	applyNormalMatrix(m) {
		return this.applyMatrix3(m).normalize();
	}

	applyMatrix4(m) {
		const x = this.x,
					y = this.y,
					z = this.z;
		const e = m.elements;
		const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
		this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
		this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
		this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
		return this;
	}

	applyQuaternion(q) {
		const x = this.x,
					y = this.y,
					z = this.z;
		const qx = q.x,
					qy = q.y,
					qz = q.z,
					qw = q.w; // calculate quat * vector

		const ix = qw * x + qy * z - qz * y;
		const iy = qw * y + qz * x - qx * z;
		const iz = qw * z + qx * y - qy * x;
		const iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

		this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
		this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
		this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
		return this;
	} // project( camera ) {
	// 	return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );
	// }
	// unproject( camera ) {
	// 	return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );
	// }


	transformDirection(m) {
		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction
		const x = this.x,
					y = this.y,
					z = this.z;
		const e = m.elements;
		this.x = e[0] * x + e[4] * y + e[8] * z;
		this.y = e[1] * x + e[5] * y + e[9] * z;
		this.z = e[2] * x + e[6] * y + e[10] * z;
		return this.normalize();
	}

	divide(v) {
		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;
		return this;
	}

	divideScalar(scalar) {
		return this.multiplyScalar(1 / scalar);
	}

	min(v) {
		this.x = Math.min(this.x, v.x);
		this.y = Math.min(this.y, v.y);
		this.z = Math.min(this.z, v.z);
		return this;
	}

	max(v) {
		this.x = Math.max(this.x, v.x);
		this.y = Math.max(this.y, v.y);
		this.z = Math.max(this.z, v.z);
		return this;
	}

	clamp(min, max) {
		// assumes min < max, componentwise
		this.x = Math.max(min.x, Math.min(max.x, this.x));
		this.y = Math.max(min.y, Math.min(max.y, this.y));
		this.z = Math.max(min.z, Math.min(max.z, this.z));
		return this;
	}

	clampScalar(minVal, maxVal) {
		this.x = Math.max(minVal, Math.min(maxVal, this.x));
		this.y = Math.max(minVal, Math.min(maxVal, this.y));
		this.z = Math.max(minVal, Math.min(maxVal, this.z));
		return this;
	}

	clampLength(min, max) {
		const length = this.length();
		return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
	}

	floor() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.z = Math.floor(this.z);
		return this;
	}

	ceil() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		this.z = Math.ceil(this.z);
		return this;
	}

	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		this.z = Math.round(this.z);
		return this;
	}

	roundToZero() {
		this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
		this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
		this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
		return this;
	}

	negate() {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		return this;
	}

	dot(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	} // TODO lengthSquared?


	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}

	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}

	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}

	normalize() {
		return this.divideScalar(this.length() || 1);
	}

	setLength(length) {
		return this.normalize().multiplyScalar(length);
	}

	lerp(v, alpha) {
		this.x += (v.x - this.x) * alpha;
		this.y += (v.y - this.y) * alpha;
		this.z += (v.z - this.z) * alpha;
		return this;
	}

	lerpVectors(v1, v2, alpha) {
		this.x = v1.x + (v2.x - v1.x) * alpha;
		this.y = v1.y + (v2.y - v1.y) * alpha;
		this.z = v1.z + (v2.z - v1.z) * alpha;
		return this;
	}

	cross(v) {
		return this.crossVectors(this, v);
	}

	crossVectors(a, b) {
		const ax = a.x,
					ay = a.y,
					az = a.z;
		const bx = b.x,
					by = b.y,
					bz = b.z;
		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;
		return this;
	}

	projectOnVector(v) {
		const denominator = v.lengthSq();
		if (denominator === 0) return this.set(0, 0, 0);
		const scalar = v.dot(this) / denominator;
		return this.copy(v).multiplyScalar(scalar);
	}

	projectOnPlane(planeNormal) {
		_vector$3.copy(this).projectOnVector(planeNormal);

		return this.sub(_vector$3);
	}

	reflect(normal) {
		// reflect incident vector off plane orthogonal to normal
		// normal is assumed to have unit length
		return this.sub(_vector$3.copy(normal).multiplyScalar(2 * this.dot(normal)));
	}

	angleTo(v) {
		const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
		if (denominator === 0) return Math.PI / 2;
		const theta = this.dot(v) / denominator; // clamp, to handle numerical problems

		return Math.acos(clamp(theta, -1, 1));
	}

	distanceTo(v) {
		return Math.sqrt(this.distanceToSquared(v));
	}

	distanceToSquared(v) {
		const dx = this.x - v.x,
					dy = this.y - v.y,
					dz = this.z - v.z;
		return dx * dx + dy * dy + dz * dz;
	}

	manhattanDistanceTo(v) {
		return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
	}

	setFromSpherical(s) {
		return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
	}

	setFromSphericalCoords(radius, phi, theta) {
		const sinPhiRadius = Math.sin(phi) * radius;
		this.x = sinPhiRadius * Math.sin(theta);
		this.y = Math.cos(phi) * radius;
		this.z = sinPhiRadius * Math.cos(theta);
		return this;
	}

	setFromCylindrical(c) {
		return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
	}

	setFromCylindricalCoords(radius, theta, y) {
		this.x = radius * Math.sin(theta);
		this.y = y;
		this.z = radius * Math.cos(theta);
		return this;
	}

	setFromMatrixPosition(m) {
		const e = m.elements;
		this.x = e[12];
		this.y = e[13];
		this.z = e[14];
		return this;
	}

	setFromMatrixScale(m) {
		const sx = this.setFromMatrixColumn(m, 0).length();
		const sy = this.setFromMatrixColumn(m, 1).length();
		const sz = this.setFromMatrixColumn(m, 2).length();
		this.x = sx;
		this.y = sy;
		this.z = sz;
		return this;
	}

	setFromMatrixColumn(m, index) {
		return this.fromArray(m.elements, index * 4);
	}

	setFromMatrix3Column(m, index) {
		return this.fromArray(m.elements, index * 3);
	}

	setFromEuler(e) {
		this.x = e._x;
		this.y = e._y;
		this.z = e._z;
		return this;
	}

	equals(v) {
		return v.x === this.x && v.y === this.y && v.z === this.z;
	}

	fromArray(array, offset = 0) {
		this.x = array[offset];
		this.y = array[offset + 1];
		this.z = array[offset + 2];
		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this.x;
		array[offset + 1] = this.y;
		array[offset + 2] = this.z;
		return array;
	} // fromBufferAttribute( attribute, index ) {
	// 	this.x = attribute.getX( index );
	// 	this.y = attribute.getY( index );
	// 	this.z = attribute.getZ( index );
	// 	return this;
	// }


	random() {
		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();
		return this;
	}

	randomDirection() {
		// Derived from https://mathworld.wolfram.com/SpherePointPicking.html
		const u = (Math.random() - 0.5) * 2;
		const t = Math.random() * Math.PI * 2;
		const f = Math.sqrt(1 - u ** 2);
		this.x = f * Math.cos(t);
		this.y = f * Math.sin(t);
		this.z = u;
		return this;
	}

	*[Symbol.iterator]() {
		yield this.x;
		yield this.y;
		yield this.z;
	}

}

const _vector$3 = /*@__PURE__*/new Vector3();

const _quaternion$1 = /*@__PURE__*/new Quaternion();

const _vector$2 = /*@__PURE__*/new Vector2();

class Box2 {
	constructor(min = new Vector2(+Infinity, +Infinity), max = new Vector2(-Infinity, -Infinity)) {
		this.isBox2 = true;
		this.min = min;
		this.max = max;
	}

	set(min, max) {
		this.min.copy(min);
		this.max.copy(max);
		return this;
	}

	setFromPoints(points) {
		this.makeEmpty();

		for (let i = 0, il = points.length; i < il; i++) {
			this.expandByPoint(points[i]);
		}

		return this;
	}

	setFromCenterAndSize(center, size) {
		const halfSize = _vector$2.copy(size).multiplyScalar(0.5);

		this.min.copy(center).sub(halfSize);
		this.max.copy(center).add(halfSize);
		return this;
	}

	clone() {
		return new this.constructor().copy(this);
	}

	copy(box) {
		this.min.copy(box.min);
		this.max.copy(box.max);
		return this;
	}

	makeEmpty() {
		this.min.x = this.min.y = +Infinity;
		this.max.x = this.max.y = -Infinity;
		return this;
	}

	isEmpty() {
		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
		return this.max.x < this.min.x || this.max.y < this.min.y;
	}

	getCenter(target = new Vector2()) {
		return this.isEmpty() ? target.set(0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
	}

	getSize(target = new Vector2()) {
		return this.isEmpty() ? target.set(0, 0) : target.subVectors(this.max, this.min);
	}

	expandByPoint(point) {
		this.min.min(point);
		this.max.max(point);
		return this;
	}

	expandByVector(vector) {
		this.min.sub(vector);
		this.max.add(vector);
		return this;
	}

	expandByScalar(scalar) {
		this.min.addScalar(-scalar);
		this.max.addScalar(scalar);
		return this;
	}

	containsPoint(point) {
		return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y ? false : true;
	}

	containsBox(box) {
		return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y;
	}

	getParameter(point, target) {
		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.
		return target.set((point.x - this.min.x) / (this.max.x - this.min.x), (point.y - this.min.y) / (this.max.y - this.min.y));
	}

	intersectsBox(box) {
		// using 4 splitting planes to rule out intersections
		return box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y ? false : true;
	}

	clampPoint(point, target) {
		return target.copy(point).clamp(this.min, this.max);
	}

	distanceToPoint(point) {
		const clampedPoint = _vector$2.copy(point).clamp(this.min, this.max);

		return clampedPoint.sub(point).length();
	}

	intersect(box) {
		this.min.max(box.min);
		this.max.min(box.max);
		return this;
	}

	union(box) {
		this.min.min(box.min);
		this.max.max(box.max);
		return this;
	}

	translate(offset) {
		this.min.add(offset);
		this.max.add(offset);
		return this;
	}

	equals(box) {
		return box.min.equals(this.min) && box.max.equals(this.max);
	}

}

class Box3 {
	constructor(min = new Vector3(+Infinity, +Infinity, +Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = true;
		this.min = min;
		this.max = max;
	}

	set(min, max) {
		this.min.copy(min);
		this.max.copy(max);
		return this;
	}

	setFromArray(array) {
		let minX = +Infinity;
		let minY = +Infinity;
		let minZ = +Infinity;
		let maxX = -Infinity;
		let maxY = -Infinity;
		let maxZ = -Infinity;

		for (let i = 0, l = array.length; i < l; i += 3) {
			const x = array[i];
			const y = array[i + 1];
			const z = array[i + 2];
			if (x < minX) minX = x;
			if (y < minY) minY = y;
			if (z < minZ) minZ = z;
			if (x > maxX) maxX = x;
			if (y > maxY) maxY = y;
			if (z > maxZ) maxZ = z;
		}

		this.min.set(minX, minY, minZ);
		this.max.set(maxX, maxY, maxZ);
		return this;
	} // setFromBufferAttribute( attribute ) {
	// 	let minX = + Infinity;
	// 	let minY = + Infinity;
	// 	let minZ = + Infinity;
	// 	let maxX = - Infinity;
	// 	let maxY = - Infinity;
	// 	let maxZ = - Infinity;
	// 	for ( let i = 0, l = attribute.count; i < l; i ++ ) {
	// 		const x = attribute.getX( i );
	// 		const y = attribute.getY( i );
	// 		const z = attribute.getZ( i );
	// 		if ( x < minX ) minX = x;
	// 		if ( y < minY ) minY = y;
	// 		if ( z < minZ ) minZ = z;
	// 		if ( x > maxX ) maxX = x;
	// 		if ( y > maxY ) maxY = y;
	// 		if ( z > maxZ ) maxZ = z;
	// 	}
	// 	this.min.set( minX, minY, minZ );
	// 	this.max.set( maxX, maxY, maxZ );
	// 	return this;
	// }


	setFromPoints(points) {
		this.makeEmpty();

		for (let i = 0, il = points.length; i < il; i++) {
			this.expandByPoint(points[i]);
		}

		return this;
	}

	setFromCenterAndSize(center, size) {
		const halfSize = _vector$1.copy(size).multiplyScalar(0.5);

		this.min.copy(center).sub(halfSize);
		this.max.copy(center).add(halfSize);
		return this;
	}

	setFromObject(object, precise = false) {
		this.makeEmpty();
		return this.expandByObject(object, precise);
	}

	clone() {
		return new this.constructor().copy(this);
	}

	copy(box) {
		this.min.copy(box.min);
		this.max.copy(box.max);
		return this;
	}

	makeEmpty() {
		this.min.x = this.min.y = this.min.z = +Infinity;
		this.max.x = this.max.y = this.max.z = -Infinity;
		return this;
	}

	isEmpty() {
		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}

	getCenter(target = new Vector3()) {
		return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
	}

	getSize(target = new Vector3()) {
		return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
	}

	expandByPoint(point) {
		this.min.min(point);
		this.max.max(point);
		return this;
	}

	expandByVector(vector) {
		this.min.sub(vector);
		this.max.add(vector);
		return this;
	}

	expandByScalar(scalar) {
		this.min.addScalar(-scalar);
		this.max.addScalar(scalar);
		return this;
	} // expandByObject( object, precise = false ) {
	// 	// Computes the world-axis-aligned bounding box of an object (including its children),
	// 	// accounting for both the object's, and children's, world transforms
	// 	object.updateWorldMatrix( false, false );
	// 	const geometry = object.geometry;
	// 	if ( geometry !== undefined ) {
	// 		if ( precise && geometry.attributes != undefined && geometry.attributes.position !== undefined ) {
	// 			const position = geometry.attributes.position;
	// 			for ( let i = 0, l = position.count; i < l; i ++ ) {
	// 				_vector.fromBufferAttribute( position, i ).applyMatrix4( object.matrixWorld );
	// 				this.expandByPoint( _vector );
	// 			}
	// 		} else {
	// 			if ( geometry.boundingBox === null ) {
	// 				geometry.computeBoundingBox();
	// 			}
	// 			_box.copy( geometry.boundingBox );
	// 			_box.applyMatrix4( object.matrixWorld );
	// 			this.union( _box );
	// 		}
	// 	}
	// 	const children = object.children;
	// 	for ( let i = 0, l = children.length; i < l; i ++ ) {
	// 		this.expandByObject( children[ i ], precise );
	// 	}
	// 	return this;
	// }


	containsPoint(point) {
		return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y || point.z < this.min.z || point.z > this.max.z ? false : true;
	}

	containsBox(box) {
		return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
	}

	getParameter(point, target) {
		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.
		return target.set((point.x - this.min.x) / (this.max.x - this.min.x), (point.y - this.min.y) / (this.max.y - this.min.y), (point.z - this.min.z) / (this.max.z - this.min.z));
	}

	intersectsBox(box) {
		// using 6 splitting planes to rule out intersections.
		return box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y || box.max.z < this.min.z || box.min.z > this.max.z ? false : true;
	}

	intersectsSphere(sphere) {
		// Find the point on the AABB closest to the sphere center.
		this.clampPoint(sphere.center, _vector$1); // If that point is inside the sphere, the AABB and sphere intersect.

		return _vector$1.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
	}

	intersectsPlane(plane) {
		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.
		let min, max;

		if (plane.normal.x > 0) {
			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;
		} else {
			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;
		}

		if (plane.normal.y > 0) {
			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;
		} else {
			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;
		}

		if (plane.normal.z > 0) {
			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;
		} else {
			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;
		}

		return min <= -plane.constant && max >= -plane.constant;
	}

	intersectsTriangle(triangle) {
		if (this.isEmpty()) {
			return false;
		} // compute box center and extents


		this.getCenter(_center);

		_extents.subVectors(this.max, _center); // translate triangle to aabb origin


		_v0$1.subVectors(triangle.a, _center);

		_v1$3.subVectors(triangle.b, _center);

		_v2$1.subVectors(triangle.c, _center); // compute edge vectors for triangle


		_f0.subVectors(_v1$3, _v0$1);

		_f1.subVectors(_v2$1, _v1$3);

		_f2.subVectors(_v0$1, _v2$1); // test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)


		let axes = [0, -_f0.z, _f0.y, 0, -_f1.z, _f1.y, 0, -_f2.z, _f2.y, _f0.z, 0, -_f0.x, _f1.z, 0, -_f1.x, _f2.z, 0, -_f2.x, -_f0.y, _f0.x, 0, -_f1.y, _f1.x, 0, -_f2.y, _f2.x, 0];

		if (!satForAxes(axes, _v0$1, _v1$3, _v2$1, _extents)) {
			return false;
		} // test 3 face normals from the aabb


		axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];

		if (!satForAxes(axes, _v0$1, _v1$3, _v2$1, _extents)) {
			return false;
		} // finally testing the face normal of the triangle
		// use already existing triangle edge vectors here


		_triangleNormal.crossVectors(_f0, _f1);

		axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
		return satForAxes(axes, _v0$1, _v1$3, _v2$1, _extents);
	}

	clampPoint(point, target) {
		return target.copy(point).clamp(this.min, this.max);
	}

	distanceToPoint(point) {
		const clampedPoint = _vector$1.copy(point).clamp(this.min, this.max);

		return clampedPoint.sub(point).length();
	}

	getBoundingSphere(target) {
		this.getCenter(target.center);
		target.radius = this.getSize(_vector$1).length() * 0.5;
		return target;
	}

	intersect(box) {
		this.min.max(box.min);
		this.max.min(box.max); // ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.

		if (this.isEmpty()) this.makeEmpty();
		return this;
	}

	union(box) {
		this.min.min(box.min);
		this.max.max(box.max);
		return this;
	}

	applyMatrix4(matrix) {
		// transform of empty box is an empty box.
		if (this.isEmpty()) return this; // NOTE: I am using a binary pattern to specify all 2^3 combinations below

		_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix); // 000


		_points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix); // 001


		_points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix); // 010


		_points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix); // 011


		_points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix); // 100


		_points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix); // 101


		_points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix); // 110


		_points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix); // 111


		this.setFromPoints(_points);
		return this;
	}

	translate(offset) {
		this.min.add(offset);
		this.max.add(offset);
		return this;
	}

	equals(box) {
		return box.min.equals(this.min) && box.max.equals(this.max);
	}

}

const _points = [/*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3()];

const _vector$1 = /*@__PURE__*/new Vector3();

const _box$1 = /*@__PURE__*/new Box3(); // triangle centered vertices


const _v0$1 = /*@__PURE__*/new Vector3();

const _v1$3 = /*@__PURE__*/new Vector3();

const _v2$1 = /*@__PURE__*/new Vector3(); // triangle edge vectors


const _f0 = /*@__PURE__*/new Vector3();

const _f1 = /*@__PURE__*/new Vector3();

const _f2 = /*@__PURE__*/new Vector3();

const _center = /*@__PURE__*/new Vector3();

const _extents = /*@__PURE__*/new Vector3();

const _triangleNormal = /*@__PURE__*/new Vector3();

const _testAxis = /*@__PURE__*/new Vector3();

function satForAxes(axes, v0, v1, v2, extents) {
	for (let i = 0, j = axes.length - 3; i <= j; i += 3) {
		_testAxis.fromArray(axes, i); // project the aabb onto the separating axis


		const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z); // project all 3 vertices of the triangle onto the separating axis

		const p0 = v0.dot(_testAxis);
		const p1 = v1.dot(_testAxis);
		const p2 = v2.dot(_testAxis); // actual test, basically see if either of the most extreme of the triangle points intersects r

		if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
			// points of the projected triangle are outside the projected half-length of the aabb
			// the axis is separating and we can exit
			return false;
		}
	}

	return true;
}

function SRGBToLinear(c) {
	return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(c) {
	return c < 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
} // JavaScript RGB-to-RGB transforms, defined as
// FN[InputColorSpace][OutputColorSpace] callback functions.

const FN = {
	[SRGBColorSpace]: {
		[LinearSRGBColorSpace]: SRGBToLinear
	},
	[LinearSRGBColorSpace]: {
		[SRGBColorSpace]: LinearToSRGB
	}
};
const ColorManagement = {
	legacyMode: true,

	get workingColorSpace() {
		return LinearSRGBColorSpace;
	},

	set workingColorSpace(colorSpace) {
		console.warn('THREE.ColorManagement: .workingColorSpace is readonly.');
	},

	convert: function (color, sourceColorSpace, targetColorSpace) {
		if (this.legacyMode || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
			return color;
		}

		if (FN[sourceColorSpace] && FN[sourceColorSpace][targetColorSpace] !== undefined) {
			const fn = FN[sourceColorSpace][targetColorSpace];
			color.r = fn(color.r);
			color.g = fn(color.g);
			color.b = fn(color.b);
			return color;
		}

		throw new Error('Unsupported color space conversion.');
	},
	fromWorkingColorSpace: function (color, targetColorSpace) {
		return this.convert(color, this.workingColorSpace, targetColorSpace);
	},
	toWorkingColorSpace: function (color, sourceColorSpace) {
		return this.convert(color, sourceColorSpace, this.workingColorSpace);
	}
};

const _colorKeywords = {
	'aliceblue': 0xF0F8FF,
	'antiquewhite': 0xFAEBD7,
	'aqua': 0x00FFFF,
	'aquamarine': 0x7FFFD4,
	'azure': 0xF0FFFF,
	'beige': 0xF5F5DC,
	'bisque': 0xFFE4C4,
	'black': 0x000000,
	'blanchedalmond': 0xFFEBCD,
	'blue': 0x0000FF,
	'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A,
	'burlywood': 0xDEB887,
	'cadetblue': 0x5F9EA0,
	'chartreuse': 0x7FFF00,
	'chocolate': 0xD2691E,
	'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED,
	'cornsilk': 0xFFF8DC,
	'crimson': 0xDC143C,
	'cyan': 0x00FFFF,
	'darkblue': 0x00008B,
	'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B,
	'darkgray': 0xA9A9A9,
	'darkgreen': 0x006400,
	'darkgrey': 0xA9A9A9,
	'darkkhaki': 0xBDB76B,
	'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F,
	'darkorange': 0xFF8C00,
	'darkorchid': 0x9932CC,
	'darkred': 0x8B0000,
	'darksalmon': 0xE9967A,
	'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B,
	'darkslategray': 0x2F4F4F,
	'darkslategrey': 0x2F4F4F,
	'darkturquoise': 0x00CED1,
	'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493,
	'deepskyblue': 0x00BFFF,
	'dimgray': 0x696969,
	'dimgrey': 0x696969,
	'dodgerblue': 0x1E90FF,
	'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0,
	'forestgreen': 0x228B22,
	'fuchsia': 0xFF00FF,
	'gainsboro': 0xDCDCDC,
	'ghostwhite': 0xF8F8FF,
	'gold': 0xFFD700,
	'goldenrod': 0xDAA520,
	'gray': 0x808080,
	'green': 0x008000,
	'greenyellow': 0xADFF2F,
	'grey': 0x808080,
	'honeydew': 0xF0FFF0,
	'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C,
	'indigo': 0x4B0082,
	'ivory': 0xFFFFF0,
	'khaki': 0xF0E68C,
	'lavender': 0xE6E6FA,
	'lavenderblush': 0xFFF0F5,
	'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD,
	'lightblue': 0xADD8E6,
	'lightcoral': 0xF08080,
	'lightcyan': 0xE0FFFF,
	'lightgoldenrodyellow': 0xFAFAD2,
	'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90,
	'lightgrey': 0xD3D3D3,
	'lightpink': 0xFFB6C1,
	'lightsalmon': 0xFFA07A,
	'lightseagreen': 0x20B2AA,
	'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899,
	'lightslategrey': 0x778899,
	'lightsteelblue': 0xB0C4DE,
	'lightyellow': 0xFFFFE0,
	'lime': 0x00FF00,
	'limegreen': 0x32CD32,
	'linen': 0xFAF0E6,
	'magenta': 0xFF00FF,
	'maroon': 0x800000,
	'mediumaquamarine': 0x66CDAA,
	'mediumblue': 0x0000CD,
	'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB,
	'mediumseagreen': 0x3CB371,
	'mediumslateblue': 0x7B68EE,
	'mediumspringgreen': 0x00FA9A,
	'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585,
	'midnightblue': 0x191970,
	'mintcream': 0xF5FFFA,
	'mistyrose': 0xFFE4E1,
	'moccasin': 0xFFE4B5,
	'navajowhite': 0xFFDEAD,
	'navy': 0x000080,
	'oldlace': 0xFDF5E6,
	'olive': 0x808000,
	'olivedrab': 0x6B8E23,
	'orange': 0xFFA500,
	'orangered': 0xFF4500,
	'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA,
	'palegreen': 0x98FB98,
	'paleturquoise': 0xAFEEEE,
	'palevioletred': 0xDB7093,
	'papayawhip': 0xFFEFD5,
	'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F,
	'pink': 0xFFC0CB,
	'plum': 0xDDA0DD,
	'powderblue': 0xB0E0E6,
	'purple': 0x800080,
	'rebeccapurple': 0x663399,
	'red': 0xFF0000,
	'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1,
	'saddlebrown': 0x8B4513,
	'salmon': 0xFA8072,
	'sandybrown': 0xF4A460,
	'seagreen': 0x2E8B57,
	'seashell': 0xFFF5EE,
	'sienna': 0xA0522D,
	'silver': 0xC0C0C0,
	'skyblue': 0x87CEEB,
	'slateblue': 0x6A5ACD,
	'slategray': 0x708090,
	'slategrey': 0x708090,
	'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F,
	'steelblue': 0x4682B4,
	'tan': 0xD2B48C,
	'teal': 0x008080,
	'thistle': 0xD8BFD8,
	'tomato': 0xFF6347,
	'turquoise': 0x40E0D0,
	'violet': 0xEE82EE,
	'wheat': 0xF5DEB3,
	'white': 0xFFFFFF,
	'whitesmoke': 0xF5F5F5,
	'yellow': 0xFFFF00,
	'yellowgreen': 0x9ACD32
};
const _rgb = {
	r: 0,
	g: 0,
	b: 0
};
const _hslA = {
	h: 0,
	s: 0,
	l: 0
};
const _hslB = {
	h: 0,
	s: 0,
	l: 0
};

function hue2rgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
	return p;
}

function toComponents(source, target) {
	target.r = source.r;
	target.g = source.g;
	target.b = source.b;
	return target;
}

class Color {
	constructor(r, g, b) {
		this.isColor = true;
		this.r = 1;
		this.g = 1;
		this.b = 1;

		if (g === undefined && b === undefined) {
			// r is THREE.Color, hex or string
			return this.set(r);
		}

		return this.setRGB(r, g, b);
	}

	set(value) {
		if (value && value.isColor) {
			this.copy(value);
		} else if (typeof value === 'number') {
			this.setHex(value);
		} else if (typeof value === 'string') {
			this.setStyle(value);
		}

		return this;
	}

	setScalar(scalar) {
		this.r = scalar;
		this.g = scalar;
		this.b = scalar;
		return this;
	}

	setHex(hex, colorSpace = SRGBColorSpace) {
		hex = Math.floor(hex);
		this.r = (hex >> 16 & 255) / 255;
		this.g = (hex >> 8 & 255) / 255;
		this.b = (hex & 255) / 255;
		ColorManagement.toWorkingColorSpace(this, colorSpace);
		return this;
	}

	setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
		this.r = r;
		this.g = g;
		this.b = b;
		ColorManagement.toWorkingColorSpace(this, colorSpace);
		return this;
	}

	setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
		// h,s,l ranges are in 0.0 - 1.0
		h = euclideanModulo(h, 1);
		s = clamp(s, 0, 1);
		l = clamp(l, 0, 1);

		if (s === 0) {
			this.r = this.g = this.b = l;
		} else {
			const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
			const q = 2 * l - p;
			this.r = hue2rgb(q, p, h + 1 / 3);
			this.g = hue2rgb(q, p, h);
			this.b = hue2rgb(q, p, h - 1 / 3);
		}

		ColorManagement.toWorkingColorSpace(this, colorSpace);
		return this;
	}

	setStyle(style, colorSpace = SRGBColorSpace) {
		function handleAlpha(string) {
			if (string === undefined) return;

			if (parseFloat(string) < 1) {
				console.warn('THREE.Color: Alpha component of ' + style + ' will be ignored.');
			}
		}

		let m;

		if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(style)) {
			// rgb / hsl
			let color;
			const name = m[1];
			const components = m[2];

			switch (name) {
				case 'rgb':
				case 'rgba':
					if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
						// rgb(255,0,0) rgba(255,0,0,0.5)
						this.r = Math.min(255, parseInt(color[1], 10)) / 255;
						this.g = Math.min(255, parseInt(color[2], 10)) / 255;
						this.b = Math.min(255, parseInt(color[3], 10)) / 255;
						ColorManagement.toWorkingColorSpace(this, colorSpace);
						handleAlpha(color[4]);
						return this;
					}

					if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
						// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
						this.r = Math.min(100, parseInt(color[1], 10)) / 100;
						this.g = Math.min(100, parseInt(color[2], 10)) / 100;
						this.b = Math.min(100, parseInt(color[3], 10)) / 100;
						ColorManagement.toWorkingColorSpace(this, colorSpace);
						handleAlpha(color[4]);
						return this;
					}

					break;

				case 'hsl':
				case 'hsla':
					if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
						// hsl(120,50%,50%) hsla(120,50%,50%,0.5)
						const h = parseFloat(color[1]) / 360;
						const s = parseFloat(color[2]) / 100;
						const l = parseFloat(color[3]) / 100;
						handleAlpha(color[4]);
						return this.setHSL(h, s, l, colorSpace);
					}

					break;
			}
		} else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
			// hex color
			const hex = m[1];
			const size = hex.length;

			if (size === 3) {
				// #ff0
				this.r = parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255;
				this.g = parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255;
				this.b = parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255;
				ColorManagement.toWorkingColorSpace(this, colorSpace);
				return this;
			} else if (size === 6) {
				// #ff0000
				this.r = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
				this.g = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
				this.b = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;
				ColorManagement.toWorkingColorSpace(this, colorSpace);
				return this;
			}
		}

		if (style && style.length > 0) {
			return this.setColorName(style, colorSpace);
		}

		return this;
	}

	setColorName(style, colorSpace = SRGBColorSpace) {
		// color keywords
		const hex = _colorKeywords[style.toLowerCase()];

		if (hex !== undefined) {
			// red
			this.setHex(hex, colorSpace);
		} else {
			// unknown color
			console.warn('THREE.Color: Unknown color ' + style);
		}

		return this;
	}

	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}

	copy(color) {
		this.r = color.r;
		this.g = color.g;
		this.b = color.b;
		return this;
	}

	copySRGBToLinear(color) {
		this.r = SRGBToLinear(color.r);
		this.g = SRGBToLinear(color.g);
		this.b = SRGBToLinear(color.b);
		return this;
	}

	copyLinearToSRGB(color) {
		this.r = LinearToSRGB(color.r);
		this.g = LinearToSRGB(color.g);
		this.b = LinearToSRGB(color.b);
		return this;
	}

	convertSRGBToLinear() {
		this.copySRGBToLinear(this);
		return this;
	}

	convertLinearToSRGB() {
		this.copyLinearToSRGB(this);
		return this;
	}

	getHex(colorSpace = SRGBColorSpace) {
		ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
		return clamp(_rgb.r * 255, 0, 255) << 16 ^ clamp(_rgb.g * 255, 0, 255) << 8 ^ clamp(_rgb.b * 255, 0, 255) << 0;
	}

	getHexString(colorSpace = SRGBColorSpace) {
		return ('000000' + this.getHex(colorSpace).toString(16)).slice(-6);
	}

	getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
		// h,s,l ranges are in 0.0 - 1.0
		ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
		const r = _rgb.r,
					g = _rgb.g,
					b = _rgb.b;
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		let hue, saturation;
		const lightness = (min + max) / 2.0;

		if (min === max) {
			hue = 0;
			saturation = 0;
		} else {
			const delta = max - min;
			saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);

			switch (max) {
				case r:
					hue = (g - b) / delta + (g < b ? 6 : 0);
					break;

				case g:
					hue = (b - r) / delta + 2;
					break;

				case b:
					hue = (r - g) / delta + 4;
					break;
			}

			hue /= 6;
		}

		target.h = hue;
		target.s = saturation;
		target.l = lightness;
		return target;
	}

	getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
		ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
		target.r = _rgb.r;
		target.g = _rgb.g;
		target.b = _rgb.b;
		return target;
	}

	getStyle(colorSpace = SRGBColorSpace) {
		ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);

		if (colorSpace !== SRGBColorSpace) {
			// Requires CSS Color Module Level 4 (https://www.w3.org/TR/css-color-4/).
			return `color(${colorSpace} ${_rgb.r} ${_rgb.g} ${_rgb.b})`;
		}

		return `rgb(${_rgb.r * 255 | 0},${_rgb.g * 255 | 0},${_rgb.b * 255 | 0})`;
	}

	offsetHSL(h, s, l) {
		this.getHSL(_hslA);
		_hslA.h += h;
		_hslA.s += s;
		_hslA.l += l;
		this.setHSL(_hslA.h, _hslA.s, _hslA.l);
		return this;
	}

	add(color) {
		this.r += color.r;
		this.g += color.g;
		this.b += color.b;
		return this;
	}

	addColors(color1, color2) {
		this.r = color1.r + color2.r;
		this.g = color1.g + color2.g;
		this.b = color1.b + color2.b;
		return this;
	}

	addScalar(s) {
		this.r += s;
		this.g += s;
		this.b += s;
		return this;
	}

	sub(color) {
		this.r = Math.max(0, this.r - color.r);
		this.g = Math.max(0, this.g - color.g);
		this.b = Math.max(0, this.b - color.b);
		return this;
	}

	multiply(color) {
		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;
		return this;
	}

	multiplyScalar(s) {
		this.r *= s;
		this.g *= s;
		this.b *= s;
		return this;
	}

	lerp(color, alpha) {
		this.r += (color.r - this.r) * alpha;
		this.g += (color.g - this.g) * alpha;
		this.b += (color.b - this.b) * alpha;
		return this;
	}

	lerpColors(color1, color2, alpha) {
		this.r = color1.r + (color2.r - color1.r) * alpha;
		this.g = color1.g + (color2.g - color1.g) * alpha;
		this.b = color1.b + (color2.b - color1.b) * alpha;
		return this;
	}

	lerpHSL(color, alpha) {
		this.getHSL(_hslA);
		color.getHSL(_hslB);
		const h = lerp(_hslA.h, _hslB.h, alpha);
		const s = lerp(_hslA.s, _hslB.s, alpha);
		const l = lerp(_hslA.l, _hslB.l, alpha);
		this.setHSL(h, s, l);
		return this;
	}

	equals(c) {
		return c.r === this.r && c.g === this.g && c.b === this.b;
	}

	fromArray(array, offset = 0) {
		this.r = array[offset];
		this.g = array[offset + 1];
		this.b = array[offset + 2];
		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this.r;
		array[offset + 1] = this.g;
		array[offset + 2] = this.b;
		return array;
	} // fromBufferAttribute( attribute, index ) {
	// 	this.r = attribute.getX( index );
	// 	this.g = attribute.getY( index );
	// 	this.b = attribute.getZ( index );
	// 	if ( attribute.normalized === true ) {
	// 		// assuming Uint8Array
	// 		this.r /= 255;
	// 		this.g /= 255;
	// 		this.b /= 255;
	// 	}
	// 	return this;
	// }


	toJSON() {
		return this.getHex();
	}

	*[Symbol.iterator]() {
		yield this.r;
		yield this.g;
		yield this.b;
	}

}

Color.NAMES = _colorKeywords;

/**
 * Ref: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
 */
class Cylindrical {
	constructor(radius = 1, theta = 0, y = 0) {
		this.radius = radius; // distance from the origin to a point in the x-z plane

		this.theta = theta; // counterclockwise angle in the x-z plane measured in radians from the positive z-axis

		this.y = y; // height above the x-z plane

		return this;
	}

	set(radius, theta, y) {
		this.radius = radius;
		this.theta = theta;
		this.y = y;
		return this;
	}

	copy(other) {
		this.radius = other.radius;
		this.theta = other.theta;
		this.y = other.y;
		return this;
	}

	setFromVector3(v) {
		return this.setFromCartesianCoords(v.x, v.y, v.z);
	}

	setFromCartesianCoords(x, y, z) {
		this.radius = Math.sqrt(x * x + z * z);
		this.theta = Math.atan2(x, z);
		this.y = y;
		return this;
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

class Matrix4 {
	constructor() {
		Matrix4.prototype.isMatrix4 = true;
		this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	}

	set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
		const te = this.elements;
		te[0] = n11;
		te[4] = n12;
		te[8] = n13;
		te[12] = n14;
		te[1] = n21;
		te[5] = n22;
		te[9] = n23;
		te[13] = n24;
		te[2] = n31;
		te[6] = n32;
		te[10] = n33;
		te[14] = n34;
		te[3] = n41;
		te[7] = n42;
		te[11] = n43;
		te[15] = n44;
		return this;
	}

	identity() {
		this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this;
	}

	clone() {
		return new Matrix4().fromArray(this.elements);
	}

	copy(m) {
		const te = this.elements;
		const me = m.elements;
		te[0] = me[0];
		te[1] = me[1];
		te[2] = me[2];
		te[3] = me[3];
		te[4] = me[4];
		te[5] = me[5];
		te[6] = me[6];
		te[7] = me[7];
		te[8] = me[8];
		te[9] = me[9];
		te[10] = me[10];
		te[11] = me[11];
		te[12] = me[12];
		te[13] = me[13];
		te[14] = me[14];
		te[15] = me[15];
		return this;
	}

	copyPosition(m) {
		const te = this.elements,
					me = m.elements;
		te[12] = me[12];
		te[13] = me[13];
		te[14] = me[14];
		return this;
	}

	setFromMatrix3(m) {
		const me = m.elements;
		this.set(me[0], me[3], me[6], 0, me[1], me[4], me[7], 0, me[2], me[5], me[8], 0, 0, 0, 0, 1);
		return this;
	}

	extractBasis(xAxis, yAxis, zAxis) {
		xAxis.setFromMatrixColumn(this, 0);
		yAxis.setFromMatrixColumn(this, 1);
		zAxis.setFromMatrixColumn(this, 2);
		return this;
	}

	makeBasis(xAxis, yAxis, zAxis) {
		this.set(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, 0, 0, 0, 1);
		return this;
	}

	extractRotation(m) {
		// this method does not support reflection matrices
		const te = this.elements;
		const me = m.elements;

		const scaleX = 1 / _v1$2.setFromMatrixColumn(m, 0).length();

		const scaleY = 1 / _v1$2.setFromMatrixColumn(m, 1).length();

		const scaleZ = 1 / _v1$2.setFromMatrixColumn(m, 2).length();

		te[0] = me[0] * scaleX;
		te[1] = me[1] * scaleX;
		te[2] = me[2] * scaleX;
		te[3] = 0;
		te[4] = me[4] * scaleY;
		te[5] = me[5] * scaleY;
		te[6] = me[6] * scaleY;
		te[7] = 0;
		te[8] = me[8] * scaleZ;
		te[9] = me[9] * scaleZ;
		te[10] = me[10] * scaleZ;
		te[11] = 0;
		te[12] = 0;
		te[13] = 0;
		te[14] = 0;
		te[15] = 1;
		return this;
	}

	makeRotationFromEuler(euler) {
		const te = this.elements;
		const x = euler.x,
					y = euler.y,
					z = euler.z;
		const a = Math.cos(x),
					b = Math.sin(x);
		const c = Math.cos(y),
					d = Math.sin(y);
		const e = Math.cos(z),
					f = Math.sin(z);

		if (euler.order === 'XYZ') {
			const ae = a * e,
						af = a * f,
						be = b * e,
						bf = b * f;
			te[0] = c * e;
			te[4] = -c * f;
			te[8] = d;
			te[1] = af + be * d;
			te[5] = ae - bf * d;
			te[9] = -b * c;
			te[2] = bf - ae * d;
			te[6] = be + af * d;
			te[10] = a * c;
		} else if (euler.order === 'YXZ') {
			const ce = c * e,
						cf = c * f,
						de = d * e,
						df = d * f;
			te[0] = ce + df * b;
			te[4] = de * b - cf;
			te[8] = a * d;
			te[1] = a * f;
			te[5] = a * e;
			te[9] = -b;
			te[2] = cf * b - de;
			te[6] = df + ce * b;
			te[10] = a * c;
		} else if (euler.order === 'ZXY') {
			const ce = c * e,
						cf = c * f,
						de = d * e,
						df = d * f;
			te[0] = ce - df * b;
			te[4] = -a * f;
			te[8] = de + cf * b;
			te[1] = cf + de * b;
			te[5] = a * e;
			te[9] = df - ce * b;
			te[2] = -a * d;
			te[6] = b;
			te[10] = a * c;
		} else if (euler.order === 'ZYX') {
			const ae = a * e,
						af = a * f,
						be = b * e,
						bf = b * f;
			te[0] = c * e;
			te[4] = be * d - af;
			te[8] = ae * d + bf;
			te[1] = c * f;
			te[5] = bf * d + ae;
			te[9] = af * d - be;
			te[2] = -d;
			te[6] = b * c;
			te[10] = a * c;
		} else if (euler.order === 'YZX') {
			const ac = a * c,
						ad = a * d,
						bc = b * c,
						bd = b * d;
			te[0] = c * e;
			te[4] = bd - ac * f;
			te[8] = bc * f + ad;
			te[1] = f;
			te[5] = a * e;
			te[9] = -b * e;
			te[2] = -d * e;
			te[6] = ad * f + bc;
			te[10] = ac - bd * f;
		} else if (euler.order === 'XZY') {
			const ac = a * c,
						ad = a * d,
						bc = b * c,
						bd = b * d;
			te[0] = c * e;
			te[4] = -f;
			te[8] = d * e;
			te[1] = ac * f + bd;
			te[5] = a * e;
			te[9] = ad * f - bc;
			te[2] = bc * f - ad;
			te[6] = b * e;
			te[10] = bd * f + ac;
		} // bottom row


		te[3] = 0;
		te[7] = 0;
		te[11] = 0; // last column

		te[12] = 0;
		te[13] = 0;
		te[14] = 0;
		te[15] = 1;
		return this;
	}

	makeRotationFromQuaternion(q) {
		return this.compose(_zero, q, _one);
	}

	lookAt(eye, target, up) {
		const te = this.elements;

		_z.subVectors(eye, target);

		if (_z.lengthSq() === 0) {
			// eye and target are in the same position
			_z.z = 1;
		}

		_z.normalize();

		_x.crossVectors(up, _z);

		if (_x.lengthSq() === 0) {
			// up and z are parallel
			if (Math.abs(up.z) === 1) {
				_z.x += 0.0001;
			} else {
				_z.z += 0.0001;
			}

			_z.normalize();

			_x.crossVectors(up, _z);
		}

		_x.normalize();

		_y.crossVectors(_z, _x);

		te[0] = _x.x;
		te[4] = _y.x;
		te[8] = _z.x;
		te[1] = _x.y;
		te[5] = _y.y;
		te[9] = _z.y;
		te[2] = _x.z;
		te[6] = _y.z;
		te[10] = _z.z;
		return this;
	}

	multiply(m) {
		return this.multiplyMatrices(this, m);
	}

	premultiply(m) {
		return this.multiplyMatrices(m, this);
	}

	multiplyMatrices(a, b) {
		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;
		const a11 = ae[0],
					a12 = ae[4],
					a13 = ae[8],
					a14 = ae[12];
		const a21 = ae[1],
					a22 = ae[5],
					a23 = ae[9],
					a24 = ae[13];
		const a31 = ae[2],
					a32 = ae[6],
					a33 = ae[10],
					a34 = ae[14];
		const a41 = ae[3],
					a42 = ae[7],
					a43 = ae[11],
					a44 = ae[15];
		const b11 = be[0],
					b12 = be[4],
					b13 = be[8],
					b14 = be[12];
		const b21 = be[1],
					b22 = be[5],
					b23 = be[9],
					b24 = be[13];
		const b31 = be[2],
					b32 = be[6],
					b33 = be[10],
					b34 = be[14];
		const b41 = be[3],
					b42 = be[7],
					b43 = be[11],
					b44 = be[15];
		te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
		te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
		te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
		te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
		return this;
	}

	multiplyScalar(s) {
		const te = this.elements;
		te[0] *= s;
		te[4] *= s;
		te[8] *= s;
		te[12] *= s;
		te[1] *= s;
		te[5] *= s;
		te[9] *= s;
		te[13] *= s;
		te[2] *= s;
		te[6] *= s;
		te[10] *= s;
		te[14] *= s;
		te[3] *= s;
		te[7] *= s;
		te[11] *= s;
		te[15] *= s;
		return this;
	}

	determinant() {
		const te = this.elements;
		const n11 = te[0],
					n12 = te[4],
					n13 = te[8],
					n14 = te[12];
		const n21 = te[1],
					n22 = te[5],
					n23 = te[9],
					n24 = te[13];
		const n31 = te[2],
					n32 = te[6],
					n33 = te[10],
					n34 = te[14];
		const n41 = te[3],
					n42 = te[7],
					n43 = te[11],
					n44 = te[15]; //TODO: make this more efficient
		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

		return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
	}

	transpose() {
		const te = this.elements;
		let tmp;
		tmp = te[1];
		te[1] = te[4];
		te[4] = tmp;
		tmp = te[2];
		te[2] = te[8];
		te[8] = tmp;
		tmp = te[6];
		te[6] = te[9];
		te[9] = tmp;
		tmp = te[3];
		te[3] = te[12];
		te[12] = tmp;
		tmp = te[7];
		te[7] = te[13];
		te[13] = tmp;
		tmp = te[11];
		te[11] = te[14];
		te[14] = tmp;
		return this;
	}

	setPosition(x, y, z) {
		const te = this.elements;

		if (x.isVector3) {
			te[12] = x.x;
			te[13] = x.y;
			te[14] = x.z;
		} else {
			te[12] = x;
			te[13] = y;
			te[14] = z;
		}

		return this;
	}

	invert() {
		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		const te = this.elements,
					n11 = te[0],
					n21 = te[1],
					n31 = te[2],
					n41 = te[3],
					n12 = te[4],
					n22 = te[5],
					n32 = te[6],
					n42 = te[7],
					n13 = te[8],
					n23 = te[9],
					n33 = te[10],
					n43 = te[11],
					n14 = te[12],
					n24 = te[13],
					n34 = te[14],
					n44 = te[15],
					t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
					t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
					t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
					t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
		if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		const detInv = 1 / det;
		te[0] = t11 * detInv;
		te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
		te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
		te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
		te[4] = t12 * detInv;
		te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
		te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
		te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
		te[8] = t13 * detInv;
		te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
		te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
		te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
		te[12] = t14 * detInv;
		te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
		te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
		te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
		return this;
	}

	scale(v) {
		const te = this.elements;
		const x = v.x,
					y = v.y,
					z = v.z;
		te[0] *= x;
		te[4] *= y;
		te[8] *= z;
		te[1] *= x;
		te[5] *= y;
		te[9] *= z;
		te[2] *= x;
		te[6] *= y;
		te[10] *= z;
		te[3] *= x;
		te[7] *= y;
		te[11] *= z;
		return this;
	}

	getMaxScaleOnAxis() {
		const te = this.elements;
		const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
		const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
		const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
		return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
	}

	makeTranslation(x, y, z) {
		this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
		return this;
	}

	makeRotationX(theta) {
		const c = Math.cos(theta),
					s = Math.sin(theta);
		this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
		return this;
	}

	makeRotationY(theta) {
		const c = Math.cos(theta),
					s = Math.sin(theta);
		this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
		return this;
	}

	makeRotationZ(theta) {
		const c = Math.cos(theta),
					s = Math.sin(theta);
		this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this;
	}

	makeRotationAxis(axis, angle) {
		// Based on http://www.gamedev.net/reference/articles/article1199.asp
		const c = Math.cos(angle);
		const s = Math.sin(angle);
		const t = 1 - c;
		const x = axis.x,
					y = axis.y,
					z = axis.z;
		const tx = t * x,
					ty = t * y;
		this.set(tx * x + c, tx * y - s * z, tx * z + s * y, 0, tx * y + s * z, ty * y + c, ty * z - s * x, 0, tx * z - s * y, ty * z + s * x, t * z * z + c, 0, 0, 0, 0, 1);
		return this;
	}

	makeScale(x, y, z) {
		this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
		return this;
	}

	makeShear(xy, xz, yx, yz, zx, zy) {
		this.set(1, yx, zx, 0, xy, 1, zy, 0, xz, yz, 1, 0, 0, 0, 0, 1);
		return this;
	}

	compose(position, quaternion, scale) {
		const te = this.elements;
		const x = quaternion._x,
					y = quaternion._y,
					z = quaternion._z,
					w = quaternion._w;
		const x2 = x + x,
					y2 = y + y,
					z2 = z + z;
		const xx = x * x2,
					xy = x * y2,
					xz = x * z2;
		const yy = y * y2,
					yz = y * z2,
					zz = z * z2;
		const wx = w * x2,
					wy = w * y2,
					wz = w * z2;
		const sx = scale.x,
					sy = scale.y,
					sz = scale.z;
		te[0] = (1 - (yy + zz)) * sx;
		te[1] = (xy + wz) * sx;
		te[2] = (xz - wy) * sx;
		te[3] = 0;
		te[4] = (xy - wz) * sy;
		te[5] = (1 - (xx + zz)) * sy;
		te[6] = (yz + wx) * sy;
		te[7] = 0;
		te[8] = (xz + wy) * sz;
		te[9] = (yz - wx) * sz;
		te[10] = (1 - (xx + yy)) * sz;
		te[11] = 0;
		te[12] = position.x;
		te[13] = position.y;
		te[14] = position.z;
		te[15] = 1;
		return this;
	}

	decompose(position, quaternion, scale) {
		const te = this.elements;

		let sx = _v1$2.set(te[0], te[1], te[2]).length();

		const sy = _v1$2.set(te[4], te[5], te[6]).length();

		const sz = _v1$2.set(te[8], te[9], te[10]).length(); // if determine is negative, we need to invert one scale


		const det = this.determinant();
		if (det < 0) sx = -sx;
		position.x = te[12];
		position.y = te[13];
		position.z = te[14]; // scale the rotation part

		_m1.copy(this);

		const invSX = 1 / sx;
		const invSY = 1 / sy;
		const invSZ = 1 / sz;
		_m1.elements[0] *= invSX;
		_m1.elements[1] *= invSX;
		_m1.elements[2] *= invSX;
		_m1.elements[4] *= invSY;
		_m1.elements[5] *= invSY;
		_m1.elements[6] *= invSY;
		_m1.elements[8] *= invSZ;
		_m1.elements[9] *= invSZ;
		_m1.elements[10] *= invSZ;
		quaternion.setFromRotationMatrix(_m1);
		scale.x = sx;
		scale.y = sy;
		scale.z = sz;
		return this;
	}

	makePerspective(left, right, top, bottom, near, far) {
		const te = this.elements;
		const x = 2 * near / (right - left);
		const y = 2 * near / (top - bottom);
		const a = (right + left) / (right - left);
		const b = (top + bottom) / (top - bottom);
		const c = -(far + near) / (far - near);
		const d = -2 * far * near / (far - near);
		te[0] = x;
		te[4] = 0;
		te[8] = a;
		te[12] = 0;
		te[1] = 0;
		te[5] = y;
		te[9] = b;
		te[13] = 0;
		te[2] = 0;
		te[6] = 0;
		te[10] = c;
		te[14] = d;
		te[3] = 0;
		te[7] = 0;
		te[11] = -1;
		te[15] = 0;
		return this;
	}

	makeOrthographic(left, right, top, bottom, near, far) {
		const te = this.elements;
		const w = 1.0 / (right - left);
		const h = 1.0 / (top - bottom);
		const p = 1.0 / (far - near);
		const x = (right + left) * w;
		const y = (top + bottom) * h;
		const z = (far + near) * p;
		te[0] = 2 * w;
		te[4] = 0;
		te[8] = 0;
		te[12] = -x;
		te[1] = 0;
		te[5] = 2 * h;
		te[9] = 0;
		te[13] = -y;
		te[2] = 0;
		te[6] = 0;
		te[10] = -2 * p;
		te[14] = -z;
		te[3] = 0;
		te[7] = 0;
		te[11] = 0;
		te[15] = 1;
		return this;
	}

	equals(matrix) {
		const te = this.elements;
		const me = matrix.elements;

		for (let i = 0; i < 16; i++) {
			if (te[i] !== me[i]) return false;
		}

		return true;
	}

	fromArray(array, offset = 0) {
		for (let i = 0; i < 16; i++) {
			this.elements[i] = array[i + offset];
		}

		return this;
	}

	toArray(array = [], offset = 0) {
		const te = this.elements;
		array[offset] = te[0];
		array[offset + 1] = te[1];
		array[offset + 2] = te[2];
		array[offset + 3] = te[3];
		array[offset + 4] = te[4];
		array[offset + 5] = te[5];
		array[offset + 6] = te[6];
		array[offset + 7] = te[7];
		array[offset + 8] = te[8];
		array[offset + 9] = te[9];
		array[offset + 10] = te[10];
		array[offset + 11] = te[11];
		array[offset + 12] = te[12];
		array[offset + 13] = te[13];
		array[offset + 14] = te[14];
		array[offset + 15] = te[15];
		return array;
	}

}

const _v1$2 = /*@__PURE__*/new Vector3();

const _m1 = /*@__PURE__*/new Matrix4();

const _zero = /*@__PURE__*/new Vector3(0, 0, 0);

const _one = /*@__PURE__*/new Vector3(1, 1, 1);

const _x = /*@__PURE__*/new Vector3();

const _y = /*@__PURE__*/new Vector3();

const _z = /*@__PURE__*/new Vector3();

const _matrix = /*@__PURE__*/new Matrix4();

const _quaternion = /*@__PURE__*/new Quaternion();

class Euler {
	constructor(x = 0, y = 0, z = 0, order = Euler.DefaultOrder) {
		this.isEuler = true;
		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;
	}

	get x() {
		return this._x;
	}

	set x(value) {
		this._x = value;

		this._onChangeCallback();
	}

	get y() {
		return this._y;
	}

	set y(value) {
		this._y = value;

		this._onChangeCallback();
	}

	get z() {
		return this._z;
	}

	set z(value) {
		this._z = value;

		this._onChangeCallback();
	}

	get order() {
		return this._order;
	}

	set order(value) {
		this._order = value;

		this._onChangeCallback();
	}

	set(x, y, z, order = this._order) {
		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

		this._onChangeCallback();

		return this;
	}

	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}

	copy(euler) {
		this._x = euler._x;
		this._y = euler._y;
		this._z = euler._z;
		this._order = euler._order;

		this._onChangeCallback();

		return this;
	}

	setFromRotationMatrix(m, order = this._order, update = true) {
		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
		const te = m.elements;
		const m11 = te[0],
					m12 = te[4],
					m13 = te[8];
		const m21 = te[1],
					m22 = te[5],
					m23 = te[9];
		const m31 = te[2],
					m32 = te[6],
					m33 = te[10];

		switch (order) {
			case 'XYZ':
				this._y = Math.asin(clamp(m13, -1, 1));

				if (Math.abs(m13) < 0.9999999) {
					this._x = Math.atan2(-m23, m33);
					this._z = Math.atan2(-m12, m11);
				} else {
					this._x = Math.atan2(m32, m22);
					this._z = 0;
				}

				break;

			case 'YXZ':
				this._x = Math.asin(-clamp(m23, -1, 1));

				if (Math.abs(m23) < 0.9999999) {
					this._y = Math.atan2(m13, m33);
					this._z = Math.atan2(m21, m22);
				} else {
					this._y = Math.atan2(-m31, m11);
					this._z = 0;
				}

				break;

			case 'ZXY':
				this._x = Math.asin(clamp(m32, -1, 1));

				if (Math.abs(m32) < 0.9999999) {
					this._y = Math.atan2(-m31, m33);
					this._z = Math.atan2(-m12, m22);
				} else {
					this._y = 0;
					this._z = Math.atan2(m21, m11);
				}

				break;

			case 'ZYX':
				this._y = Math.asin(-clamp(m31, -1, 1));

				if (Math.abs(m31) < 0.9999999) {
					this._x = Math.atan2(m32, m33);
					this._z = Math.atan2(m21, m11);
				} else {
					this._x = 0;
					this._z = Math.atan2(-m12, m22);
				}

				break;

			case 'YZX':
				this._z = Math.asin(clamp(m21, -1, 1));

				if (Math.abs(m21) < 0.9999999) {
					this._x = Math.atan2(-m23, m22);
					this._y = Math.atan2(-m31, m11);
				} else {
					this._x = 0;
					this._y = Math.atan2(m13, m33);
				}

				break;

			case 'XZY':
				this._z = Math.asin(-clamp(m12, -1, 1));

				if (Math.abs(m12) < 0.9999999) {
					this._x = Math.atan2(m32, m22);
					this._y = Math.atan2(m13, m11);
				} else {
					this._x = Math.atan2(-m23, m33);
					this._y = 0;
				}

				break;

			default:
				console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order);
		}

		this._order = order;
		if (update === true) this._onChangeCallback();
		return this;
	}

	setFromQuaternion(q, order, update) {
		_matrix.makeRotationFromQuaternion(q);

		return this.setFromRotationMatrix(_matrix, order, update);
	}

	setFromVector3(v, order = this._order) {
		return this.set(v.x, v.y, v.z, order);
	}

	reorder(newOrder) {
		// WARNING: this discards revolution information -bhouston
		_quaternion.setFromEuler(this);

		return this.setFromQuaternion(_quaternion, newOrder);
	}

	equals(euler) {
		return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
	}

	fromArray(array) {
		this._x = array[0];
		this._y = array[1];
		this._z = array[2];
		if (array[3] !== undefined) this._order = array[3];

		this._onChangeCallback();

		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this._x;
		array[offset + 1] = this._y;
		array[offset + 2] = this._z;
		array[offset + 3] = this._order;
		return array;
	}

	_onChange(callback) {
		this._onChangeCallback = callback;
		return this;
	}

	_onChangeCallback() {}

	*[Symbol.iterator]() {
		yield this._x;
		yield this._y;
		yield this._z;
		yield this._order;
	} // @deprecated since r138, 02cf0df1cb4575d5842fef9c85bb5a89fe020d53


	toVector3() {
		console.error('THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead');
	}

}

Euler.DefaultOrder = 'XYZ';
Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];

/**
 * Abstract base class of interpolants over parametric samples.
 *
 * The parameter domain is one dimensional, typically the time or a path
 * along a curve defined by the data.
 *
 * The sample values can have any dimensionality and derived classes may
 * apply special interpretations to the data.
 *
 * This class provides the interval seek in a Template Method, deferring
 * the actual interpolation to derived classes.
 *
 * Time complexity is O(1) for linear access crossing at most two points
 * and O(log N) for random access, where N is the number of positions.
 *
 * References:
 *
 * 		http://www.oodesign.com/template-method-pattern.html
 *
 */
class Interpolant {
	constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
		this.parameterPositions = parameterPositions;
		this._cachedIndex = 0;
		this.resultBuffer = resultBuffer !== undefined ? resultBuffer : new sampleValues.constructor(sampleSize);
		this.sampleValues = sampleValues;
		this.valueSize = sampleSize;
		this.settings = null;
		this.DefaultSettings_ = {};
	}

	evaluate(t) {
		const pp = this.parameterPositions;
		let i1 = this._cachedIndex,
				t1 = pp[i1],
				t0 = pp[i1 - 1];

		validate_interval: {
			seek: {
				let right;

				linear_scan: {
					//- See http://jsperf.com/comparison-to-undefined/3
					//- slower code:
					//-
					//- 				if ( t >= t1 || t1 === undefined ) {
					forward_scan: if (!(t < t1)) {
						for (let giveUpAt = i1 + 2;;) {
							if (t1 === undefined) {
								if (t < t0) break forward_scan; // after end

								i1 = pp.length;
								this._cachedIndex = i1;
								return this.copySampleValue_(i1 - 1);
							}

							if (i1 === giveUpAt) break; // this loop

							t0 = t1;
							t1 = pp[++i1];

							if (t < t1) {
								// we have arrived at the sought interval
								break seek;
							}
						} // prepare binary search on the right side of the index


						right = pp.length;
						break linear_scan;
					} //- slower code:
					//-					if ( t < t0 || t0 === undefined ) {


					if (!(t >= t0)) {
						// looping?
						const t1global = pp[1];

						if (t < t1global) {
							i1 = 2; // + 1, using the scan for the details

							t0 = t1global;
						} // linear reverse scan


						for (let giveUpAt = i1 - 2;;) {
							if (t0 === undefined) {
								// before start
								this._cachedIndex = 0;
								return this.copySampleValue_(0);
							}

							if (i1 === giveUpAt) break; // this loop

							t1 = t0;
							t0 = pp[--i1 - 1];

							if (t >= t0) {
								// we have arrived at the sought interval
								break seek;
							}
						} // prepare binary search on the left side of the index


						right = i1;
						i1 = 0;
						break linear_scan;
					} // the interval is valid


					break validate_interval;
				} // linear scan
				// binary search


				while (i1 < right) {
					const mid = i1 + right >>> 1;

					if (t < pp[mid]) {
						right = mid;
					} else {
						i1 = mid + 1;
					}
				}

				t1 = pp[i1];
				t0 = pp[i1 - 1]; // check boundary cases, again

				if (t0 === undefined) {
					this._cachedIndex = 0;
					return this.copySampleValue_(0);
				}

				if (t1 === undefined) {
					i1 = pp.length;
					this._cachedIndex = i1;
					return this.copySampleValue_(i1 - 1);
				}
			} // seek


			this._cachedIndex = i1;
			this.intervalChanged_(i1, t0, t1);
		} // validate_interval


		return this.interpolate_(i1, t0, t, t1);
	}

	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}

	copySampleValue_(index) {
		// copies a sample value to the result buffer
		const result = this.resultBuffer,
					values = this.sampleValues,
					stride = this.valueSize,
					offset = index * stride;

		for (let i = 0; i !== stride; ++i) {
			result[i] = values[offset + i];
		}

		return result;
	} // Template methods for derived classes:


	interpolate_() {
		throw new Error('call to abstract method'); // implementations shall return this.resultBuffer
	}

	intervalChanged_() {// empty
	}

}

const _startP = /*@__PURE__*/new Vector3();

const _startEnd = /*@__PURE__*/new Vector3();

class Line3 {
	constructor(start = new Vector3(), end = new Vector3()) {
		this.start = start;
		this.end = end;
	}

	set(start, end) {
		this.start.copy(start);
		this.end.copy(end);
		return this;
	}

	copy(line) {
		this.start.copy(line.start);
		this.end.copy(line.end);
		return this;
	}

	getCenter(target) {
		return target.addVectors(this.start, this.end).multiplyScalar(0.5);
	}

	delta(target) {
		return target.subVectors(this.end, this.start);
	}

	distanceSq() {
		return this.start.distanceToSquared(this.end);
	}

	distance() {
		return this.start.distanceTo(this.end);
	}

	at(t, target) {
		return this.delta(target).multiplyScalar(t).add(this.start);
	}

	closestPointToPointParameter(point, clampToLine) {
		_startP.subVectors(point, this.start);

		_startEnd.subVectors(this.end, this.start);

		const startEnd2 = _startEnd.dot(_startEnd);

		const startEnd_startP = _startEnd.dot(_startP);

		let t = startEnd_startP / startEnd2;

		if (clampToLine) {
			t = clamp(t, 0, 1);
		}

		return t;
	}

	closestPointToPoint(point, clampToLine, target) {
		const t = this.closestPointToPointParameter(point, clampToLine);
		return this.delta(target).multiplyScalar(t).add(this.start);
	}

	applyMatrix4(matrix) {
		this.start.applyMatrix4(matrix);
		this.end.applyMatrix4(matrix);
		return this;
	}

	equals(line) {
		return line.start.equals(this.start) && line.end.equals(this.end);
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

class Matrix3 {
	constructor() {
		Matrix3.prototype.isMatrix3 = true;
		this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
	}

	set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
		const te = this.elements;
		te[0] = n11;
		te[1] = n21;
		te[2] = n31;
		te[3] = n12;
		te[4] = n22;
		te[5] = n32;
		te[6] = n13;
		te[7] = n23;
		te[8] = n33;
		return this;
	}

	identity() {
		this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
		return this;
	}

	copy(m) {
		const te = this.elements;
		const me = m.elements;
		te[0] = me[0];
		te[1] = me[1];
		te[2] = me[2];
		te[3] = me[3];
		te[4] = me[4];
		te[5] = me[5];
		te[6] = me[6];
		te[7] = me[7];
		te[8] = me[8];
		return this;
	}

	extractBasis(xAxis, yAxis, zAxis) {
		xAxis.setFromMatrix3Column(this, 0);
		yAxis.setFromMatrix3Column(this, 1);
		zAxis.setFromMatrix3Column(this, 2);
		return this;
	}

	setFromMatrix4(m) {
		const me = m.elements;
		this.set(me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]);
		return this;
	}

	multiply(m) {
		return this.multiplyMatrices(this, m);
	}

	premultiply(m) {
		return this.multiplyMatrices(m, this);
	}

	multiplyMatrices(a, b) {
		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;
		const a11 = ae[0],
					a12 = ae[3],
					a13 = ae[6];
		const a21 = ae[1],
					a22 = ae[4],
					a23 = ae[7];
		const a31 = ae[2],
					a32 = ae[5],
					a33 = ae[8];
		const b11 = be[0],
					b12 = be[3],
					b13 = be[6];
		const b21 = be[1],
					b22 = be[4],
					b23 = be[7];
		const b31 = be[2],
					b32 = be[5],
					b33 = be[8];
		te[0] = a11 * b11 + a12 * b21 + a13 * b31;
		te[3] = a11 * b12 + a12 * b22 + a13 * b32;
		te[6] = a11 * b13 + a12 * b23 + a13 * b33;
		te[1] = a21 * b11 + a22 * b21 + a23 * b31;
		te[4] = a21 * b12 + a22 * b22 + a23 * b32;
		te[7] = a21 * b13 + a22 * b23 + a23 * b33;
		te[2] = a31 * b11 + a32 * b21 + a33 * b31;
		te[5] = a31 * b12 + a32 * b22 + a33 * b32;
		te[8] = a31 * b13 + a32 * b23 + a33 * b33;
		return this;
	}

	multiplyScalar(s) {
		const te = this.elements;
		te[0] *= s;
		te[3] *= s;
		te[6] *= s;
		te[1] *= s;
		te[4] *= s;
		te[7] *= s;
		te[2] *= s;
		te[5] *= s;
		te[8] *= s;
		return this;
	}

	determinant() {
		const te = this.elements;
		const a = te[0],
					b = te[1],
					c = te[2],
					d = te[3],
					e = te[4],
					f = te[5],
					g = te[6],
					h = te[7],
					i = te[8];
		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
	}

	invert() {
		const te = this.elements,
					n11 = te[0],
					n21 = te[1],
					n31 = te[2],
					n12 = te[3],
					n22 = te[4],
					n32 = te[5],
					n13 = te[6],
					n23 = te[7],
					n33 = te[8],
					t11 = n33 * n22 - n32 * n23,
					t12 = n32 * n13 - n33 * n12,
					t13 = n23 * n12 - n22 * n13,
					det = n11 * t11 + n21 * t12 + n31 * t13;
		if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		const detInv = 1 / det;
		te[0] = t11 * detInv;
		te[1] = (n31 * n23 - n33 * n21) * detInv;
		te[2] = (n32 * n21 - n31 * n22) * detInv;
		te[3] = t12 * detInv;
		te[4] = (n33 * n11 - n31 * n13) * detInv;
		te[5] = (n31 * n12 - n32 * n11) * detInv;
		te[6] = t13 * detInv;
		te[7] = (n21 * n13 - n23 * n11) * detInv;
		te[8] = (n22 * n11 - n21 * n12) * detInv;
		return this;
	}

	transpose() {
		let tmp;
		const m = this.elements;
		tmp = m[1];
		m[1] = m[3];
		m[3] = tmp;
		tmp = m[2];
		m[2] = m[6];
		m[6] = tmp;
		tmp = m[5];
		m[5] = m[7];
		m[7] = tmp;
		return this;
	}

	getNormalMatrix(matrix4) {
		return this.setFromMatrix4(matrix4).invert().transpose();
	}

	transposeIntoArray(r) {
		const m = this.elements;
		r[0] = m[0];
		r[1] = m[3];
		r[2] = m[6];
		r[3] = m[1];
		r[4] = m[4];
		r[5] = m[7];
		r[6] = m[2];
		r[7] = m[5];
		r[8] = m[8];
		return this;
	}

	setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
		const c = Math.cos(rotation);
		const s = Math.sin(rotation);
		this.set(sx * c, sx * s, -sx * (c * cx + s * cy) + cx + tx, -sy * s, sy * c, -sy * (-s * cx + c * cy) + cy + ty, 0, 0, 1);
		return this;
	} //


	scale(sx, sy) {
		this.premultiply(_m3.makeScale(sx, sy));
		return this;
	}

	rotate(theta) {
		this.premultiply(_m3.makeRotation(-theta));
		return this;
	}

	translate(tx, ty) {
		this.premultiply(_m3.makeTranslation(tx, ty));
		return this;
	} // for 2D Transforms


	makeTranslation(x, y) {
		this.set(1, 0, x, 0, 1, y, 0, 0, 1);
		return this;
	}

	makeRotation(theta) {
		// counterclockwise
		const c = Math.cos(theta);
		const s = Math.sin(theta);
		this.set(c, -s, 0, s, c, 0, 0, 0, 1);
		return this;
	}

	makeScale(x, y) {
		this.set(x, 0, 0, 0, y, 0, 0, 0, 1);
		return this;
	} //


	equals(matrix) {
		const te = this.elements;
		const me = matrix.elements;

		for (let i = 0; i < 9; i++) {
			if (te[i] !== me[i]) return false;
		}

		return true;
	}

	fromArray(array, offset = 0) {
		for (let i = 0; i < 9; i++) {
			this.elements[i] = array[i + offset];
		}

		return this;
	}

	toArray(array = [], offset = 0) {
		const te = this.elements;
		array[offset] = te[0];
		array[offset + 1] = te[1];
		array[offset + 2] = te[2];
		array[offset + 3] = te[3];
		array[offset + 4] = te[4];
		array[offset + 5] = te[5];
		array[offset + 6] = te[6];
		array[offset + 7] = te[7];
		array[offset + 8] = te[8];
		return array;
	}

	clone() {
		return new this.constructor().fromArray(this.elements);
	}

}

const _m3 = /*@__PURE__*/new Matrix3();

const _vector1 = /*@__PURE__*/new Vector3();

const _vector2 = /*@__PURE__*/new Vector3();

const _normalMatrix = /*@__PURE__*/new Matrix3();

class Plane {
	constructor(normal = new Vector3(1, 0, 0), constant = 0) {
		this.isPlane = true; // normal is assumed to be normalized

		this.normal = normal;
		this.constant = constant;
	}

	set(normal, constant) {
		this.normal.copy(normal);
		this.constant = constant;
		return this;
	}

	setComponents(x, y, z, w) {
		this.normal.set(x, y, z);
		this.constant = w;
		return this;
	}

	setFromNormalAndCoplanarPoint(normal, point) {
		this.normal.copy(normal);
		this.constant = -point.dot(this.normal);
		return this;
	}

	setFromCoplanarPoints(a, b, c) {
		const normal = _vector1.subVectors(c, b).cross(_vector2.subVectors(a, b)).normalize(); // Q: should an error be thrown if normal is zero (e.g. degenerate plane)?


		this.setFromNormalAndCoplanarPoint(normal, a);
		return this;
	}

	copy(plane) {
		this.normal.copy(plane.normal);
		this.constant = plane.constant;
		return this;
	}

	normalize() {
		// Note: will lead to a divide by zero if the plane is invalid.
		const inverseNormalLength = 1.0 / this.normal.length();
		this.normal.multiplyScalar(inverseNormalLength);
		this.constant *= inverseNormalLength;
		return this;
	}

	negate() {
		this.constant *= -1;
		this.normal.negate();
		return this;
	}

	distanceToPoint(point) {
		return this.normal.dot(point) + this.constant;
	}

	distanceToSphere(sphere) {
		return this.distanceToPoint(sphere.center) - sphere.radius;
	}

	projectPoint(point, target) {
		return target.copy(this.normal).multiplyScalar(-this.distanceToPoint(point)).add(point);
	}

	intersectLine(line, target) {
		const direction = line.delta(_vector1);
		const denominator = this.normal.dot(direction);

		if (denominator === 0) {
			// line is coplanar, return origin
			if (this.distanceToPoint(line.start) === 0) {
				return target.copy(line.start);
			} // Unsure if this is the correct method to handle this case.


			return null;
		}

		const t = -(line.start.dot(this.normal) + this.constant) / denominator;

		if (t < 0 || t > 1) {
			return null;
		}

		return target.copy(direction).multiplyScalar(t).add(line.start);
	}

	intersectsLine(line) {
		// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.
		const startSign = this.distanceToPoint(line.start);
		const endSign = this.distanceToPoint(line.end);
		return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
	}

	intersectsBox(box) {
		return box.intersectsPlane(this);
	}

	intersectsSphere(sphere) {
		return sphere.intersectsPlane(this);
	}

	coplanarPoint(target) {
		return target.copy(this.normal).multiplyScalar(-this.constant);
	}

	applyMatrix4(matrix, optionalNormalMatrix) {
		const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix(matrix);

		const referencePoint = this.coplanarPoint(_vector1).applyMatrix4(matrix);
		const normal = this.normal.applyMatrix3(normalMatrix).normalize();
		this.constant = -referencePoint.dot(normal);
		return this;
	}

	translate(offset) {
		this.constant -= offset.dot(this.normal);
		return this;
	}

	equals(plane) {
		return plane.normal.equals(this.normal) && plane.constant === this.constant;
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

const _vector = /*@__PURE__*/new Vector3();

const _segCenter = /*@__PURE__*/new Vector3();

const _segDir = /*@__PURE__*/new Vector3();

const _diff = /*@__PURE__*/new Vector3();

const _edge1 = /*@__PURE__*/new Vector3();

const _edge2 = /*@__PURE__*/new Vector3();

const _normal = /*@__PURE__*/new Vector3();

class Ray {
	constructor(origin = new Vector3(), direction = new Vector3(0, 0, -1)) {
		this.origin = origin;
		this.direction = direction;
	}

	set(origin, direction) {
		this.origin.copy(origin);
		this.direction.copy(direction);
		return this;
	}

	copy(ray) {
		this.origin.copy(ray.origin);
		this.direction.copy(ray.direction);
		return this;
	}

	at(t, target = new Vector3()) {
		return target.copy(this.direction).multiplyScalar(t).add(this.origin);
	}

	lookAt(v) {
		this.direction.copy(v).sub(this.origin).normalize();
		return this;
	}

	recast(t) {
		this.origin.copy(this.at(t, _vector));
		return this;
	}

	closestPointToPoint(point, target = new Vector3()) {
		target.subVectors(point, this.origin);
		const directionDistance = target.dot(this.direction);

		if (directionDistance < 0) {
			return target.copy(this.origin);
		}

		return target.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);
	}

	distanceToPoint(point) {
		return Math.sqrt(this.distanceSqToPoint(point));
	}

	distanceSqToPoint(point) {
		const directionDistance = _vector.subVectors(point, this.origin).dot(this.direction); // point behind the ray


		if (directionDistance < 0) {
			return this.origin.distanceToSquared(point);
		}

		_vector.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);

		return _vector.distanceToSquared(point);
	}

	distanceSqToSegment(v0, v1, optionalPointOnRay, optionalPointOnSegment) {
		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteDistRaySegment.h
		// It returns the min distance between the ray and the segment
		// defined by v0 and v1
		// It can also set two optional targets :
		// - The closest point on the ray
		// - The closest point on the segment
		_segCenter.copy(v0).add(v1).multiplyScalar(0.5);

		_segDir.copy(v1).sub(v0).normalize();

		_diff.copy(this.origin).sub(_segCenter);

		const segExtent = v0.distanceTo(v1) * 0.5;
		const a01 = -this.direction.dot(_segDir);

		const b0 = _diff.dot(this.direction);

		const b1 = -_diff.dot(_segDir);

		const c = _diff.lengthSq();

		const det = Math.abs(1 - a01 * a01);
		let s0, s1, sqrDist, extDet;

		if (det > 0) {
			// The ray and segment are not parallel.
			s0 = a01 * b1 - b0;
			s1 = a01 * b0 - b1;
			extDet = segExtent * det;

			if (s0 >= 0) {
				if (s1 >= -extDet) {
					if (s1 <= extDet) {
						// region 0
						// Minimum at interior points of ray and segment.
						const invDet = 1 / det;
						s0 *= invDet;
						s1 *= invDet;
						sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c;
					} else {
						// region 1
						s1 = segExtent;
						s0 = Math.max(0, -(a01 * s1 + b0));
						sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
					}
				} else {
					// region 5
					s1 = -segExtent;
					s0 = Math.max(0, -(a01 * s1 + b0));
					sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
				}
			} else {
				if (s1 <= -extDet) {
					// region 4
					s0 = Math.max(0, -(-a01 * segExtent + b0));
					s1 = s0 > 0 ? -segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
					sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
				} else if (s1 <= extDet) {
					// region 3
					s0 = 0;
					s1 = Math.min(Math.max(-segExtent, -b1), segExtent);
					sqrDist = s1 * (s1 + 2 * b1) + c;
				} else {
					// region 2
					s0 = Math.max(0, -(a01 * segExtent + b0));
					s1 = s0 > 0 ? segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
					sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
				}
			}
		} else {
			// Ray and segment are parallel.
			s1 = a01 > 0 ? -segExtent : segExtent;
			s0 = Math.max(0, -(a01 * s1 + b0));
			sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
		}

		if (optionalPointOnRay) {
			optionalPointOnRay.copy(this.direction).multiplyScalar(s0).add(this.origin);
		}

		if (optionalPointOnSegment) {
			optionalPointOnSegment.copy(_segDir).multiplyScalar(s1).add(_segCenter);
		}

		return sqrDist;
	}

	intersectSphere(sphere, target = new Vector3()) {
		_vector.subVectors(sphere.center, this.origin);

		const tca = _vector.dot(this.direction);

		const d2 = _vector.dot(_vector) - tca * tca;
		const radius2 = sphere.radius * sphere.radius;
		if (d2 > radius2) return null;
		const thc = Math.sqrt(radius2 - d2); // t0 = first intersect point - entrance on front of sphere

		const t0 = tca - thc; // t1 = second intersect point - exit point on back of sphere

		const t1 = tca + thc; // test to see if both t0 and t1 are behind the ray - if so, return null

		if (t0 < 0 && t1 < 0) return null; // test to see if t0 is behind the ray:
		// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
		// in order to always return an intersect point that is in front of the ray.

		if (t0 < 0) return this.at(t1, target); // else t0 is in front of the ray, so return the first collision point scaled by t0

		return this.at(t0, target);
	}

	intersectsSphere(sphere) {
		return this.distanceSqToPoint(sphere.center) <= sphere.radius * sphere.radius;
	}

	distanceToPlane(plane) {
		const denominator = plane.normal.dot(this.direction);

		if (denominator === 0) {
			// line is coplanar, return origin
			if (plane.distanceToPoint(this.origin) === 0) {
				return 0;
			} // Null is preferable to undefined since undefined means.... it is undefined


			return null;
		}

		const t = -(this.origin.dot(plane.normal) + plane.constant) / denominator; // Return if the ray never intersects the plane

		return t >= 0 ? t : null;
	}

	intersectPlane(plane, target) {
		const t = this.distanceToPlane(plane);

		if (t === null) {
			return null;
		}

		return this.at(t, target);
	}

	intersectsPlane(plane) {
		// check if the ray lies on the plane first
		const distToPoint = plane.distanceToPoint(this.origin);

		if (distToPoint === 0) {
			return true;
		}

		const denominator = plane.normal.dot(this.direction);

		if (denominator * distToPoint < 0) {
			return true;
		} // ray origin is behind the plane (and is pointing behind it)


		return false;
	}

	intersectBox(box, target) {
		let tmin, tmax, tymin, tymax, tzmin, tzmax;
		const invdirx = 1 / this.direction.x,
					invdiry = 1 / this.direction.y,
					invdirz = 1 / this.direction.z;
		const origin = this.origin;

		if (invdirx >= 0) {
			tmin = (box.min.x - origin.x) * invdirx;
			tmax = (box.max.x - origin.x) * invdirx;
		} else {
			tmin = (box.max.x - origin.x) * invdirx;
			tmax = (box.min.x - origin.x) * invdirx;
		}

		if (invdiry >= 0) {
			tymin = (box.min.y - origin.y) * invdiry;
			tymax = (box.max.y - origin.y) * invdiry;
		} else {
			tymin = (box.max.y - origin.y) * invdiry;
			tymax = (box.min.y - origin.y) * invdiry;
		}

		if (tmin > tymax || tymin > tmax) return null; // These lines also handle the case where tmin or tmax is NaN
		// (result of 0 * Infinity). x !== x returns true if x is NaN

		if (tymin > tmin || tmin !== tmin) tmin = tymin;
		if (tymax < tmax || tmax !== tmax) tmax = tymax;

		if (invdirz >= 0) {
			tzmin = (box.min.z - origin.z) * invdirz;
			tzmax = (box.max.z - origin.z) * invdirz;
		} else {
			tzmin = (box.max.z - origin.z) * invdirz;
			tzmax = (box.min.z - origin.z) * invdirz;
		}

		if (tmin > tzmax || tzmin > tmax) return null;
		if (tzmin > tmin || tmin !== tmin) tmin = tzmin;
		if (tzmax < tmax || tmax !== tmax) tmax = tzmax; //return point closest to the ray (positive side)

		if (tmax < 0) return null;
		return this.at(tmin >= 0 ? tmin : tmax, target);
	}

	intersectsBox(box) {
		return this.intersectBox(box, _vector) !== null;
	}

	intersectTriangle(a, b, c, backfaceCulling, target) {
		// Compute the offset origin, edges, and normal.
		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
		_edge1.subVectors(b, a);

		_edge2.subVectors(c, a);

		_normal.crossVectors(_edge1, _edge2); // Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
		// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
		//	 |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
		//	 |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
		//	 |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)


		let DdN = this.direction.dot(_normal);
		let sign;

		if (DdN > 0) {
			if (backfaceCulling) return null;
			sign = 1;
		} else if (DdN < 0) {
			sign = -1;
			DdN = -DdN;
		} else {
			return null;
		}

		_diff.subVectors(this.origin, a);

		const DdQxE2 = sign * this.direction.dot(_edge2.crossVectors(_diff, _edge2)); // b1 < 0, no intersection

		if (DdQxE2 < 0) {
			return null;
		}

		const DdE1xQ = sign * this.direction.dot(_edge1.cross(_diff)); // b2 < 0, no intersection

		if (DdE1xQ < 0) {
			return null;
		} // b1+b2 > 1, no intersection


		if (DdQxE2 + DdE1xQ > DdN) {
			return null;
		} // Line intersects triangle, check if ray does.


		const QdN = -sign * _diff.dot(_normal); // t < 0, no intersection


		if (QdN < 0) {
			return null;
		} // Ray intersects triangle.


		return this.at(QdN / DdN, target);
	}

	applyMatrix4(matrix4) {
		this.origin.applyMatrix4(matrix4);
		this.direction.transformDirection(matrix4);
		return this;
	}

	equals(ray) {
		return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

const _box = /*@__PURE__*/new Box3();

const _v1$1 = /*@__PURE__*/new Vector3();

const _toFarthestPoint = /*@__PURE__*/new Vector3();

const _toPoint = /*@__PURE__*/new Vector3();

class Sphere {
	constructor(center = new Vector3(), radius = -1) {
		this.center = center;
		this.radius = radius;
	}

	set(center, radius) {
		this.center.copy(center);
		this.radius = radius;
		return this;
	}

	setFromPoints(points, optionalCenter) {
		const center = this.center;

		if (optionalCenter !== undefined) {
			center.copy(optionalCenter);
		} else {
			_box.setFromPoints(points).getCenter(center);
		}

		let maxRadiusSq = 0;

		for (let i = 0, il = points.length; i < il; i++) {
			maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
		}

		this.radius = Math.sqrt(maxRadiusSq);
		return this;
	}

	copy(sphere) {
		this.center.copy(sphere.center);
		this.radius = sphere.radius;
		return this;
	}

	isEmpty() {
		return this.radius < 0;
	}

	makeEmpty() {
		this.center.set(0, 0, 0);
		this.radius = -1;
		return this;
	}

	containsPoint(point) {
		return point.distanceToSquared(this.center) <= this.radius * this.radius;
	}

	distanceToPoint(point) {
		return point.distanceTo(this.center) - this.radius;
	}

	intersectsSphere(sphere) {
		const radiusSum = this.radius + sphere.radius;
		return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
	}

	intersectsBox(box) {
		return box.intersectsSphere(this);
	}

	intersectsPlane(plane) {
		return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
	}

	clampPoint(point, target) {
		const deltaLengthSq = this.center.distanceToSquared(point);
		target.copy(point);

		if (deltaLengthSq > this.radius * this.radius) {
			target.sub(this.center).normalize();
			target.multiplyScalar(this.radius).add(this.center);
		}

		return target;
	}

	getBoundingBox(target) {
		if (this.isEmpty()) {
			// Empty sphere produces empty bounding box
			target.makeEmpty();
			return target;
		}

		target.set(this.center, this.center);
		target.expandByScalar(this.radius);
		return target;
	}

	applyMatrix4(matrix) {
		this.center.applyMatrix4(matrix);
		this.radius = this.radius * matrix.getMaxScaleOnAxis();
		return this;
	}

	translate(offset) {
		this.center.add(offset);
		return this;
	}

	expandByPoint(point) {
		if (this.isEmpty()) {
			this.center.copy(point);
			this.radius = 0;
			return this;
		} // from https://github.com/juj/MathGeoLib/blob/2940b99b99cfe575dd45103ef20f4019dee15b54/src/Geometry/Sphere.cpp#L649-L671


		_toPoint.subVectors(point, this.center);

		const lengthSq = _toPoint.lengthSq();

		if (lengthSq > this.radius * this.radius) {
			const length = Math.sqrt(lengthSq);
			const missingRadiusHalf = (length - this.radius) * 0.5; // Nudge this sphere towards the target point. Add half the missing distance to radius,
			// and the other half to position. This gives a tighter enclosure, instead of if
			// the whole missing distance were just added to radius.

			this.center.add(_toPoint.multiplyScalar(missingRadiusHalf / length));
			this.radius += missingRadiusHalf;
		}

		return this;
	}

	union(sphere) {
		// handle empty sphere cases
		if (sphere.isEmpty()) {
			return;
		} else if (this.isEmpty()) {
			this.copy(sphere);
			return this;
		} // from https://github.com/juj/MathGeoLib/blob/2940b99b99cfe575dd45103ef20f4019dee15b54/src/Geometry/Sphere.cpp#L759-L769
		// To enclose another sphere into this sphere, we only need to enclose two points:
		// 1) Enclose the farthest point on the other sphere into this sphere.
		// 2) Enclose the opposite point of the farthest point into this sphere.


		if (this.center.equals(sphere.center) === true) {
			_toFarthestPoint.set(0, 0, 1).multiplyScalar(sphere.radius);
		} else {
			_toFarthestPoint.subVectors(sphere.center, this.center).normalize().multiplyScalar(sphere.radius);
		}

		this.expandByPoint(_v1$1.copy(sphere.center).add(_toFarthestPoint));
		this.expandByPoint(_v1$1.copy(sphere.center).sub(_toFarthestPoint));
		return this;
	}

	equals(sphere) {
		return sphere.center.equals(this.center) && sphere.radius === this.radius;
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

/**
 * Ref: https://en.wikipedia.org/wiki/Spherical_coordinate_system
 *
 * The polar angle (phi) is measured from the positive y-axis. The positive y-axis is up.
 * The azimuthal angle (theta) is measured from the positive z-axis.
 */

class Spherical {
	constructor(radius = 1, phi = 0, theta = 0) {
		this.radius = radius;
		this.phi = phi; // polar angle

		this.theta = theta; // azimuthal angle

		return this;
	}

	set(radius, phi, theta) {
		this.radius = radius;
		this.phi = phi;
		this.theta = theta;
		return this;
	}

	copy(other) {
		this.radius = other.radius;
		this.phi = other.phi;
		this.theta = other.theta;
		return this;
	} // restrict phi to be between EPS and PI-EPS


	makeSafe() {
		const EPS = 0.000001;
		this.phi = Math.max(EPS, Math.min(Math.PI - EPS, this.phi));
		return this;
	}

	setFromVector3(v) {
		return this.setFromCartesianCoords(v.x, v.y, v.z);
	}

	setFromCartesianCoords(x, y, z) {
		this.radius = Math.sqrt(x * x + y * y + z * z);

		if (this.radius === 0) {
			this.theta = 0;
			this.phi = 0;
		} else {
			this.theta = Math.atan2(x, z);
			this.phi = Math.acos(clamp(y / this.radius, -1, 1));
		}

		return this;
	}

	clone() {
		return new this.constructor().copy(this);
	}

}

const _v0 = /*@__PURE__*/new Vector3();

const _v1 = /*@__PURE__*/new Vector3();

const _v2 = /*@__PURE__*/new Vector3();

const _v3 = /*@__PURE__*/new Vector3();

const _vab = /*@__PURE__*/new Vector3();

const _vac = /*@__PURE__*/new Vector3();

const _vbc = /*@__PURE__*/new Vector3();

const _vap = /*@__PURE__*/new Vector3();

const _vbp = /*@__PURE__*/new Vector3();

const _vcp = /*@__PURE__*/new Vector3();

class Triangle {
	constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	static getNormal(a, b, c, target) {
		target.subVectors(c, b);

		_v0.subVectors(a, b);

		target.cross(_v0);
		const targetLengthSq = target.lengthSq();

		if (targetLengthSq > 0) {
			return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
		}

		return target.set(0, 0, 0);
	} // static/instance method to calculate barycentric coordinates
	// based on: http://www.blackpawn.com/texts/pointinpoly/default.html


	static getBarycoord(point, a, b, c, target) {
		_v0.subVectors(c, a);

		_v1.subVectors(b, a);

		_v2.subVectors(point, a);

		const dot00 = _v0.dot(_v0);

		const dot01 = _v0.dot(_v1);

		const dot02 = _v0.dot(_v2);

		const dot11 = _v1.dot(_v1);

		const dot12 = _v1.dot(_v2);

		const denom = dot00 * dot11 - dot01 * dot01; // collinear or singular triangle

		if (denom === 0) {
			// arbitrary location outside of triangle?
			// not sure if this is the best idea, maybe should be returning undefined
			return target.set(-2, -1, -1);
		}

		const invDenom = 1 / denom;
		const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		const v = (dot00 * dot12 - dot01 * dot02) * invDenom; // barycentric coordinates must always sum to 1

		return target.set(1 - u - v, v, u);
	}

	static containsPoint(point, a, b, c) {
		this.getBarycoord(point, a, b, c, _v3);
		return _v3.x >= 0 && _v3.y >= 0 && _v3.x + _v3.y <= 1;
	}

	static getUV(point, p1, p2, p3, uv1, uv2, uv3, target) {
		this.getBarycoord(point, p1, p2, p3, _v3);
		target.set(0, 0);
		target.addScaledVector(uv1, _v3.x);
		target.addScaledVector(uv2, _v3.y);
		target.addScaledVector(uv3, _v3.z);
		return target;
	}

	static isFrontFacing(a, b, c, direction) {
		_v0.subVectors(c, b);

		_v1.subVectors(a, b); // strictly front facing


		return _v0.cross(_v1).dot(direction) < 0 ? true : false;
	}

	set(a, b, c) {
		this.a.copy(a);
		this.b.copy(b);
		this.c.copy(c);
		return this;
	}

	setFromPointsAndIndices(points, i0, i1, i2) {
		this.a.copy(points[i0]);
		this.b.copy(points[i1]);
		this.c.copy(points[i2]);
		return this;
	} // setFromAttributeAndIndices( attribute, i0, i1, i2 ) {
	// 	this.a.fromBufferAttribute( attribute, i0 );
	// 	this.b.fromBufferAttribute( attribute, i1 );
	// 	this.c.fromBufferAttribute( attribute, i2 );
	// 	return this;
	// }


	clone() {
		return new this.constructor().copy(this);
	}

	copy(triangle) {
		this.a.copy(triangle.a);
		this.b.copy(triangle.b);
		this.c.copy(triangle.c);
		return this;
	}

	getArea() {
		_v0.subVectors(this.c, this.b);

		_v1.subVectors(this.a, this.b);

		return _v0.cross(_v1).length() * 0.5;
	}

	getMidpoint(target) {
		return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}

	getNormal(target) {
		return Triangle.getNormal(this.a, this.b, this.c, target);
	}

	getPlane(target) {
		return target.setFromCoplanarPoints(this.a, this.b, this.c);
	}

	getBarycoord(point, target) {
		return Triangle.getBarycoord(point, this.a, this.b, this.c, target);
	}

	getUV(point, uv1, uv2, uv3, target) {
		return Triangle.getUV(point, this.a, this.b, this.c, uv1, uv2, uv3, target);
	}

	containsPoint(point) {
		return Triangle.containsPoint(point, this.a, this.b, this.c);
	}

	isFrontFacing(direction) {
		return Triangle.isFrontFacing(this.a, this.b, this.c, direction);
	}

	intersectsBox(box) {
		return box.intersectsTriangle(this);
	}

	closestPointToPoint(p, target) {
		const a = this.a,
					b = this.b,
					c = this.c;
		let v, w; // algorithm thanks to Real-Time Collision Detection by Christer Ericson,
		// published by Morgan Kaufmann Publishers, (c) 2005 Elsevier Inc.,
		// under the accompanying license; see chapter 5.1.5 for detailed explanation.
		// basically, we're distinguishing which of the voronoi regions of the triangle
		// the point lies in with the minimum amount of redundant computation.

		_vab.subVectors(b, a);

		_vac.subVectors(c, a);

		_vap.subVectors(p, a);

		const d1 = _vab.dot(_vap);

		const d2 = _vac.dot(_vap);

		if (d1 <= 0 && d2 <= 0) {
			// vertex region of A; barycentric coords (1, 0, 0)
			return target.copy(a);
		}

		_vbp.subVectors(p, b);

		const d3 = _vab.dot(_vbp);

		const d4 = _vac.dot(_vbp);

		if (d3 >= 0 && d4 <= d3) {
			// vertex region of B; barycentric coords (0, 1, 0)
			return target.copy(b);
		}

		const vc = d1 * d4 - d3 * d2;

		if (vc <= 0 && d1 >= 0 && d3 <= 0) {
			v = d1 / (d1 - d3); // edge region of AB; barycentric coords (1-v, v, 0)

			return target.copy(a).addScaledVector(_vab, v);
		}

		_vcp.subVectors(p, c);

		const d5 = _vab.dot(_vcp);

		const d6 = _vac.dot(_vcp);

		if (d6 >= 0 && d5 <= d6) {
			// vertex region of C; barycentric coords (0, 0, 1)
			return target.copy(c);
		}

		const vb = d5 * d2 - d1 * d6;

		if (vb <= 0 && d2 >= 0 && d6 <= 0) {
			w = d2 / (d2 - d6); // edge region of AC; barycentric coords (1-w, 0, w)

			return target.copy(a).addScaledVector(_vac, w);
		}

		const va = d3 * d6 - d5 * d4;

		if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
			_vbc.subVectors(c, b);

			w = (d4 - d3) / (d4 - d3 + (d5 - d6)); // edge region of BC; barycentric coords (0, 1-w, w)

			return target.copy(b).addScaledVector(_vbc, w); // edge region of BC
		} // face region


		const denom = 1 / (va + vb + vc); // u = va * denom

		v = vb * denom;
		w = vc * denom;
		return target.copy(a).addScaledVector(_vab, v).addScaledVector(_vac, w);
	}

	equals(triangle) {
		return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
	}

}

class Vector4 {
	constructor(x = 0, y = 0, z = 0, w = 1) {
		Vector4.prototype.isVector4 = true;
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}

	get width() {
		return this.z;
	}

	set width(value) {
		this.z = value;
	}

	get height() {
		return this.w;
	}

	set height(value) {
		this.w = value;
	}

	set(x, y, z, w) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		return this;
	}

	setScalar(scalar) {
		this.x = scalar;
		this.y = scalar;
		this.z = scalar;
		this.w = scalar;
		return this;
	}

	setX(x) {
		this.x = x;
		return this;
	}

	setY(y) {
		this.y = y;
		return this;
	}

	setZ(z) {
		this.z = z;
		return this;
	}

	setW(w) {
		this.w = w;
		return this;
	}

	setComponent(index, value) {
		switch (index) {
			case 0:
				this.x = value;
				break;

			case 1:
				this.y = value;
				break;

			case 2:
				this.z = value;
				break;

			case 3:
				this.w = value;
				break;

			default:
				throw new Error('index is out of range: ' + index);
		}

		return this;
	}

	getComponent(index) {
		switch (index) {
			case 0:
				return this.x;

			case 1:
				return this.y;

			case 2:
				return this.z;

			case 3:
				return this.w;

			default:
				throw new Error('index is out of range: ' + index);
		}
	}

	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}

	copy(v) {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = v.w !== undefined ? v.w : 1;
		return this;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;
		return this;
	}

	addScalar(s) {
		this.x += s;
		this.y += s;
		this.z += s;
		this.w += s;
		return this;
	}

	addVectors(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;
		return this;
	}

	addScaledVector(v, s) {
		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		this.w += v.w * s;
		return this;
	}

	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;
		return this;
	}

	subScalar(s) {
		this.x -= s;
		this.y -= s;
		this.z -= s;
		this.w -= s;
		return this;
	}

	subVectors(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;
		return this;
	}

	multiply(v) {
		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		this.w *= v.w;
		return this;
	}

	multiplyScalar(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		this.w *= scalar;
		return this;
	}

	applyMatrix4(m) {
		const x = this.x,
					y = this.y,
					z = this.z,
					w = this.w;
		const e = m.elements;
		this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
		this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
		this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
		this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
		return this;
	}

	divideScalar(scalar) {
		return this.multiplyScalar(1 / scalar);
	}

	setAxisAngleFromQuaternion(q) {
		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
		// q is assumed to be normalized
		this.w = 2 * Math.acos(q.w);
		const s = Math.sqrt(1 - q.w * q.w);

		if (s < 0.0001) {
			this.x = 1;
			this.y = 0;
			this.z = 0;
		} else {
			this.x = q.x / s;
			this.y = q.y / s;
			this.z = q.z / s;
		}

		return this;
	}

	setAxisAngleFromRotationMatrix(m) {
		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
		let angle, x, y, z; // variables for result

		const epsilon = 0.01,
					// margin to allow for rounding errors
		epsilon2 = 0.1,
					// margin to distinguish between 0 and 180 degrees
		te = m.elements,
					m11 = te[0],
					m12 = te[4],
					m13 = te[8],
					m21 = te[1],
					m22 = te[5],
					m23 = te[9],
					m31 = te[2],
					m32 = te[6],
					m33 = te[10];

		if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
			// singularity found
			// first check for identity matrix which must have +1 for all terms
			// in leading diagonal and zero in other terms
			if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
				// this singularity is identity matrix so angle = 0
				this.set(1, 0, 0, 0);
				return this; // zero angle, arbitrary axis
			} // otherwise this singularity is angle = 180


			angle = Math.PI;
			const xx = (m11 + 1) / 2;
			const yy = (m22 + 1) / 2;
			const zz = (m33 + 1) / 2;
			const xy = (m12 + m21) / 4;
			const xz = (m13 + m31) / 4;
			const yz = (m23 + m32) / 4;

			if (xx > yy && xx > zz) {
				// m11 is the largest diagonal term
				if (xx < epsilon) {
					x = 0;
					y = 0.707106781;
					z = 0.707106781;
				} else {
					x = Math.sqrt(xx);
					y = xy / x;
					z = xz / x;
				}
			} else if (yy > zz) {
				// m22 is the largest diagonal term
				if (yy < epsilon) {
					x = 0.707106781;
					y = 0;
					z = 0.707106781;
				} else {
					y = Math.sqrt(yy);
					x = xy / y;
					z = yz / y;
				}
			} else {
				// m33 is the largest diagonal term so base result on this
				if (zz < epsilon) {
					x = 0.707106781;
					y = 0.707106781;
					z = 0;
				} else {
					z = Math.sqrt(zz);
					x = xz / z;
					y = yz / z;
				}
			}

			this.set(x, y, z, angle);
			return this; // return 180 deg rotation
		} // as we have reached here there are no singularities so we can handle normally


		let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12)); // used to normalize

		if (Math.abs(s) < 0.001) s = 1; // prevent divide by zero, should not happen if matrix is orthogonal and should be
		// caught by singularity test above, but I've left it in just in case

		this.x = (m32 - m23) / s;
		this.y = (m13 - m31) / s;
		this.z = (m21 - m12) / s;
		this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
		return this;
	}

	min(v) {
		this.x = Math.min(this.x, v.x);
		this.y = Math.min(this.y, v.y);
		this.z = Math.min(this.z, v.z);
		this.w = Math.min(this.w, v.w);
		return this;
	}

	max(v) {
		this.x = Math.max(this.x, v.x);
		this.y = Math.max(this.y, v.y);
		this.z = Math.max(this.z, v.z);
		this.w = Math.max(this.w, v.w);
		return this;
	}

	clamp(min, max) {
		// assumes min < max, componentwise
		this.x = Math.max(min.x, Math.min(max.x, this.x));
		this.y = Math.max(min.y, Math.min(max.y, this.y));
		this.z = Math.max(min.z, Math.min(max.z, this.z));
		this.w = Math.max(min.w, Math.min(max.w, this.w));
		return this;
	}

	clampScalar(minVal, maxVal) {
		this.x = Math.max(minVal, Math.min(maxVal, this.x));
		this.y = Math.max(minVal, Math.min(maxVal, this.y));
		this.z = Math.max(minVal, Math.min(maxVal, this.z));
		this.w = Math.max(minVal, Math.min(maxVal, this.w));
		return this;
	}

	clampLength(min, max) {
		const length = this.length();
		return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
	}

	floor() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.z = Math.floor(this.z);
		this.w = Math.floor(this.w);
		return this;
	}

	ceil() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		this.z = Math.ceil(this.z);
		this.w = Math.ceil(this.w);
		return this;
	}

	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		this.z = Math.round(this.z);
		this.w = Math.round(this.w);
		return this;
	}

	roundToZero() {
		this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
		this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
		this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
		this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w);
		return this;
	}

	negate() {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		this.w = -this.w;
		return this;
	}

	dot(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
	}

	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}

	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}

	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}

	normalize() {
		return this.divideScalar(this.length() || 1);
	}

	setLength(length) {
		return this.normalize().multiplyScalar(length);
	}

	lerp(v, alpha) {
		this.x += (v.x - this.x) * alpha;
		this.y += (v.y - this.y) * alpha;
		this.z += (v.z - this.z) * alpha;
		this.w += (v.w - this.w) * alpha;
		return this;
	}

	lerpVectors(v1, v2, alpha) {
		this.x = v1.x + (v2.x - v1.x) * alpha;
		this.y = v1.y + (v2.y - v1.y) * alpha;
		this.z = v1.z + (v2.z - v1.z) * alpha;
		this.w = v1.w + (v2.w - v1.w) * alpha;
		return this;
	}

	equals(v) {
		return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
	}

	fromArray(array, offset = 0) {
		this.x = array[offset];
		this.y = array[offset + 1];
		this.z = array[offset + 2];
		this.w = array[offset + 3];
		return this;
	}

	toArray(array = [], offset = 0) {
		array[offset] = this.x;
		array[offset + 1] = this.y;
		array[offset + 2] = this.z;
		array[offset + 3] = this.w;
		return array;
	} // fromBufferAttribute( attribute, index ) {
	// 	this.x = attribute.getX( index );
	// 	this.y = attribute.getY( index );
	// 	this.z = attribute.getZ( index );
	// 	this.w = attribute.getW( index );
	// 	return this;
	// }


	random() {
		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();
		this.w = Math.random();
		return this;
	}

	*[Symbol.iterator]() {
		yield this.x;
		yield this.y;
		yield this.z;
		yield this.w;
	}

}

exports.ACESFilmicToneMapping = ACESFilmicToneMapping;
exports.AddEquation = AddEquation;
exports.AddOperation = AddOperation;
exports.AdditiveAnimationBlendMode = AdditiveAnimationBlendMode;
exports.AdditiveBlending = AdditiveBlending;
exports.AlphaFormat = AlphaFormat;
exports.AlwaysDepth = AlwaysDepth;
exports.AlwaysStencilFunc = AlwaysStencilFunc;
exports.BackSide = BackSide;
exports.BasicDepthPacking = BasicDepthPacking;
exports.BasicShadowMap = BasicShadowMap;
exports.Box2 = Box2;
exports.Box3 = Box3;
exports.ByteType = ByteType;
exports.CineonToneMapping = CineonToneMapping;
exports.ClampToEdgeWrapping = ClampToEdgeWrapping;
exports.Color = Color;
exports.ColorManagement = ColorManagement;
exports.CubeReflectionMapping = CubeReflectionMapping;
exports.CubeRefractionMapping = CubeRefractionMapping;
exports.CubeUVReflectionMapping = CubeUVReflectionMapping;
exports.CullFaceBack = CullFaceBack;
exports.CullFaceFront = CullFaceFront;
exports.CullFaceFrontBack = CullFaceFrontBack;
exports.CullFaceNone = CullFaceNone;
exports.CustomBlending = CustomBlending;
exports.CustomToneMapping = CustomToneMapping;
exports.Cylindrical = Cylindrical;
exports.DecrementStencilOp = DecrementStencilOp;
exports.DecrementWrapStencilOp = DecrementWrapStencilOp;
exports.DepthFormat = DepthFormat;
exports.DepthStencilFormat = DepthStencilFormat;
exports.DoubleSide = DoubleSide;
exports.DstAlphaFactor = DstAlphaFactor;
exports.DstColorFactor = DstColorFactor;
exports.DynamicCopyUsage = DynamicCopyUsage;
exports.DynamicDrawUsage = DynamicDrawUsage;
exports.DynamicReadUsage = DynamicReadUsage;
exports.EqualDepth = EqualDepth;
exports.EqualStencilFunc = EqualStencilFunc;
exports.EquirectangularReflectionMapping = EquirectangularReflectionMapping;
exports.EquirectangularRefractionMapping = EquirectangularRefractionMapping;
exports.Euler = Euler;
exports.FloatType = FloatType;
exports.FrontSide = FrontSide;
exports.GLSL1 = GLSL1;
exports.GLSL3 = GLSL3;
exports.GreaterDepth = GreaterDepth;
exports.GreaterEqualDepth = GreaterEqualDepth;
exports.GreaterEqualStencilFunc = GreaterEqualStencilFunc;
exports.GreaterStencilFunc = GreaterStencilFunc;
exports.HalfFloatType = HalfFloatType;
exports.IncrementStencilOp = IncrementStencilOp;
exports.IncrementWrapStencilOp = IncrementWrapStencilOp;
exports.IntType = IntType;
exports.Interpolant = Interpolant;
exports.InterpolateDiscrete = InterpolateDiscrete;
exports.InterpolateLinear = InterpolateLinear;
exports.InterpolateSmooth = InterpolateSmooth;
exports.InvertStencilOp = InvertStencilOp;
exports.KeepStencilOp = KeepStencilOp;
exports.LessDepth = LessDepth;
exports.LessEqualDepth = LessEqualDepth;
exports.LessEqualStencilFunc = LessEqualStencilFunc;
exports.LessStencilFunc = LessStencilFunc;
exports.Line3 = Line3;
exports.LinearEncoding = LinearEncoding;
exports.LinearFilter = LinearFilter;
exports.LinearMipMapLinearFilter = LinearMipMapLinearFilter;
exports.LinearMipMapNearestFilter = LinearMipMapNearestFilter;
exports.LinearMipmapLinearFilter = LinearMipmapLinearFilter;
exports.LinearMipmapNearestFilter = LinearMipmapNearestFilter;
exports.LinearSRGBColorSpace = LinearSRGBColorSpace;
exports.LinearToSRGB = LinearToSRGB;
exports.LinearToneMapping = LinearToneMapping;
exports.LoopOnce = LoopOnce;
exports.LoopPingPong = LoopPingPong;
exports.LoopRepeat = LoopRepeat;
exports.LuminanceAlphaFormat = LuminanceAlphaFormat;
exports.LuminanceFormat = LuminanceFormat;
exports.MOUSE = MOUSE;
exports.MathUtils = MathUtils;
exports.Matrix3 = Matrix3;
exports.Matrix4 = Matrix4;
exports.MaxEquation = MaxEquation;
exports.MinEquation = MinEquation;
exports.MirroredRepeatWrapping = MirroredRepeatWrapping;
exports.MixOperation = MixOperation;
exports.MultiplyBlending = MultiplyBlending;
exports.MultiplyOperation = MultiplyOperation;
exports.NearestFilter = NearestFilter;
exports.NearestMipMapLinearFilter = NearestMipMapLinearFilter;
exports.NearestMipMapNearestFilter = NearestMipMapNearestFilter;
exports.NearestMipmapLinearFilter = NearestMipmapLinearFilter;
exports.NearestMipmapNearestFilter = NearestMipmapNearestFilter;
exports.NeverDepth = NeverDepth;
exports.NeverStencilFunc = NeverStencilFunc;
exports.NoBlending = NoBlending;
exports.NoColorSpace = NoColorSpace;
exports.NoToneMapping = NoToneMapping;
exports.NormalAnimationBlendMode = NormalAnimationBlendMode;
exports.NormalBlending = NormalBlending;
exports.NotEqualDepth = NotEqualDepth;
exports.NotEqualStencilFunc = NotEqualStencilFunc;
exports.ObjectSpaceNormalMap = ObjectSpaceNormalMap;
exports.OneFactor = OneFactor;
exports.OneMinusDstAlphaFactor = OneMinusDstAlphaFactor;
exports.OneMinusDstColorFactor = OneMinusDstColorFactor;
exports.OneMinusSrcAlphaFactor = OneMinusSrcAlphaFactor;
exports.OneMinusSrcColorFactor = OneMinusSrcColorFactor;
exports.PCFShadowMap = PCFShadowMap;
exports.PCFSoftShadowMap = PCFSoftShadowMap;
exports.Plane = Plane;
exports.Quaternion = Quaternion;
exports.REVISION = REVISION;
exports.RGBADepthPacking = RGBADepthPacking;
exports.RGBAFormat = RGBAFormat;
exports.RGBAIntegerFormat = RGBAIntegerFormat;
exports.RGBA_ASTC_10x10_Format = RGBA_ASTC_10x10_Format;
exports.RGBA_ASTC_10x5_Format = RGBA_ASTC_10x5_Format;
exports.RGBA_ASTC_10x6_Format = RGBA_ASTC_10x6_Format;
exports.RGBA_ASTC_10x8_Format = RGBA_ASTC_10x8_Format;
exports.RGBA_ASTC_12x10_Format = RGBA_ASTC_12x10_Format;
exports.RGBA_ASTC_12x12_Format = RGBA_ASTC_12x12_Format;
exports.RGBA_ASTC_4x4_Format = RGBA_ASTC_4x4_Format;
exports.RGBA_ASTC_5x4_Format = RGBA_ASTC_5x4_Format;
exports.RGBA_ASTC_5x5_Format = RGBA_ASTC_5x5_Format;
exports.RGBA_ASTC_6x5_Format = RGBA_ASTC_6x5_Format;
exports.RGBA_ASTC_6x6_Format = RGBA_ASTC_6x6_Format;
exports.RGBA_ASTC_8x5_Format = RGBA_ASTC_8x5_Format;
exports.RGBA_ASTC_8x6_Format = RGBA_ASTC_8x6_Format;
exports.RGBA_ASTC_8x8_Format = RGBA_ASTC_8x8_Format;
exports.RGBA_BPTC_Format = RGBA_BPTC_Format;
exports.RGBA_ETC2_EAC_Format = RGBA_ETC2_EAC_Format;
exports.RGBA_PVRTC_2BPPV1_Format = RGBA_PVRTC_2BPPV1_Format;
exports.RGBA_PVRTC_4BPPV1_Format = RGBA_PVRTC_4BPPV1_Format;
exports.RGBA_S3TC_DXT1_Format = RGBA_S3TC_DXT1_Format;
exports.RGBA_S3TC_DXT3_Format = RGBA_S3TC_DXT3_Format;
exports.RGBA_S3TC_DXT5_Format = RGBA_S3TC_DXT5_Format;
exports.RGBFormat = RGBFormat;
exports.RGB_ETC1_Format = RGB_ETC1_Format;
exports.RGB_ETC2_Format = RGB_ETC2_Format;
exports.RGB_PVRTC_2BPPV1_Format = RGB_PVRTC_2BPPV1_Format;
exports.RGB_PVRTC_4BPPV1_Format = RGB_PVRTC_4BPPV1_Format;
exports.RGB_S3TC_DXT1_Format = RGB_S3TC_DXT1_Format;
exports.RGFormat = RGFormat;
exports.RGIntegerFormat = RGIntegerFormat;
exports.Ray = Ray;
exports.RedFormat = RedFormat;
exports.RedIntegerFormat = RedIntegerFormat;
exports.ReinhardToneMapping = ReinhardToneMapping;
exports.RepeatWrapping = RepeatWrapping;
exports.ReplaceStencilOp = ReplaceStencilOp;
exports.ReverseSubtractEquation = ReverseSubtractEquation;
exports.SRGBColorSpace = SRGBColorSpace;
exports.SRGBToLinear = SRGBToLinear;
exports.ShortType = ShortType;
exports.Sphere = Sphere;
exports.Spherical = Spherical;
exports.SrcAlphaFactor = SrcAlphaFactor;
exports.SrcAlphaSaturateFactor = SrcAlphaSaturateFactor;
exports.SrcColorFactor = SrcColorFactor;
exports.StaticCopyUsage = StaticCopyUsage;
exports.StaticDrawUsage = StaticDrawUsage;
exports.StaticReadUsage = StaticReadUsage;
exports.StreamCopyUsage = StreamCopyUsage;
exports.StreamDrawUsage = StreamDrawUsage;
exports.StreamReadUsage = StreamReadUsage;
exports.SubtractEquation = SubtractEquation;
exports.SubtractiveBlending = SubtractiveBlending;
exports.TOUCH = TOUCH;
exports.TangentSpaceNormalMap = TangentSpaceNormalMap;
exports.Triangle = Triangle;
exports.TriangleFanDrawMode = TriangleFanDrawMode;
exports.TriangleStripDrawMode = TriangleStripDrawMode;
exports.TrianglesDrawMode = TrianglesDrawMode;
exports.UVMapping = UVMapping;
exports.UnsignedByteType = UnsignedByteType;
exports.UnsignedInt248Type = UnsignedInt248Type;
exports.UnsignedIntType = UnsignedIntType;
exports.UnsignedShort4444Type = UnsignedShort4444Type;
exports.UnsignedShort5551Type = UnsignedShort5551Type;
exports.UnsignedShortType = UnsignedShortType;
exports.VSMShadowMap = VSMShadowMap;
exports.Vector2 = Vector2;
exports.Vector3 = Vector3;
exports.Vector4 = Vector4;
exports.WrapAroundEnding = WrapAroundEnding;
exports.ZeroCurvatureEnding = ZeroCurvatureEnding;
exports.ZeroFactor = ZeroFactor;
exports.ZeroSlopeEnding = ZeroSlopeEnding;
exports.ZeroStencilOp = ZeroStencilOp;
exports._SRGBAFormat = _SRGBAFormat;
exports.sRGBEncoding = sRGBEncoding;


export default exports;
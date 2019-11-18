/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

;/*!
 * ApexCharts v3.6.2
 * (c) 2018-2019 Juned Chhipa
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).ApexCharts=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function s(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},s=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),s.forEach(function(e){a(t,e,i[e])})}return t}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d=function(){function i(){e(this,i)}return s(i,[{key:"shadeRGBColor",value:function(t,e){var i=e.split(","),s=t<0?0:255,a=t<0?-1*t:t,n=parseInt(i[0].slice(4)),r=parseInt(i[1]),o=parseInt(i[2]);return"rgb("+(Math.round((s-n)*a)+n)+","+(Math.round((s-r)*a)+r)+","+(Math.round((s-o)*a)+o)+")"}},{key:"shadeHexColor",value:function(t,e){var i=parseInt(e.slice(1),16),s=t<0?0:255,a=t<0?-1*t:t,n=i>>16,r=i>>8&255,o=255&i;return"#"+(16777216+65536*(Math.round((s-n)*a)+n)+256*(Math.round((s-r)*a)+r)+(Math.round((s-o)*a)+o)).toString(16).slice(1)}},{key:"shadeColor",value:function(t,e){return e.length>7?this.shadeRGBColor(t,e):this.shadeHexColor(t,e)}}],[{key:"bind",value:function(t,e){return function(){return t.apply(e,arguments)}}},{key:"isObject",value:function(e){return e&&"object"===t(e)&&!Array.isArray(e)&&null!=e}},{key:"extend",value:function(t,e){var i=this;"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var s=arguments[i];if(null!=s)for(var a in s)s.hasOwnProperty(a)&&(e[a]=s[a])}return e});var s=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach(function(n){i.isObject(e[n])&&n in t?s[n]=i.extend(t[n],e[n]):Object.assign(s,a({},n,e[n]))}),s}},{key:"extendArray",value:function(t,e){var s=[];return t.map(function(t){s.push(i.extend(e,t))}),t=s}},{key:"monthMod",value:function(t){return t%12}},{key:"addProps",value:function(t,e,i){"string"==typeof e&&(e=e.split(".")),t[e[0]]=t[e[0]]||{};var s=t[e[0]];return e.length>1?(e.shift(),this.addProps(s,e,i)):t[e[0]]=i,t}},{key:"clone",value:function(e){if("[object Array]"===Object.prototype.toString.call(e)){for(var i=[],s=0;s<e.length;s++)i[s]=this.clone(e[s]);return i}if("object"===t(e)){var a={};for(var n in e)e.hasOwnProperty(n)&&(a[n]=this.clone(e[n]));return a}return e}},{key:"log10",value:function(t){return Math.log(t)/Math.LN10}},{key:"roundToBase10",value:function(t){return Math.pow(10,Math.floor(Math.log10(t)))}},{key:"roundToBase",value:function(t,e){return Math.pow(e,Math.floor(Math.log(t)/Math.log(e)))}},{key:"parseNumber",value:function(t){return null===t?t:parseFloat(t)}},{key:"getDimensions",value:function(t){var e=getComputedStyle(t),i=[],s=t.clientHeight,a=t.clientWidth;return s-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom),a-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight),i.push(a),i.push(s),i}},{key:"getBoundingClientRect",value:function(t){var e=t.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height,x:e.x,y:e.y}}},{key:"hexToRgba",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#999999",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;"#"!==t.substring(0,1)&&(t="#999999");var i=t.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var s=0;s<i.length;s++)i[s]=parseInt(1===i[s].length?i[s]+i[s]:i[s],16);return void 0!==e&&i.push(e),"rgba("+i.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))[3]}},{key:"rgb2hex",value:function(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)}},{key:"polarToCartesian",value:function(t,e,i,s){var a=(s-90)*Math.PI/180;return{x:t+i*Math.cos(a),y:e+i*Math.sin(a)}}},{key:"escapeString",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",i=t.toString().slice();return i=i.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,e)}},{key:"negToZero",value:function(t){return t<0?0:t}},{key:"moveIndexInArray",value:function(t,e,i){if(i>=t.length)for(var s=i-t.length+1;s--;)t.push(void 0);return t.splice(i,0,t.splice(e,1)[0]),t}},{key:"extractNumber",value:function(t){return parseFloat(t.replace(/[^\d\.]*/g,""))}},{key:"randomString",value:function(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",s=0;s<t;s++)e+=i.charAt(Math.floor(Math.random()*i.length));return e}},{key:"findAncestor",value:function(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}},{key:"setELstyles",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style.key=e[i])}},{key:"isNumber",value:function(t){return!isNaN(t)&&parseFloat(Number(t))===t&&!isNaN(parseInt(t,10))}},{key:"isFloat",value:function(t){return Number(t)===t&&t%1!=0}},{key:"isSafari",value:function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isFirefox",value:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}},{key:"isIE11",value:function(){if(-1!==window.navigator.userAgent.indexOf("MSIE")||window.navigator.appVersion.indexOf("Trident/")>-1)return!0}},{key:"isIE",value:function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var i=t.indexOf("rv:");return parseInt(t.substring(i+3,t.indexOf(".",i)),10)}var s=t.indexOf("Edge/");return s>0&&parseInt(t.substring(s+5,t.indexOf(".",s)),10)}}]),i}(),u=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return s(t,[{key:"getDefaultFilter",value:function(t){var e=this.w;t.unfilter(!0),(new window.SVG.Filter).size("120%","180%","-5%","-40%"),"none"!==e.config.states.normal.filter?this.applyFilter(t,e.config.states.normal.filter.type,e.config.states.normal.filter.value):e.config.chart.dropShadow.enabled&&this.dropShadow(t,e.config.chart.dropShadow)}},{key:"addNormalFilter",value:function(t){var e=this.w;e.config.chart.dropShadow.enabled&&this.dropShadow(t,e.config.chart.dropShadow)}},{key:"addDesaturateFilter",value:function(t){var e=this,i=this.w;t.unfilter(!0);var s=new window.SVG.Filter;s.size("120%","180%","-5%","-40%"),t.filter(function(t){var a=i.config.chart.dropShadow;(s=a.enabled?e.addShadow(t,a):t).colorMatrix("matrix",[0,0,0,0,.5,0,0,0,0,.5,0,0,0,0,.5,0,0,0,1,0]).colorMatrix("saturate",0)}),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse")}},{key:"addLightenFilter",value:function(t,e){var i=this,s=this.w,a=e.intensity;if(!d.isFirefox()){t.unfilter(!0);var n=new window.SVG.Filter;n.size("120%","180%","-5%","-40%"),t.filter(function(t){var e=s.config.chart.dropShadow;(n=e.enabled?i.addShadow(t,e):t).componentTransfer({rgb:{type:"linear",slope:1.5,intercept:a}})}),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse")}}},{key:"addDarkenFilter",value:function(t,e){var i=this,s=this.w,a=e.intensity;if(!d.isFirefox()){t.unfilter(!0);var n=new window.SVG.Filter;n.size("120%","180%","-5%","-40%"),t.filter(function(t){var e=s.config.chart.dropShadow;(n=e.enabled?i.addShadow(t,e):t).componentTransfer({rgb:{type:"linear",slope:a}})}),t.filterer.node.setAttribute("filterUnits","userSpaceOnUse")}}},{key:"applyFilter",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5;switch(e){case"none":this.addNormalFilter(t);break;case"lighten":this.addLightenFilter(t,{intensity:i});break;case"darken":this.addDarkenFilter(t,{intensity:i});break;case"desaturate":this.addDesaturateFilter(t)}}},{key:"addShadow",value:function(t,e){var i=e.blur,s=e.top,a=e.left,n=e.color,r=e.opacity,o=t.flood(n,r).composite(t.sourceAlpha,"in").offset(a,s).gaussianBlur(i).merge(t.source);return t.blend(t.source,o)}},{key:"dropShadow",value:function(t,e){var i=e.top,s=e.left,a=e.blur,n=e.color,r=e.opacity,o=e.noUserSpaceOnUse;return t.unfilter(!0),(new window.SVG.Filter).size("120%","180%","-5%","-40%"),t.filter(function(t){var e=null;e=d.isSafari()||d.isFirefox()||d.isIE()?t.flood(n,r).composite(t.sourceAlpha,"in").offset(s,i).gaussianBlur(a):t.flood(n,r).composite(t.sourceAlpha,"in").offset(s,i).gaussianBlur(a).merge(t.source),t.blend(t.source,e)}),o||t.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),t}},{key:"setSelectionFilter",value:function(t,e,i){var s=this.w;if(void 0!==s.globals.selectedDataPoints[e]&&s.globals.selectedDataPoints[e].indexOf(i)>-1){t.node.setAttribute("selected",!0);var a=s.config.states.active.filter;"none"!==a&&this.applyFilter(t,a.type,a.value)}}}]),t}(),g=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.setEasingFunctions()}return s(t,[{key:"setEasingFunctions",value:function(){var t;switch(this.w.config.chart.animations.easing){case"linear":t="-";break;case"easein":t="<";break;case"easeout":t=">";break;case"easeinout":t="<>";break;case"swing":t=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1};break;case"bounce":t=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};break;case"elastic":t=function(t){return t===!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1};break;default:t="<>"}this.w.globals.easing=t}},{key:"animateLine",value:function(t,e,i,s){t.attr(e).animate(s).attr(i)}},{key:"animateCircleRadius",value:function(t,e,i,s,a){e||(e=0),t.attr({r:e}).animate(s,a).attr({r:i})}},{key:"animateCircle",value:function(t,e,i,s,a){t.attr({r:e.r,cx:e.cx,cy:e.cy}).animate(s,a).attr({r:i.r,cx:i.cx,cy:i.cy})}},{key:"animateRect",value:function(t,e,i,s,a){t.attr(e).animate(s).attr(i).afterAll(function(){a()})}},{key:"animatePathsGradually",value:function(t){var e=t.el,i=t.j,s=t.pathFrom,a=t.pathTo,n=t.speed,r=t.delay,o=t.strokeWidth,l=this.w,h=0;l.config.chart.animations.animateGradually.enabled&&(h=l.config.chart.animations.animateGradually.delay),l.config.chart.animations.dynamicAnimation.enabled&&l.globals.dataChanged&&(h=0),this.morphSVG(e,i,s,a,n,o,r*h)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach(function(t){t.el.classList.remove("hidden")})}},{key:"morphSVG",value:function(t,e,i,s,a,n,r){var o=this,l=this.w;i||(i=t.attr("pathFrom")),s||(s=t.attr("pathTo")),(!i||i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(l.globals.gridHeight),a=1),(s.indexOf("undefined")>-1||s.indexOf("NaN")>-1)&&(s="M 0 ".concat(l.globals.gridHeight),a=1),l.globals.shouldAnimate||(a=1),t.plot(i).animate(1,l.globals.easing,r).plot(i).animate(a,l.globals.easing,r).plot(s).afterAll(function(){d.isNumber(e)?e===l.globals.series[l.globals.maxValsInArrayIndex].length-2&&l.globals.shouldAnimate&&(l.globals.animationEnded=!0):l.globals.shouldAnimate&&(l.globals.animationEnded=!0,"function"==typeof l.config.chart.events.animationEnd&&l.config.chart.events.animationEnd(o.ctx,l)),o.showDelayedElements()})}}]),t}(),f=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return s(t,[{key:"drawLine",value:function(t,e,i,s){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#a8a8a8",n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return this.w.globals.dom.Paper.line().attr({x1:t,y1:e,x2:i,y2:s,stroke:a,"stroke-dasharray":n,"stroke-width":r})}},{key:"drawRect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#fefefe",r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,c=this.w.globals.dom.Paper.rect();return c.attr({x:t,y:e,width:i>0?i:0,height:s>0?s:0,rx:a,ry:a,fill:n,opacity:r,"stroke-width":null!==o?o:0,stroke:null!==l?l:"none","stroke-dasharray":h}),c}},{key:"drawPolygon",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#e1e1e1",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none";return this.w.globals.dom.Paper.polygon(t).attr({fill:i,stroke:e})}},{key:"drawCircle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.w.globals.dom.Paper.circle(2*t);return null!==e&&i.attr(e),i}},{key:"drawPath",value:function(t){var e=t.d,i=void 0===e?"":e,s=t.stroke,a=void 0===s?"#a8a8a8":s,n=t.strokeWidth,r=void 0===n?1:n,o=t.fill,l=t.fillOpacity,h=void 0===l?1:l,c=t.strokeOpacity,d=void 0===c?1:c,u=t.classes,g=t.strokeLinecap,f=void 0===g?null:g,p=t.strokeDashArray,x=void 0===p?0:p,m=this.w;return null===f&&(f=m.config.stroke.lineCap),(i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(m.globals.gridHeight)),m.globals.dom.Paper.path(i).attr({fill:o,"fill-opacity":h,stroke:a,"stroke-opacity":d,"stroke-linecap":f,"stroke-width":r,"stroke-dasharray":x,class:u})}},{key:"group",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w.globals.dom.Paper.group();return null!==t&&e.attr(t),e}},{key:"move",value:function(t,e){var i=["M",t,e].join(" ");return i}},{key:"line",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=null;return null===i?s=["L",t,e].join(" "):"H"===i?s=["H",t].join(" "):"V"===i&&(s=["V",e].join(" ")),s}},{key:"curve",value:function(t,e,i,s,a,n){var r=["C",t,e,i,s,a,n].join(" ");return r}},{key:"quadraticCurve",value:function(t,e,i,s){return["Q",t,e,i,s].join(" ")}},{key:"arc",value:function(t,e,i,s,a,n,r){var o="A";arguments.length>7&&void 0!==arguments[7]&&arguments[7]&&(o="a");var l=[o,t,e,i,s,a,n,r].join(" ");return l}},{key:"renderPaths",value:function(t){var e,i=t.i,s=t.j,a=t.realIndex,r=t.pathFrom,o=t.pathTo,l=t.stroke,h=t.strokeWidth,c=t.strokeLinecap,d=t.fill,f=t.animationDelay,p=t.initialSpeed,x=t.dataChangeSpeed,m=t.className,v=t.id,b=t.shouldClipToGrid,y=void 0===b||b,w=t.bindEventsOnPaths,k=void 0===w||w,A=this.w,S=new u(this.ctx),C=new g(this.ctx),L=this.w.config.chart.animations.enabled,z=L&&this.w.config.chart.animations.dynamicAnimation.enabled,M=!!(L&&!A.globals.resized||z&&A.globals.dataChanged&&A.globals.shouldAnimate);M?e=r:(e=o,this.w.globals.animationEnded=!0);var P=A.config.stroke.dashArray,E=0;E=Array.isArray(P)?P[a]:A.config.stroke.dashArray;var T=this.drawPath({d:e,stroke:l,strokeWidth:h,fill:d,fillOpacity:1,classes:m,strokeLinecap:c,strokeDashArray:E});if(T.attr("id","".concat(v,"-").concat(i)),T.attr("index",a),y&&T.attr({"clip-path":"url(#gridRectMask".concat(A.globals.cuid,")")}),"none"!==A.config.states.normal.filter.type)S.getDefaultFilter(T,A.config.states.normal.filter.type,A.config.states.normal.filter.value);else if(A.config.chart.dropShadow.enabled&&(!A.config.chart.dropShadow.enabledSeries||A.config.chart.dropShadow.enabledSeries&&-1!==A.config.chart.dropShadow.enabledSeries.indexOf(a))){var X=A.config.chart.dropShadow;S.dropShadow(T,X)}k&&(T.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,T)),T.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,T)),T.node.addEventListener("mousedown",this.pathMouseDown.bind(this,T))),T.attr({pathTo:o,pathFrom:r});var I={el:T,j:s,pathFrom:r,pathTo:o,strokeWidth:h};return!L||A.globals.resized||A.globals.dataChanged?!A.globals.resized&&A.globals.dataChanged||C.showDelayedElements():C.animatePathsGradually(n({},I,{speed:p,delay:f})),A.globals.dataChanged&&z&&M&&C.animatePathsGradually(n({},I,{speed:x})),T}},{key:"drawPattern",value:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#a8a8a8",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return this.w.globals.dom.Paper.pattern(e,i,function(n){"horizontalLines"===t?n.line(0,0,i,0).stroke({color:s,width:a+1}):"verticalLines"===t?n.line(0,0,0,e).stroke({color:s,width:a+1}):"slantedLines"===t?n.line(0,0,e,i).stroke({color:s,width:a}):"squares"===t?n.rect(e,i).fill("none").stroke({color:s,width:a}):"circles"===t&&n.circle(e).fill("none").stroke({color:s,width:a})})}},{key:"drawGradient",value:function(t,e,i,s,a){var n,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,c=this.w;e=d.hexToRgba(e,s),i=d.hexToRgba(i,a);var u=0,g=1,f=1,p=null;null!==o&&(u=void 0!==o[0]?o[0]/100:0,g=void 0!==o[1]?o[1]/100:1,f=void 0!==o[2]?o[2]/100:1,p=void 0!==o[3]?o[3]/100:null);var x=!("donut"!==c.config.chart.type&&"pie"!==c.config.chart.type&&"bubble"!==c.config.chart.type);if(n=null===l||0===l.length?c.globals.dom.Paper.gradient(x?"radial":"linear",function(t){t.at(u,e,s),t.at(g,i,a),t.at(f,i,a),null!==p&&t.at(p,e,s)}):c.globals.dom.Paper.gradient(x?"radial":"linear",function(t){(Array.isArray(l[h])?l[h]:l).forEach(function(e){t.at(e.offset/100,e.color,e.opacity)})}),x){var m=c.globals.gridWidth/2,v=c.globals.gridHeight/2;"bubble"!==c.config.chart.type?n.attr({gradientUnits:"userSpaceOnUse",cx:m,cy:v,r:r}):n.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else"vertical"===t?n.from(0,0).to(0,1):"diagonal"===t?n.from(0,0).to(1,1):"horizontal"===t?n.from(0,1).to(1,1):"diagonal2"===t&&n.from(0,1).to(2,2);return n}},{key:"drawText",value:function(t){var e,i=this.w,s=t.x,a=t.y,n=t.text,r=t.textAnchor,o=t.fontSize,l=t.fontFamily,h=t.foreColor,c=t.opacity;return r||(r="start"),h||(h=i.config.chart.foreColor),l=l||i.config.chart.fontFamily,(e=Array.isArray(n)?i.globals.dom.Paper.text(function(t){for(var e=0;e<n.length;e++)t.tspan(n[e])}):i.globals.dom.Paper.plain(n)).attr({x:s,y:a,"text-anchor":r,"dominant-baseline":"central","font-size":o,"font-family":l,fill:h,class:(t.cssClass,t.cssClass)}),e.node.style.fontFamily=l,e.node.style.opacity=c,e}},{key:"addTspan",value:function(t,e,i){var s=t.tspan(e);i||(i=this.w.config.chart.fontFamily),s.node.style.fontFamily=i}},{key:"drawMarker",value:function(t,e,i){t=t||0;var s=i.pSize||0,a=null;if("square"===i.shape){var n=void 0===i.pRadius?s/2:i.pRadius;null===e&&(s=0,n=0);var r=1.2*s+n,o=this.drawRect(r,r,r,r,n);o.attr({x:t-r/2,y:e-r/2,cx:t,cy:e,class:i.class?i.class:"",fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,stroke:i.pointStrokeColor,"stroke-width":i.pWidth?i.pWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}),a=o}else"circle"===i.shape&&(d.isNumber(e)||(s=0,e=0),a=this.drawCircle(s,{cx:t,cy:e,class:i.class?i.class:"",stroke:i.pointStrokeColor,fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,"stroke-width":i.pWidth?i.pWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}));return a}},{key:"pathMouseEnter",value:function(t,e){var i=this.w,s=new u(this.ctx),a=parseInt(t.node.getAttribute("index")),n=parseInt(t.node.getAttribute("j"));if("function"==typeof i.config.chart.events.dataPointMouseEnter&&i.config.chart.events.dataPointMouseEnter(e,this.ctx,{seriesIndex:a,dataPointIndex:n,w:i}),this.ctx.fireEvent("dataPointMouseEnter",[e,this.ctx,{seriesIndex:a,dataPointIndex:n,w:i}]),("none"===i.config.states.active.filter.type||"true"!==t.node.getAttribute("selected"))&&"none"!==i.config.states.hover.filter.type&&"none"!==i.config.states.active.filter.type&&!i.globals.isTouchDevice){var r=i.config.states.hover.filter;s.applyFilter(t,r.type,r.value)}}},{key:"pathMouseLeave",value:function(t,e){var i=this.w,s=new u(this.ctx),a=parseInt(t.node.getAttribute("index")),n=parseInt(t.node.getAttribute("j"));"function"==typeof i.config.chart.events.dataPointMouseLeave&&i.config.chart.events.dataPointMouseLeave(e,this.ctx,{seriesIndex:a,dataPointIndex:n,w:i}),this.ctx.fireEvent("dataPointMouseLeave",[e,this.ctx,{seriesIndex:a,dataPointIndex:n,w:i}]),"none"!==i.config.states.active.filter.type&&"true"===t.node.getAttribute("selected")||"none"!==i.config.states.hover.filter.type&&s.getDefaultFilter(t)}},{key:"pathMouseDown",value:function(t,e){var i=this.w,s=new u(this.ctx),a=parseInt(t.node.getAttribute("index")),n=parseInt(t.node.getAttribute("j")),r="false";if("true"===t.node.getAttribute("selected")){if(t.node.setAttribute("selected","false"),i.globals.selectedDataPoints[a].indexOf(n)>-1){var o=i.globals.selectedDataPoints[a].indexOf(n);i.globals.selectedDataPoints[a].splice(o,1)}}else{if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0){i.globals.selectedDataPoints=[];var l=i.globals.dom.Paper.select(".apexcharts-series path").members,h=i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members;l.forEach(function(t){t.node.setAttribute("selected","false"),s.getDefaultFilter(t)}),h.forEach(function(t){t.node.setAttribute("selected","false"),s.getDefaultFilter(t)})}t.node.setAttribute("selected","true"),r="true",void 0===i.globals.selectedDataPoints[a]&&(i.globals.selectedDataPoints[a]=[]),i.globals.selectedDataPoints[a].push(n)}if("true"===r){var c=i.config.states.active.filter;"none"!==c&&s.applyFilter(t,c.type,c.value)}else"none"!==i.config.states.active.filter.type&&s.getDefaultFilter(t);"function"==typeof i.config.chart.events.dataPointSelection&&i.config.chart.events.dataPointSelection(e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:a,dataPointIndex:n,w:i}),this.ctx.fireEvent("dataPointSelection",[e,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:a,dataPointIndex:n,w:i}])}},{key:"rotateAroundCenter",value:function(t){var e=t.getBBox();return{x:e.x+e.width/2,y:e.y+e.height/2}}},{key:"getTextRects",value:function(t,e,i,s){var a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],n=this.w,r=this.drawText({x:-200,y:-200,text:t,textAnchor:"start",fontSize:e,fontFamily:i,foreColor:"#fff",opacity:0});s&&r.attr("transform",s),n.globals.dom.Paper.add(r);var o=r.bbox();return a||(o=r.node.getBoundingClientRect()),r.remove(),{width:o.width,height:o.height}}},{key:"placeTextWithEllipsis",value:function(t,e,i){if(t.textContent=e,e.length>0&&t.getSubStringLength(0,e.length)>=i){for(var s=e.length-3;s>0;s-=3)if(t.getSubStringLength(0,s)<=i)return void(t.textContent=e.substring(0,s)+"...");t.textContent="..."}}}],[{key:"setAttrs",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i,e[i])}}]),t}();var p={name:"en",options:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}}},x=function(){function t(){e(this,t),this.yAxis={show:!0,showAlways:!1,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,tickAmount:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:2,labels:{show:!0,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#78909C",offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#78909C",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.xAxisAnnotation={x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.yAxisAnnotation={y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",opacity:.3,offsetX:0,offsetY:0,yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,cssClass:"",padding:{left:5,right:5,top:0,bottom:2}}}},this.pointAnnotation={x:0,y:null,yAxisIndex:0,seriesIndex:0,marker:{size:0,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,radius:2,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,text:void 0,textAnchor:"middle",offsetX:0,offsetY:-15,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,cssClass:"",padding:{left:5,right:5,top:0,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0}}}return s(t,[{key:"init",value:function(){return{annotations:{position:"front",yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation]},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",locales:[p],defaultLocale:"en",dropShadow:{enabled:!1,enabledSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.35},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,legendClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,zoomed:void 0,scrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",id:void 0,group:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!1,target:void 0},stacked:!1,stackType:"normal",toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{bar:{horizontal:!1,endingShape:"flat",columnWidth:"70%",barHeight:"70%",distributed:!1,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1},dataLabels:{position:"top"}},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,distributed:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{size:void 0,inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,color:void 0,offsetY:0},value:{show:!0,fontSize:"14px",fontFamily:void 0,color:void 0,offsetY:16,formatter:function(t){return t+"%"}},total:{show:!1,label:"Total",color:"#373d3f",formatter:function(t){return t.globals.seriesTotals.reduce(function(t,e){return t+e},0)/t.globals.series.length+"%"}}}},pie:{size:void 0,customScale:1,offsetX:0,offsetY:0,expandOnClick:!0,dataLabels:{offset:0},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,color:void 0,offsetY:-10},value:{show:!0,fontSize:"20px",fontFamily:void 0,color:void 0,offsetY:10,formatter:function(t){return t}},total:{show:!1,label:"Total",color:"#373d3f",formatter:function(t){return t.globals.seriesTotals.reduce(function(t,e){return t+e},0)}}}}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(t){return t},textAnchor:"middle",offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,colors:void 0},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"sqaures",width:6,height:6,strokeWidth:2}},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1,animate:!1}},yaxis:{lines:{show:!0,animate:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",fontSize:"12px",fontFamily:void 0,width:void 0,height:void 0,formatter:void 0,offsetX:-20,offsetY:0,labels:{colors:void 0,useSeriesColors:!1},markers:{width:12,height:12,strokeWidth:0,strokeColor:"#fff",radius:12,customHTML:void 0,offsetX:0,offsetY:0,onClick:void 0},itemMargin:{horizontal:0,vertical:5},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,fillOpacity:1,shape:"circle",radius:2,offsetX:0,offsetY:0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"lighten",value:.15}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken",value:.65}}},title:{text:void 0,align:"left",margin:10,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:10,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0},tooltip:{enabled:!0,shared:!0,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(t){return t}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],offsetX:0,offsetY:0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!0,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss"}},axisBorder:{show:!0,color:"#78909C",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#78909C",height:6,offsetX:0,offsetY:0},tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.4}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),t}(),m=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.graphics=new f(this.ctx),"bar"===this.w.config.chart.type&&this.w.config.plotOptions.bar.horizontal&&(this.invertAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return s(t,[{key:"drawAnnotations",value:function(){var t=this.w;if(t.globals.axisCharts){for(var e=this.drawYAxisAnnotations(),i=this.drawXAxisAnnotations(),s=this.drawPointAnnotations(),a=t.config.chart.animations.enabled,n=[e,i,s],r=[i.node,e.node,s.node],o=0;o<3;o++)t.globals.dom.elGraphical.add(n[o]),!a||t.globals.resized||t.globals.dataChanged||r[o].classList.add("hidden"),t.globals.delayedElements.push({el:r[o],index:0});this.setOrientations(t.config.annotations.xaxis),this.annotationsBackground()}}},{key:"addXaxisAnnotation",value:function(t,e,i){var s=this.w,a=this.invertAxis?s.globals.minY:s.globals.minX,n=this.invertAxis?s.globals.yRange[0]:s.globals.xRange,r=(t.x-a)/(n/s.globals.gridWidth);if("category"===s.config.xaxis.type||s.config.xaxis.convertedCatToNumeric){var o=s.globals.labels.indexOf(t.x),l=s.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(o+1)+")");r=parseFloat(l.getAttribute("x"))}var h=t.strokeDashArray;if(!(r<0||r>s.globals.gridWidth)){if(null===t.x2){var c=this.graphics.drawLine(r+t.offsetX,0+t.offsetY,r+t.offsetX,s.globals.gridHeight+t.offsetY,t.borderColor,h);e.appendChild(c.node)}else{var d=(t.x2-a)/(n/s.globals.gridWidth);if(d<r){var u=r;r=d,d=u}var g=this.graphics.drawRect(r+t.offsetX,0+t.offsetY,d-r,s.globals.gridHeight+t.offsetY,0,t.fillColor,t.opacity,1,t.borderColor,h);e.appendChild(g.node)}var f="top"===t.label.position?-3:s.globals.gridHeight,p=t.label.text?t.label.text:"",x=this.graphics.drawText({x:r+t.label.offsetX,y:f+t.label.offsetY,text:p,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,foreColor:t.label.style.color,cssClass:"apexcharts-xaxis-annotation-label "+t.label.style.cssClass});x.attr({rel:i}),e.appendChild(x.node)}}},{key:"drawXAxisAnnotations",value:function(){var t=this,e=this.w,i=this.graphics.group({class:"apexcharts-xaxis-annotations"});return e.config.annotations.xaxis.map(function(e,s){t.addXaxisAnnotation(e,i.node,s)}),i}},{key:"addYaxisAnnotation",value:function(t,e,i){var s,a,n=this.w,r=t.strokeDashArray;if(this.invertAxis){var o=n.globals.labels.indexOf(t.y),l=n.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(o+1)+")");s=parseFloat(l.getAttribute("y"))}else s=n.globals.gridHeight-(t.y-n.globals.minYArr[t.yAxisIndex])/(n.globals.yRange[t.yAxisIndex]/n.globals.gridHeight),n.config.yaxis[t.yAxisIndex].reversed&&(s=(t.y-n.globals.minYArr[t.yAxisIndex])/(n.globals.yRange[t.yAxisIndex]/n.globals.gridHeight));var h=t.label.text?t.label.text:"";if(null===t.y2){var c=this.graphics.drawLine(0+t.offsetX,s+t.offsetY,n.globals.gridWidth+t.offsetX,s+t.offsetY,t.borderColor,r);e.appendChild(c.node)}else{if(this.invertAxis){var d=n.globals.labels.indexOf(t.y2),u=n.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(d+1)+")");a=parseFloat(u.getAttribute("y"))}else a=n.globals.gridHeight-(t.y2-n.globals.minYArr[t.yAxisIndex])/(n.globals.yRange[t.yAxisIndex]/n.globals.gridHeight),n.config.yaxis[t.yAxisIndex].reversed&&(a=(t.y2-n.globals.minYArr[t.yAxisIndex])/(n.globals.yRange[t.yAxisIndex]/n.globals.gridHeight));if(a>s){var g=s;s=a,a=g}var f=this.graphics.drawRect(0+t.offsetX,a+t.offsetY,n.globals.gridWidth+t.offsetX,s-a,0,t.fillColor,t.opacity,1,t.borderColor,r);e.appendChild(f.node)}var p="right"===t.label.position?n.globals.gridWidth:0,x=this.graphics.drawText({x:p+t.label.offsetX,y:(a||s)+t.label.offsetY-3,text:h,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,foreColor:t.label.style.color,cssClass:"apexcharts-yaxis-annotation-label "+t.label.style.cssClass});x.attr({rel:i}),e.appendChild(x.node)}},{key:"drawYAxisAnnotations",value:function(){var t=this,e=this.w,i=this.graphics.group({class:"apexcharts-yaxis-annotations"});return e.config.annotations.yaxis.map(function(e,s){t.addYaxisAnnotation(e,i.node,s)}),i}},{key:"clearAnnotations",value:function(t){t.w.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations").forEach(function(t){for(;t.firstChild;)t.removeChild(t.firstChild)})}},{key:"addPointAnnotation",value:function(t,e,i){var s=this.w,a=0,n=0,r=0;if(this.invertAxis&&console.warn("Point annotation is not supported in horizontal bar charts."),"string"==typeof t.x){var o=s.globals.labels.indexOf(t.x),l=s.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(o+1)+")");a=parseFloat(l.getAttribute("x"));var h=t.y;null===t.y&&(h=s.globals.series[t.seriesIndex][o]),n=s.globals.gridHeight-(h-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight)-parseInt(t.label.style.fontSize)-t.marker.size,r=s.globals.gridHeight-(h-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight),s.config.yaxis[t.yAxisIndex].reversed&&(n=(h-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight)+parseInt(t.label.style.fontSize)+t.marker.size,r=(h-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight))}else a=(t.x-s.globals.minX)/(s.globals.xRange/s.globals.gridWidth),n=s.globals.gridHeight-(parseFloat(t.y)-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight)-parseInt(t.label.style.fontSize)-t.marker.size,r=s.globals.gridHeight-(t.y-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight),s.config.yaxis[t.yAxisIndex].reversed&&(n=(parseFloat(t.y)-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight)-parseInt(t.label.style.fontSize)-t.marker.size,r=(t.y-s.globals.minYArr[t.yAxisIndex])/(s.globals.yRange[t.yAxisIndex]/s.globals.gridHeight));if(!(a<0||a>s.globals.gridWidth)){var c={pSize:t.marker.size,pWidth:t.marker.strokeWidth,pointFillColor:t.marker.fillColor,pointStrokeColor:t.marker.strokeColor,shape:t.marker.shape,radius:t.marker.radius,class:"apexcharts-point-annotation-marker "+t.marker.cssClass},d=this.graphics.drawMarker(a+t.marker.offsetX,r+t.marker.offsetY,c);e.appendChild(d.node);var u=t.label.text?t.label.text:"",g=this.graphics.drawText({x:a+t.label.offsetX,y:n+t.label.offsetY,text:u,textAnchor:t.label.textAnchor,fontSize:t.label.style.fontSize,fontFamily:t.label.style.fontFamily,foreColor:t.label.style.color,cssClass:"apexcharts-point-annotation-label "+t.label.style.cssClass});if(g.attr({rel:i}),e.appendChild(g.node),t.customSVG.SVG){var f=this.graphics.group({class:"apexcharts-point-annotations-custom-svg "+t.customSVG.cssClass});f.attr({transform:"translate(".concat(a+t.customSVG.offsetX,", ").concat(n+t.customSVG.offsetY,")")}),f.node.innerHTML=t.customSVG.SVG,e.appendChild(f.node)}}}},{key:"drawPointAnnotations",value:function(){var t=this,e=this.w,i=this.graphics.group({class:"apexcharts-point-annotations"});return e.config.annotations.points.map(function(e,s){t.addPointAnnotation(e,i.node,s)}),i}},{key:"setOrientations",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=this.w;t.map(function(t,a){if("vertical"===t.label.orientation){var n=null!==i?i:a,r=s.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(n,"']"));if(null!==r){var o=r.getBoundingClientRect();r.setAttribute("x",parseFloat(r.getAttribute("x"))-o.height+4),"top"===t.label.position?r.setAttribute("y",parseFloat(r.getAttribute("y"))+o.width):r.setAttribute("y",parseFloat(r.getAttribute("y"))-o.width);var l=e.graphics.rotateAroundCenter(r),h=l.x,c=l.y;r.setAttribute("transform","rotate(-90 ".concat(h," ").concat(c,")"))}}})}},{key:"addBackgroundToAnno",value:function(t,e){var i=this.w.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),s=t.getBoundingClientRect(),a=e.label.style.padding.left,n=e.label.style.padding.right,r=e.label.style.padding.top,o=e.label.style.padding.bottom;"vertical"===e.label.orientation&&(r=e.label.style.padding.left,o=e.label.style.padding.right,a=e.label.style.padding.top,n=e.label.style.padding.bottom);var l=s.left-i.left-a,h=s.top-i.top-r;return this.graphics.drawRect(l,h,s.width+a+n,s.height+r+o,0,e.label.style.background,1,e.label.borderWidth,e.label.borderColor,0)}},{key:"annotationsBackground",value:function(){var t=this,e=this.w,i=function(i,s,a){var n=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(a,"-annotations .apexcharts-").concat(a,"-annotation-label[rel='").concat(s,"']"));if(n){var r=n.parentNode,o=t.addBackgroundToAnno(n,i);r.insertBefore(o.node,n)}};e.config.annotations.xaxis.map(function(t,e){i(t,e,"xaxis")}),e.config.annotations.yaxis.map(function(t,e){i(t,e,"yaxis")}),e.config.annotations.points.map(function(t,e){i(t,e,"point")})}},{key:"addText",value:function(t,e,i){var s=t.x,a=t.y,n=t.text,r=t.textAnchor,o=t.appendTo,l=void 0===o?".apexcharts-inner":o,h=t.foreColor,c=t.fontSize,d=t.fontFamily,u=t.cssClass,g=t.backgroundColor,f=t.borderWidth,p=t.strokeDashArray,x=t.radius,m=t.borderColor,v=t.paddingLeft,b=void 0===v?4:v,y=t.paddingRight,w=void 0===y?4:y,k=t.paddingBottom,A=void 0===k?2:k,S=t.paddingTop,C=void 0===S?2:S,L=i,z=L.w,M=z.globals.dom.baseEl.querySelector(l),P=this.graphics.drawText({x:s,y:a,text:n,textAnchor:r||"start",fontSize:c||"12px",fontFamily:d||z.config.chart.fontFamily,foreColor:h||z.config.chart.foreColor,cssClass:u});M.appendChild(P.node);var E=P.bbox(),T=this.graphics.drawRect(E.x-b,E.y-C,E.width+b+w,E.height+A+C,x,g,1,f,m,p);return P.before(T),e&&z.globals.memory.methodsToExec.push({context:L,method:L.addText,params:{x:s,y:a,text:n,textAnchor:r,appendTo:l,foreColor:h,fontSize:c,cssClass:u,backgroundColor:g,borderWidth:f,strokeDashArray:p,radius:x,borderColor:m,paddingLeft:b,paddingRight:w,paddingBottom:A,paddingTop:C}}),i}},{key:"addPointAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"point",contextMethod:i.addPointAnnotation}),i}},{key:"addYaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"yaxis",contextMethod:i.addYaxisAnnotation}),i}},{key:"addXaxisAnnotationExternal",value:function(t,e,i){return this.addAnnotationExternal({params:t,pushToMemory:e,context:i,type:"xaxis",contextMethod:i.addXaxisAnnotation}),i}},{key:"addAnnotationExternal",value:function(t){var e=t.params,i=t.pushToMemory,s=t.context,a=t.type,n=t.contextMethod,r=s,o=r.w,l=o.globals.dom.baseEl.querySelector(".apexcharts-".concat(a,"-annotations")),h=l.childNodes.length+1,c=new x,u=Object.assign({},"xaxis"===a?c.xAxisAnnotation:"yaxis"===a?c.yAxisAnnotation:c.pointAnnotation),g=d.extend(u,e);switch(a){case"xaxis":this.addXaxisAnnotation(g,l,h);break;case"yaxis":this.addYaxisAnnotation(g,l,h);break;case"point":this.addPointAnnotation(g,l,h)}var f=o.globals.dom.baseEl.querySelector(".apexcharts-".concat(a,"-annotations .apexcharts-").concat(a,"-annotation-label[rel='").concat(h,"']")),p=this.addBackgroundToAnno(f,g);return l.insertBefore(p.node,f),i&&o.globals.memory.methodsToExec.push({context:r,method:n,params:e}),s}}]),t}(),v=function(){function t(i){e(this,t),this.opts=i}return s(t,[{key:"line",value:function(){return{chart:{animations:{easing:"swing"}},dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(t){this.opts.yaxis[0].labels.show=!1,this.opts.yaxis[0].floating=!0;return d.extend(t,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"bar",value:function(){return{chart:{stacked:!1,animations:{easing:"swing"}},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]}},stroke:{width:0},fill:{opacity:.85},legend:{markers:{shape:"square",radius:2,size:8}},tooltip:{shared:!1},xaxis:{tooltip:{enabled:!1},crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"candlestick",value:function(){return{stroke:{width:1,colors:["#333"]},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(t){var e=t.seriesIndex,i=t.dataPointIndex,s=t.w;return'<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">'+s.globals.seriesCandleO[e][i]+'</span></div><div>High: <span class="value">'+s.globals.seriesCandleH[e][i]+'</span></div><div>Low: <span class="value">'+s.globals.seriesCandleL[e][i]+'</span></div><div>Close: <span class="value">'+s.globals.seriesCandleC[e][i]+"</span></div></div>"}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"area",value:function(){return{stroke:{width:4},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"brush",value:function(t){return d.extend(t,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(){var t=this;this.opts.dataLabels=this.opts.dataLabels||{},this.opts.dataLabels.formatter=this.opts.dataLabels.formatter||void 0;var e=this.opts.dataLabels.formatter;this.opts.yaxis.forEach(function(e,i){t.opts.yaxis[i].min=0,t.opts.yaxis[i].max=100}),"bar"===this.opts.chart.type&&(this.opts.dataLabels.formatter=e||function(t){return"number"==typeof t&&t?t.toFixed(0)+"%":t})}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:2,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1,zoom:{enabled:!1}},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square",size:10,offsetY:2}},grid:{padding:{right:20}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"dark",shadeIntensity:.35,inverseColors:!1,stops:[0,100,100]}},padding:{right:0,left:0},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(t){return t.toFixed(1)+"%"},style:{colors:["#fff"]},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"vertical",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},padding:{right:0,left:0},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.style.fontSize="13px",this.opts.yaxis[0].labels.offsetY=6,{dataLabels:{enabled:!0,style:{colors:["#a8a8a8"],fontSize:"11px"}},stroke:{width:2},markers:{size:3,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1},xaxis:{tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},padding:{right:0,left:0},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0}}}}],[{key:"convertCatToNumeric",value:function(t){t.xaxis.type="numeric",t.xaxis.convertedCatToNumeric=!0,t.xaxis.labels=t.xaxis.labels||{},t.xaxis.labels.formatter=t.xaxis.labels.formatter||function(t){return t},t.chart=t.chart||{},t.chart.zoom=t.chart.zoom||window.Apex.chart&&window.Apex.chart.zoom||{};var e=t.xaxis.labels.formatter,i=t.xaxis.categories&&t.xaxis.categories.length?t.xaxis.categories:t.labels;return i&&i.length&&(t.xaxis.labels.formatter=function(t){return e(i[t-1])}),t.xaxis.categories=[],t.labels=[],t.chart.zoom.enabled=!1,t}}]),t}(),b=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return s(t,[{key:"getStackedSeriesTotals",value:function(){for(var t=this.w,e=[],i=0;i<t.globals.series[t.globals.maxValsInArrayIndex].length;i++){for(var s=0,a=0;a<t.globals.series.length;a++)s+=t.globals.series[a][i];e.push(s)}return t.globals.stackedSeriesTotals=e,e}},{key:"getSeriesTotalByIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===t?this.w.config.series.reduce(function(t,e){return t+e},0):this.w.globals.series[t].reduce(function(t,e){return t+e},0)}},{key:"isSeriesNull",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 0===(null===t?this.w.config.series.filter(function(t){return null!==t}):this.w.globals.series[t].filter(function(t){return null!==t})).length}},{key:"seriesHaveSameValues",value:function(t){return this.w.globals.series[t].every(function(t,e,i){return t===i[0]})}},{key:"getLargestSeries",value:function(){var t=this.w;t.globals.maxValsInArrayIndex=t.globals.series.map(function(t){return t.length}).indexOf(Math.max.apply(Math,t.globals.series.map(function(t){return t.length})))}},{key:"getLargestMarkerSize",value:function(){var t=this.w,e=0;return t.globals.markers.size.forEach(function(t){e=Math.max(e,t)}),t.globals.markers.largestSize=e,e}},{key:"getSeriesTotals",value:function(){var t=this.w;t.globals.seriesTotals=t.globals.series.map(function(t,e){var i=0;if(Array.isArray(t))for(var s=0;s<t.length;s++)i+=t[s];else i+=t;return i})}},{key:"getSeriesTotalsXRange",value:function(t,e){var i=this.w;return i.globals.series.map(function(s,a){for(var n=0,r=0;r<s.length;r++)i.globals.seriesX[a][r]>t&&i.globals.seriesX[a][r]<e&&(n+=s[r]);return n})}},{key:"getPercentSeries",value:function(){var t=this.w;t.globals.seriesPercent=t.globals.series.map(function(e,i){var s=[];if(Array.isArray(e))for(var a=0;a<e.length;a++){var n=t.globals.stackedSeriesTotals[a],r=100*e[a]/n;s.push(r)}else{var o=100*e/t.globals.seriesTotals.reduce(function(t,e){return t+e},0);s.push(o)}return s})}},{key:"getCalculatedRatios",value:function(){var t,e,i,s,a,n=this.w.globals,r=[],o=[],l=.1,h=0;if(n.yRange=[],n.isMultipleYAxis)for(var c=0;c<n.minYArr.length;c++)n.yRange.push(Math.abs(n.minYArr[c]-n.maxYArr[c])),o.push(0);else n.yRange.push(Math.abs(n.minY-n.maxY));n.xRange=Math.abs(n.maxX-n.minX),n.zRange=Math.abs(n.maxZ-n.minZ);for(var d=0;d<n.yRange.length;d++)r.push(n.yRange[d]/n.gridHeight);if(e=n.xRange/n.gridWidth,i=Math.abs(n.initialmaxX-n.initialminX)/n.gridWidth,t=n.yRange/n.gridWidth,s=n.xRange/n.gridHeight,a=n.zRange/n.gridHeight*16,n.minY!==Number.MIN_VALUE&&0!==Math.abs(n.minY)){if(n.hasNegs=!0,o=[],n.isMultipleYAxis)for(var u=0;u<r.length;u++)o.push(-n.minYArr[u]/r[u]);else o.push(-n.minY/r[0]);l=-n.minY/t,h=n.minX/e}else o.push(0);return{yRatio:r,invertedYRatio:t,zRatio:a,xRatio:e,initialXRatio:i,invertedXRatio:s,baseLineInvertedY:l,baseLineY:o,baseLineX:h}}},{key:"getLogSeries",value:function(t){var e=this.w;return e.globals.seriesLog=t.map(function(t,i){return e.config.yaxis[i]&&e.config.yaxis[i].logarithmic?t.map(function(t){return null===t?null:(Math.log(t)-Math.log(e.globals.minYArr[i]))/(Math.log(e.globals.maxYArr[i])-Math.log(e.globals.minYArr[i]))}):t}),e.globals.seriesLog}},{key:"getLogYRatios",value:function(t){var e=this,i=this.w,s=this.w.globals;return s.yLogRatio=t.slice(),s.logYRange=s.yRange.map(function(t,a){if(i.config.yaxis[a]&&e.w.config.yaxis[a].logarithmic){var n,r=-Number.MAX_VALUE,o=Number.MIN_VALUE;return s.seriesLog.forEach(function(t,e){t.forEach(function(t){i.config.yaxis[e]&&i.config.yaxis[e].logarithmic&&(r=Math.max(t,r),o=Math.min(t,o))})}),n=Math.pow(s.yRange[a],Math.abs(o-r)/s.yRange[a]),s.yLogRatio[a]=n/s.gridHeight,n}}),s.yLogRatio}}],[{key:"checkComboSeries",value:function(t){var e=!1,i=!1;return t.length&&void 0!==t[0].type&&(e=!0,t.forEach(function(t){"bar"!==t.type&&"column"!==t.type||(i=!0)})),{comboCharts:e,comboChartsHasBars:i}}},{key:"extendArrayProps",value:function(t,e){return e.yaxis&&(e=t.extendYAxis(e)),e.annotations&&(e.annotations.yaxis&&(e=t.extendYAxisAnnotations(e)),e.annotations.xaxis&&(e=t.extendXAxisAnnotations(e)),e.annotations.points&&(e=t.extendPointAnnotations(e))),e}}]),t}(),y=function(){function i(t){e(this,i),this.opts=t}return s(i,[{key:"init",value:function(){var e=this.opts,i=new x,s=new v(e);this.chartType=e.chart.type,"histogram"===this.chartType&&(e.chart.type="bar",e=d.extend({plotOptions:{bar:{columnWidth:"99.99%"}}},e)),e.series=this.checkEmptySeries(e.series),e=this.extendYAxis(e),e=this.extendAnnotations(e);var a=i.init(),n={};if(e&&"object"===t(e)){var r={};switch(this.chartType){case"line":r=s.line();break;case"area":r=s.area();break;case"bar":r=s.bar();break;case"candlestick":r=s.candlestick();break;case"histogram":r=s.bar();break;case"bubble":r=s.bubble();break;case"scatter":r=s.scatter();break;case"heatmap":r=s.heatmap();break;case"pie":r=s.pie();break;case"donut":r=s.donut();break;case"radar":r=s.radar();break;case"radialBar":r=s.radialBar();break;default:r=s.line()}e.chart.brush&&e.chart.brush.enabled&&(r=s.brush(r)),e.chart.stacked&&"100%"===e.chart.stackType&&s.stacked100(),e.xaxis=e.xaxis||window.Apex.xaxis||{};var o=b.checkComboSeries(e.series);"line"!==e.chart.type&&"area"!==e.chart.type&&"scatter"!==e.chart.type||o.comboChartsHasBars||"datetime"===e.xaxis.type||"between"===e.xaxis.tickPlacement||(e=v.convertCatToNumeric(e)),(e.chart.sparkline&&e.chart.sparkline.enabled||window.Apex.chart&&window.Apex.chart.sparkline&&window.Apex.chart.sparkline.enabled)&&(r=s.sparkline(r)),n=d.extend(a,r)}var l=d.extend(n,window.Apex);return a=d.extend(l,e),a=this.handleUserInputErrors(a)}},{key:"extendYAxis",value:function(t){var e=new x;return void 0===t.yaxis&&(t.yaxis={}),t.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(t.yaxis=d.extend(t.yaxis,window.Apex.yaxis)),t.yaxis.constructor!==Array?t.yaxis=[d.extend(e.yAxis,t.yaxis)]:t.yaxis=d.extendArray(t.yaxis,e.yAxis),t}},{key:"extendAnnotations",value:function(t){return void 0===t.annotations&&(t.annotations={},t.annotations.yaxis=[],t.annotations.xaxis=[],t.annotations.points=[]),t=this.extendYAxisAnnotations(t),t=this.extendXAxisAnnotations(t),t=this.extendPointAnnotations(t)}},{key:"extendYAxisAnnotations",value:function(t){var e=new x;return t.annotations.yaxis=d.extendArray(void 0!==t.annotations.yaxis?t.annotations.yaxis:[],e.yAxisAnnotation),t}},{key:"extendXAxisAnnotations",value:function(t){var e=new x;return t.annotations.xaxis=d.extendArray(void 0!==t.annotations.xaxis?t.annotations.xaxis:[],e.xAxisAnnotation),t}},{key:"extendPointAnnotations",value:function(t){var e=new x;return t.annotations.points=d.extendArray(void 0!==t.annotations.points?t.annotations.points:[],e.pointAnnotation),t}},{key:"checkEmptySeries",value:function(t){return 0===t.length?[{data:[]}]:t}},{key:"handleUserInputErrors",value:function(t){var e=t;if(e.tooltip.shared&&e.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if(e.chart.scroller&&console.warn("Scroller has been deprecated since v2.0.0. Please remove the configuration for chart.scroller"),"bar"===e.chart.type&&e.plotOptions.bar.horizontal){if("datetime"===e.xaxis.type)throw new Error("Timelines on bars are not supported yet. Switch to column chart by setting plotOptions.bar.horizontal=false");if(e.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");e.yaxis[0].reversed&&(e.yaxis[0].opposite=!0),e.xaxis.tooltip.enabled=!1,e.yaxis[0].tooltip.enabled=!1,e.chart.zoom.enabled=!1}return"bar"===e.chart.type&&e.tooltip.shared&&("barWidth"===e.xaxis.crosshairs.width&&e.series.length>1&&(console.warn('crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart.'),e.xaxis.crosshairs.width="tickWidth"),e.plotOptions.bar.horizontal&&(e.states.hover.type="none"),e.tooltip.followCursor||(console.warn("followCursor option in shared columns cannot be turned off."),e.tooltip.followCursor=!0)),"candlestick"===e.chart.type&&e.yaxis[0].reversed&&(console.warn("Reversed y-axis in candlestick chart is not supported."),e.yaxis[0].reversed=!1),e.chart.group&&0===e.yaxis[0].labels.minWidth&&console.warn("It looks like you have multiple charts in synchronization. You must provide yaxis.labels.minWidth which must be EQUAL for all grouped charts to prevent incorrect behaviour."),Array.isArray(e.stroke.width)&&"line"!==e.chart.type&&"area"!==e.chart.type&&(console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"),e.stroke.width=e.stroke.width[0]),e}}]),i}(),w=function(){function t(){e(this,t)}return s(t,[{key:"globalVars",value:function(t){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:t.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,initialConfig:null,lastXAxis:[],lastYAxis:[],series:[],seriesPercent:[],seriesTotals:[],stackedSeriesTotals:[],seriesX:[],seriesZ:[],labels:[],timelineLabels:[],seriesNames:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],selectedDataPoints:[],ignoreYAxisIndexes:[],padHorizontal:0,maxValsInArrayIndex:0,zoomEnabled:"zoom"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.zoom&&t.chart.zoom.enabled,panEnabled:"pan"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.pan,selectionEnabled:"selection"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.selection,yaxis:null,minY:Number.MIN_VALUE,maxY:-Number.MAX_VALUE,minYArr:[],maxYArr:[],maxX:-Number.MAX_VALUE,initialmaxX:-Number.MAX_VALUE,minX:Number.MIN_VALUE,initialminX:Number.MIN_VALUE,minZ:Number.MIN_VALUE,maxZ:-Number.MAX_VALUE,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yRange:[],zRange:0,xRange:0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,delayedElements:[],axisCharts:!0,isXNumeric:!1,isDataXYZ:!1,resized:!1,resizeTimer:null,comboCharts:!1,comboChartsHasBars:!1,dataChanged:!1,previousPaths:[],seriesXvalues:[],seriesYvalues:[],seriesCandleO:[],seriesCandleH:[],seriesCandleL:[],seriesCandleC:[],allSeriesHasEqualX:!0,dataPoints:0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,easing:null,zoomed:!1,gridWidth:0,gridHeight:0,yAxisScale:[],xAxisScale:null,xAxisTicksPositions:[],timescaleTicks:[],rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yLabelsCoords:[],yTitleCoords:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null,tooltipOpts:null}}},{key:"init",value:function(t){var e=this.globalVars(t);return e.initialConfig=d.extend({},t),e.initialSeries=JSON.parse(JSON.stringify(e.initialConfig.series)),e.lastXAxis=JSON.parse(JSON.stringify(e.initialConfig.xaxis)),e.lastYAxis=JSON.parse(JSON.stringify(e.initialConfig.yaxis)),e}}]),t}(),k=function(){function t(i){e(this,t),this.opts=i}return s(t,[{key:"init",value:function(){var t=new y(this.opts).init();return{config:t,globals:(new w).init(t)}}}]),t}(),A=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.opts=null,this.seriesIndex=0}return s(t,[{key:"clippedImgArea",value:function(t){var e=this.w,i=e.config,s=parseInt(e.globals.gridWidth),a=parseInt(e.globals.gridHeight),n=s>a?s:a,r=t.image,o=0,l=0;void 0===t.width&&void 0===t.height?void 0!==i.fill.image.width&&void 0!==i.fill.image.height?(o=i.fill.image.width+1,l=i.fill.image.height):(o=n+1,l=n):(o=t.width,l=t.height);var h=document.createElementNS(e.globals.SVGNS,"pattern");f.setAttrs(h,{id:t.patternID,patternUnits:t.patternUnits?t.patternUnits:"userSpaceOnUse",width:o+"px",height:l+"px"});var c=document.createElementNS(e.globals.SVGNS,"image");h.appendChild(c),c.setAttributeNS("http://www.w3.org/1999/xlink","href",r),f.setAttrs(c,{x:0,y:0,preserveAspectRatio:"none",width:o+"px",height:l+"px"}),c.style.opacity=t.opacity,e.globals.dom.elDefs.node.appendChild(h)}},{key:"getSeriesIndex",value:function(t){var e=this.w;return"bar"===e.config.chart.type&&e.config.plotOptions.bar.distributed||"heatmap"===e.config.chart.type?this.seriesIndex=t.seriesNumber:this.seriesIndex=t.seriesNumber%e.globals.series.length,this.seriesIndex}},{key:"fillPath",value:function(t){var e=this.w;this.opts=t;var i,s,a,n=this.w.config;this.seriesIndex=this.getSeriesIndex(t);var r=this.getFillColors(),o=r[this.seriesIndex],l=this.getFillType(this.seriesIndex),h=Array.isArray(n.fill.opacity)?n.fill.opacity[this.seriesIndex]:n.fill.opacity,c=o;return t.color&&(o=t.color),-1===o.indexOf("rgb")?c=d.hexToRgba(o,h):o.indexOf("rgba")>-1&&(h="0."+d.getOpacityFromRGBA(r[this.seriesIndex])),"pattern"===l&&(s=this.handlePatternFill(s,o,h,c)),"gradient"===l&&(a=this.handleGradientFill(a,o,h,this.seriesIndex)),n.fill.image.src.length>0&&"image"===l?t.seriesNumber<n.fill.image.src.length?(this.clippedImgArea({opacity:h,image:n.fill.image.src[t.seriesNumber],patternUnits:t.patternUnits,patternID:"pattern".concat(e.globals.cuid).concat(t.seriesNumber+1)}),i="url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber+1,")")):i=c:i="gradient"===l?a:"pattern"===l?s:c,t.solid&&(i=c),i}},{key:"getFillType",value:function(t){var e=this.w;return Array.isArray(e.config.fill.type)?e.config.fill.type[t]:e.config.fill.type}},{key:"getFillColors",value:function(){var t=this.w,e=t.config,i=this.opts,s=[];return t.globals.comboCharts?"line"===t.config.series[this.seriesIndex].type?t.globals.stroke.colors instanceof Array?s=t.globals.stroke.colors:s.push(t.globals.stroke.colors):t.globals.fill.colors instanceof Array?s=t.globals.fill.colors:s.push(t.globals.fill.colors):"line"===e.chart.type?t.globals.stroke.colors instanceof Array?s=t.globals.stroke.colors:s.push(t.globals.stroke.colors):t.globals.fill.colors instanceof Array?s=t.globals.fill.colors:s.push(t.globals.fill.colors),void 0!==i.fillColors&&(s=[],i.fillColors instanceof Array?s=i.fillColors.slice():s.push(i.fillColors)),s}},{key:"handlePatternFill",value:function(t,e,i,s){var a=this.w.config,n=this.opts,r=new f(this.ctx),o=void 0===a.fill.pattern.strokeWidth?Array.isArray(a.stroke.width)?a.stroke.width[this.seriesIndex]:a.stroke.width:Array.isArray(a.fill.pattern.strokeWidth)?a.fill.pattern.strokeWidth[this.seriesIndex]:a.fill.pattern.strokeWidth,l=e;a.fill.pattern.style instanceof Array?t=void 0!==a.fill.pattern.style[n.seriesNumber]?r.drawPattern(a.fill.pattern.style[n.seriesNumber],a.fill.pattern.width,a.fill.pattern.height,l,o,i):s:t=r.drawPattern(a.fill.pattern.style,a.fill.pattern.width,a.fill.pattern.height,l,o,i);return t}},{key:"handleGradientFill",value:function(t,e,i,s){var a,n,r=this.w.config,o=this.opts,l=new f(this.ctx),h=new d,c=r.fill.gradient.type,u=void 0===r.fill.gradient.opacityFrom?i:Array.isArray(r.fill.gradient.opacityFrom)?r.fill.gradient.opacityFrom[s]:r.fill.gradient.opacityFrom,g=void 0===r.fill.gradient.opacityTo?i:Array.isArray(r.fill.gradient.opacityTo)?r.fill.gradient.opacityTo[s]:r.fill.gradient.opacityTo;if(a=e,n=void 0===r.fill.gradient.gradientToColors||0===r.fill.gradient.gradientToColors.length?"dark"===r.fill.gradient.shade?h.shadeColor(-1*parseFloat(r.fill.gradient.shadeIntensity),e):h.shadeColor(parseFloat(r.fill.gradient.shadeIntensity),e):r.fill.gradient.gradientToColors[o.seriesNumber],r.fill.gradient.inverseColors){var p=a;a=n,n=p}return l.drawGradient(c,a,n,u,g,o.size,r.fill.gradient.stops,r.fill.gradient.colorStops,s)}}]),t}(),S=function(){function t(i,s){e(this,t),this.ctx=i,this.w=i.w}return s(t,[{key:"setGlobalMarkerSize",value:function(){var t=this.w;if(t.globals.markers.size=Array.isArray(t.config.markers.size)?t.config.markers.size:[t.config.markers.size],t.globals.markers.size.length>0){if(t.globals.markers.size.length<t.globals.series.length+1)for(var e=0;e<=t.globals.series.length;e++)void 0===t.globals.markers.size[e]&&t.globals.markers.size.push(t.globals.markers.size[0])}else t.globals.markers.size=t.config.series.map(function(e){return t.config.markers.size})}},{key:"plotChartMarkers",value:function(t,e,i){var s,a=this,n=this.w,r=t,o=null,l=new f(this.ctx);if(n.globals.markers.size[e]>0&&(o=l.group({class:"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(n.globals.cuid,")")),r.x instanceof Array)for(var h=function(t){var h=i;1===i&&0===t&&(h=0),1===i&&1===t&&(h=1);var c="apexcharts-marker";if("line"!==n.config.chart.type&&"area"!==n.config.chart.type||n.globals.comboCharts||n.config.tooltip.intersect||(c+=" no-pointer-events"),Array.isArray(n.config.markers.size)?n.globals.markers.size[e]>0:n.config.markers.size>0){d.isNumber(r.y[t])?c+=" w".concat((Math.random()+1).toString(36).substring(4)):c="apexcharts-nullpoint";var g=a.getMarkerConfig(c,e);n.config.markers.discrete.map(function(t){t.seriesIndex===e&&t.dataPointIndex===h&&(g.pointStrokeColor=t.strokeColor,g.pointFillColor=t.fillColor,g.pSize=t.size)}),(s=l.drawMarker(r.x[t],r.y[t],g)).attr("rel",h),s.attr("j",h),s.attr("index",e),s.node.setAttribute("default-marker-size",g.pSize),new u(a.ctx).setSelectionFilter(s,e,h),a.addEvents(s),o&&o.add(s)}else void 0===n.globals.pointsArray[e]&&(n.globals.pointsArray[e]=[]),n.globals.pointsArray[e].push([r.x[t],r.y[t]])},c=0;c<r.x.length;c++)h(c);return o}},{key:"getMarkerConfig",value:function(t,e){var i=this.w,s=this.getMarkerStyle(e);return{pSize:i.globals.markers.size[e],pRadius:i.config.markers.radius,pWidth:i.config.markers.strokeWidth,pointStrokeColor:s.pointStrokeColor,pointFillColor:s.pointFillColor,shape:i.config.markers.shape instanceof Array?i.config.markers.shape[e]:i.config.markers.shape,class:t,pointStrokeOpacity:i.config.markers.strokeOpacity,pointFillOpacity:i.config.markers.fillOpacity,seriesIndex:e}}},{key:"addEvents",value:function(t){var e=new f(this.ctx);t.node.addEventListener("mouseenter",e.pathMouseEnter.bind(this.ctx,t)),t.node.addEventListener("mouseleave",e.pathMouseLeave.bind(this.ctx,t)),t.node.addEventListener("mousedown",e.pathMouseDown.bind(this.ctx,t)),t.node.addEventListener("touchstart",e.pathMouseDown.bind(this.ctx,t),{passive:!0})}},{key:"getMarkerStyle",value:function(t){var e=this.w,i=e.globals.markers.colors,s=e.config.markers.strokeColor||e.config.markers.strokeColors;return{pointStrokeColor:s instanceof Array?s[t]:s,pointFillColor:i instanceof Array?i[t]:i}}}]),t}(),C=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.radiusSizes=[]}return s(t,[{key:"draw",value:function(t,e,i){var s=this.w,a=new f(this.ctx),n=i.realIndex,r=i.pointsPos,o=i.zRatio,l=i.elParent,h=a.group({class:"apexcharts-series-markers apexcharts-series-".concat(s.config.chart.type)});if(h.attr("clip-path","url(#gridRectMarkerMask".concat(s.globals.cuid,")")),r.x instanceof Array)for(var c=0;c<r.x.length;c++){var d=e+1,u=!0;0===e&&0===c&&(d=0),0===e&&1===c&&(d=1);var g=0,p=s.globals.markers.size[n];o!==1/0&&(p=s.globals.seriesZ[n][d]/o,void 0===this.radiusSizes[n]&&this.radiusSizes.push([]),this.radiusSizes[n].push(p)),s.config.chart.animations.enabled||(g=p);var x=r.x[c],m=r.y[c];if(g=g||0,(0===x&&0===m||null===m||void 0===s.globals.series[n][d])&&(u=!1),u){var v=this.drawPoint(x,m,g,p,n,d,e);h.add(v)}l.add(h)}}},{key:"drawPoint",value:function(t,e,i,s,a,n,r){var o=this.w,l=new g(this.ctx),h=new u(this.ctx),c=new A(this.ctx),d=new f(this.ctx),p=c.fillPath({seriesNumber:a,patternUnits:"objectBoundingBox"}),x=d.drawCircle(i);if(x.attr({cx:t,cy:e,fill:p}),o.config.chart.dropShadow.enabled&&h.dropShadow(x,{top:o.config.chart.dropShadow.top,left:o.config.chart.dropShadow.left,blur:o.config.chart.dropShadow.blur,color:o.config.chart.dropShadow.color,opacity:o.config.chart.dropShadow.opacity}),this.initialAnim&&!o.globals.dataChanged){var m=1;o.globals.resized||(m=o.config.chart.animations.speed),l.animateCircleRadius(x,0,s,m,o.globals.easing)}if(o.globals.dataChanged)if(this.dynamicAnim){var v,b,y,w,k=o.config.chart.animations.dynamicAnimation.speed;null!=(w=o.globals.previousPaths[a]&&o.globals.previousPaths[a][r])&&(v=w.x,b=w.y,y=void 0!==w.r?w.r:s);for(var C=0;C<o.globals.collapsedSeries.length;C++)o.globals.collapsedSeries[C].index===a&&(k=1,s=0);0===t&&0===e&&(s=0),l.animateCircle(x,{cx:v,cy:b,r:y},{cx:t,cy:e,r:s},k,o.globals.easing)}else x.attr({r:s});x.attr({rel:n,j:n,index:a,"default-marker-size":s});var L=new S(this.ctx);return h.setSelectionFilter(x,a,n),L.addEvents(x),x.node.classList.add("apexcharts-marker"),x}},{key:"centerTextInBubble",value:function(t){var e=this.w;return{y:t+=parseInt(e.config.dataLabels.style.fontSize)/4}}}]),t}(),L=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return s(t,[{key:"dataLabelsCorrection",value:function(t,e,i,s,a,n,r){var o=this.w,l=!1,h=new f(this.ctx).getTextRects(i,r),c=h.width,d=h.height;void 0===o.globals.dataLabelsRects[s]&&(o.globals.dataLabelsRects[s]=[]),o.globals.dataLabelsRects[s].push({x:t,y:e,width:c,height:d});var u=o.globals.dataLabelsRects[s].length-2,g=void 0!==o.globals.lastDrawnDataLabelsIndexes[s]?o.globals.lastDrawnDataLabelsIndexes[s][o.globals.lastDrawnDataLabelsIndexes[s].length-1]:0;if(void 0!==o.globals.dataLabelsRects[s][u]){var p=o.globals.dataLabelsRects[s][g];(t>p.x+p.width+2||e>p.y+p.height+2||t+c<p.x)&&(l=!0)}return(0===a||n)&&(l=!0),{x:t,y:e,drawnextLabel:l}}},{key:"drawDataLabel",value:function(t,e,i){var s=this.w,a=new f(this.ctx),n=s.config.dataLabels,r=0,o=0,l=i,h=null;if(!n.enabled||t.x instanceof Array!=!0)return h;(h=a.group({class:"apexcharts-data-labels"})).attr("clip-path","url(#gridRectMarkerMask".concat(s.globals.cuid,")"));for(var c=0;c<t.x.length;c++)if(r=t.x[c]+n.offsetX,o=t.y[c]+n.offsetY-s.globals.markers.size[e]-5,!isNaN(r)){1===i&&0===c&&(l=0),1===i&&1===c&&(l=1);var d=s.globals.series[e][l],u="";if("bubble"===s.config.chart.type)u=s.globals.seriesZ[e][l],o=t.y[c]+s.config.dataLabels.offsetY,o=new C(this.ctx).centerTextInBubble(o,e,l).y;else void 0!==d&&(u=s.config.dataLabels.formatter(d,{seriesIndex:e,dataPointIndex:l,w:s}));this.plotDataLabelsText({x:r,y:o,text:u,i:e,j:l,parent:h,offsetCorrection:!0,dataLabelsConfig:s.config.dataLabels})}return h}},{key:"plotDataLabelsText",value:function(t){var e=this.w,i=new f(this.ctx),s=t.x,a=t.y,n=t.i,r=t.j,o=t.text,l=t.textAnchor,h=t.parent,c=t.dataLabelsConfig,d=t.alwaysDrawDataLabel,g=t.offsetCorrection;if(!(Array.isArray(e.config.dataLabels.enabledOnSeries)&&e.config.dataLabels.enabledOnSeries.indexOf(n)>-1)){var p={x:s,y:a,drawnextLabel:!0};if(g&&(p=this.dataLabelsCorrection(s,a,o,n,r,d,parseInt(c.style.fontSize))),e.globals.zoomed||(s=p.x,a=p.y),p.drawnextLabel){var x=i.drawText({width:100,height:parseInt(c.style.fontSize),x:s,y:a,foreColor:e.globals.dataLabels.style.colors[n],textAnchor:l||c.textAnchor,text:o,fontSize:c.style.fontSize,fontFamily:c.style.fontFamily});if(x.attr({class:"apexcharts-datalabel",cx:s,cy:a}),c.dropShadow.enabled){var m=c.dropShadow;new u(this.ctx).dropShadow(x,m)}h.add(x),void 0===e.globals.lastDrawnDataLabelsIndexes[n]&&(e.globals.lastDrawnDataLabelsIndexes[n]=[]),e.globals.lastDrawnDataLabelsIndexes[n].push(r)}}}}]),t}(),z=function(){function t(i,s){e(this,t),this.ctx=i,this.w=i.w;var a=this.w;this.barOptions=a.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=a.config.stroke.width,this.isNullValue=!1,this.xyRatios=s,null!==this.xyRatios&&(this.xRatio=s.xRatio,this.yRatio=s.yRatio,this.invertedXRatio=s.invertedXRatio,this.invertedYRatio=s.invertedYRatio,this.baseLineY=s.baseLineY,this.baseLineInvertedY=s.baseLineInvertedY),this.minXDiff=Number.MAX_VALUE,this.yaxisIndex=0,this.seriesLen=0}return s(t,[{key:"draw",value:function(t,e){var i=this,s=this.w,a=new f(this.ctx),n=new A(this.ctx),r=new b(this.ctx,s);this.series=r.getLogSeries(t),t=this.series,this.yRatio=r.getLogYRatios(this.yRatio),this.initVariables(t);var o=a.group({class:"apexcharts-bar-series apexcharts-plot-series"});o.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")")),s.config.dataLabels.enabled&&this.totalItems>50&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");for(var l=function(r,l){var h,c,u,g,f=void 0,p=void 0,x=void 0,m=void 0,v=[],b=[],y=s.globals.comboCharts?e[r]:r,w=a.group({class:"apexcharts-series ".concat(d.escapeString(s.globals.seriesNames[y])),rel:r+1,"data:realIndex":y});i.ctx.series.addCollapsedClassToSeries(w,y),t[r].length>0&&(i.visibleI=i.visibleI+1);var k,A,S=0;i.yRatio.length>1&&(i.yaxisIndex=y),i.isReversed=s.config.yaxis[i.yaxisIndex]&&s.config.yaxis[i.yaxisIndex].reversed;var C=i.initialPositions();m=C.y,k=C.barHeight,c=C.yDivision,g=C.zeroW,x=C.x,A=C.barWidth,h=C.xDivision,u=C.zeroH,i.horizontal||b.push(x+A/2);for(var L=a.group({class:"apexcharts-datalabels"}),z=function(e,a){void 0===i.series[r][e]||null===t[r][e]?i.isNullValue=!0:i.isNullValue=!1,s.config.stroke.show&&(S=i.isNullValue?0:Array.isArray(i.strokeWidth)?i.strokeWidth[y]:i.strokeWidth);var o=null;o=i.isHorizontal?i.drawBarPaths({indexes:{i:r,j:e,realIndex:y,bc:l},barHeight:k,strokeWidth:S,pathTo:f,pathFrom:p,zeroW:g,x:x,y:m,yDivision:c,elSeries:w}):i.drawColumnPaths({indexes:{i:r,j:e,realIndex:y,bc:l},x:x,y:m,xDivision:h,pathTo:f,pathFrom:p,barWidth:A,zeroH:u,strokeWidth:S,elSeries:w}),f=o.pathTo,p=o.pathFrom,m=o.y,x=o.x,e>0&&b.push(x+A/2),v.push(m);var d=i.barOptions.distributed?e:r,C=null;i.barOptions.colors.ranges.length>0&&i.barOptions.colors.ranges.map(function(i){t[r][e]>=i.from&&t[r][e]<=i.to&&(C=i.color)});var z=n.fillPath({seriesNumber:i.barOptions.distributed?d:y,color:C});w=i.renderSeries({realIndex:y,pathFill:z,j:e,i:r,pathFrom:p,pathTo:f,strokeWidth:S,elSeries:w,x:x,y:m,series:t,barHeight:k,barWidth:A,elDataLabelsWrap:L,visibleSeries:i.visibleI,type:"bar"})},M=0,P=s.globals.dataPoints;M<s.globals.dataPoints;M++,P--)z(M);s.globals.seriesXvalues[y]=b,s.globals.seriesYvalues[y]=v,o.add(w)},h=0,c=0;h<t.length;h++,c++)l(h,c);return o}},{key:"renderSeries",value:function(t){var e=t.realIndex,i=t.pathFill,s=t.lineFill,a=t.j,n=t.i,r=t.pathFrom,o=t.pathTo,l=t.strokeWidth,h=t.elSeries,c=t.x,d=t.y,g=t.series,p=t.barHeight,x=t.barWidth,m=t.elDataLabelsWrap,v=t.visibleSeries,b=t.type,y=this.w,w=new f(this.ctx);s||(s=this.barOptions.distributed?y.globals.stroke.colors[a]:y.globals.stroke.colors[e]),this.isNullValue&&(i="none");var k=a/y.config.chart.animations.animateGradually.delay*(y.config.chart.animations.speed/y.globals.dataPoints)/2.4,A=w.renderPaths({i:n,j:a,realIndex:e,pathFrom:r,pathTo:o,stroke:s,strokeWidth:l,strokeLineCap:y.config.stroke.lineCap,fill:i,animationDelay:k,initialSpeed:y.config.chart.animations.speed,dataChangeSpeed:y.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(b,"-area"),id:"apexcharts-".concat(b,"-area")});new u(this.ctx).setSelectionFilter(A,e,a),h.add(A);var S=this.calculateDataLabelsPos({x:c,y:d,i:n,j:a,series:g,realIndex:e,barHeight:p,barWidth:x,renderedPath:A,visibleSeries:v});return null!==S&&m.add(S),h.add(m),h}},{key:"initVariables",value:function(t){var e=this,i=this.w;this.series=t,this.totalItems=0,this.seriesLen=0,this.visibleI=-1,this.visibleItems=1;for(var s=0;s<t.length;s++)if(t[s].length>0&&(this.seriesLen=this.seriesLen+1,this.totalItems+=t[s].length),i.globals.isXNumeric){i.globals.seriesX.forEach(function(t,s){t.forEach(function(t,a){if(a>0){var n=t-i.globals.seriesX[s][a-1];e.minXDiff=Math.min(n,e.minXDiff)}})});for(var a=0;a<t[s].length;a++)i.globals.seriesX[s][a]>i.globals.minX&&i.globals.seriesX[s][a]<i.globals.maxX&&this.visibleItems++}else this.visibleItems=i.globals.dataPoints;0===this.seriesLen&&(this.seriesLen=1)}},{key:"initialPositions",value:function(){var t,e,i,s,a,n,r,o,l=this.w;if(this.isHorizontal)a=(i=l.globals.gridHeight/l.globals.dataPoints)/this.seriesLen,l.globals.isXNumeric&&(a=(i=l.globals.gridHeight/this.totalItems)/this.seriesLen),a=a*parseInt(this.barOptions.barHeight)/100,o=this.baseLineInvertedY+l.globals.padHorizontal+(this.isReversed?l.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),e=(i-a*this.seriesLen)/2;else{if(n=(s=l.globals.gridWidth/this.visibleItems)/this.seriesLen*parseInt(this.barOptions.columnWidth)/100,l.globals.isXNumeric){if(this.minXDiff===Number.MAX_VALUE){var h=l.globals.labels.length;l.globals.timelineLabels.length>0&&(h=l.globals.timelineLabels.length),h<3&&(h=3),this.minXDiff=(l.globals.maxX-l.globals.minX)/h}n=(s=this.minXDiff/this.xRatio)/this.seriesLen*parseInt(this.barOptions.columnWidth)/100}r=l.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?l.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),t=l.globals.padHorizontal+(s-n*this.seriesLen)/2}return{x:t,y:e,yDivision:i,xDivision:s,barHeight:a,barWidth:n,zeroH:r,zeroW:o}}},{key:"drawBarPaths",value:function(t){var e=t.indexes,i=t.barHeight,s=t.strokeWidth,a=t.pathTo,n=t.pathFrom,r=t.zeroW,o=t.x,l=t.y,h=t.yDivision,c=t.elSeries,d=this.w,u=new f(this.ctx),g=e.i,p=e.j,x=e.realIndex,m=e.bc;d.globals.isXNumeric&&(l=(d.globals.seriesX[g][p]-d.globals.minX)/this.invertedXRatio-i);var v=l+i*this.visibleI;if(a=u.move(r,v),n=u.move(r,v),d.globals.previousPaths.length>0&&(n=this.getPathFrom(x,p)),o=void 0===this.series[g][p]||null===this.series[g][p]?r:r+this.series[g][p]/this.invertedYRatio-2*(this.isReversed?this.series[g][p]/this.invertedYRatio:0),a=a+u.line(o,v)+u.line(o,v+i-s)+u.line(r,v+i-s)+u.line(r,v),n=n+u.line(r,v)+u.line(r,v+i-s)+u.line(r,v+i-s)+u.line(r,v),d.globals.isXNumeric||(l+=h),this.barOptions.colors.backgroundBarColors.length>0&&0===g){m>=this.barOptions.colors.backgroundBarColors.length&&(m=0);var b=this.barOptions.colors.backgroundBarColors[m],y=u.drawRect(0,v-i*this.visibleI,d.globals.gridWidth,i*this.seriesLen,0,b,this.barOptions.colors.backgroundBarOpacity);c.add(y),y.node.classList.add("apexcharts-backgroundBar")}return{pathTo:a,pathFrom:n,x:o,y:l,barYPosition:v}}},{key:"drawColumnPaths",value:function(t){var e=t.indexes,i=t.x,s=t.y,a=t.xDivision,n=t.pathTo,r=t.pathFrom,o=t.barWidth,l=t.zeroH,h=t.strokeWidth,c=t.elSeries,d=this.w,u=new f(this.ctx),g=e.i,p=e.j,x=e.realIndex,m=e.bc;d.globals.isXNumeric&&(i=(d.globals.seriesX[g][p]-d.globals.minX)/this.xRatio-o/2);var v=i+o*this.visibleI;if(n=u.move(v,l),r=u.move(v,l),d.globals.previousPaths.length>0&&(r=this.getPathFrom(x,p)),s=void 0===this.series[g][p]||null===this.series[g][p]?l:l-this.series[g][p]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[g][p]/this.yRatio[this.yaxisIndex]:0),n=n+u.line(v,s)+u.line(v+o-h,s)+u.line(v+o-h,l)+u.line(v,l),r=r+u.line(v,l)+u.line(v+o-h,l)+u.line(v+o-h,l)+u.line(v,l),d.globals.isXNumeric||(i+=a),this.barOptions.colors.backgroundBarColors.length>0&&0===g){m>=this.barOptions.colors.backgroundBarColors.length&&(m=0);var b=this.barOptions.colors.backgroundBarColors[m],y=u.drawRect(v-o*this.visibleI,0,o*this.seriesLen,d.globals.gridHeight,0,b,this.barOptions.colors.backgroundBarOpacity);c.add(y),y.node.classList.add("apexcharts-backgroundBar")}return{pathTo:n,pathFrom:r,x:i,y:s,barXPosition:v}}},{key:"getPathFrom",value:function(t,e){for(var i,s=this.w,a=0;a<s.globals.previousPaths.length;a++){var n=s.globals.previousPaths[a];n.paths.length>0&&parseInt(n.realIndex)===parseInt(t)&&void 0!==s.globals.previousPaths[a].paths[e]&&(i=s.globals.previousPaths[a].paths[e].d)}return i}},{key:"calculateDataLabelsPos",value:function(t){var e=t.x,i=t.y,s=t.i,a=t.j,n=t.realIndex,r=t.series,o=t.barHeight,l=t.barWidth,h=t.visibleSeries,c=t.renderedPath,d=this.w,u=new f(this.ctx),g=Array.isArray(this.strokeWidth)?this.strokeWidth[n]:this.strokeWidth,p=e+parseFloat(l*h),x=i+parseFloat(o*h);d.globals.isXNumeric&&(p=e+parseFloat(l*(h+1))-g,x=i+parseFloat(o*(h+1))-g);var m=e,v=i,b={},y=d.config.dataLabels,w=this.barOptions.dataLabels,k=y.offsetX,A=y.offsetY,S={width:0,height:0};return d.config.dataLabels.enabled&&(S=u.getTextRects(d.globals.yLabelFormatters[0](d.globals.maxY),parseInt(y.style.fontSize))),b=this.isHorizontal?this.calculateBarsDataLabelsPosition({x:e,y:i,i:s,j:a,renderedPath:c,bcy:x,barHeight:o,textRects:S,strokeWidth:g,dataLabelsX:m,dataLabelsY:v,barDataLabelsConfig:w,offX:k,offY:A}):this.calculateColumnsDataLabelsPosition({x:e,y:i,i:s,j:a,renderedPath:c,realIndex:n,bcx:p,bcy:x,barHeight:o,barWidth:l,textRects:S,strokeWidth:g,dataLabelsY:v,barDataLabelsConfig:w,offX:k,offY:A}),c.attr({cy:b.bcy,cx:b.bcx,j:a,val:r[s][a],barHeight:o,barWidth:l}),this.drawCalculatedDataLabels({x:b.dataLabelsX,y:b.dataLabelsY,val:r[s][a],i:n,j:a,dataLabelsConfig:y})}},{key:"calculateColumnsDataLabelsPosition",value:function(t){var e,i=this.w,s=t.i,a=t.j,n=(t.realIndex,t.y),r=t.bcx,o=t.barWidth,l=t.textRects,h=t.dataLabelsY,c=t.barDataLabelsConfig,d=t.strokeWidth,u=t.offX,g=t.offY,f=this.series[s][a]/this.yRatio[this.yaxisIndex],p=i.globals.gridWidth/i.globals.dataPoints;r-=d/2,e=i.globals.isXNumeric?r-o/2+u:r-p+o/2+u;var x=this.series[s][a]<=0;switch(i.config.yaxis[this.yaxisIndex].reversed&&(n-=f),c.position){case"center":h=x?n+f/2+l.height/2+g:n+f/2+l.height/2-g;break;case"bottom":h=x?n+f+l.height+d+g:n+f-l.height/2+d-g;break;case"top":h=x?n-l.height/2-g:n+l.height+g}return{bcx:r,bcy:n,dataLabelsX:e,dataLabelsY:h}}},{key:"calculateBarsDataLabelsPosition",value:function(t){var e=this.w,i=t.x,s=t.i,a=t.j,n=t.bcy,r=t.barHeight,o=t.textRects,l=t.dataLabelsX,h=t.strokeWidth,c=t.barDataLabelsConfig,d=t.offX,u=t.offY,g=n-e.globals.gridHeight/e.globals.dataPoints+r/2+o.height/2+u-3,f=this.series[s][a]/this.invertedYRatio,p=this.series[s][a]<=0;switch(e.config.yaxis[this.yaxisIndex].reversed&&(i+=f),c.position){case"center":l=p?i-f/2-d:i-f/2+d;break;case"bottom":l=p?i-f-h-Math.round(o.width/2)-d:i-f+h+Math.round(o.width/2)+d;break;case"top":l=p?i-h+Math.round(o.width/2)-d:i-h-Math.round(o.width/2)+d}return l<0?l=o.width+h:l+o.width/2>e.globals.gridWidth&&(l=l-o.width-h),{bcx:i,bcy:n,dataLabelsX:l,dataLabelsY:g}}},{key:"drawCalculatedDataLabels",value:function(t){var e=t.x,i=t.y,s=t.val,a=t.i,n=t.j,r=t.dataLabelsConfig,o=this.w,l=new L(this.ctx),h=new f(this.ctx),c=r.formatter,d=null,u=o.globals.collapsedSeriesIndices.indexOf(a)>-1;if(r.enabled&&!u){d=h.group({class:"apexcharts-data-labels"});var g="";null!=s&&(g=c(s,{seriesIndex:a,dataPointIndex:n,w:o})),l.plotDataLabelsText({x:e,y:i,text:g,i:a,j:n,parent:d,dataLabelsConfig:r,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return d}}]),t}(),M=function(t){function i(){return e(this,i),h(this,o(i).apply(this,arguments))}return r(i,z),s(i,[{key:"draw",value:function(t,e){var i=this,s=this.w;this.graphics=new f(this.ctx),this.fill=new A(this.ctx),this.bar=new z(this.ctx,this.xyRatios);var a=new b(this.ctx,s);this.series=a.getLogSeries(t),t=this.series,this.yRatio=a.getLogYRatios(this.yRatio),this.series=t,this.initVariables(t),"100%"===s.config.chart.stackType&&(this.series=s.globals.seriesPercent.slice(),t=this.series),this.totalItems=0,this.prevY=[],this.prevX=[],this.prevYF=[],this.prevXF=[],this.prevYVal=[],this.prevXVal=[],this.xArrj=[],this.xArrjF=[],this.xArrjVal=[],this.yArrj=[],this.yArrjF=[],this.yArrjVal=[];for(var n=0;n<t.length;n++)t[n].length>0&&(this.totalItems+=t[n].length);var r=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"});r.attr("clip-path","url(#gridRectMask".concat(s.globals.cuid,")"));for(var o=0,l=0,h=function(a,n){var h=void 0,c=void 0,u=void 0,g=void 0,f=void 0,p=void 0,x=[],m=[],v=s.globals.comboCharts?e[a]:a;i.yRatio.length>1&&(i.yaxisIndex=v),i.isReversed=s.config.yaxis[i.yaxisIndex]&&s.config.yaxis[i.yaxisIndex].reversed;var b,y,w=i.graphics.group({class:"apexcharts-series ".concat(d.escapeString(s.globals.seriesNames[v])),rel:a+1,"data:realIndex":v}),k=i.graphics.group({class:"apexcharts-datalabels"}),A=0,S=i.initialPositions(o,l,u,g,f,p);l=S.y,b=S.barHeight,g=S.yDivision,p=S.zeroW,o=S.x,y=S.barWidth,u=S.xDivision,f=S.zeroH,i.yArrj=[],i.yArrjF=[],i.yArrjVal=[],i.xArrj=[],i.xArrjF=[],i.xArrjVal=[];for(var C=function(e){s.config.stroke.show&&(A=i.isNullValue?0:Array.isArray(i.strokeWidth)?i.strokeWidth[v]:i.strokeWidth);var r=null;r=i.isHorizontal?i.drawBarPaths({indexes:{i:a,j:e,realIndex:v,bc:n},barHeight:b,strokeWidth:A,pathTo:h,pathFrom:c,zeroW:p,x:o,y:l,yDivision:g,elSeries:w}):i.drawColumnPaths({indexes:{i:a,j:e,realIndex:v,bc:n},x:o,y:l,xDivision:u,pathTo:h,pathFrom:c,barWidth:y,zeroH:f,strokeWidth:A,elSeries:w}),h=r.pathTo,c=r.pathFrom,l=r.y,o=r.x,x.push(o),m.push(l);var d=s.config.plotOptions.bar.distributed?e:a,S=null;i.barOptions.colors.ranges.length>0&&i.barOptions.colors.ranges.map(function(i,s){t[a][e]>=i.from&&t[a][e]<=i.to&&(S=i.color)});var C=i.fill.fillPath({seriesNumber:i.barOptions.distributed?d:v,color:S});w=i.renderSeries({realIndex:v,pathFill:C,j:e,i:a,pathFrom:c,pathTo:h,strokeWidth:A,elSeries:w,x:o,y:l,series:t,barHeight:b,barWidth:y,elDataLabelsWrap:k,type:"bar",visibleSeries:0})},L=0;L<s.globals.dataPoints;L++)C(L);s.globals.seriesXvalues[v]=x,s.globals.seriesYvalues[v]=m,i.prevY.push(i.yArrj),i.prevYF.push(i.yArrjF),i.prevYVal.push(i.yArrjVal),i.prevX.push(i.xArrj),i.prevXF.push(i.xArrjF),i.prevXVal.push(i.xArrjVal),r.add(w)},c=0,u=0;c<t.length;c++,u++)h(c,u);return r}},{key:"initialPositions",value:function(t,e,i,s,a,n){var r,o,l=this.w;return this.isHorizontal?(r=(r=s=l.globals.gridHeight/l.globals.dataPoints)*parseInt(l.config.plotOptions.bar.barHeight)/100,n=this.baseLineInvertedY+l.globals.padHorizontal+(this.isReversed?l.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),e=(s-r)/2):(o=i=l.globals.gridWidth/l.globals.dataPoints,o=l.globals.isXNumeric?(i=this.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth)/100:o*parseInt(l.config.plotOptions.bar.columnWidth)/100,a=this.baseLineY[this.yaxisIndex]+(this.isReversed?l.globals.gridHeight:0)-(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),t=l.globals.padHorizontal+(i-o)/2),{x:t,y:e,yDivision:s,xDivision:i,barHeight:r,barWidth:o,zeroH:a,zeroW:n}}},{key:"drawBarPaths",value:function(t){for(var e,i=t.indexes,s=t.barHeight,a=t.strokeWidth,n=t.pathTo,r=t.pathFrom,o=t.zeroW,l=t.x,h=t.y,c=t.yDivision,d=t.elSeries,u=this.w,g=h,f=i.i,p=i.j,x=i.realIndex,m=i.bc,v=0,b=0;b<this.prevXF.length;b++)v+=this.prevXF[b][p];if(f>0){var y=o;this.prevXVal[f-1][p]<0?y=this.series[f][p]>=0?this.prevX[f-1][p]+v-2*(this.isReversed?v:0):this.prevX[f-1][p]:this.prevXVal[f-1][p]>=0&&(y=this.series[f][p]>=0?this.prevX[f-1][p]:this.prevX[f-1][p]-v+2*(this.isReversed?v:0)),e=y}else e=o;if(l=null===this.series[f][p]?e:e+this.series[f][p]/this.invertedYRatio-2*(this.isReversed?this.series[f][p]/this.invertedYRatio:0),this.xArrj.push(l),this.xArrjF.push(Math.abs(e-l)),this.xArrjVal.push(this.series[f][p]),n=this.graphics.move(e,g),r=this.graphics.move(e,g),u.globals.previousPaths.length>0&&(r=this.bar.getPathFrom(x,p,!1)),n=n+this.graphics.line(l,g)+this.graphics.line(l,g+s-a)+this.graphics.line(e,g+s-a)+this.graphics.line(e,g),r=r+this.graphics.line(e,g)+this.graphics.line(e,g+s-a)+this.graphics.line(e,g+s-a)+this.graphics.line(e,g+s-a)+this.graphics.line(e,g),u.config.plotOptions.bar.colors.backgroundBarColors.length>0&&0===f){m>=u.config.plotOptions.bar.colors.backgroundBarColors.length&&(m=0);var w=u.config.plotOptions.bar.colors.backgroundBarColors[m],k=this.graphics.drawRect(0,g,u.globals.gridWidth,s,0,w,u.config.plotOptions.bar.colors.backgroundBarOpacity);d.add(k),k.node.classList.add("apexcharts-backgroundBar")}return{pathTo:n,pathFrom:r,x:l,y:h+=c}}},{key:"drawColumnPaths",value:function(t){var e=t.indexes,i=t.x,s=t.y,a=t.xDivision,n=t.pathTo,r=t.pathFrom,o=t.barWidth,l=t.zeroH,h=t.strokeWidth,c=t.elSeries,d=this.w,u=e.i,g=e.j,f=e.realIndex,p=e.bc;if(d.globals.isXNumeric){var x=d.globals.seriesX[u][g];x||(x=0),i=(x-d.globals.minX)/this.xRatio-o/2}for(var m,v=i,b=0,y=0;y<this.prevYF.length;y++)b+=this.prevYF[y][g];if(u>0&&!d.globals.isXNumeric||u>0&&d.globals.isXNumeric&&d.globals.seriesX[u-1][g]===d.globals.seriesX[u][g]){var w=this.prevY[u-1][g];m=this.prevYVal[u-1][g]<0?this.series[u][g]>=0?w-b+2*(this.isReversed?b:0):w:this.series[u][g]>=0?w:w+b-2*(this.isReversed?b:0)}else m=d.globals.gridHeight-l;if(s=m-this.series[u][g]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[u][g]/this.yRatio[this.yaxisIndex]:0),this.yArrj.push(s),this.yArrjF.push(Math.abs(m-s)),this.yArrjVal.push(this.series[u][g]),n=this.graphics.move(v,m),r=this.graphics.move(v,m),d.globals.previousPaths.length>0&&(r=this.bar.getPathFrom(f,g,!1)),n=n+this.graphics.line(v,s)+this.graphics.line(v+o-h,s)+this.graphics.line(v+o-h,m)+this.graphics.line(v,m),r=r+this.graphics.line(v,m)+this.graphics.line(v+o-h,m)+this.graphics.line(v+o-h,m)+this.graphics.line(v+o-h,m)+this.graphics.line(v,m),d.config.plotOptions.bar.colors.backgroundBarColors.length>0&&0===u){p>=d.config.plotOptions.bar.colors.backgroundBarColors.length&&(p=0);var k=d.config.plotOptions.bar.colors.backgroundBarColors[p],A=this.graphics.drawRect(v,0,o,d.globals.gridHeight,0,k,d.config.plotOptions.bar.colors.backgroundBarOpacity);c.add(A),A.node.classList.add("apexcharts-backgroundBar")}return i+=a,{pathTo:n,pathFrom:r,x:d.globals.isXNumeric?i-a:i,y:s}}}]),i}(),P=function(t){function i(){return e(this,i),h(this,o(i).apply(this,arguments))}return r(i,z),s(i,[{key:"draw",value:function(t,e){var i=this.w,s=new f(this.ctx),a=new A(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick;var n=new b(this.ctx,i);this.series=n.getLogSeries(t),t=this.series,this.yRatio=n.getLogYRatios(this.yRatio),this.initVariables(t);var r=s.group({class:"apexcharts-candlestick-series apexcharts-plot-series"});r.attr("clip-path","url(#gridRectMask".concat(i.globals.cuid,")"));for(var o=0,l=0;o<t.length;o++,l++){var h,c,u=void 0,g=void 0,p=void 0,x=void 0,m=[],v=[],y=i.globals.comboCharts?e[o]:o,w=s.group({class:"apexcharts-series ".concat(d.escapeString(i.globals.seriesNames[y])),rel:o+1,"data:realIndex":y});t[o].length>0&&(this.visibleI=this.visibleI+1);var k,S,C=0;this.yRatio.length>1&&(this.yaxisIndex=y);var L=this.initialPositions();x=L.y,k=L.barHeight,p=L.x,S=L.barWidth,h=L.xDivision,c=L.zeroH,v.push(p+S/2);for(var z=s.group({class:"apexcharts-datalabels"}),M=0,P=i.globals.dataPoints;M<i.globals.dataPoints;M++,P--){void 0===this.series[o][M]||null===t[o][M]?this.isNullValue=!0:this.isNullValue=!1,i.config.stroke.show&&(C=this.isNullValue?0:Array.isArray(this.strokeWidth)?this.strokeWidth[y]:this.strokeWidth);var E,T=this.drawCandleStickPaths({indexes:{i:o,j:M,realIndex:y,bc:l},x:p,y:x,xDivision:h,pathTo:u,pathFrom:g,barWidth:S,zeroH:c,strokeWidth:C,elSeries:w});u=T.pathTo,g=T.pathFrom,x=T.y,p=T.x,E=T.color,M>0&&v.push(p+S/2),m.push(x);var X=a.fillPath({seriesNumber:y,color:E}),I=this.candlestickOptions.wick.useFillColor?E:void 0;w=this.renderSeries({realIndex:y,pathFill:X,lineFill:I,j:M,i:o,pathFrom:g,pathTo:u,strokeWidth:C,elSeries:w,x:p,y:x,series:t,barHeight:k,barWidth:S,elDataLabelsWrap:z,visibleSeries:this.visibleI,type:"candlestick"})}i.globals.seriesXvalues[y]=v,i.globals.seriesYvalues[y]=m,r.add(w)}return r}},{key:"drawCandleStickPaths",value:function(t){var e=t.indexes,i=t.x,s=(t.y,t.xDivision),a=t.pathTo,n=t.pathFrom,r=t.barWidth,o=t.zeroH,l=t.strokeWidth,h=this.w,c=new f(this.ctx),d=e.i,u=e.j,g=!0,p=h.config.plotOptions.candlestick.colors.upward,x=h.config.plotOptions.candlestick.colors.downward,m=this.yRatio[this.yaxisIndex],v=e.realIndex,b=this.getOHLCValue(v,u),y=o,w=o;b.o>b.c&&(g=!1);var k=Math.min(b.o,b.c),A=Math.max(b.o,b.c);h.globals.isXNumeric&&(i=(h.globals.seriesX[d][u]-h.globals.minX)/this.xRatio-r/2);var S=i+r*this.visibleI;return c.move(S,o),n=c.move(S,o),h.globals.previousPaths.length>0&&(n=this.getPathFrom(v,u,!0)),void 0===this.series[d][u]||null===this.series[d][u]?k=o:(k=o-k/m,A=o-A/m,y=o-b.h/m,w=o-b.l/m),a=c.move(S,A)+c.line(S+r/2,A)+c.line(S+r/2,y)+c.line(S+r/2,A)+c.line(S+r,A)+c.line(S+r,k)+c.line(S+r/2,k)+c.line(S+r/2,w)+c.line(S+r/2,k)+c.line(S,k)+c.line(S,A-l/2),h.globals.isXNumeric||(i+=s),{pathTo:a,pathFrom:n,x:i,y:A,barXPosition:S,color:g?p:x}}},{key:"getOHLCValue",value:function(t,e){var i=this.w;return{o:i.globals.seriesCandleO[t][e],h:i.globals.seriesCandleH[t][e],l:i.globals.seriesCandleL[t][e],c:i.globals.seriesCandleC[t][e]}}}]),i}(),E=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return s(t,[{key:"drawXCrosshairs",value:function(){var t=this.w,e=new f(this.ctx),i=new u(this.ctx),s=t.config.xaxis.crosshairs.fill.gradient,a=t.config.xaxis.crosshairs.dropShadow,n=t.config.xaxis.crosshairs.fill.type,r=s.colorFrom,o=s.colorTo,l=s.opacityFrom,h=s.opacityTo,c=s.stops,g=a.enabled,p=a.left,x=a.top,m=a.blur,v=a.color,b=a.opacity,y=t.config.xaxis.crosshairs.fill.color;if(t.config.xaxis.crosshairs.show){"gradient"===n&&(y=e.drawGradient("vertical",r,o,l,h,null,c,null));var w=e.drawRect();1===t.config.xaxis.crosshairs.width&&(w=e.drawLine()),w.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:t.globals.gridHeight,width:d.isNumber(t.config.xaxis.crosshairs.width)?t.config.xaxis.crosshairs.width:0,height:t.globals.gridHeight,fill:y,filter:"none","fill-opacity":t.config.xaxis.crosshairs.opacity,stroke:t.config.xaxis.crosshairs.stroke.color,"stroke-width":t.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":t.config.xaxis.crosshairs.stroke.dashArray}),g&&(w=i.dropShadow(w,{left:p,top:x,blur:m,color:v,opacity:b})),t.globals.dom.elGraphical.add(w)}}},{key:"drawYCrosshairs",value:function(){var t=this.w,e=new f(this.ctx),i=t.config.yaxis[0].crosshairs;if(t.config.yaxis[0].crosshairs.show){var s=e.drawLine(0,0,t.globals.gridWidth,0,i.stroke.color,i.stroke.dashArray,i.stroke.width);s.attr({class:"apexcharts-ycrosshairs"}),t.globals.dom.elGraphical.add(s)}var a=e.drawLine(0,0,t.globals.gridWidth,0,i.stroke.color,0,0);a.attr({class:"apexcharts-ycrosshairs-hidden"}),t.globals.dom.elGraphical.add(a)}}]),t}(),T=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return s(t,[{key:"isValidDate",value:function(t){return!isNaN(this.parseDate(t))}},{key:"getUTCTimeStamp",value:function(t){return Date.parse(t)?new Date(new Date(t).toISOString().substr(0,25)).getTime():t}},{key:"parseDate",value:function(t){var e=Date.parse(t);if(!isNaN(e))return this.getUTCTimeStamp(t);var i=Date.parse(t.replace(/-/g,"/").replace(/[a-z]+/gi," "));return i=this.getUTCTimeStamp(i)}},{key:"treatAsUtc",value:function(t){var e=new Date(t);return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e}},{key:"formatDate",value:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=this.w.globals.locale,n=["\0"].concat(c(a.months)),r=["\x01"].concat(c(a.shortMonths)),o=["\x02"].concat(c(a.days)),l=["\x03"].concat(c(a.shortDays));function h(t,e){var i=t+"";for(e=e||2;i.length<e;)i="0"+i;return i}s&&(t=this.treatAsUtc(t));var d=i?t.getUTCFullYear():t.getFullYear();e=(e=(e=e.replace(/(^|[^\\])yyyy+/g,"$1"+d)).replace(/(^|[^\\])yy/g,"$1"+d.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+d);var u=(i?t.getUTCMonth():t.getMonth())+1;e=(e=(e=(e=e.replace(/(^|[^\\])MMMM+/g,"$1"+n[0])).replace(/(^|[^\\])MMM/g,"$1"+r[0])).replace(/(^|[^\\])MM/g,"$1"+h(u))).replace(/(^|[^\\])M/g,"$1"+u);var g=i?t.getUTCDate():t.getDate();e=(e=(e=(e=e.replace(/(^|[^\\])dddd+/g,"$1"+o[0])).replace(/(^|[^\\])ddd/g,"$1"+l[0])).replace(/(^|[^\\])dd/g,"$1"+h(g))).replace(/(^|[^\\])d/g,"$1"+g);var f=i?t.getUTCHours():t.getHours(),p=f>12?f-12:0===f?12:f;e=(e=(e=(e=e.replace(/(^|[^\\])HH+/g,"$1"+h(f))).replace(/(^|[^\\])H/g,"$1"+f)).replace(/(^|[^\\])hh+/g,"$1"+h(p))).replace(/(^|[^\\])h/g,"$1"+p);var x=i?t.getUTCMinutes():t.getMinutes();e=(e=e.replace(/(^|[^\\])mm+/g,"$1"+h(x))).replace(/(^|[^\\])m/g,"$1"+x);var m=i?t.getUTCSeconds():t.getSeconds();e=(e=e.replace(/(^|[^\\])ss+/g,"$1"+h(m))).replace(/(^|[^\\])s/g,"$1"+m);var v=i?t.getUTCMilliseconds():t.getMilliseconds();e=e.replace(/(^|[^\\])fff+/g,"$1"+h(v,3)),v=Math.round(v/10),e=e.replace(/(^|[^\\])ff/g,"$1"+h(v)),v=Math.round(v/10);var b=f<12?"AM":"PM";e=(e=(e=e.replace(/(^|[^\\])f/g,"$1"+v)).replace(/(^|[^\\])TT+/g,"$1"+b)).replace(/(^|[^\\])T/g,"$1"+b.charAt(0));var y=b.toLowerCase();e=(e=e.replace(/(^|[^\\])tt+/g,"$1"+y)).replace(/(^|[^\\])t/g,"$1"+y.charAt(0));var w=-t.getTimezoneOffset(),k=i||!w?"Z":w>0?"+":"-";if(!i){var A=(w=Math.abs(w))%60;k+=h(Math.floor(w/60))+":"+h(A)}e=e.replace(/(^|[^\\])K/g,"$1"+k);var S=(i?t.getUTCDay():t.getDay())+1;return e=(e=(e=(e=(e=e.replace(new RegExp(o[0],"g"),o[S])).replace(new RegExp(l[0],"g"),l[S])).replace(new RegExp(n[0],"g"),n[u])).replace(new RegExp(r[0],"g"),r[u])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(t,e){var i=this.w;void 0!==i.config.xaxis.min&&(t=i.config.xaxis.min),void 0!==i.config.xaxis.max&&(e=i.config.xaxis.max);var s=new Date(t).getFullYear(),a=new Date(e).getFullYear(),n=new Date(t).getMonth(),r=new Date(e).getMonth(),o=new Date(t).getDate(),l=new Date(e).getDate(),h=new Date(t).getHours(),c=new Date(e).getHours();return{minMinute:new Date(t).getMinutes(),maxMinute:new Date(e).getMinutes(),minHour:h,maxHour:c,minDate:o,maxDate:l,minMonth:n,maxMonth:r,minYear:s,maxYear:a}}},{key:"isLeapYear",value:function(t){return t%4==0&&t%100!=0||t%400==0}},{key:"calculcateLastDaysOfMonth",value:function(t,e,i){return this.determineDaysOfMonths(t,e)-i}},{key:"determineDaysOfYear",value:function(t){var e=365;return this.isLeapYear(t)&&(e=366),e}},{key:"determineRemainingDaysOfYear",value:function(t,e,i){var s=this.daysCntOfYear[e]+i;return e>1&&this.isLeapYear()&&s++,s}},{key:"determineDaysOfMonths",value:function(t,e){var i=30;switch(t=d.monthMod(t),!0){case this.months30.indexOf(t)>-1:2===t&&(i=this.isLeapYear(e)?29:28);break;case this.months31.indexOf(t)>-1:default:i=31}return i}}]),t}(),X=function(){function t(i,s){e(this,t),this.ctx=i,this.w=i.w,this.xRatio=s.xRatio,this.yRatio=s.yRatio,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.width}return s(t,[{key:"draw",value:function(t){var e=this.w,i=new f(this.ctx),s=i.group({class:"apexcharts-heatmap"});s.attr("clip-path","url(#gridRectMask".concat(e.globals.cuid,")"));var a=e.globals.gridWidth/e.globals.dataPoints,n=e.globals.gridHeight/e.globals.series.length,r=0,o=!1,l=t.slice();e.config.yaxis[0].reversed&&(o=!0,l.reverse());for(var h=o?0:l.length-1;o?h<l.length:h>=0;o?h++:h--){var c=i.group({class:"apexcharts-series apexcharts-heatmap-series ".concat(d.escapeString(e.globals.seriesNames[h])),rel:h+1,"data:realIndex":h});if(e.config.chart.dropShadow.enabled){var g=e.config.chart.dropShadow;new u(this.ctx).dropShadow(c,g)}for(var p=0,x=0;x<l[h].length;x++){var m=1,v=this.determineHeatColor(h,x);if(e.globals.hasNegs){var b=e.config.plotOptions.heatmap.shadeIntensity;m=v.percent<0?1-(1+v.percent/100)*b:(1-v.percent/100)*b}else m=1-v.percent/100;var y=v.color;if(e.config.plotOptions.heatmap.enableShades){var w=new d;y=d.hexToRgba(w.shadeColor(m,v.color),e.config.fill.opacity)}var k=this.rectRadius,A=i.drawRect(p,r,a,n,k);if(A.attr({cx:p,cy:r}),A.node.classList.add("apexcharts-heatmap-rect"),c.add(A),A.attr({fill:y,i:h,index:h,j:x,val:l[h][x],"stroke-width":this.strokeWidth,stroke:e.globals.stroke.colors[0],color:y}),A.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,A)),A.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,A)),A.node.addEventListener("mousedown",i.pathMouseDown.bind(this,A)),e.config.chart.animations.enabled&&!e.globals.dataChanged){var S=1;e.globals.resized||(S=e.config.chart.animations.speed),this.animateHeatMap(A,p,r,a,n,S)}if(e.globals.dataChanged){var C=1;if(this.dynamicAnim.enabled&&e.globals.shouldAnimate){C=this.dynamicAnim.speed;var L=e.globals.previousPaths[h]&&e.globals.previousPaths[h][x]&&e.globals.previousPaths[h][x].color;L||(L="rgba(255, 255, 255, 0)"),this.animateHeatColor(A,d.isColorHex(L)?L:d.rgb2hex(L),d.isColorHex(y)?y:d.rgb2hex(y),C)}}var z=this.calculateHeatmapDataLabels({x:p,y:r,i:h,j:x,series:l,rectHeight:n,rectWidth:a});null!==z&&c.add(z),p+=a}r+=n,s.add(c)}var M=e.globals.yAxisScale[0].result.slice();e.config.yaxis[0].reversed?M.unshift(""):M.push(""),e.globals.yAxisScale[0].result=M;var P=e.globals.gridHeight/e.globals.series.length;return e.config.yaxis[0].labels.offsetY=-P/2,s}},{key:"determineHeatColor",value:function(t,e){var i=this.w,s=i.globals.series[t][e],a=i.config.plotOptions.heatmap,n=a.colorScale.inverse?e:t,r=i.globals.colors[n],o=Math.min.apply(Math,c(i.globals.series[t])),l=Math.max.apply(Math,c(i.globals.series[t]));a.distributed||(o=i.globals.minY,l=i.globals.maxY),void 0!==a.colorScale.min&&(o=a.colorScale.min<i.globals.minY?a.colorScale.min:i.globals.minY,l=a.colorScale.max>i.globals.maxY?a.colorScale.max:i.globals.maxY);var h=Math.abs(l)+Math.abs(o),d=100*s/(0===h?h-1e-6:h);a.colorScale.ranges.length>0&&a.colorScale.ranges.map(function(t,e){s>=t.from&&s<=t.to&&(r=t.color,o=t.from,l=t.to,h=Math.abs(l)+Math.abs(o),d=100*s/h)});return{color:r,percent:d}}},{key:"calculateHeatmapDataLabels",value:function(t){var e=t.x,i=t.y,s=t.i,a=t.j,n=(t.series,t.rectHeight),r=t.rectWidth,o=this.w,l=o.config.dataLabels,h=new f(this.ctx),c=new L(this.ctx),d=l.formatter,u=null;if(l.enabled){u=h.group({class:"apexcharts-data-labels"});var g=l.offsetX,p=l.offsetY,x=e+r/2+g,m=i+n/2+parseInt(l.style.fontSize)/3+p,v=d(o.globals.series[s][a],{seriesIndex:s,dataPointIndex:a,w:o});c.plotDataLabelsText({x:x,y:m,text:v,i:s,j:a,parent:u,dataLabelsConfig:l})}return u}},{key:"animateHeatMap",value:function(t,e,i,s,a,n){var r=this;new g(this.ctx).animateRect(t,{x:e+s/2,y:i+a/2,width:0,height:0},{x:e,y:i,width:s,height:a},n,function(){r.w.globals.animationEnded=!0})}},{key:"animateHeatColor",value:function(t,e,i,s){t.attr({fill:e}).animate(s).attr({fill:i})}}]),t}(),I=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels;var s=this.w;this.lineColorArr=void 0!==s.globals.stroke.colors?s.globals.stroke.colors:s.globals.colors,this.defaultSize=s.globals.svgHeight<s.globals.svgWidth?s.globals.svgHeight-35:s.globals.gridWidth,this.centerY=this.defaultSize/2,this.centerX=s.globals.gridWidth/2,this.fullAngle=360,this.size=0,this.donutSize=0,this.sliceLabels=[],this.prevSectorAngleArr=[]}return s(t,[{key:"draw",value:function(t){for(var e=this.w,i=new f(this.ctx),s=i.group({class:"apexcharts-pie"}),a=0,n=0;n<t.length;n++)a+=d.negToZero(t[n]);var r=[],o=i.group();0===a&&(a=1e-5);for(var l=0;l<t.length;l++){var h=this.fullAngle*d.negToZero(t[l])/a;r.push(h)}if(e.globals.dataChanged){for(var c,u=0,g=0;g<e.globals.previousPaths.length;g++)u+=d.negToZero(e.globals.previousPaths[g]);for(var p=0;p<e.globals.previousPaths.length;p++)c=this.fullAngle*d.negToZero(e.globals.previousPaths[p])/u,this.prevSectorAngleArr.push(c)}this.size=this.defaultSize/2.05-e.config.stroke.width-e.config.chart.dropShadow.blur,void 0!==e.config.plotOptions.pie.size&&(this.size=e.config.plotOptions.pie.size),this.donutSize=this.size*parseInt(e.config.plotOptions.pie.donut.size)/100;var x=e.config.plotOptions.pie.customScale,m=e.globals.gridWidth/2,v=e.globals.gridHeight/2,b=m-e.globals.gridWidth/2*x,y=v-e.globals.gridHeight/2*x;if(this.donutDataLabels.show){var w=this.renderInnerDataLabels(this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show,translateX:b,translateY:y});s.add(w)}if("donut"===e.config.chart.type){var k=i.drawCircle(this.donutSize);k.attr({cx:this.centerX,cy:this.centerY,fill:e.config.plotOptions.pie.donut.background}),o.add(k)}var A=this.drawArcs(r,t);return this.sliceLabels.forEach(function(t){A.add(t)}),o.attr({transform:"translate(".concat(b,", ").concat(y-5,") scale(").concat(x,")")}),s.attr({"data:innerTranslateX":b,"data:innerTranslateY":y-25}),o.add(A),s.add(o),s}},{key:"drawArcs",value:function(t,e){var i=this.w,s=new u(this.ctx),a=new f(this.ctx),n=new A(this.ctx),r=a.group(),o=0,l=0,h=0,c=0;this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0;for(var g=0;g<t.length;g++){var p=a.group({class:"apexcharts-series apexcharts-pie-series ".concat(d.escapeString(i.globals.seriesNames[g])),id:"apexcharts-series-"+g,rel:g+1});r.add(p),l=c,h=(o=h)+t[g],c=l+this.prevSectorAngleArr[g];var x=h-o,m=n.fillPath({seriesNumber:g,size:this.size}),v=this.getChangedPath(l,c),b=a.drawPath({d:v,stroke:this.lineColorArr instanceof Array?this.lineColorArr[g]:this.lineColorArr,strokeWidth:this.strokeWidth,fill:m,fillOpacity:i.config.fill.opacity,classes:"apexcharts-pie-area"});if(b.attr({id:"apexcharts-pie-slice-"+g,index:0,j:g}),i.config.chart.dropShadow.enabled){var y=i.config.chart.dropShadow;s.dropShadow(b,y)}this.addListeners(b,this.donutDataLabels),f.setAttrs(b.node,{"data:angle":x,"data:startAngle":o,"data:strokeWidth":this.strokeWidth,"data:value":e[g]});var w={x:0,y:0};"pie"===i.config.chart.type?w=d.polarToCartesian(this.centerX,this.centerY,this.size/1.25+i.config.plotOptions.pie.dataLabels.offset,o+(h-o)/2):"donut"===i.config.chart.type&&(w=d.polarToCartesian(this.centerX,this.centerY,(this.size+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset,o+(h-o)/2)),p.add(b);var k=0;if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0):(k=(h-o)/this.fullAngle*i.config.chart.animations.speed,this.animDur=k+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(b,{endAngle:h,startAngle:o,prevStartAngle:l,prevEndAngle:c,animateStartingPos:!0,i:g,animBeginArr:this.animBeginArr,dur:i.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(b,{endAngle:h,startAngle:o,i:g,totalItems:t.length-1,animBeginArr:this.animBeginArr,dur:k}),i.config.plotOptions.pie.expandOnClick&&b.click(this.pieClicked.bind(this,g)),i.config.dataLabels.enabled){var S=w.x,C=w.y,L=100*(h-o)/360+"%";if(0!==x){var z=i.config.dataLabels.formatter;void 0!==z&&(L=z(i.globals.seriesPercent[g][0],{seriesIndex:g,w:i}));var M=i.globals.dataLabels.style.colors[g],P=a.drawText({x:S,y:C,text:L,textAnchor:"middle",fontSize:i.config.dataLabels.style.fontSize,fontFamily:i.config.dataLabels.style.fontFamily,foreColor:M});if(i.config.dataLabels.dropShadow.enabled){var E=i.config.dataLabels.dropShadow;new u(this.ctx).dropShadow(P,E)}P.node.classList.add("apexcharts-pie-label"),i.config.chart.animations.animate&&!1===i.globals.resized&&(P.node.classList.add("apexcharts-pie-label-delay"),P.node.style.animationDelay=i.config.chart.animations.speed/940+"s"),this.sliceLabels.push(P)}}}return r}},{key:"addListeners",value:function(t,e){var i=new f(this.ctx);t.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,t)),t.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,t)),t.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,t.node,e)),t.node.addEventListener("mousedown",i.pathMouseDown.bind(this,t)),t.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,t.node,e))}},{key:"animatePaths",value:function(t,e){var i=this.w,s=e.endAngle-e.startAngle,a=s,n=e.startAngle,r=e.startAngle;void 0!==e.prevStartAngle&&void 0!==e.prevEndAngle&&(n=e.prevEndAngle,a=e.prevEndAngle-e.prevStartAngle),e.i===i.config.series.length-1&&(s+r>this.fullAngle?e.endAngle=e.endAngle-(s+r):s+r<this.fullAngle&&(e.endAngle=e.endAngle+(this.fullAngle-(s+r)))),s===this.fullAngle&&(s=this.fullAngle-.01),this.animateArc(t,n,r,s,a,e)}},{key:"animateArc",value:function(t,e,i,s,a,n){var r,o=this,l=this.w,h=o.size;h||(h=n.size),(isNaN(e)||isNaN(a))&&(e=i,a=s,n.dur=0);var c=s,d=i,u=e-i;l.globals.dataChanged&&n.shouldSetPrevPaths&&(r=o.getPiePath({me:o,startAngle:d,angle:a,size:h}),t.attr({d:r})),0!==n.dur?t.animate(n.dur,l.globals.easing,n.animBeginArr[n.i]).afterAll(function(){"pie"!==l.config.chart.type&&"donut"!==l.config.chart.type||this.animate(300).attr({"stroke-width":l.config.stroke.width}),l.globals.animationEnded=!0}).during(function(l){c=u+(s-u)*l,n.animateStartingPos&&(c=a+(s-a)*l,d=e-a+(i-(e-a))*l),r=o.getPiePath({me:o,startAngle:d,angle:c,size:h}),t.node.setAttribute("data:pathOrig",r),t.attr({d:r})}):(r=o.getPiePath({me:o,startAngle:d,angle:s,size:h}),n.isTrack||(l.globals.animationEnded=!0),t.node.setAttribute("data:pathOrig",r),t.attr({d:r}))}},{key:"pieClicked",value:function(t){var e,i=this.w,s=this.size+3,a=i.globals.dom.Paper.select("#apexcharts-pie-slice-"+t).members[0],n=a.attr("d");if("true"!==a.attr("data:pieClicked")){var r=i.globals.dom.baseEl.querySelectorAll(".apexcharts-pie-area");Array.prototype.forEach.call(r,function(t){t.setAttribute("data:pieClicked","false");var e=t.getAttribute("data:pathOrig");t.setAttribute("d",e)}),a.attr("data:pieClicked","true");var o=parseInt(a.attr("data:startAngle")),l=parseInt(a.attr("data:angle"));e=this.getPiePath({me:this,startAngle:o,angle:l,size:s}),360!==l&&a.plot(e).animate(1).plot(n).animate(100).plot(e)}else{a.attr({"data:pieClicked":"false"});var h=a.attr("data:pathOrig");a.attr({d:h})}}},{key:"getChangedPath",value:function(t,e){var i="";return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath({me:this,startAngle:t,angle:e-t,size:this.size})),i}},{key:"getPiePath",value:function(t){var e=t.me,i=t.startAngle,s=t.angle,a=t.size,n=this.w,r=i,o=Math.PI*(r-90)/180,l=s+i;Math.ceil(l)>=360&&(l=359.99);var h=Math.PI*(l-90)/180,c=e.centerX+a*Math.cos(o),u=e.centerY+a*Math.sin(o),g=e.centerX+a*Math.cos(h),f=e.centerY+a*Math.sin(h),p=d.polarToCartesian(e.centerX,e.centerY,e.donutSize,l),x=d.polarToCartesian(e.centerX,e.centerY,e.donutSize,r),m=s>180?1:0;return"donut"===n.config.chart.type?["M",c,u,"A",a,a,0,m,1,g,f,"L",p.x,p.y,"A",e.donutSize,e.donutSize,0,m,0,x.x,x.y,"L",c,u,"z"].join(" "):"pie"===n.config.chart.type?["M",c,u,"A",a,a,0,m,1,g,f,"L",e.centerX,e.centerY,"L",c,u].join(" "):["M",c,u,"A",a,a,0,m,1,g,f].join(" ")}},{key:"renderInnerDataLabels",value:function(t,e){var i=this.w,s=new f(this.ctx),a=s.group({class:"apexcharts-datalabels-group",transform:"translate(".concat(e.translateX?e.translateX:0,", ").concat(e.translateY?e.translateY:0,")")}),n=t.total.show;a.node.style.opacity=e.opacity;var r,o,l=e.centerX,h=e.centerY;r=void 0===t.name.color?i.globals.colors[0]:t.name.color,o=void 0===t.value.color?i.config.chart.foreColor:t.value.color;var c=t.value.formatter,d="",u="";if(n?(r=t.total.color,u=t.total.label,d=t.total.formatter(i)):1===i.globals.series.length&&(d=c(i.globals.series[0],i),u=i.globals.seriesNames[0]),t.name.show){var g=s.drawText({x:l,y:h+parseInt(t.name.offsetY),text:u,textAnchor:"middle",foreColor:r,fontSize:t.name.fontSize,fontFamily:t.name.fontFamily});g.node.classList.add("apexcharts-datalabel-label"),a.add(g)}if(t.value.show){var p=t.name.show?parseInt(t.value.offsetY)+16:t.value.offsetY,x=s.drawText({x:l,y:h+p,text:d,textAnchor:"middle",foreColor:o,fontSize:t.value.fontSize,fontFamily:t.value.fontFamily});x.node.classList.add("apexcharts-datalabel-value"),a.add(x)}return a}},{key:"printInnerLabels",value:function(t,e,i,s){var a,n=this.w;s?a=void 0===t.name.color?n.globals.colors[parseInt(s.parentNode.getAttribute("rel"))-1]:t.name.color:n.globals.series.length>1&&t.total.show&&(a=t.total.color);var r=n.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),o=n.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");i=(0,t.value.formatter)(i,n),s||"function"!=typeof t.total.formatter||(i=t.total.formatter(n)),null!==r&&(r.textContent=e),null!==o&&(o.textContent=i),null!==r&&(r.style.fill=a)}},{key:"printDataLabelsInner",value:function(t,e){var i=this.w,s=t.getAttribute("data:value"),a=i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"))-1];i.globals.series.length>1&&this.printInnerLabels(e,a,s,t);var n=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");null!==n&&(n.style.opacity=1)}},{key:"revertDataLabelsInner",value:function(e,i){var s=this.w,a=s.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");if(i.total.show&&s.globals.series.length>1)new t(this.ctx).printInnerLabels(i,i.total.label,i.total.formatter(s));else if(s.globals.selectedDataPoints.length)if(s.globals.selectedDataPoints[0].length>0){var n=s.globals.selectedDataPoints[0],r=s.globals.dom.baseEl.querySelector("#apexcharts-pie-slice-".concat(n));this.printDataLabelsInner(r,i)}else a.style.opacity=0;else(0===s.globals.selectedDataPoints.length||null!==a&&s.globals.series.length>1)&&(a.style.opacity=0)}}]),t}(),Y=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var s=this.w;this.graphics=new f(this.ctx),this.lineColorArr=void 0!==s.globals.stroke.colors?s.globals.stroke.colors:s.globals.colors,this.defaultSize=s.globals.svgHeight<s.globals.svgWidth?s.globals.svgHeight-35:s.globals.gridWidth,this.maxValue=this.w.globals.maxY,this.polygons=s.config.plotOptions.radar.polygons,this.maxLabelWidth=20;var a=s.globals.labels.slice().sort(function(t,e){return e.length-t.length})[0],n=this.graphics.getTextRects(a,s.config.dataLabels.style.fontSize);this.size=this.defaultSize/2.1-s.config.stroke.width-s.config.chart.dropShadow.blur-n.width/1.75,void 0!==s.config.plotOptions.radar.size&&(this.size=s.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return s(t,[{key:"draw",value:function(t){var e=this,i=this.w,s=new A(this.ctx),a=[];this.dataPointsLen=t[i.globals.maxValsInArrayIndex].length,this.disAngle=2*Math.PI/this.dataPointsLen;var r=i.globals.gridWidth/2,o=i.globals.gridHeight/2,l=this.graphics.group({class:"apexcharts-radar-series","data:innerTranslateX":r,"data:innerTranslateY":o-25,transform:"translate(".concat(r||0,", ").concat(o||0,")")}),h=[],c=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),t.forEach(function(t,r){var o=e.graphics.group().attr({class:"apexcharts-series ".concat(d.escapeString(i.globals.seriesNames[r])),rel:r+1,"data:realIndex":r});e.dataRadiusOfPercent[r]=[],e.dataRadius[r]=[],e.angleArr[r]=[],t.forEach(function(t,i){e.dataRadiusOfPercent[r][i]=t/e.maxValue,e.dataRadius[r][i]=e.dataRadiusOfPercent[r][i]*e.size,e.angleArr[r][i]=i*e.disAngle}),h=e.getDataPointsPos(e.dataRadius[r],e.angleArr[r]);var l=e.createPaths(h,{x:0,y:0});c=e.graphics.group({class:"apexcharts-series-markers-wrap hidden"}),i.globals.delayedElements.push({el:c.node,index:r});var g={i:r,realIndex:r,animationDelay:r,initialSpeed:i.config.chart.animations.speed,dataChangeSpeed:i.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",id:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:i.globals.stroke.colors[r],strokeLineCap:i.config.stroke.lineCap},f=null;i.globals.previousPaths.length>0&&(f=e.getPathFrom(r));for(var p=0;p<l.linePathsTo.length;p++){var x=e.graphics.renderPaths(n({},g,{pathFrom:null===f?l.linePathsFrom[p]:f,pathTo:l.linePathsTo[p],strokeWidth:Array.isArray(i.config.stroke.width)?i.config.stroke.width[r]:i.config.stroke.width,fill:"none"}));o.add(x);var m=s.fillPath({seriesNumber:r}),v=e.graphics.renderPaths(n({},g,{pathFrom:null===f?l.areaPathsFrom[p]:f,pathTo:l.areaPathsTo[p],strokeWidth:0,fill:m}));if(i.config.chart.dropShadow.enabled){var b=new u(e.ctx),y=i.config.chart.dropShadow;b.dropShadow(v,n({},y,{noUserSpaceOnUse:!0}))}o.add(v)}t.forEach(function(t,i){var s=new S(e.ctx).getMarkerConfig("apexcharts-marker",r),a=e.graphics.drawMarker(h[i].x,h[i].y,s);a.attr("rel",i),a.attr("j",i),a.attr("index",r),a.node.setAttribute("default-marker-size",s.pSize);var n=e.graphics.group({class:"apexcharts-series-markers"});n&&n.add(a),c.add(n),o.add(c)}),a.push(o)}),this.drawPolygons({parent:l}),i.config.dataLabels.enabled){var g=this.drawLabels();l.add(g)}return l.add(this.yaxisLabels),a.forEach(function(t){l.add(t)}),l}},{key:"drawPolygons",value:function(t){for(var e=this,i=this.w,s=t.parent,a=i.globals.yAxisScale[0].result.reverse(),n=a.length,r=[],o=this.size/(n-1),l=0;l<n;l++)r[l]=o*l;r.reverse();var h=[],c=[];r.forEach(function(t,i){var s=e.getPolygonPos(t),a="";s.forEach(function(t,s){if(0===i){var n=e.graphics.drawLine(t.x,t.y,0,0,Array.isArray(e.polygons.connectorColors)?e.polygons.connectorColors[s]:e.polygons.connectorColors);c.push(n)}0===s&&e.yaxisLabelsTextsPos.push({x:t.x,y:t.y}),a+=t.x+","+t.y+" "}),h.push(a)}),h.forEach(function(t,a){var n=e.polygons.strokeColors,r=e.graphics.drawPolygon(t,Array.isArray(n)?n[a]:n,i.globals.radarPolygons.fill.colors[a]);s.add(r)}),c.forEach(function(t){s.add(t)}),i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach(function(t,i){var s=e.drawYAxisText(t.x,t.y,i,a[i]);e.yaxisLabels.add(s)})}},{key:"drawYAxisText",value:function(t,e,i,s){var a=this.w,n=a.config.yaxis[0],r=a.globals.yLabelFormatters[0];return this.graphics.drawText({x:t+n.labels.offsetX,y:e+n.labels.offsetY,text:r(s,i),textAnchor:"middle",fontSize:n.labels.style.fontSize,fontFamily:n.labels.style.fontFamily,foreColor:n.labels.style.color})}},{key:"drawLabels",value:function(){var t=this,e=this.w,i="middle",s=e.config.dataLabels,a=this.graphics.group({class:"apexcharts-datalabels"}),n=this.getPolygonPos(this.size),r=0,o=0;return e.globals.labels.forEach(function(l,h){var c=s.formatter,d=new L(t.ctx);if(n[h]){r=n[h].x,o=n[h].y,Math.abs(n[h].x)>=10?n[h].x>0?(i="start",r+=10):n[h].x<0&&(i="end",r-=10):i="middle",Math.abs(n[h].y)>=t.size-10&&(n[h].y<0?o-=10:n[h].y>0&&(o+=10));var u=c(l,{seriesIndex:-1,dataPointIndex:h,w:e});d.plotDataLabelsText({x:r,y:o,text:u,textAnchor:i,i:h,j:h,parent:a,dataLabelsConfig:s,offsetCorrection:!1})}}),a}},{key:"createPaths",value:function(t,e){var i=this,s=[],a=[],n=[],r=[];if(t.length){a=[this.graphics.move(e.x,e.y)],r=[this.graphics.move(e.x,e.y)];var o=this.graphics.move(t[0].x,t[0].y),l=this.graphics.move(t[0].x,t[0].y);t.forEach(function(e,s){o+=i.graphics.line(e.x,e.y),l+=i.graphics.line(e.x,e.y),s===t.length-1&&(o+="Z",l+="Z")}),s.push(o),n.push(l)}return{linePathsFrom:a,linePathsTo:s,areaPathsFrom:r,areaPathsTo:n}}},{key:"getPathFrom",value:function(t){for(var e=this.w,i=null,s=0;s<e.globals.previousPaths.length;s++){var a=e.globals.previousPaths[s];a.paths.length>0&&parseInt(a.realIndex)===parseInt(t)&&void 0!==e.globals.previousPaths[s].paths[0]&&(i=e.globals.previousPaths[s].paths[0].d)}return i}},{key:"getDataPointsPos",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.dataPointsLen;t=t||[],e=e||[];for(var s=[],a=0;a<i;a++){var n={};n.x=t[a]*Math.sin(e[a]),n.y=-t[a]*Math.cos(e[a]),s.push(n)}return s}},{key:"getPolygonPos",value:function(t){for(var e=[],i=2*Math.PI/this.dataPointsLen,s=0;s<this.dataPointsLen;s++){var a={};a.x=t*Math.sin(s*i),a.y=-t*Math.cos(s*i),e.push(a)}return e}}]),t}(),F=function(t){function i(t){var s;e(this,i),(s=h(this,o(i).call(this,t))).ctx=t,s.w=t.w,s.animBeginArr=[0],s.animDur=0;var a=s.w;return s.startAngle=a.config.plotOptions.radialBar.startAngle,s.endAngle=a.config.plotOptions.radialBar.endAngle,s.trackStartAngle=a.config.plotOptions.radialBar.track.startAngle,s.trackEndAngle=a.config.plotOptions.radialBar.track.endAngle,s.radialDataLabels=a.config.plotOptions.radialBar.dataLabels,s.trackStartAngle||(s.trackStartAngle=s.startAngle),s.trackEndAngle||(s.trackEndAngle=s.endAngle),360===s.endAngle&&(s.endAngle=359.99),s.fullAngle=360-a.config.plotOptions.radialBar.endAngle-a.config.plotOptions.radialBar.startAngle,s.margin=parseInt(a.config.plotOptions.radialBar.track.margin),s}return r(i,I),s(i,[{key:"draw",value:function(t){var e=this.w,i=new f(this.ctx),s=i.group({class:"apexcharts-radialbar"}),a=i.group(),n=this.defaultSize/2,r=e.globals.gridWidth/2,o=this.defaultSize/2.05-e.config.stroke.width-e.config.chart.dropShadow.blur;void 0!==e.config.plotOptions.radialBar.size&&(o=e.config.plotOptions.radialBar.size);var l=e.globals.fill.colors;if(e.config.plotOptions.radialBar.track.show){var h=this.drawTracks({size:o,centerX:r,centerY:n,colorArr:l,series:t});a.add(h)}var c=this.drawArcs({size:o,centerX:r,centerY:n,colorArr:l,series:t});return a.add(c.g),"front"===e.config.plotOptions.radialBar.hollow.position&&(c.g.add(c.elHollow),c.dataLabels&&c.g.add(c.dataLabels)),s.add(a),s}},{key:"drawTracks",value:function(t){var e=this.w,i=new f(this.ctx),s=i.group(),a=new u(this.ctx),n=new A(this.ctx),r=this.getStrokeWidth(t);t.size=t.size-r/2;for(var o=0;o<t.series.length;o++){var l=i.group({class:"apexcharts-radialbar-track apexcharts-track"});s.add(l),l.attr({id:"apexcharts-track-"+o,rel:o+1}),t.size=t.size-r-this.margin;var h=e.config.plotOptions.radialBar.track,c=n.fillPath({seriesNumber:0,size:t.size,fillColors:Array.isArray(h.background)?h.background[o]:h.background,solid:!0}),d=this.trackStartAngle,g=this.trackEndAngle;Math.abs(g)+Math.abs(d)>=360&&(g=360-Math.abs(this.startAngle)-.1);var p=i.drawPath({d:"",stroke:c,strokeWidth:r*parseInt(h.strokeWidth)/100,fill:"none",strokeOpacity:h.opacity,classes:"apexcharts-radialbar-area"});if(h.dropShadow.enabled){var x=h.dropShadow;a.dropShadow(p,x)}l.add(p),p.attr("id","apexcharts-radialbarTrack-"+o),new I(this.ctx).animatePaths(p,{centerX:t.centerX,centerY:t.centerY,endAngle:g,startAngle:d,size:t.size,i:o,totalItems:2,animBeginArr:0,dur:0,isTrack:!0,easing:e.globals.easing})}return s}},{key:"drawArcs",value:function(t){var e=this.w,i=new f(this.ctx),s=new A(this.ctx),a=new u(this.ctx),n=i.group(),r=this.getStrokeWidth(t);t.size=t.size-r/2;var o=e.config.plotOptions.radialBar.hollow.background,l=t.size-r*t.series.length-this.margin*t.series.length-r*parseInt(e.config.plotOptions.radialBar.track.strokeWidth)/100/2,h=l-e.config.plotOptions.radialBar.hollow.margin;void 0!==e.config.plotOptions.radialBar.hollow.image&&(o=this.drawHollowImage(t,n,l,o));var c=this.drawHollow({size:h,centerX:t.centerX,centerY:t.centerY,fill:o});if(e.config.plotOptions.radialBar.hollow.dropShadow.enabled){var g=e.config.plotOptions.radialBar.hollow.dropShadow;a.dropShadow(c,g)}var p=1;!this.radialDataLabels.total.show&&e.globals.series.length>1&&(p=0);var x=new I(this.ctx),m=null;this.radialDataLabels.show&&(m=x.renderInnerDataLabels(this.radialDataLabels,{hollowSize:l,centerX:t.centerX,centerY:t.centerY,opacity:p})),"back"===e.config.plotOptions.radialBar.hollow.position&&(n.add(c),m&&n.add(m));var v=!1;e.config.plotOptions.radialBar.inverseOrder&&(v=!0);for(var b=v?t.series.length-1:0;v?b>=0:b<t.series.length;v?b--:b++){var y=i.group({class:"apexcharts-series apexcharts-radial-series ".concat(d.escapeString(e.globals.seriesNames[b]))});n.add(y),y.attr({id:"apexcharts-series-"+b,rel:b+1}),this.ctx.series.addCollapsedClassToSeries(y,b),t.size=t.size-r-this.margin;var w=s.fillPath({seriesNumber:b,size:t.size}),k=this.startAngle,S=void 0,C=Math.abs(e.config.plotOptions.radialBar.endAngle-e.config.plotOptions.radialBar.startAngle),L=d.negToZero(t.series[b]>100?100:t.series[b])/100,z=Math.round(C*L)+this.startAngle,M=void 0;e.globals.dataChanged&&(S=this.startAngle,M=Math.round(C*d.negToZero(e.globals.previousPaths[b])/100)+S),Math.abs(z)+Math.abs(k)>=360&&(z-=.01),Math.abs(M)+Math.abs(S)>=360&&(M-=.01);var P=z-k,E=Array.isArray(e.config.stroke.dashArray)?e.config.stroke.dashArray[b]:e.config.stroke.dashArray,T=i.drawPath({d:"",stroke:w,strokeWidth:r,fill:"none",fillOpacity:e.config.fill.opacity,classes:"apexcharts-radialbar-area",strokeDashArray:E});if(f.setAttrs(T.node,{"data:angle":P,"data:value":t.series[b]}),e.config.chart.dropShadow.enabled){var X=e.config.chart.dropShadow;a.dropShadow(T,X)}this.addListeners(T,this.radialDataLabels);var Y=new I(this.ctx);y.add(T),T.attr({id:"apexcharts-radialArc-"+b,index:0,j:b});var F=0;!Y.initialAnim||e.globals.resized||e.globals.dataChanged||(F=(z-k)/360*e.config.chart.animations.speed,this.animDur=F/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur)),e.globals.dataChanged&&(F=(z-k)/360*e.config.chart.animations.dynamicAnimation.speed,this.animDur=F/(1.2*t.series.length)+this.animDur,this.animBeginArr.push(this.animDur)),Y.animatePaths(T,{centerX:t.centerX,centerY:t.centerY,endAngle:z,startAngle:k,prevEndAngle:M,prevStartAngle:S,size:t.size,i:b,totalItems:2,animBeginArr:this.animBeginArr,dur:F,shouldSetPrevPaths:!0,easing:e.globals.easing})}return{g:n,elHollow:c,dataLabels:m}}},{key:"drawHollow",value:function(t){var e=new f(this.ctx).drawCircle(2*t.size);return e.attr({class:"apexcharts-radialbar-hollow",cx:t.centerX,cy:t.centerY,r:t.size,fill:t.fill}),e}},{key:"drawHollowImage",value:function(t,e,i,s){var a=this.w,n=new A(this.ctx),r=(Math.random()+1).toString(36).substring(4),o=a.config.plotOptions.radialBar.hollow.image;if(a.config.plotOptions.radialBar.hollow.imageClipped)n.clippedImgArea({width:i,height:i,image:o,patternID:"pattern".concat(a.globals.cuid).concat(r)}),s="url(#pattern".concat(a.globals.cuid).concat(r,")");else{var l=a.config.plotOptions.radialBar.hollow.imageWidth,h=a.config.plotOptions.radialBar.hollow.imageHeight;if(void 0===l&&void 0===h){var c=a.globals.dom.Paper.image(o).loaded(function(e){this.move(t.centerX-e.width/2+a.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-e.height/2+a.config.plotOptions.radialBar.hollow.imageOffsetY)});e.add(c)}else{var d=a.globals.dom.Paper.image(o).loaded(function(e){this.move(t.centerX-l/2+a.config.plotOptions.radialBar.hollow.imageOffsetX,t.centerY-h/2+a.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(l,h)});e.add(d)}}return s}},{key:"getStrokeWidth",value:function(t){var e=this.w;return t.size*(100-parseInt(e.config.plotOptions.radialBar.hollow.size))/100/(t.series.length+1)-this.margin}}]),i}(),O=function(){function t(i,s,a){e(this,t),this.ctx=i,this.w=i.w,this.xyRatios=s,this.pointsChart=!("bubble"!==this.w.config.chart.type&&"scatter"!==this.w.config.chart.type)||a,this.scatter=new C(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.yaxisIndex=0}return s(t,[{key:"draw",value:function(t,e,i){var s=this.w,a=new f(this.ctx),r=new A(this.ctx),o=s.globals.comboCharts?e:s.config.chart.type,l=a.group({class:"apexcharts-".concat(o,"-series apexcharts-plot-series")}),h=new b(this.ctx,s);t=h.getLogSeries(t);var c=this.xyRatios.yRatio;c=h.getLogYRatios(c);for(var u=this.xyRatios.zRatio,g=this.xyRatios.xRatio,p=this.xyRatios.baseLineY,x=[],m=[],v=0,y=0;y<t.length;y++){var w=s.globals.gridWidth/s.globals.dataPoints,k=s.globals.comboCharts?i[y]:y;c.length>1&&(this.yaxisIndex=k),this.isReversed=s.config.yaxis[this.yaxisIndex]&&s.config.yaxis[this.yaxisIndex].reversed;var C=[],z=[],M=s.globals.gridHeight-p[this.yaxisIndex]-(this.isReversed?s.globals.gridHeight:0)+(this.isReversed?2*p[this.yaxisIndex]:0),P=M;M>s.globals.gridHeight&&(P=s.globals.gridHeight),v=w/2;var E=s.globals.padHorizontal+v,T=1;s.globals.isXNumeric&&(E=(s.globals.seriesX[k][0]-s.globals.minX)/g),z.push(E);var X=void 0,I=void 0,Y=void 0,F=void 0,O=[],R=[],D=a.group({class:"apexcharts-series ".concat(d.escapeString(s.globals.seriesNames[k]))}),N=a.group({class:"apexcharts-series-markers-wrap"}),H=a.group({class:"apexcharts-datalabels"});this.ctx.series.addCollapsedClassToSeries(D,k);var W=t[y].length===s.globals.dataPoints;D.attr({"data:longestSeries":W,rel:y+1,"data:realIndex":k}),this.appendPathFrom=!0;var B=E,V=void 0,G=B,_=M,j=0;if(_=this.determineFirstPrevY({i:y,series:t,yRatio:c[this.yaxisIndex],zeroY:M,prevY:_,prevSeriesY:m,lineYPosition:j}).prevY,C.push(_),V=_,null===t[y][0]){for(var U=0;U<t[y].length;U++)if(null!==t[y][U]){G=w*U,_=M-t[y][U]/c[this.yaxisIndex],X=a.move(G,_),I=a.move(G,P);break}}else X=a.move(G,_),I=a.move(G,P)+a.line(G,_);if(Y=a.move(-1,M)+a.line(-1,M),F=a.move(-1,M)+a.line(-1,M),s.globals.previousPaths.length>0){var q=this.checkPreviousPaths({pathFromLine:Y,pathFromArea:F,realIndex:k});Y=q.pathFromLine,F=q.pathFromArea}for(var Z=s.globals.dataPoints>1?s.globals.dataPoints-1:s.globals.dataPoints,$=0;$<Z;$++){if(s.globals.isXNumeric){var J=s.globals.seriesX[k][$+1];void 0===s.globals.seriesX[k][$+1]&&(J=s.globals.seriesX[k][Z-1]),E=(J-s.globals.minX)/g}else E+=w;var Q=d.isNumber(s.globals.minYArr[k])?s.globals.minYArr[k]:s.globals.minY;s.config.chart.stacked?(j=y>0&&s.globals.collapsedSeries.length<s.config.series.length-1?m[y-1][$+1]:M,T=void 0===t[y][$+1]||null===t[y][$+1]?j-Q/c[this.yaxisIndex]+2*(this.isReversed?Q/c[this.yaxisIndex]:0):j-t[y][$+1]/c[this.yaxisIndex]+2*(this.isReversed?t[y][$+1]/c[this.yaxisIndex]:0)):T=void 0===t[y][$+1]||null===t[y][$+1]?M-Q/c[this.yaxisIndex]+2*(this.isReversed?Q/c[this.yaxisIndex]:0):M-t[y][$+1]/c[this.yaxisIndex]+2*(this.isReversed?t[y][$+1]/c[this.yaxisIndex]:0),z.push(E),C.push(T);var K=this.createPaths({series:t,i:y,j:$,x:E,y:T,xDivision:w,pX:B,pY:V,areaBottomY:P,linePath:X,areaPath:I,linePaths:O,areaPaths:R});R=K.areaPaths,O=K.linePaths,B=K.pX,V=K.pY,I=K.areaPath,X=K.linePath,this.appendPathFrom&&(Y+=a.line(E,M),F+=a.line(E,M));var tt=this.calculatePoints({series:t,x:E,y:T,realIndex:k,i:y,j:$,prevY:_,categoryAxisCorrection:v,xRatio:g});if(this.pointsChart)this.scatter.draw(D,$,{realIndex:k,pointsPos:tt,zRatio:u,elParent:N});else{var et=new S(this.ctx);s.globals.dataPoints>1&&N.node.classList.add("hidden");var it=et.plotChartMarkers(tt,k,$+1);null!==it&&N.add(it)}var st=new L(this.ctx).drawDataLabel(tt,k,$+1);null!==st&&H.add(st)}m.push(C),s.globals.seriesXvalues[k]=z,s.globals.seriesYvalues[k]=C,this.pointsChart||s.globals.delayedElements.push({el:N.node,index:k});var at={i:y,realIndex:k,animationDelay:y,initialSpeed:s.config.chart.animations.speed,dataChangeSpeed:s.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(o),id:"apexcharts-".concat(o)};if(s.config.stroke.show&&!this.pointsChart){var nt=null;nt="line"===o?r.fillPath({seriesNumber:k,i:y}):s.globals.stroke.colors[k];for(var rt=0;rt<O.length;rt++){var ot=a.renderPaths(n({},at,{pathFrom:Y,pathTo:O[rt],stroke:nt,strokeWidth:Array.isArray(s.config.stroke.width)?s.config.stroke.width[k]:s.config.stroke.width,strokeLineCap:s.config.stroke.lineCap,fill:"none"}));D.add(ot)}}if("area"===o)for(var lt=r.fillPath({seriesNumber:k}),ht=0;ht<R.length;ht++){var ct=a.renderPaths(n({},at,{pathFrom:F,pathTo:R[ht],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:lt}));D.add(ct)}D.add(N),D.add(H),x.push(D)}for(var dt=x.length;dt>0;dt--)l.add(x[dt-1]);return l}},{key:"createPaths",value:function(t){var e=t.series,i=t.i,s=t.j,a=t.x,n=t.y,r=t.pX,o=t.pY,l=t.xDivision,h=t.areaBottomY,c=t.linePath,d=t.areaPath,u=t.linePaths,g=t.areaPaths,p=this.w,x=new f(this.ctx),m=Array.isArray(p.config.stroke.curve)?p.config.stroke.curve[i]:p.config.stroke.curve;if("smooth"===m){var v=.35*(a-r);p.globals.hasNullValues?(null!==e[i][s]&&(null!==e[i][s+1]?(c=x.move(r,o)+x.curve(r+v,o,a-v,n,a+1,n),d=x.move(r+1,o)+x.curve(r+v,o,a-v,n,a+1,n)+x.line(a,h)+x.line(r,h)+"z"):(c=x.move(r,o),d=x.move(r,o)+"z")),u.push(c),g.push(d)):(c+=x.curve(r+v,o,a-v,n,a,n),d+=x.curve(r+v,o,a-v,n,a,n)),r=a,o=n,s===e[i].length-2&&(d=d+x.curve(r,o,a,n,a,h)+x.move(a,n)+"z",p.globals.hasNullValues||(u.push(c),g.push(d)))}else null===e[i][s+1]&&(c+=x.move(a,n),d=d+x.line(a-l,h)+x.move(a,n)),null===e[i][s]&&(c+=x.move(a,n),d+=x.move(a,h)),"stepline"===m?(c=c+x.line(a,null,"H")+x.line(null,n,"V"),d=d+x.line(a,null,"H")+x.line(null,n,"V")):"straight"===m&&(c+=x.line(a,n),d+=x.line(a,n)),s===e[i].length-2&&(d=d+x.line(a,h)+x.move(a,n)+"z",u.push(c),g.push(d));return{linePaths:u,areaPaths:g,pX:r,pY:o,linePath:c,areaPath:d}}},{key:"calculatePoints",value:function(t){var e=t.series,i=t.realIndex,s=t.x,a=t.y,n=t.i,r=t.j,o=t.prevY,l=t.categoryAxisCorrection,h=t.xRatio,c=this.w,u=[],g=[];if(0===r){var f=l+c.config.markers.offsetX;c.globals.isXNumeric&&(f=(c.globals.seriesX[i][0]-c.globals.minX)/h+c.config.markers.offsetX),u.push(f),g.push(d.isNumber(e[n][0])?o+c.config.markers.offsetY:null),u.push(s+c.config.markers.offsetX),g.push(d.isNumber(e[n][r+1])?a+c.config.markers.offsetY:null)}else u.push(s+c.config.markers.offsetX),g.push(d.isNumber(e[n][r+1])?a+c.config.markers.offsetY:null);return{x:u,y:g}}},{key:"checkPreviousPaths",value:function(t){for(var e=t.pathFromLine,i=t.pathFromArea,s=t.realIndex,a=this.w,n=0;n<a.globals.previousPaths.length;n++){var r=a.globals.previousPaths[n];("line"===r.type||"area"===r.type)&&r.paths.length>0&&parseInt(r.realIndex)===parseInt(s)&&("line"===r.type?(this.appendPathFrom=!1,e=a.globals.previousPaths[n].paths[0].d):"area"===r.type&&(this.appendPathFrom=!1,a.config.stroke.show?(e=a.globals.previousPaths[n].paths[0].d,i=a.globals.previousPaths[n].paths[1].d):i=a.globals.previousPaths[n].paths[0].d))}return{pathFromLine:e,pathFromArea:i}}},{key:"determineFirstPrevY",value:function(t){var e=t.i,i=t.series,s=t.yRatio,a=t.zeroY,n=t.prevY,r=t.prevSeriesY,o=t.lineYPosition,l=this.w;if(void 0!==i[e][0])n=l.config.chart.stacked?(o=e>0?r[e-1][0]:a)-i[e][0]/s+2*(this.isReversed?i[e][0]/s:0):a-i[e][0]/s+2*(this.isReversed?i[e][0]/s:0);else if(l.config.chart.stacked&&e>0&&void 0===i[e][0])for(var h=e-1;h>=0;h--)if(null!==i[h][0]&&void 0!==i[h][0]){n=o=r[h][0];break}return{prevY:n,lineYPosition:o}}}]),t}(),R=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.xaxisFontSize=this.w.config.xaxis.labels.style.fontSize,this.axisFontFamily=this.w.config.xaxis.labels.style.fontFamily,this.isBarHorizontal=!("bar"!==this.w.config.chart.type||!this.w.config.plotOptions.bar.horizontal),this.xaxisForeColors=this.w.config.xaxis.labels.style.colors,this.xAxisoffX=0,"bottom"===this.w.config.xaxis.position&&(this.xAxisoffX=this.w.globals.gridHeight)}return s(t,[{key:"drawYaxis",value:function(t){var e=this.w,i=new f(this.ctx),s=e.config.yaxis[t].labels.style.fontSize,a=e.config.yaxis[t].labels.style.fontFamily,n=i.group({class:"apexcharts-yaxis",rel:t,transform:"translate("+e.globals.translateYAxisX[t]+", 0)"});if(!e.config.yaxis[t].show)return n;var r=i.group({class:"apexcharts-yaxis-texts-g"});n.add(r);var o=e.globals.yAxisScale[t].result.length-1,l=e.globals.gridHeight/o+.1,h=e.globals.translateY,c=e.globals.yLabelFormatters[t],d=e.globals.yAxisScale[t].result.slice();if(e.config.yaxis[t].reversed&&d.reverse(),e.config.yaxis[t].labels.show)for(var u=o;u>=0;u--){var g=d[u];g=c(g,u);var p=e.config.yaxis[t].labels.padding;e.config.yaxis[t].opposite&&0!==e.config.yaxis.length&&(p*=-1);var x=i.drawText({x:p,y:h+o/10+e.config.yaxis[t].labels.offsetY+1,text:g,textAnchor:e.config.yaxis[t].opposite?"start":"end",fontSize:s,fontFamily:a,foreColor:e.config.yaxis[t].labels.style.color,cssClass:"apexcharts-yaxis-label "+e.config.yaxis[t].labels.style.cssClass});r.add(x);var m=i.rotateAroundCenter(x.node);0!==e.config.yaxis[t].labels.rotate&&x.node.setAttribute("transform","rotate(".concat(e.config.yaxis[t].labels.rotate," ").concat(m.x," ").concat(m.y,")")),h+=l}if(void 0!==e.config.yaxis[t].title.text){var v=i.group({class:"apexcharts-yaxis-title"}),b=0;e.config.yaxis[t].opposite&&(b=e.globals.translateYAxisX[t]);var y=i.drawText({x:b,y:e.globals.gridHeight/2+e.globals.translateY,text:e.config.yaxis[t].title.text,textAnchor:"end",foreColor:e.config.yaxis[t].title.style.color,fontSize:e.config.yaxis[t].title.style.fontSize,fontFamily:e.config.yaxis[t].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+e.config.yaxis[t].title.style.cssClass});v.add(y),n.add(v)}var w=e.config.yaxis[t].axisBorder;if(w.show){var k=31+w.offsetX;e.config.yaxis[t].opposite&&(k=-31-w.offsetX);var A=i.drawLine(k,e.globals.translateY+w.offsetY-2,k,e.globals.gridHeight+e.globals.translateY+w.offsetY+2,w.color);n.add(A),this.drawAxisTicks(k,o,w,e.config.yaxis[t].axisTicks,t,l,n)}return n}},{key:"drawYaxisInversed",value:function(t){var e=this.w,i=new f(this.ctx),s=i.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),a=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});s.add(a);var n=e.globals.yAxisScale[t].result.length-1,r=e.globals.gridWidth/n+.1,o=r+e.config.xaxis.labels.offsetX,l=e.globals.xLabelFormatter,h=e.globals.yAxisScale[t].result.slice();if(e.config.yaxis[t].reversed&&h.reverse(),e.config.xaxis.labels.show)for(var c=n;c>=0;c--){var d=h[c];d=l(d,c);var u=i.drawText({x:e.globals.gridWidth+e.globals.padHorizontal-(o-r+e.config.xaxis.labels.offsetX),y:this.xAxisoffX+e.config.xaxis.labels.offsetY+30,text:"",textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[t]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,cssClass:"apexcharts-xaxis-label "+e.config.xaxis.labels.style.cssClass});a.add(u),u.tspan(d);var g=document.createElementNS(e.globals.SVGNS,"title");g.textContent=d,u.node.appendChild(g),o+=r}if(void 0!==e.config.xaxis.title.text){var p=i.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),x=i.drawText({x:e.globals.gridWidth/2,y:this.xAxisoffX+parseInt(this.xaxisFontSize)+parseInt(e.config.xaxis.title.style.fontSize)+20,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass});p.add(x),s.add(p)}var m=e.config.yaxis[t].axisBorder;if(m.show){var v=i.drawLine(e.globals.padHorizontal+m.offsetX,1+m.offsetY,e.globals.padHorizontal+m.offsetX,e.globals.gridHeight+m.offsetY,m.color);s.add(v)}return s}},{key:"drawAxisTicks",value:function(t,e,i,s,a,n,r){var o=this.w,l=new f(this.ctx),h=o.globals.translateY;if(s.show){!0===o.config.yaxis[a].opposite&&(t+=s.width);for(var c=e;c>=0;c--){var d=h+e/10+o.config.yaxis[a].labels.offsetY-1;this.isBarHorizontal&&(d=n*c);var u=l.drawLine(t+i.offsetX-s.width+s.offsetX,d+s.offsetY,t+i.offsetX+s.offsetX,d+s.offsetY,i.color);r.add(u),h+=n}}}},{key:"yAxisTitleRotate",value:function(t,e){var i=this.w,s=new f(this.ctx),a={width:0,height:0},n={width:0,height:0},r=i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-texts-g"));null!==r&&(a=r.getBoundingClientRect());var o=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t,"'] .apexcharts-yaxis-title text"));if(null!==o&&(n=o.getBoundingClientRect()),null!==o){var l=this.xPaddingForYAxisTitle(t,a,n,e);o.setAttribute("x",l.xPos-(e?10:0))}if(null!==o){var h=s.rotateAroundCenter(o);e?o.setAttribute("transform","rotate(".concat(i.config.yaxis[t].title.rotate," ").concat(h.x," ").concat(h.y,")")):o.setAttribute("transform","rotate(-".concat(i.config.yaxis[t].title.rotate," ").concat(h.x," ").concat(h.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(t,e,i,s){var a=this.w,n=0,r=0,o=10;return void 0===a.config.yaxis[t].title.text||t<0?{xPos:r,padd:0}:(s?(r=e.width+a.config.yaxis[t].title.offsetX+i.width/2+o/2,0===(n+=1)&&(r-=o/2)):(r=-1*e.width+a.config.yaxis[t].title.offsetX+o/2+i.width/2,this.isBarHorizontal&&(o=25,r=-1*e.width-a.config.yaxis[t].title.offsetX-o)),{xPos:r,padd:o})}},{key:"setYAxisXPosition",value:function(t,e){var i=this,s=this.w,a=0,n=0,r=21,o=1;s.config.yaxis.length>1&&(this.multipleYs=!0),s.config.yaxis.map(function(l,h){var c=s.globals.ignoreYAxisIndexes.indexOf(h)>-1||!l.show||l.floating||0===t[h].width,d=t[h].width+e[h].width;l.opposite?i.isBarHorizontal?(n=s.globals.gridWidth+s.globals.translateX-1,s.globals.translateYAxisX[h]=n-l.labels.offsetX):(n=s.globals.gridWidth+s.globals.translateX+o,c||(o=o+d+20),s.globals.translateYAxisX[h]=n-l.labels.offsetX+20):(a=s.globals.translateX-r,c||(r=r+d+20),s.globals.translateYAxisX[h]=a+l.labels.offsetX)})}}]),t}(),D=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.tooltipKeyFormat="dd MMM"}return s(t,[{key:"xLabelFormat",value:function(t,e){var i=this.w;if("datetime"===i.config.xaxis.type&&void 0===i.config.tooltip.x.formatter)return new T(this.ctx).formatDate(new Date(e),i.config.tooltip.x.format,!0,!0);return t(e)}},{key:"setLabelFormatters",value:function(){var t=this.w;return t.globals.xLabelFormatter=function(t){return t},t.globals.xaxisTooltipFormatter=function(t){return t},t.globals.ttKeyFormatter=function(t){return t},t.globals.ttZFormatter=function(t){return t},t.globals.legendFormatter=function(t){return t},"function"==typeof t.config.tooltip.x.formatter&&(t.globals.ttKeyFormatter=t.config.tooltip.x.formatter),"function"==typeof t.config.xaxis.tooltip.formatter&&(t.globals.xaxisTooltipFormatter=t.config.xaxis.tooltip.formatter),Array.isArray(t.config.tooltip.y)?t.globals.ttVal=t.config.tooltip.y:void 0!==t.config.tooltip.y.formatter&&(t.globals.ttVal=t.config.tooltip.y),void 0!==t.config.tooltip.z.formatter&&(t.globals.ttZFormatter=t.config.tooltip.z.formatter),void 0!==t.config.legend.formatter&&(t.globals.legendFormatter=t.config.legend.formatter),void 0!==t.config.xaxis.labels.formatter?t.globals.xLabelFormatter=t.config.xaxis.labels.formatter:t.globals.xLabelFormatter=function(e){return d.isNumber(e)?"numeric"===t.config.xaxis.type&&t.globals.dataPoints<50?e.toFixed(1):e.toFixed(0):e},t.config.yaxis.forEach(function(e,i){void 0!==e.labels.formatter?t.globals.yLabelFormatters[i]=e.labels.formatter:t.globals.yLabelFormatters[i]=function(i){return d.isNumber(i)?0!==t.globals.yValueDecimal||t.globals.maxY-t.globals.minY<1?i.toFixed(e.decimalsInFloat):i.toFixed(0):i}}),t.globals}},{key:"heatmapLabelFormatters",value:function(){var t=this.w;if("heatmap"===t.config.chart.type){t.globals.yAxisScale[0].result=t.globals.seriesNames.slice();var e=t.globals.seriesNames.reduce(function(t,e){return t.length>e.length?t:e},0);t.globals.yAxisScale[0].niceMax=e,t.globals.yAxisScale[0].niceMin=e}}}]),t}(),N=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w;var s=this.w;this.xaxisLabels=s.globals.labels.slice(),s.globals.timelineLabels.length>0&&(this.xaxisLabels=s.globals.timelineLabels.slice()),this.drawnLabels=[],"top"===s.config.xaxis.position?this.offY=0:this.offY=s.globals.gridHeight+1,this.offY=this.offY+s.config.xaxis.axisBorder.offsetY,this.xaxisFontSize=s.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=s.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=s.config.xaxis.labels.style.colors,this.xaxisBorderWidth=s.config.xaxis.axisBorder.width,this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=s.globals.gridWidth*parseInt(this.xaxisBorderWidth)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth),this.xaxisBorderHeight=s.config.xaxis.axisBorder.height,this.yaxis=s.config.yaxis[0]}return s(t,[{key:"drawXaxis",value:function(){var t,e=this.w,i=new f(this.ctx),s=i.group({class:"apexcharts-xaxis",transform:"translate(".concat(e.config.xaxis.offsetX,", ").concat(e.config.xaxis.offsetY,")")}),a=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});s.add(a);for(var n=e.globals.padHorizontal,r=[],o=0;o<this.xaxisLabels.length;o++)r.push(this.xaxisLabels[o]);n=e.globals.isXNumeric?n+(t=e.globals.gridWidth/(r.length-1))/2+e.config.xaxis.labels.offsetX:n+(t=e.globals.gridWidth/r.length)+e.config.xaxis.labels.offsetX;var l=e.globals.xLabelFormatter,h=e.config.xaxis.labels.formatter,c=r.length;if(e.config.xaxis.labels.show)for(var d=0;d<=c-1;d++){var u=void 0===r[d]?"":r[d],g=void 0;g=new D(this.ctx).xLabelFormat(l,u),void 0!==h&&(g=h(u,this.xaxisLabels[d],d));var p=n-t/2+e.config.xaxis.labels.offsetX;e.globals.timelineLabels.length>0?(p=e.globals.timelineLabels[d].position,g=e.globals.timelineLabels[d].value):"datetime"===e.config.xaxis.type&&void 0===h&&(g=""),(0===(g=g.toString()).indexOf("NaN")||"undefined"===g||0===g.toLowerCase().indexOf("invalid")||g.toLowerCase().indexOf("infinity")>=0||this.drawnLabels.indexOf(g)>=0&&!e.config.xaxis.labels.showDuplicates)&&(g=""),this.drawnLabels.push(g);var x=28;e.globals.rotateXLabels&&(x=22);var m=i.drawText({x:p,y:this.offY+e.config.xaxis.labels.offsetY+x,text:"",textAnchor:"middle",fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[d]:this.xaxisForeColors,cssClass:"apexcharts-xaxis-label "+e.config.xaxis.labels.style.cssClass});a.add(m),i.addTspan(m,g,this.xaxisFontFamily);var v=document.createElementNS(e.globals.SVGNS,"title");v.textContent=g,m.node.appendChild(v),n+=t}if(void 0!==e.config.xaxis.title.text){var b=i.group({class:"apexcharts-xaxis-title"}),y=i.drawText({x:e.globals.gridWidth/2+e.config.xaxis.title.offsetX,y:this.offY-parseInt(this.xaxisFontSize)+e.globals.xAxisLabelsHeight+e.config.xaxis.title.offsetY,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,foreColor:e.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass});b.add(y),s.add(b)}if(e.config.xaxis.axisBorder.show){var w=0;"bar"===e.config.chart.type&&e.globals.isXNumeric&&(w-=15);var k=i.drawLine(e.globals.padHorizontal+w+e.config.xaxis.axisBorder.offsetX,this.offY,this.xaxisBorderWidth,this.offY,e.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);s.add(k)}return s}},{key:"drawXaxisInversed",value:function(t){var e,i,s=this.w,a=new f(this.ctx),n=s.config.yaxis[0].opposite?s.globals.translateYAxisX[t]:0,r=a.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:t}),o=a.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+n+", 0)"});r.add(o);for(var l=[],h=0;h<this.xaxisLabels.length;h++)l.push(this.xaxisLabels[h]);i=-(e=s.globals.gridHeight/l.length)/2.2;var c=s.globals.yLabelFormatters[0],d=s.config.yaxis[0].labels;if(d.show)for(var u=0;u<=l.length-1;u++){var g=void 0===l[u]?"":l[u];g=c(g);var p=a.drawText({x:d.offsetX-15,y:i+e+d.offsetY,text:g,textAnchor:this.yaxis.opposite?"start":"end",foreColor:d.style.color?d.style.color:d.style.colors[u],fontSize:d.style.fontSize,fontFamily:d.style.fontFamily,cssClass:"apexcharts-yaxis-label "+d.style.cssClass});o.add(p),i+=e}if(void 0!==s.config.yaxis[0].title.text){var x=a.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+n+", 0)"}),m=a.drawText({x:0,y:s.globals.gridHeight/2,text:s.config.yaxis[0].title.text,textAnchor:"middle",foreColor:s.config.yaxis[0].title.style.color,fontSize:s.config.yaxis[0].title.style.fontSize,fontFamily:s.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+s.config.yaxis[0].title.style.cssClass});x.add(m),r.add(x)}if(s.config.xaxis.axisBorder.show){var v=a.drawLine(s.globals.padHorizontal+s.config.xaxis.axisBorder.offsetX,this.offY,this.xaxisBorderWidth,this.offY,this.yaxis.axisBorder.color,0,this.xaxisBorderHeight);r.add(v),new R(this.ctx).drawAxisTicks(0,l.length,s.config.yaxis[0].axisBorder,s.config.yaxis[0].axisTicks,0,e,r)}return r}},{key:"drawXaxisTicks",value:function(t,e){var i=this.w,s=t;if(!(t<0||t>i.globals.gridWidth)){var a=this.offY+i.config.xaxis.axisTicks.offsetY,n=a+i.config.xaxis.axisTicks.height;if(i.config.xaxis.axisTicks.show){var r=new f(this.ctx).drawLine(t+i.config.xaxis.axisTicks.offsetX,a+i.config.xaxis.offsetY,s+i.config.xaxis.axisTicks.offsetX,n+i.config.xaxis.offsetY,i.config.xaxis.axisTicks.color);e.add(r),r.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var t=this.w,e=[],i=this.xaxisLabels.length,s=t.globals.padHorizontal;if(t.globals.timelineLabels.length>0)for(var a=0;a<i;a++)s=this.xaxisLabels[a].position,e.push(s);else for(var n=i,r=0;r<n;r++){var o=n;t.globals.isXNumeric&&"bar"!==t.config.chart.type&&(o-=1),s+=t.globals.gridWidth/o,e.push(s)}return e}},{key:"xAxisLabelCorrections",value:function(){var t=this.w,e=new f(this.ctx),i=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text");if(t.globals.rotateXLabels||t.config.xaxis.labels.rotateAlways)for(var r=0;r<s.length;r++){var o=e.rotateAroundCenter(s[r]);o.y=o.y-1,o.x=o.x+1,s[r].setAttribute("transform","rotate(".concat(t.config.xaxis.labels.rotate," ").concat(o.x," ").concat(o.y,")")),s[r].setAttribute("text-anchor","end");i.setAttribute("transform","translate(0, ".concat(-10,")"));var l=s[r].childNodes;t.config.xaxis.labels.trim&&e.placeTextWithEllipsis(l[0],l[0].textContent,t.config.xaxis.labels.maxHeight-40)}else for(var h=t.globals.gridWidth/t.globals.labels.length,c=0;c<s.length;c++){var d=s[c].childNodes;t.config.xaxis.labels.trim&&"bar"!==t.config.chart.type&&t.config.plotOptions.bar.horizontal&&e.placeTextWithEllipsis(d[0],d[0].textContent,h)}if(a.length>0){var u=a[a.length-1].getBBox(),g=a[0].getBBox();u.x<-20&&a[a.length-1].parentNode.removeChild(a[a.length-1]),g.x+g.width>t.globals.gridWidth&&a[0].parentNode.removeChild(a[0]);for(var p=0;p<n.length;p++)e.placeTextWithEllipsis(n[p],n[p].textContent,t.config.yaxis[0].labels.maxWidth-2*parseInt(t.config.yaxis[0].title.style.fontSize)-20)}}}]),t}(),H=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.isBarHorizontal=!("bar"!==this.w.config.chart.type||!this.w.config.plotOptions.bar.horizontal)}return s(t,[{key:"niceScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(t===Number.MIN_VALUE&&0===e||!d.isNumber(t)&&!d.isNumber(e)||t===Number.MIN_VALUE&&e===-Number.MAX_VALUE)return t=0,e=s,this.linearScale(t,e,s);t>e?(console.warn("yaxis.min cannot be greater than yaxis.max"),e=t+.1):t===e&&(t=0===t?0:t-.1,e=0===e?2:e+.1);var a=[],n=s+1;n<2?n=2:n>2&&(n-=2);for(var r=(e-t)/n,o=Math.floor(d.log10(r)),l=Math.pow(10,o),h=parseInt(r/l)*l,c=h*Math.floor(t/h),u=h*Math.ceil(e/h),g=c;a.push(g),!((g+=h)>u););if(void 0===this.w.config.yaxis[i].max&&void 0===this.w.config.yaxis[i].min||this.w.config.yaxis[i].forceNiceScale)return{result:a,niceMin:a[0],niceMax:a[a.length-1]};var f=t;(a=[]).push(f);for(var p=Math.abs(e-t)/s,x=0;x<=s-1;x++)f+=p,a.push(f);return{result:a,niceMin:a[0],niceMax:a[a.length-1]}}},{key:"linearScale",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,s=Math.abs(e-t)/i;i===Number.MAX_VALUE&&(i=10,s=1);for(var a=[],n=t;i>=0;)a.push(n),n+=s,i-=1;return{result:a,niceMin:a[0],niceMax:a[a.length-1]}}},{key:"logarithmicScale",value:function(t,e,i,s){(e<0||e===Number.MIN_VALUE)&&(e=.01);for(var a=Math.log(e)/Math.log(10),n=Math.log(i)/Math.log(10),r=Math.abs(i-e)/s,o=[],l=e;s>=0;)o.push(l),l+=r,s-=1;var h=o.map(function(t,s){t<=0&&(t=.01);var r=(n-a)/(i-e),o=Math.pow(10,a+r*(t-a));return Math.round(o/d.roundToBase(o,10))*d.roundToBase(o,10)});return 0===h[0]&&(h[0]=1),{result:h,niceMin:h[0],niceMax:h[h.length-1]}}},{key:"setYScaleForIndex",value:function(t,e,i){var s=this.w.globals,a=this.w.config,n=this.isBarHorizontal?a.xaxis:a.yaxis[t];void 0===s.yAxisScale[t]&&(s.yAxisScale[t]=[]),n.logarithmic?(s.allSeriesCollapsed=!1,s.yAxisScale[t]=this.logarithmicScale(t,e,i,n.tickAmount?n.tickAmount:Math.floor(Math.log10(i)))):i!==-Number.MAX_VALUE&&d.isNumber(i)?(s.allSeriesCollapsed=!1,s.yAxisScale[t]=this.niceScale(e,i,t,n.tickAmount?n.tickAmount:5)):s.yAxisScale[t]=this.linearScale(0,5,5)}},{key:"setMultipleYScales",value:function(){var t=this,e=this.w.globals,i=this.w.config,s=e.minYArr.concat([]),a=e.maxYArr.concat([]),n=[];i.yaxis.forEach(function(r,o){var l=o;i.series.forEach(function(t,i){t.name===r.seriesName&&-1===e.collapsedSeriesIndices.indexOf(i)&&(l=i,o!==i?n.push({index:i,similarIndex:o,alreadyExists:!0}):n.push({index:i}))});var h=s[l],c=a[l];t.setYScaleForIndex(o,h,c)}),this.sameScaleInMultipleAxes(s,a,n)}},{key:"sameScaleInMultipleAxes",value:function(t,e,i){var s=this,a=this.w.config,n=this.w.globals,r=[];i.forEach(function(t){t.alreadyExists&&(void 0===r[t.index]&&(r[t.index]=[]),r[t.index].push(t.index),r[t.index].push(t.similarIndex))}),r.forEach(function(t,e){r.forEach(function(i,s){var a,n;e!==s&&(a=t,n=i,a.filter(function(t){return-1!==n.indexOf(t)})).length>0&&(r[e]=r[e].concat(r[s]))})});var o=r.map(function(t){return t.filter(function(e,i){return t.indexOf(e)===i})}).map(function(t){return t.sort()});r=r.filter(function(t){return!!t});var l=o.slice(),h=l.map(function(t){return JSON.stringify(t)});l=l.filter(function(t,e){return h.indexOf(JSON.stringify(t))===e});var c=[],d=[];t.forEach(function(t,i){l.forEach(function(s,a){s.indexOf(i)>-1&&(void 0===c[a]&&(c[a]=[],d[a]=[]),c[a].push({key:i,value:t}),d[a].push({key:i,value:e[i]}))})});var u=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,Number.MIN_VALUE),g=Array.apply(null,Array(l.length)).map(Number.prototype.valueOf,-Number.MAX_VALUE);c.forEach(function(t,e){t.forEach(function(t,i){u[e]=Math.min(t.value,u[e])})}),d.forEach(function(t,e){t.forEach(function(t,i){g[e]=Math.max(t.value,g[e])})}),t.forEach(function(t,e){d.forEach(function(t,i){var r=u[i],o=g[i];t.forEach(function(i,l){t[l].key===e&&(void 0!==a.yaxis[e].min&&(r="function"==typeof a.yaxis[e].min?a.yaxis[e].min(n.minY):a.yaxis[e].min),void 0!==a.yaxis[e].max&&(o="function"==typeof a.yaxis[e].max?a.yaxis[e].max(n.maxY):a.yaxis[e].max),s.setYScaleForIndex(e,r,o))})})})}},{key:"autoScaleY",value:function(t,e){t||(t=this);var i=[];return t.w.config.series.forEach(function(t){var s,a,n=t.data.find(function(t){return t[0]>=e.xaxis.min})[1];a=s=n,t.data.forEach(function(t){t[0]<=e.xaxis.max&&t[0]>=e.xaxis.min&&(t[1]>a&&null!==t[1]&&(a=t[1]),t[1]<s&&null!==t[1]&&(s=t[1]))}),s*=.95,a*=1.05,i.push({min:s,max:a})}),i}}]),t}(),W=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.isBarHorizontal=!("bar"!==this.w.config.chart.type||!this.w.config.plotOptions.bar.horizontal),this.scales=new H(i)}return s(t,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-Number.MAX_VALUE,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=this.w.globals,n=-Number.MAX_VALUE,r=Number.MIN_VALUE;null===s&&(s=t+1);var o=a.series,l=o,h=o;"candlestick"===this.w.config.chart.type&&(l=a.seriesCandleL,h=a.seriesCandleH);for(var c=t;c<s;c++){a.dataPoints=Math.max(a.dataPoints,o[c].length);for(var u=0;u<a.series[c].length;u++)null!==o[c][u]&&d.isNumber(o[c][u])?(n=Math.max(n,h[c][u]),e=Math.min(e,l[c][u]),i=Math.max(i,l[c][u]),d.isFloat(o[c][u])&&(a.yValueDecimal=Math.max(a.yValueDecimal,o[c][u].toString().split(".")[1].length)),r>l[c][u]&&l[c][u]<0&&(r=l[c][u])):a.hasNullValues=!0}return{minY:r,maxY:n,lowestY:e,highestY:i}}},{key:"setYRange",value:function(){var t=this.w.globals,e=this.w.config;t.maxY=-Number.MAX_VALUE,t.minY=Number.MIN_VALUE;var i=Number.MAX_VALUE;if(t.isMultipleYAxis)for(var s=0;s<t.series.length;s++){var a=this.getMinYMaxY(s,i,null,s+1);t.minYArr.push(a.minY),t.maxYArr.push(a.maxY),i=a.lowestY}var n=this.getMinYMaxY(0,i,null,t.series.length);if(t.minY=n.minY,t.maxY=n.maxY,i=n.lowestY,e.chart.stacked){for(var r=[],o=[],l=0;l<t.series[t.maxValsInArrayIndex].length;l++)for(var h=0,c=0,u=0;u<t.series.length;u++)null!==t.series[u][l]&&d.isNumber(t.series[u][l])&&(t.series[u][l]>0?h=h+parseFloat(t.series[u][l])+1e-4:c+=parseFloat(t.series[u][l])),u===t.series.length-1&&(r.push(h),o.push(c));for(var g=0;g<r.length;g++)t.maxY=Math.max(t.maxY,r[g]),t.minY=Math.min(t.minY,o[g])}if(("line"===e.chart.type||"area"===e.chart.type||"candlestick"===e.chart.type)&&t.minY===Number.MIN_VALUE&&i!==-Number.MAX_VALUE){var f=t.maxY-i;i>=0&&i<=10&&(f=0),t.minY=i-5*f/100,t.maxY=t.maxY+5*f/100+.05}e.yaxis.map(function(e,i){void 0!==e.max&&("number"==typeof e.max?t.maxYArr[i]=e.max:"function"==typeof e.max&&(t.maxYArr[i]=e.max(t.maxY)),t.maxY=t.maxYArr[i]),void 0!==e.min&&("number"==typeof e.min?t.minYArr[i]=e.min:"function"==typeof e.min&&(t.minYArr[i]=e.min(t.minY)),t.minY=t.minYArr[i])}),this.isBarHorizontal&&(void 0!==e.xaxis.min&&"number"==typeof e.xaxis.min&&(t.minY=e.xaxis.min),void 0!==e.xaxis.max&&"number"==typeof e.xaxis.max&&(t.maxY=e.xaxis.max)),t.isMultipleYAxis?(this.scales.setMultipleYScales(),t.minY=i,t.yAxisScale.forEach(function(e,i){t.minYArr[i]=e.niceMin,t.maxYArr[i]=e.niceMax})):(this.scales.setYScaleForIndex(0,t.minY,t.maxY),t.minY=t.yAxisScale[0].niceMin,t.maxY=t.yAxisScale[0].niceMax,t.minYArr[0]=t.yAxisScale[0].niceMin,t.maxYArr[0]=t.yAxisScale[0].niceMax)}},{key:"setXRange",value:function(){var t,e=this.w.globals,i=this.w.config,s="numeric"===i.xaxis.type||"datetime"===i.xaxis.type||"category"===i.xaxis.type&&!e.noLabelsProvided;if(e.isXNumeric)for(var a=0;a<e.series.length;a++)if(e.labels[a])for(var n=0;n<e.labels[a].length;n++)null!==e.labels[a][n]&&d.isNumber(e.labels[a][n])&&(e.maxX=Math.max(e.maxX,e.labels[a][n]),e.initialmaxX=Math.max(e.maxX,e.labels[a][n]),e.minX=Math.min(e.minX,e.labels[a][n]),e.initialminX=Math.min(e.minX,e.labels[a][n]));if(e.noLabelsProvided&&0===i.xaxis.categories.length&&(e.maxX=e.labels[e.labels.length-1],e.initialmaxX=e.labels[e.labels.length-1],e.minX=1,e.initialminX=1),(e.comboChartsHasBars||"candlestick"===i.chart.type||"bar"===i.chart.type&&"category"!==i.xaxis.type)&&"category"!==i.xaxis.type){var r=e.minX-e.svgWidth/e.dataPoints*(Math.abs(e.maxX-e.minX)/e.svgWidth)/2;e.minX=r,e.initialminX=r;var o=e.maxX+e.svgWidth/e.dataPoints*(Math.abs(e.maxX-e.minX)/e.svgWidth)/2;e.maxX=o,e.initialmaxX=o}(e.isXNumeric||e.noLabelsProvided)&&(void 0===i.xaxis.tickAmount?(t=Math.round(e.svgWidth/150),"numeric"===i.xaxis.type&&e.dataPoints<20&&(t=e.dataPoints-1),t>e.dataPoints&&0!==e.dataPoints&&(t=e.dataPoints-1)):t="dataPoints"===i.xaxis.tickAmount?e.series[e.maxValsInArrayIndex].length-1:i.xaxis.tickAmount,void 0!==i.xaxis.max&&"number"==typeof i.xaxis.max&&(e.maxX=i.xaxis.max),void 0!==i.xaxis.min&&"number"==typeof i.xaxis.min&&(e.minX=i.xaxis.min),void 0!==i.xaxis.range&&(e.minX=e.maxX-i.xaxis.range),e.minX!==Number.MAX_VALUE&&e.maxX!==-Number.MAX_VALUE?e.xAxisScale=this.scales.linearScale(e.minX,e.maxX,t):(e.xAxisScale=this.scales.linearScale(1,t,t),e.noLabelsProvided&&e.labels.length>0&&(e.xAxisScale=this.scales.linearScale(1,e.labels.length,t-1),e.seriesX=e.labels.slice())),s&&(e.labels=e.xAxisScale.result.slice()));if(e.minX===e.maxX)if("datetime"===i.xaxis.type){var l=new Date(e.minX);l.setDate(l.getDate()-2),e.minX=new Date(l).getTime();var h=new Date(e.maxX);h.setDate(h.getDate()+2),e.maxX=new Date(h).getTime()}else("numeric"===i.xaxis.type||"category"===i.xaxis.type&&!e.noLabelsProvided)&&(e.minX=e.minX-2,e.maxX=e.maxX+2)}},{key:"setZRange",value:function(){var t=this.w.globals;if(t.isDataXYZ)for(var e=0;e<t.series.length;e++)if(void 0!==t.seriesZ[e])for(var i=0;i<t.seriesZ[e].length;i++)null!==t.seriesZ[e][i]&&d.isNumber(t.seriesZ[e][i])&&(t.maxZ=Math.max(t.maxZ,t.seriesZ[e][i]),t.minZ=Math.min(t.minZ,t.seriesZ[e][i]))}}]),t}(),B=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return s(t,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series")}},{key:"getSeriesByName",value:function(t){return this.w.globals.dom.baseEl.querySelector(".apexcharts-series.".concat(d.escapeString(t)))}},{key:"addCollapsedClassToSeries",value:function(t,e){for(var i=this.w,s=0;s<i.globals.collapsedSeries.length;s++)i.globals.collapsedSeries[s].index===e&&t.node.classList.add("apexcharts-series-collapsed")}},{key:"toggleSeriesOnHover",value:function(t,e){var i=this.w,s=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series");if("mousemove"===t.type){var a=parseInt(e.getAttribute("rel"))-1,n=null;n=i.globals.axisCharts||"radialBar"===i.config.chart.type?i.globals.axisCharts?i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a,"']")):i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a+1,"']")):i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a+1,"'] path"));for(var r=0;r<s.length;r++)s[r].classList.add("legend-mouseover-inactive");null!==n&&(i.globals.axisCharts||n.parentNode.classList.remove("legend-mouseover-inactive"),n.classList.remove("legend-mouseover-inactive"))}else if("mouseout"===t.type)for(var o=0;o<s.length;o++)s[o].classList.remove("legend-mouseover-inactive")}},{key:"highlightRangeInSeries",value:function(t,e){var i=this.w,s=i.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap-rect"),a=function(){for(var t=0;t<s.length;t++)s[t].classList.remove("legend-mouseover-inactive")};if("mousemove"===t.type){var n=parseInt(e.getAttribute("rel"))-1;a(),function(){for(var t=0;t<s.length;t++)s[t].classList.add("legend-mouseover-inactive")}(),function(t){for(var e=0;e<s.length;e++){var i=parseInt(s[e].getAttribute("val"));i>=t.from&&i<=t.to&&s[e].classList.remove("legend-mouseover-inactive")}}(i.config.plotOptions.heatmap.colorScale.ranges[n])}else"mouseout"===t.type&&a()}},{key:"getActiveSeriesIndex",value:function(){var t=this.w,e=0;if(t.globals.series.length>1)for(var i=t.globals.series.map(function(e,i){return e.length>0&&"bar"!==t.config.series[i].type&&"column"!==t.config.series[i].type?i:-1}),s=0;s<i.length;s++)if(-1!==i[s]){e=i[s];break}return e}},{key:"getActiveConfigSeriesIndex",value:function(){var t=this.w,e=0;if(t.config.series.length>1)for(var i=t.config.series.map(function(t,e){return t.data&&t.data.length>0?e:-1}),s=0;s<i.length;s++)if(-1!==i[s]){e=i[s];break}return e}},{key:"getPreviousPaths",value:function(){var t=this.w;function e(e,i,s){for(var a=e[i].childNodes,n={type:s,paths:[],realIndex:e[i].getAttribute("data:realIndex")},r=0;r<a.length;r++)if(a[r].hasAttribute("pathTo")){var o=a[r].getAttribute("pathTo");n.paths.push({d:o})}t.globals.previousPaths.push(n)}t.globals.previousPaths=[];var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-series");if(i.length>0)for(var s=i.length-1;s>=0;s--)e(i,s,"line");var a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-series");if(a.length>0)for(var n=a.length-1;n>=0;n--)e(a,n,"area");var r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series .apexcharts-series");if(r.length>0)for(var o=0;o<r.length;o++)e(r,o,"bar");var l=t.globals.dom.baseEl.querySelectorAll(".apexcharts-candlestick-series .apexcharts-series");if(l.length>0)for(var h=0;h<l.length;h++)e(l,h,"candlestick");var c=t.globals.dom.baseEl.querySelectorAll(".apexcharts-radar-series .apexcharts-series");if(c.length>0)for(var d=0;d<c.length;d++)e(c,d,"radar");var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series");if(u.length>0)for(var g=0;g<u.length;g++){for(var f=t.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series[data\\:realIndex='".concat(g,"'] circle")),p=[],x=0;x<f.length;x++)p.push({x:f[x].getAttribute("cx"),y:f[x].getAttribute("cy"),r:f[x].getAttribute("r")});t.globals.previousPaths.push(p)}var m=t.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series");if(m.length>0)for(var v=0;v<m.length;v++){for(var b=t.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series[data\\:realIndex='".concat(v,"'] circle")),y=[],w=0;w<b.length;w++)y.push({x:b[w].getAttribute("cx"),y:b[w].getAttribute("cy"),r:b[w].getAttribute("r")});t.globals.previousPaths.push(y)}var k=t.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series");if(k.length>0)for(var A=0;A<k.length;A++){for(var S=t.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series[data\\:realIndex='".concat(A,"'] rect")),C=[],L=0;L<S.length;L++)C.push({color:S[L].getAttribute("color")});t.globals.previousPaths.push(C)}t.globals.axisCharts||(t.globals.previousPaths=t.globals.series)}},{key:"handleNoData",value:function(){var t=this.w,e=t.config.noData,i=new f(this.ctx),s=t.globals.svgWidth/2,a=t.globals.svgHeight/2,n="middle";if(t.globals.noData=!0,t.globals.animationEnded=!0,"left"===e.align?(s=10,n="start"):"right"===e.align&&(s=t.globals.svgWidth-10,n="end"),"top"===e.verticalAlign?a=50:"bottom"===e.verticalAlign&&(a=t.globals.svgHeight-50),s+=e.offsetX,a=a+parseInt(e.style.fontSize)+2,void 0!==e.text&&""!==e.text){var r=i.drawText({x:s,y:a,text:e.text,textAnchor:n,fontSize:e.style.fontSize,fontFamily:e.style.fontFamily,foreColor:e.style.color,opacity:1,class:"apexcharts-text-nodata"});r.node.setAttribute("class","apexcharts-title-text"),t.globals.dom.Paper.add(r)}}},{key:"setNullSeriesToZeroValues",value:function(t){for(var e=this.w,i=0;i<t.length;i++)if(0===t[i].length)for(var s=0;s<t[e.globals.maxValsInArrayIndex].length;s++)t[i].push(0);return t}},{key:"hasAllSeriesEqualX",value:function(){for(var t=!0,e=this.w,i=this.filteredSeriesX(),s=0;s<i.length-1;s++)if(i[s][0]!==i[s+1][0]){t=!1;break}return e.globals.allSeriesHasEqualX=t,t}},{key:"filteredSeriesX",value:function(){var t=this.w.globals.seriesX.map(function(t,e){return t.length>0?t:[]});return t}}]),t}(),V=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.lgRect={},this.yAxisWidth=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.xPadRight=0,this.xPadLeft=0,this.isBarHorizontal=!("bar"!==this.w.config.chart.type||!this.w.config.plotOptions.bar.horizontal)}return s(t,[{key:"plotCoords",value:function(){var t=this.w,e=t.globals,i=this.getLegendsRect();e.axisCharts?this.setGridCoordsForAxisCharts(i):this.setGridCoordsForNonAxisCharts(i),this.titleSubtitleOffset(),e.gridHeight=e.gridHeight-t.config.grid.padding.top-t.config.grid.padding.bottom,e.gridWidth=e.gridWidth-t.config.grid.padding.left-t.config.grid.padding.right-this.xPadRight-this.xPadLeft,e.translateX=e.translateX+t.config.grid.padding.left+this.xPadLeft,e.translateY=e.translateY+t.config.grid.padding.top}},{key:"conditionalChecksForAxisCoords",value:function(t,e){var i=this.w;this.xAxisHeight=(t.height+e.height)*i.globals.LINE_HEIGHT_RATIO+15,this.xAxisWidth=t.width,this.xAxisHeight-e.height>i.config.xaxis.labels.maxHeight&&(this.xAxisHeight=i.config.xaxis.labels.maxHeight),i.config.xaxis.labels.minHeight&&this.xAxisHeight<i.config.xaxis.labels.minHeight&&(this.xAxisHeight=i.config.xaxis.labels.minHeight),i.config.xaxis.floating&&(this.xAxisHeight=0),this.isBarHorizontal?this.yAxisWidth=i.globals.yLabelsCoords[0].width+i.globals.yTitleCoords[0].width+15:this.yAxisWidth=this.getTotalYAxisWidth(),i.globals.isMultipleYAxis||(this.yAxisWidth<i.config.yaxis[0].labels.minWidth&&(this.yAxisWidth=i.config.yaxis[0].labels.minWidth),this.yAxisWidth>i.config.yaxis[0].labels.maxWidth&&(this.yAxisWidth=i.config.yaxis[0].labels.maxWidth))}},{key:"setGridCoordsForAxisCharts",value:function(t){var e=this.w,i=e.globals,s=this.getyAxisLabelsCoords(),a=this.getxAxisLabelsCoords(),n=this.getyAxisTitleCoords(),r=this.getxAxisTitleCoords();e.globals.yLabelsCoords=[],e.globals.yTitleCoords=[],e.config.yaxis.map(function(t,i){e.globals.yLabelsCoords.push({width:s[i].width,index:i}),e.globals.yTitleCoords.push({width:n[i].width,index:i})}),this.conditionalChecksForAxisCoords(a,r),i.translateXAxisY=e.globals.rotateXLabels?this.xAxisHeight/8:-4,i.translateXAxisX=e.globals.rotateXLabels&&e.globals.isXNumeric&&e.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,this.isBarHorizontal&&(i.rotateXLabels=!1,i.translateXAxisY=parseInt(e.config.xaxis.labels.style.fontSize)/1.5*-1),i.translateXAxisY=i.translateXAxisY+e.config.xaxis.labels.offsetY,i.translateXAxisX=i.translateXAxisX+e.config.xaxis.labels.offsetX;var o=this.yAxisWidth,l=this.xAxisHeight;i.xAxisLabelsHeight=this.xAxisHeight,i.xAxisHeight=this.xAxisHeight;var h=10;switch(e.config.grid.show&&"radar"!==e.config.chart.type||(o=0,l=35),this.isSparkline&&(t={height:0,width:0},l=0,o=0,h=0),this.additionalPaddingXLabels(a),e.config.legend.position){case"bottom":i.translateY=h,i.translateX=o,i.gridHeight=i.svgHeight-t.height-l-(this.isSparkline?0:e.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-o;break;case"top":i.translateY=t.height+h,i.translateX=o,i.gridHeight=i.svgHeight-t.height-l-(this.isSparkline?0:e.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-o;break;case"left":i.translateY=h,i.translateX=t.width+o,i.gridHeight=i.svgHeight-l-12,i.gridWidth=i.svgWidth-t.width-o;break;case"right":i.translateY=h,i.translateX=o,i.gridHeight=i.svgHeight-l-12,i.gridWidth=i.svgWidth-t.width-o-5;break;default:throw new Error("Legend position not supported")}this.setGridXPosForDualYAxis(n,s),new R(this.ctx).setYAxisXPosition(s,n)}},{key:"setGridCoordsForNonAxisCharts",value:function(t){var e=this.w,i=e.globals,s=0;e.config.legend.show&&!e.config.legend.floating&&(s=20);var a=10,n=0;if("pie"===e.config.chart.type||"donut"===e.config.chart.type?(a+=e.config.plotOptions.pie.offsetY,n+=e.config.plotOptions.pie.offsetX):"radialBar"===e.config.chart.type&&(a+=e.config.plotOptions.radialBar.offsetY,n+=e.config.plotOptions.radialBar.offsetX),!e.config.legend.show)return i.gridHeight=i.svgHeight-35,i.gridWidth=i.gridHeight,i.translateY=a-10,void(i.translateX=n+(i.svgWidth-i.gridWidth)/2);switch(e.config.legend.position){case"bottom":i.gridHeight=i.svgHeight-t.height-35,i.gridWidth=i.gridHeight,i.translateY=a-20,i.translateX=n+(i.svgWidth-i.gridWidth)/2;break;case"top":i.gridHeight=i.svgHeight-t.height-35,i.gridWidth=i.gridHeight,i.translateY=t.height+a,i.translateX=n+(i.svgWidth-i.gridWidth)/2;break;case"left":i.gridWidth=i.svgWidth-t.width-s,i.gridHeight=i.gridWidth,i.translateY=a,i.translateX=n+t.width+s;break;case"right":i.gridWidth=i.svgWidth-t.width-s-5,i.gridHeight=i.gridWidth,i.translateY=a,i.translateX=n+10;break;default:throw new Error("Legend position not supported")}}},{key:"setGridXPosForDualYAxis",value:function(t,e){var i=this.w;i.config.yaxis.map(function(s,a){-1===i.globals.ignoreYAxisIndexes.indexOf(a)&&!i.config.yaxis[a].floating&&i.config.yaxis[a].show&&s.opposite&&(i.globals.translateX=i.globals.translateX-(e[a].width+t[a].width)-parseInt(i.config.yaxis[a].labels.style.fontSize)/1.2-12)})}},{key:"additionalPaddingXLabels",value:function(t){var e=this,i=this.w;if("category"===i.config.xaxis.type&&this.isBarHorizontal||"numeric"===i.config.xaxis.type){var s="line"===i.config.chart.type||"area"===i.config.chart.type;i.config.yaxis.forEach(function(a,n){var r;(!a.show||a.floating||-1!==i.globals.collapsedSeriesIndices.indexOf(n)||s||a.opposite&&e.isBarHorizontal)&&((s&&i.globals.isMultipleYAxis&&-1!==i.globals.collapsedSeriesIndices.indexOf(n)||e.isBarHorizontal&&a.opposite)&&(r=t,i.config.grid.padding.left<r.width&&(e.xPadLeft=r.width/2+1)),(!e.isBarHorizontal&&a.opposite&&-1!==i.globals.collapsedSeriesIndices.indexOf(n)||s&&!i.globals.isMultipleYAxis)&&function(t){i.config.grid.padding.right<t.width&&(e.xPadRight=t.width/2+1)}(t))})}}},{key:"titleSubtitleOffset",value:function(){var t=this.w,e=t.globals,i=this.isSparkline?0:10;void 0!==t.config.title.text?i+=t.config.title.margin:i+=this.isSparkline?0:5,void 0!==t.config.subtitle.text?i+=t.config.subtitle.margin:i+=this.isSparkline?0:5,t.config.legend.show&&"bottom"===t.config.legend.position&&!t.config.legend.floating&&t.config.series.length>1&&(i+=10);var s=this.getTitleSubtitleCoords("title"),a=this.getTitleSubtitleCoords("subtitle");e.gridHeight=e.gridHeight-s.height-a.height-i,e.translateY=e.translateY+s.height+a.height+i}},{key:"getTotalYAxisWidth",value:function(){var t=this.w,e=0,i=10,s=function(e){return t.globals.ignoreYAxisIndexes.indexOf(e)>-1};return t.globals.yLabelsCoords.map(function(a,n){var r=t.config.yaxis[n].floating;a.width>0&&!r?(e=e+a.width+i,s(n)&&(e=e-a.width-i)):e+=r||!t.config.yaxis[n].show?0:5}),t.globals.yTitleCoords.map(function(a,n){var r=t.config.yaxis[n].floating;i=parseInt(t.config.yaxis[n].title.style.fontSize),a.width>0&&!r?(e=e+a.width+i,s(n)&&(e=e-a.width-i)):e+=r||!t.config.yaxis[n].show?0:5}),e}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var t,e=this.w,i=e.globals.timelineLabels.slice().map(function(t){return t.value}),s=i.reduce(function(t,e){return void 0===t?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):t.length>e.length?t:e},0);return 1.05*(t=new f(this.ctx).getTextRects(s,e.config.xaxis.labels.style.fontSize)).width*i.length>e.globals.gridWidth&&0!==e.config.xaxis.labels.rotate&&(e.globals.overlappingXLabels=!0),t}},{key:"getxAxisLabelsCoords",value:function(){var t,e=this.w,i=e.globals.labels.slice();if(e.globals.timelineLabels.length>0){var s=this.getxAxisTimeScaleLabelsCoords();t={width:s.width,height:s.height}}else{var a="left"!==e.config.legend.position||"right"!==e.config.legend.position||e.config.legend.floating?0:this.lgRect.width,n=i.reduce(function(t,e){return t.length>e.length?t:e},0);this.isBarHorizontal&&(n=e.globals.yAxisScale[0].result.reduce(function(t,e){return t.length>e.length?t:e},0));var r=e.globals.xLabelFormatter;n=new D(this.ctx).xLabelFormat(r,n);var o=new f(this.ctx),l=o.getTextRects(n,e.config.xaxis.labels.style.fontSize);(t={width:l.width,height:l.height}).width*i.length>e.globals.svgWidth-a-this.yAxisWidth&&0!==e.config.xaxis.labels.rotate?this.isBarHorizontal||(e.globals.rotateXLabels=!0,l=o.getTextRects(n,e.config.xaxis.labels.style.fontSize,e.config.xaxis.labels.style.fontFamily,"rotate(".concat(e.config.xaxis.labels.rotate," 0 0)"),!1),t.height=l.height/1.66):e.globals.rotateXLabels=!1}return e.config.xaxis.labels.show||(t={width:0,height:0}),{width:t.width,height:t.height}}},{key:"getyAxisLabelsCoords",value:function(){var t=this,e=this.w,i=[],s=10;return e.config.yaxis.map(function(a,n){if(a.show&&a.labels.show&&e.globals.yAxisScale[n].result.length){var r=e.globals.yLabelFormatters[n],o=r(e.globals.yAxisScale[n].niceMax,-1);if(void 0!==o&&0!==o.length||(o=e.globals.yAxisScale[n].niceMax),t.isBarHorizontal)s=0,o=r(o=e.globals.labels.slice().reduce(function(t,e){return t.length>e.length?t:e},0),-1);var l=new f(t.ctx).getTextRects(o,a.labels.style.fontSize);i.push({width:l.width+s,height:l.height})}else i.push({width:0,height:0})}),i}},{key:"getxAxisTitleCoords",value:function(){var t=this.w,e=0,i=0;if(void 0!==t.config.xaxis.title.text){var s=new f(this.ctx).getTextRects(t.config.xaxis.title.text,t.config.xaxis.title.style.fontSize);e=s.width,i=s.height}return{width:e,height:i}}},{key:"getyAxisTitleCoords",value:function(){var t=this,e=this.w,i=[];return e.config.yaxis.map(function(e,s){if(e.show&&void 0!==e.title.text){var a=new f(t.ctx).getTextRects(e.title.text,e.title.style.fontSize,e.title.style.fontFamily,"rotate(-90 0 0)",!1);i.push({width:a.width,height:a.height})}else i.push({width:0,height:0})}),i}},{key:"getTitleSubtitleCoords",value:function(t){var e=this.w,i=0,s=0,a="title"===t?e.config.title.floating:e.config.subtitle.floating,n=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t,"-text"));if(null!==n&&!a){var r=n.getBoundingClientRect();i=r.width,s=e.globals.axisCharts?r.height+5:r.height}return{width:i,height:s}}},{key:"getLegendsRect",value:function(){var t=this.w,e=t.globals.dom.baseEl.querySelector(".apexcharts-legend"),i=Object.assign({},d.getBoundingClientRect(e));return null!==e&&!t.config.legend.floating&&t.config.legend.show?this.lgRect={x:i.x,y:i.y,height:i.height,width:0===i.height?0:i.width}:this.lgRect={x:0,y:0,height:0,width:0},this.lgRect}}]),t}(),G=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.timeScaleArray=[]}return s(t,[{key:"calculateTimeScaleTicks",value:function(t,e){var i=this,s=this.w;if(s.globals.allSeriesCollapsed)return s.globals.labels=[],s.globals.timelineLabels=[],[];var a=new T(this.ctx),r=(e-t)/864e5;this.determineInterval(r),s.globals.disableZoomIn=!1,s.globals.disableZoomOut=!1,r<.005?s.globals.disableZoomIn=!0:r>5e4&&(s.globals.disableZoomOut=!0);var o=a.getTimeUnitsfromTimestamp(t,e),l=s.globals.gridWidth/r,h=l/24,c=h/60,d=Math.floor(24*r),u=Math.floor(24*r*60),g=Math.floor(r),f=Math.floor(r/30),p=Math.floor(r/365),x={minMinute:o.minMinute,minHour:o.minHour,minDate:o.minDate,minMonth:o.minMonth,minYear:o.minYear},m={firstVal:x,currentMinute:x.minMinute,currentHour:x.minHour,currentMonthDate:x.minDate,currentDate:x.minDate,currentMonth:x.minMonth,currentYear:x.minYear,daysWidthOnXAxis:l,hoursWidthOnXAxis:h,minutesWidthOnXAxis:c,numberOfMinutes:u,numberOfHours:d,numberOfDays:g,numberOfMonths:f,numberOfYears:p};switch(this.tickInterval){case"years":this.generateYearScale(m);break;case"months":case"half_year":this.generateMonthScale(m);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(m);break;case"hours":this.generateHourScale(m);break;case"minutes":this.generateMinuteScale(m)}var v=this.timeScaleArray.map(function(t){var e={position:t.position,unit:t.unit,year:t.year,day:t.day?t.day:1,hour:t.hour?t.hour:0,month:t.month+1};return"month"===t.unit?n({},e,{value:t.value+1}):"day"===t.unit||"hour"===t.unit?n({},e,{value:t.value}):"minute"===t.unit?n({},e,{value:t.value,minute:t.value}):t});return v.filter(function(t){var e=1,a=Math.ceil(s.globals.gridWidth/120),n=t.value;void 0!==s.config.xaxis.tickAmount&&(a=s.config.xaxis.tickAmount),v.length>a&&(e=Math.floor(v.length/a));var r=!1,o=!1;switch(i.tickInterval){case"half_year":e=7,"year"===t.unit&&(r=!0);break;case"months":e=1,"year"===t.unit&&(r=!0);break;case"months_fortnight":e=15,"year"!==t.unit&&"month"!==t.unit||(r=!0),30===n&&(o=!0);break;case"months_days":e=10,"month"===t.unit&&(r=!0),30===n&&(o=!0);break;case"week_days":e=8,"month"===t.unit&&(r=!0);break;case"days":e=1,"month"===t.unit&&(r=!0);break;case"hours":"day"===t.unit&&(r=!0);break;case"minutes":n%5!=0&&(o=!0)}if("minutes"===i.tickInterval||"hours"===i.tickInterval){if(!o)return!0}else if((n%e==0||r)&&!o)return!0})}},{key:"recalcDimensionsBasedOnFormat",value:function(t){var e=this.w,i=this.formatDates(t),s=this.removeOverlappingTS(i);e.globals.timelineLabels=s.slice(),new V(this.ctx).plotCoords()}},{key:"determineInterval",value:function(t){switch(!0){case t>1825:this.tickInterval="years";break;case t>800&&t<=1825:this.tickInterval="half_year";break;case t>180&&t<=800:this.tickInterval="months";break;case t>90&&t<=180:this.tickInterval="months_fortnight";break;case t>60&&t<=90:this.tickInterval="months_days";break;case t>30&&t<=60:this.tickInterval="week_days";break;case t>2&&t<=30:this.tickInterval="days";break;case t>.1&&t<=2:this.tickInterval="hours";break;case t<.1:this.tickInterval="minutes";break;default:this.tickInterval="days"}}},{key:"generateYearScale",value:function(t){var e=t.firstVal,i=t.currentMonth,s=t.currentYear,a=t.daysWidthOnXAxis,n=t.numberOfYears,r=e.minYear,o=0,l=new T(this.ctx);if(e.minDate>1&&e.minMonth>0){var h=l.determineRemainingDaysOfYear(e.minYear,e.minMonth,e.minDate);o=(l.determineDaysOfYear(e.minYear)-h+1)*a,r=e.minYear+1,this.timeScaleArray.push({position:o,value:r,unit:"year",year:r,month:d.monthMod(i+1)})}else 1===e.minDate&&0===e.minMonth&&this.timeScaleArray.push({position:o,value:r,unit:"year",year:s,month:d.monthMod(i+1)});for(var c=r,u=o,g=0;g<n;g++)c++,u=l.determineDaysOfYear(c-1)*a+u,this.timeScaleArray.push({position:u,value:c,unit:"year",year:c,month:1})}},{key:"generateMonthScale",value:function(t){var e=t.firstVal,i=t.currentMonthDate,s=t.currentMonth,a=t.currentYear,n=t.daysWidthOnXAxis,r=t.numberOfMonths,o=s,l=0,h=new T(this.ctx),c="month",u=0;if(e.minDate>1){l=(h.determineDaysOfMonths(s+1,e.minYear)-i+1)*n,o=d.monthMod(s+1);var g=a+u,f=d.monthMod(o),p=o;0===o&&(c="year",p=g,f=1,g+=u+=1),this.timeScaleArray.push({position:l,value:p,unit:c,year:g,month:f})}else this.timeScaleArray.push({position:l,value:o,unit:c,year:a,month:d.monthMod(s)});for(var x=o+1,m=l,v=0,b=1;v<r;v++,b++){0===(x=d.monthMod(x))?(c="year",u+=1):c="month";var y=a+Math.floor(x/12)+u;m=h.determineDaysOfMonths(x,y)*n+m;var w=0===x?y:x;this.timeScaleArray.push({position:m,value:w,unit:c,year:y,month:0===x?1:x}),x++}}},{key:"generateDayScale",value:function(t){var e=t.firstVal,i=t.currentMonth,s=t.currentYear,a=t.hoursWidthOnXAxis,n=t.numberOfDays,r=new T(this.ctx),o="day",l=(24-e.minHour)*a,h=e.minDate+1,c=h,u=function(t,e,i){return t>r.determineDaysOfMonths(e+1,i)?(g=1,o="month",c=e+=1,e):e},g=h,f=u(g,i,s);this.timeScaleArray.push({position:l,value:c,unit:o,year:s,month:d.monthMod(f),day:g});for(var p=l,x=0;x<n;x++){o="day",f=u(g+=1,f,s+Math.floor(f/12)+0);var m=s+Math.floor(f/12)+0;p=24*a+p;var v=1===g?d.monthMod(f):g;this.timeScaleArray.push({position:p,value:v,unit:o,year:m,month:d.monthMod(f),day:v})}}},{key:"generateHourScale",value:function(t){var e=t.firstVal,i=t.currentDate,s=t.currentMonth,a=t.currentYear,n=t.minutesWidthOnXAxis,r=t.numberOfHours,o=new T(this.ctx),l="hour",h=function(t,e){return t>o.determineDaysOfMonths(e+1,a)&&(x=1,e+=1),{month:e,date:x}},c=function(t,e){return t>o.determineDaysOfMonths(e+1,a)?e+=1:e},u=60-e.minMinute,g=u*n,f=e.minHour+1,p=f+1;60===u&&(g=0,p=(f=e.minHour)+1);var x=i,m=c(x,s);this.timeScaleArray.push({position:g,value:f,unit:l,day:x,hour:p,year:a,month:d.monthMod(m)});for(var v=g,b=0;b<r;b++){if(l="hour",p>=24)p=0,l="day",m=h(x+=1,m).month,m=c(x,m);var y=a+Math.floor(m/12)+0;v=0===p&&0===b?u*n:60*n+v;var w=0===p?x:p;this.timeScaleArray.push({position:v,value:w,unit:l,hour:p,day:x,year:y,month:d.monthMod(m)}),p++}}},{key:"generateMinuteScale",value:function(t){var e=t.firstVal,i=t.currentMinute,s=t.currentHour,a=t.currentDate,n=t.currentMonth,r=t.currentYear,o=t.minutesWidthOnXAxis,l=t.numberOfMinutes,h=o-(i-e.minMinute),c=e.minMinute+1,u=c+1,g=a,f=n,p=r,x=s;this.timeScaleArray.push({position:h,value:c,unit:"minute",day:g,hour:x,minute:u,year:p,month:d.monthMod(f)});for(var m=h,v=0;v<l;v++){u>=60&&(u=0,24===(x+=1)&&(x=0));var b=r+Math.floor(f/12)+0;m=o+m;var y=u;this.timeScaleArray.push({position:m,value:y,unit:"minute",hour:x,minute:u,day:g,year:b,month:d.monthMod(f)}),u++}}},{key:"createRawDateString",value:function(t,e){var i=t.year;return i+="-"+("0"+t.month.toString()).slice(-2),"day"===t.unit?i+="day"===t.unit?"-"+("0"+e).slice(-2):"-01":i+="-"+("0"+(t.day?t.day:"1")).slice(-2),"hour"===t.unit?i+="hour"===t.unit?"T"+("0"+e).slice(-2):"T00":i+="T"+("0"+(t.hour?t.hour:"0")).slice(-2),i+="minute"===t.unit?":"+("0"+e).slice(-2)+":00.000Z":":00:00.000Z"}},{key:"formatDates",value:function(t){var e=this,i=this.w;return t.map(function(t){var s=t.value.toString(),a=new T(e.ctx),n=e.createRawDateString(t,s),r=new Date(Date.parse(n));if(void 0===i.config.xaxis.labels.format){var o="dd MMM",l=i.config.xaxis.labels.datetimeFormatter;"year"===t.unit&&(o=l.year),"month"===t.unit&&(o=l.month),"day"===t.unit&&(o=l.day),"hour"===t.unit&&(o=l.hour),"minute"===t.unit&&(o=l.minute),s=a.formatDate(r,o,!0,!1)}else s=a.formatDate(r,i.config.xaxis.labels.format);return{dateString:n,position:t.position,value:s,unit:t.unit,year:t.year,month:t.month}})}},{key:"removeOverlappingTS",value:function(t){var e=this,i=new f(this.ctx),s=0,a=t.map(function(a,n){if(n>0&&e.w.config.xaxis.labels.hideOverlappingLabels){var r=i.getTextRects(t[s].value).width,o=t[s].position;return a.position>o+r+10?(s=n,a):null}return a});return a=a.filter(function(t){return null!==t})}}]),t}(),_=function(){function t(i,s){e(this,t),this.ctx=s,this.w=s.w,this.el=i,this.coreUtils=new b(this.ctx),this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[]}return s(t,[{key:"setupElements",value:function(){var t=this.w.globals,e=this.w.config,i=e.chart.type;t.axisCharts=["line","area","bar","candlestick","radar","scatter","bubble","heatmap"].indexOf(i)>-1,t.xyCharts=["line","area","bar","candlestick","scatter","bubble"].indexOf(i)>-1,t.chartClass=".apexcharts"+t.cuid,t.dom.baseEl=this.el,t.dom.elWrap=document.createElement("div"),f.setAttrs(t.dom.elWrap,{id:t.chartClass.substring(1),class:"apexcharts-canvas "+t.chartClass.substring(1)}),this.el.appendChild(t.dom.elWrap),t.dom.Paper=new window.SVG.Doc(t.dom.elWrap),t.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(e.chart.offsetX,", ").concat(e.chart.offsetY,")")}),t.dom.Paper.node.style.background=e.chart.background,this.setSVGDimensions(),t.dom.elGraphical=t.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),t.dom.elDefs=t.dom.Paper.defs(),t.dom.elLegendWrap=document.createElement("div"),t.dom.elLegendWrap.classList.add("apexcharts-legend"),t.dom.elWrap.appendChild(t.dom.elLegendWrap),t.dom.Paper.add(t.dom.elGraphical),t.dom.elGraphical.add(t.dom.elDefs)}},{key:"plotChartType",value:function(t,e){var i=this.w,s=i.config,a=i.globals,n={series:[],i:[]},r={series:[],i:[]},o={series:[],i:[]},l={series:[],i:[]},h={series:[],i:[]};a.series.map(function(e,s){void 0!==t[s].type?("column"===t[s].type||"bar"===t[s].type?(i.config.plotOptions.bar.horizontal=!1,l.series.push(e),l.i.push(s)):"area"===t[s].type?(r.series.push(e),r.i.push(s)):"line"===t[s].type?(n.series.push(e),n.i.push(s)):"scatter"===t[s].type?(o.series.push(e),o.i.push(s)):"bubble"===t[s].type||("candlestick"===t[s].type?(h.series.push(e),h.i.push(s)):console.warn("You have specified an unrecognized chart type. Available types for this propery are line/area/column/bar/scatter/bubble")),a.comboCharts=!0):(n.series.push(e),n.i.push(s))});var c=new O(this.ctx,e),d=new P(this.ctx,e),u=new I(this.ctx),g=new F(this.ctx),f=new Y(this.ctx),p=[];if(a.comboCharts){if(r.series.length>0&&p.push(c.draw(r.series,"area",r.i)),l.series.length>0)if(i.config.chart.stacked){var x=new M(this.ctx,e);p.push(x.draw(l.series,l.i))}else{var m=new z(this.ctx,e);p.push(m.draw(l.series,l.i))}if(n.series.length>0&&p.push(c.draw(n.series,"line",n.i)),h.series.length>0&&p.push(d.draw(h.series,h.i)),o.series.length>0){var v=new O(this.ctx,e,!0);p.push(v.draw(o.series,"scatter",o.i))}}else switch(s.chart.type){case"line":p=c.draw(a.series,"line");break;case"area":p=c.draw(a.series,"area");break;case"bar":if(s.chart.stacked)p=new M(this.ctx,e).draw(a.series);else p=new z(this.ctx,e).draw(a.series);break;case"candlestick":p=new P(this.ctx,e).draw(a.series);break;case"heatmap":p=new X(this.ctx,e).draw(a.series);break;case"pie":case"donut":p=u.draw(a.series);break;case"radialBar":p=g.draw(a.series);break;case"radar":p=f.draw(a.series);break;default:p=c.draw(a.series)}return p}},{key:"setSVGDimensions",value:function(){var t=this.w.globals,e=this.w.config;t.svgWidth=e.chart.width,t.svgHeight=e.chart.height;var i=d.getDimensions(this.el),s=e.chart.width.toString().split(/[0-9]+/g).pop();if("%"===s?d.isNumber(i[0])&&(0===i[0].width&&(i=d.getDimensions(this.el.parentNode)),t.svgWidth=i[0]*parseInt(e.chart.width)/100):"px"!==s&&""!==s||(t.svgWidth=parseInt(e.chart.width)),"auto"!==t.svgHeight&&""!==t.svgHeight)if("%"===e.chart.height.toString().split(/[0-9]+/g).pop()){var a=d.getDimensions(this.el.parentNode);t.svgHeight=a[1]*parseInt(e.chart.height)/100}else t.svgHeight=parseInt(e.chart.height);else t.axisCharts?t.svgHeight=t.svgWidth/1.61:t.svgHeight=t.svgWidth;f.setAttrs(t.dom.Paper.node,{width:t.svgWidth,height:t.svgHeight});var n=e.chart.sparkline.enabled?0:t.axisCharts?14:5;t.dom.Paper.node.parentNode.parentNode.style.minHeight=t.svgHeight+n+"px",t.dom.elWrap.style.width=t.svgWidth+"px",t.dom.elWrap.style.height=t.svgHeight+"px"}},{key:"shiftGraphPosition",value:function(){var t=this.w.globals,e=t.translateY,i={transform:"translate("+t.translateX+", "+e+")"};f.setAttrs(t.dom.elGraphical.node,i)}},{key:"coreCalculations",value:function(){new W(this.ctx).init()}},{key:"resetGlobals",value:function(){var t=this,e=this.w.globals;e.series=[],e.seriesCandleO=[],e.seriesCandleH=[],e.seriesCandleL=[],e.seriesCandleC=[],e.seriesPercent=[],e.seriesX=[],e.seriesZ=[],e.seriesNames=[],e.seriesTotals=[],e.stackedSeriesTotals=[],e.labels=[],e.timelineLabels=[],e.noLabelsProvided=!1,e.timescaleTicks=[],e.resizeTimer=null,e.selectionResizeTimer=null,e.seriesXvalues=t.w.config.series.map(function(t){return[]}),e.seriesYvalues=t.w.config.series.map(function(t){return[]}),e.delayedElements=[],e.pointsArray=[],e.dataLabelsRects=[],e.isXNumeric=!1,e.isDataXYZ=!1,e.maxY=-Number.MAX_VALUE,e.minY=Number.MIN_VALUE,e.minYArr=[],e.maxYArr=[],e.maxX=-Number.MAX_VALUE,e.minX=Number.MAX_VALUE,e.initialmaxX=-Number.MAX_VALUE,e.initialminX=Number.MAX_VALUE,e.maxDate=0,e.minDate=Number.MAX_VALUE,e.minZ=Number.MAX_VALUE,e.maxZ=-Number.MAX_VALUE,e.yAxisScale=[],e.xAxisScale=null,e.xAxisTicksPositions=[],e.yLabelsCoords=[],e.yTitleCoords=[],e.xRange=0,e.yRange=[],e.zRange=0,e.dataPoints=0}},{key:"isMultipleY",value:function(){if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1)return this.w.config.chart.stacked=!1,this.w.globals.isMultipleYAxis=!0,!0}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var t=this,e=this.w;e.globals.ignoreYAxisIndexes=e.globals.collapsedSeries.map(function(e,i){if(t.w.globals.isMultipleYAxis)return e.index})}},{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var t=this.w.config.series.slice(),e=new B(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&null!==t[this.activeSeriesIndex].data[0]&&void 0!==t[this.activeSeriesIndex].data[0].x&&null!==t[this.activeSeriesIndex].data[0])return!0}},{key:"isFormat2DArray",value:function(){var t=this.w.config.series.slice(),e=new B(this.ctx);if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(),void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&void 0!==t[this.activeSeriesIndex].data[0]&&null!==t[this.activeSeriesIndex].data[0]&&t[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(t,e){for(var i=this.w.config,s=this.w.globals,a=0;a<t[e].data.length;a++)if(void 0!==t[e].data[a][1]&&(Array.isArray(t[e].data[a][1])&&4===t[e].data[a][1].length?this.twoDSeries.push(d.parseNumber(t[e].data[a][1][3])):this.twoDSeries.push(d.parseNumber(t[e].data[a][1]))),"datetime"===i.xaxis.type){var n=new Date(t[e].data[a][0]);n=new Date(n).getTime(),this.twoDSeriesX.push(n)}else this.twoDSeriesX.push(t[e].data[a][0]);for(var r=0;r<t[e].data.length;r++)void 0!==t[e].data[r][2]&&(this.threeDSeries.push(t[e].data[r][2]),s.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(t,e){var i=this.w.config,s=this.w.globals,a=new T(this.ctx),n=e;s.collapsedSeriesIndices.indexOf(e)>-1&&(n=this.activeSeriesIndex);for(var r=0;r<t[e].data.length;r++)void 0!==t[e].data[r].y&&(Array.isArray(t[e].data[r].y)&&4===t[e].data[r].y.length?this.twoDSeries.push(d.parseNumber(t[e].data[r].y[3])):this.twoDSeries.push(d.parseNumber(t[e].data[r].y)));for(var o=0;o<t[n].data.length;o++){var l="string"==typeof t[n].data[o].x,h=!!a.isValidDate(t[n].data[o].x.toString());l||h?l?"datetime"===i.xaxis.type?this.twoDSeriesX.push(a.parseDate(t[n].data[o].x)):(this.fallbackToCategory=!0,this.twoDSeriesX.push(t[n].data[o].x)):"datetime"===i.xaxis.type?this.twoDSeriesX.push(a.parseDate(t[n].data[o].x.toString())):this.twoDSeriesX.push(parseFloat(t[n].data[o].x)):this.twoDSeriesX.push(t[n].data[o].x)}if(t[e].data[0]&&void 0!==t[e].data[0].z){for(var c=0;c<t[e].data.length;c++)this.threeDSeries.push(t[e].data[c].z);s.isDataXYZ=!0}}},{key:"handleCandleStickData",value:function(t,e){var i=this.w.globals,s={};return this.isFormat2DArray()?s=this.handleCandleStickDataFormat("array",t,e):this.isFormatXY()&&(s=this.handleCandleStickDataFormat("xy",t,e)),i.seriesCandleO.push(s.o),i.seriesCandleH.push(s.h),i.seriesCandleL.push(s.l),i.seriesCandleC.push(s.c),s}},{key:"handleCandleStickDataFormat",value:function(t,e,i){var s=[],a=[],n=[],r=[],o="Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick";if("array"===t){if(4!==e[i].data[0][1].length)throw new Error(o);for(var l=0;l<e[i].data.length;l++)s.push(e[i].data[l][1][0]),a.push(e[i].data[l][1][1]),n.push(e[i].data[l][1][2]),r.push(e[i].data[l][1][3])}else if("xy"===t){if(4!==e[i].data[0].y.length)throw new Error(o);for(var h=0;h<e[i].data.length;h++)s.push(e[i].data[h].y[0]),a.push(e[i].data[h].y[1]),n.push(e[i].data[h].y[2]),r.push(e[i].data[h].y[3])}return{o:s,h:a,l:n,c:r}}},{key:"parseDataAxisCharts",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.ctx,i=this.w.config,s=this.w.globals,a=new T(e),n=0;n<t.length;n++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],void 0===t[n].data)return void console.error("It is a possibility that you may have not included 'data' property in series.");if(this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(t,n):this.isFormatXY()&&this.handleFormatXY(t,n),"candlestick"!==i.chart.type&&"candlestick"!==t[n].type||this.handleCandleStickData(t,n),s.series.push(this.twoDSeries),s.labels.push(this.twoDSeriesX),s.seriesX.push(this.twoDSeriesX),this.fallbackToCategory||(s.isXNumeric=!0);else{if("datetime"===i.xaxis.type){s.isXNumeric=!0;for(var r=i.labels.length>0?i.labels.slice():i.xaxis.categories.slice(),o=0;o<r.length;o++)if("string"==typeof r[o]){if(!a.isValidDate(r[o]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");this.twoDSeriesX.push(a.parseDate(r[o]))}s.seriesX.push(this.twoDSeriesX)}else if("numeric"===i.xaxis.type){s.isXNumeric=!0;var l=i.labels.length>0?i.labels.slice():i.xaxis.categories.slice();l.length>0&&(this.twoDSeriesX=l,s.seriesX.push(this.twoDSeriesX))}s.labels.push(this.twoDSeriesX);var h=t[n].data.map(function(t){return d.parseNumber(t)});s.series.push(h)}s.seriesZ.push(this.threeDSeries),void 0!==t[n].name?s.seriesNames.push(t[n].name):s.seriesNames.push("series-"+parseInt(n+1))}return this.w}},{key:"parseDataNonAxisCharts",value:function(t){var e=this.w.globals,i=this.w.config;e.series=t.slice(),e.seriesNames=i.labels.slice();for(var s=0;s<e.series.length;s++)void 0===e.seriesNames[s]&&e.seriesNames.push("series-"+(s+1));return this.w}},{key:"handleExternalLabelsData",value:function(t){var e=this.w.config,i=this.w.globals;if(e.xaxis.categories.length>0)i.labels=e.xaxis.categories;else if(e.labels.length>0)i.labels=e.labels.slice();else if(this.fallbackToCategory)i.labels=i.labels[0];else{var s=[];if(i.axisCharts){for(var a=0;a<i.series[i.maxValsInArrayIndex].length;a++)s.push(a+1);for(var n=0;n<t.length;n++)i.seriesX.push(s);i.isXNumeric=!0}if(0===s.length){s=[0,10];for(var r=0;r<t.length;r++)i.seriesX.push(s)}i.labels=s,i.noLabelsProvided=!0,"category"===e.xaxis.type&&(i.isXNumeric=!1)}}},{key:"parseData",value:function(t){var e=this.w,i=e.config,s=e.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.resetGlobals(),this.isMultipleY(),s.axisCharts?this.parseDataAxisCharts(t):this.parseDataNonAxisCharts(t),this.coreUtils.getLargestSeries(),"bar"===i.chart.type&&i.chart.stacked){var a=new B(this.ctx);s.series=a.setNullSeriesToZeroValues(s.series)}this.coreUtils.getSeriesTotals(),s.axisCharts&&this.coreUtils.getStackedSeriesTotals(),this.coreUtils.getPercentSeries(),(!s.isXNumeric||"numeric"===i.xaxis.type&&0===i.labels.length&&0===i.xaxis.categories.length)&&this.handleExternalLabelsData(t)}},{key:"xySettings",value:function(){var t=null,e=this.w;if(e.globals.axisCharts){if("back"===e.config.xaxis.crosshairs.position)new E(this.ctx).drawXCrosshairs();if("back"===e.config.yaxis[0].crosshairs.position)new E(this.ctx).drawYCrosshairs();if(t=this.coreUtils.getCalculatedRatios(),"datetime"===e.config.xaxis.type&&void 0===e.config.xaxis.labels.formatter&&isFinite(e.globals.minX)&&isFinite(e.globals.maxX)){var i=new G(this.ctx),s=i.calculateTimeScaleTicks(e.globals.minX,e.globals.maxX);i.recalcDimensionsBasedOnFormat(s)}}return t}},{key:"drawAxis",value:function(t,e){var i,s,a=this.w.globals,n=this.w.config,r=new N(this.ctx),o=new R(this.ctx);a.axisCharts&&"radar"!==t&&("bar"===t&&n.plotOptions.bar.horizontal?(s=o.drawYaxisInversed(0),i=r.drawXaxisInversed(0),a.dom.elGraphical.add(i),a.dom.elGraphical.add(s)):(i=r.drawXaxis(),a.dom.elGraphical.add(i),n.yaxis.map(function(t,e){-1===a.ignoreYAxisIndexes.indexOf(e)&&(s=o.drawYaxis(e),a.dom.Paper.add(s))})));n.yaxis.map(function(t,e){-1===a.ignoreYAxisIndexes.indexOf(e)&&o.yAxisTitleRotate(e,t.opposite)})}},{key:"setupBrushHandler",value:function(){var t=this,e=this.w;e.config.chart.brush.enabled&&("function"!=typeof e.config.chart.events.selection&&(e.config.chart.brush.targets||[e.config.chart.brush.target]).forEach(function(i){var s=ApexCharts.getChartByID(i);s.w.globals.brushSource=t.ctx;var a=function(){t.ctx._updateOptions({chart:{selection:{xaxis:{min:s.w.globals.minX,max:s.w.globals.maxX}}}},!1,!1)};"function"!=typeof s.w.config.chart.events.zoomed&&(s.w.config.chart.events.zoomed=function(){a()}),"function"!=typeof s.w.config.chart.events.scrolled&&(s.w.config.chart.events.scrolled=function(){a()}),e.config.chart.events.selection=function(t,i){var a=d.clone(e.config.yaxis);e.config.chart.brush.autoScaleYaxis&&(a=new H(s).autoScaleY(s,i));s._updateOptions({xaxis:{min:i.xaxis.min,max:i.xaxis.max},yaxis:a},!1,!1,!1)}}))}}]),t}();var j=setTimeout;function U(){}function q(t){if(!(this instanceof q))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],tt(t,this)}function Z(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,q._immediateFn(function(){var i=1===t._state?e.onFulfilled:e.onRejected;if(null!==i){var s;try{s=i(t._value)}catch(t){return void J(e.promise,t)}$(e.promise,s)}else(1===t._state?$:J)(e.promise,t._value)})):t._deferreds.push(e)}function $(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var i=e.then;if(e instanceof q)return t._state=3,t._value=e,void Q(t);if("function"==typeof i)return void tt((s=i,a=e,function(){s.apply(a,arguments)}),t)}t._state=1,t._value=e,Q(t)}catch(e){J(t,e)}var s,a}function J(t,e){t._state=2,t._value=e,Q(t)}function Q(t){2===t._state&&0===t._deferreds.length&&q._immediateFn(function(){t._handled||q._unhandledRejectionFn(t._value)});for(var e=0,i=t._deferreds.length;e<i;e++)Z(t,t._deferreds[e]);t._deferreds=null}function K(t,e,i){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=i}function tt(t,e){var i=!1;try{t(function(t){i||(i=!0,$(e,t))},function(t){i||(i=!0,J(e,t))})}catch(t){if(i)return;i=!0,J(e,t)}}q.prototype.catch=function(t){return this.then(null,t)},q.prototype.then=function(t,e){var i=new this.constructor(U);return Z(this,new K(t,e,i)),i},q.prototype.finally=function(t){var e=this.constructor;return this.then(function(i){return e.resolve(t()).then(function(){return i})},function(i){return e.resolve(t()).then(function(){return e.reject(i)})})},q.all=function(t){return new q(function(e,i){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var s=Array.prototype.slice.call(t);if(0===s.length)return e([]);var a=s.length;function n(t,r){try{if(r&&("object"==typeof r||"function"==typeof r)){var o=r.then;if("function"==typeof o)return void o.call(r,function(e){n(t,e)},i)}s[t]=r,0==--a&&e(s)}catch(t){i(t)}}for(var r=0;r<s.length;r++)n(r,s[r])})},q.resolve=function(t){return t&&"object"==typeof t&&t.constructor===q?t:new q(function(e){e(t)})},q.reject=function(t){return new q(function(e,i){i(t)})},q.race=function(t){return new q(function(e,i){for(var s=0,a=t.length;s<a;s++)t[s].then(e,i)})},q._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){j(t,0)},q._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var et,it,st=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return s(t,[{key:"getSvgString",value:function(){return this.w.globals.dom.Paper.svg()}},{key:"cleanup",value:function(){var t=this.w,e=t.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs"),i=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs");e&&e.setAttribute("x",-500),i&&(i.setAttribute("y1",-100),i.setAttribute("y2",-100))}},{key:"svgUrl",value:function(){this.cleanup();var t=this.getSvgString(),e=new Blob([t],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(e)}},{key:"dataURI",value:function(){var t=this;return new q(function(e){var i=t.w;t.cleanup();var s=document.createElement("canvas");s.width=i.globals.svgWidth,s.height=i.globals.svgHeight;var a="transparent"===i.config.chart.background?"#fff":i.config.chart.background,n=s.getContext("2d");n.fillStyle=a,n.fillRect(0,0,s.width,s.height);var r=window.URL||window.webkitURL||window,o=new Image;o.crossOrigin="anonymous";var l=t.getSvgString(),h="data:image/svg+xml,"+encodeURIComponent(l);o.onload=function(){n.drawImage(o,0,0),r.revokeObjectURL(h);var t=s.toDataURL("image/png");e(t)},o.src=h})}},{key:"exportToSVG",value:function(){this.triggerDownload(this.svgUrl(),".svg")}},{key:"exportToPng",value:function(){var t=this;this.dataURI().then(function(e){t.triggerDownload(e,".png")})}},{key:"triggerDownload",value:function(t,e){var i=document.createElement("a");i.href=t,i.download=this.w.globals.chartID+e,document.body.appendChild(i),i.click(),document.body.removeChild(i)}}]),t}(),at=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w;var s=this.w;this.anim=new g(this.ctx),this.xaxisLabels=s.globals.labels.slice(),this.animX=s.config.grid.xaxis.lines.animate&&s.config.chart.animations.enabled,this.animY=s.config.grid.yaxis.lines.animate&&s.config.chart.animations.enabled,s.globals.timelineLabels.length>0&&(this.xaxisLabels=s.globals.timelineLabels.slice())}return s(t,[{key:"drawGridArea",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.w,i=new f(this.ctx);null===t&&(t=i.group({class:"apexcharts-grid"}));var s=i.drawLine(e.globals.padHorizontal,1,e.globals.padHorizontal,e.globals.gridHeight,"transparent"),a=i.drawLine(e.globals.padHorizontal,e.globals.gridHeight,e.globals.gridWidth,e.globals.gridHeight,"transparent");return t.add(a),t.add(s),t}},{key:"drawGrid",value:function(){var t=this.w,e=new N(this.ctx),i=this.w.globals,s=null;if(i.axisCharts){if(t.config.grid.show)s=this.renderGrid(),i.dom.elGraphical.add(s.el),this.drawGridArea(s.el);else{var a=this.drawGridArea();i.dom.elGraphical.add(a)}null!==s&&e.xAxisLabelCorrections(s.xAxisTickWidth)}}},{key:"createGridMask",value:function(){var t=this.w,e=t.globals,i=new f(this.ctx),s=Array.isArray(t.config.stroke.width)?0:t.config.stroke.width;if(Array.isArray(t.config.stroke.width)){var a=0;t.config.stroke.width.forEach(function(t){a=Math.max(a,t)}),s=a}e.dom.elGridRectMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMask.setAttribute("id","gridRectMask".concat(e.cuid)),e.dom.elGridRectMarkerMask=document.createElementNS(e.SVGNS,"clipPath"),e.dom.elGridRectMarkerMask.setAttribute("id","gridRectMarkerMask".concat(e.cuid)),e.dom.elGridRect=i.drawRect(-s/2,-s/2,e.gridWidth+s,e.gridHeight+s,0,"#fff"),new b(this).getLargestMarkerSize();var n=t.globals.markers.largestSize+t.config.markers.hover.sizeOffset+1;e.dom.elGridRectMarker=i.drawRect(-n,-n,e.gridWidth+2*n,e.gridHeight+2*n,0,"#fff"),e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node),e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);var r=e.dom.baseEl.querySelector("defs");r.appendChild(e.dom.elGridRectMask),r.appendChild(e.dom.elGridRectMarkerMask)}},{key:"renderGrid",value:function(){for(var t,e=this.w,i=new f(this.ctx),s=e.config.grid.strokeDashArray,a=i.group({class:"apexcharts-grid"}),n=8,r=0;r<e.globals.series.length&&(void 0!==e.globals.yAxisScale[r]&&(n=e.globals.yAxisScale[r].result.length-1),!(n>2));r++);if(!(!e.config.plotOptions.bar.horizontal||"bar"!==e.config.chart.type)){if(t=n,e.config.grid.xaxis.lines.show||e.config.xaxis.axisTicks.show)for(var o,l=e.globals.padHorizontal,h=e.globals.gridHeight,c=0;c<t+1&&(o=l=l+e.globals.gridWidth/t+.3,c!==t-1);c++){if(e.config.grid.xaxis.lines.show){var d=i.drawLine(l,0,o,h,e.config.grid.borderColor,s);d.node.classList.add("apexcharts-gridline"),a.add(d),this.animX&&this.animateLine(d,{x1:0,x2:0},{x1:l,x2:o})}new N(this.ctx).drawXaxisTicks(l,a)}if(e.config.grid.yaxis.lines.show)for(var u=0,g=0,p=e.globals.gridWidth,x=0;x<e.globals.dataPoints+1;x++){var m=i.drawLine(0,u,p,g,e.config.grid.borderColor,s);a.add(m),m.node.classList.add("apexcharts-gridline"),this.animY&&this.animateLine(m,{y1:u+20,y2:g+20},{y1:u,y2:g}),g=u+=e.globals.gridHeight/e.globals.dataPoints}}else{if(t=this.xaxisLabels.length,e.config.grid.xaxis.lines.show||e.config.xaxis.axisTicks.show){var v,b=e.globals.padHorizontal,y=e.globals.gridHeight;if(e.globals.timelineLabels.length>0)for(var w=0;w<t;w++){if(b=this.xaxisLabels[w].position,v=this.xaxisLabels[w].position,e.config.grid.xaxis.lines.show&&b>0&&b<e.globals.gridWidth){var k=i.drawLine(b,0,v,y,e.config.grid.borderColor,s);k.node.classList.add("apexcharts-gridline"),a.add(k),this.animX&&this.animateLine(k,{x1:0,x2:0},{x1:b,x2:v})}new N(this.ctx).drawXaxisTicks(b,a)}else for(var A=t,S=0;S<A;S++){var C=A;if(e.globals.isXNumeric&&"bar"!==e.config.chart.type&&(C-=1),v=b+=e.globals.gridWidth/C,S===C-1)break;if(e.config.grid.xaxis.lines.show){var L=i.drawLine(b,0,v,y,e.config.grid.borderColor,s);L.node.classList.add("apexcharts-gridline"),a.add(L),this.animX&&this.animateLine(L,{x1:0,x2:0},{x1:b,x2:v})}new N(this.ctx).drawXaxisTicks(b,a)}}if(e.config.grid.yaxis.lines.show)for(var z=0,M=0,P=e.globals.gridWidth,E=0;E<n+1;E++){var T=i.drawLine(0,z,P,M,e.config.grid.borderColor,s);a.add(T),T.node.classList.add("apexcharts-gridline"),this.animY&&this.animateLine(T,{y1:z+20,y2:M+20},{y1:z,y2:M}),M=z+=e.globals.gridHeight/n}}return this.drawGridBands(a,t,n),{el:a,xAxisTickWidth:e.globals.gridWidth/t}}},{key:"drawGridBands",value:function(t,e,i){var s=this.w,a=new f(this.ctx);if(void 0!==s.config.grid.row.colors&&s.config.grid.row.colors.length>0)for(var n=0,r=s.globals.gridHeight/i,o=s.globals.gridWidth,l=0,h=0;l<i;l++,h++){h>=s.config.grid.row.colors.length&&(h=0);var c=s.config.grid.row.colors[h],d=a.drawRect(0,n,o,r,0,c,s.config.grid.row.opacity);t.add(d),d.node.classList.add("apexcharts-gridRow"),n+=s.globals.gridHeight/i}if(void 0!==s.config.grid.column.colors&&s.config.grid.column.colors.length>0)for(var u=s.globals.padHorizontal,g=s.globals.padHorizontal+s.globals.gridWidth/e,p=s.globals.gridHeight,x=0,m=0;x<e;x++,m++){m>=s.config.grid.column.colors.length&&(m=0);var v=s.config.grid.column.colors[m],b=a.drawRect(u,0,g,p,0,v,s.config.grid.column.opacity);b.node.classList.add("apexcharts-gridColumn"),t.add(b),u+=s.globals.gridWidth/e}}},{key:"animateLine",value:function(t,e,i){var s=this.w,a=s.config.chart.animations;if(a&&!s.globals.resized&&!s.globals.dataChanged){var n=a.speed;this.anim.animateLine(t,e,i,n)}}}]),t}(),nt=function(){function t(i,s){e(this,t),this.ctx=i,this.w=i.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this)}return s(t,[{key:"init",value:function(){var t=this.w,e=t.globals,i=t.config;if((i.legend.showForSingleSeries&&1===e.series.length||e.series.length>1||!e.axisCharts)&&i.legend.show){for(;e.dom.elLegendWrap.firstChild;)e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);this.drawLegends(),d.isIE11()?document.getElementsByTagName("head")[0].appendChild(this.getLegendStyles()):this.appendToForeignObject(),"bottom"===i.legend.position||"top"===i.legend.position?this.legendAlignHorizontal():"right"!==i.legend.position&&"left"!==i.legend.position||this.legendAlignVertical()}}},{key:"appendToForeignObject",value:function(){var t=this.w.globals,e=document.createElementNS(t.SVGNS,"foreignObject");e.setAttribute("x",0),e.setAttribute("y",0),e.setAttribute("width",t.svgWidth),e.setAttribute("height",t.svgHeight),t.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),e.appendChild(t.dom.elLegendWrap),e.appendChild(this.getLegendStyles()),t.dom.Paper.node.insertBefore(e,t.dom.elGraphical.node)}},{key:"drawLegends",value:function(){var t=this.w,e=t.config.legend.fontFamily,i=t.globals.seriesNames,s=t.globals.colors.slice();if("heatmap"===t.config.chart.type){var a=t.config.plotOptions.heatmap.colorScale.ranges;i=a.map(function(t){return t.name?t.name:t.from+" - "+t.to}),s=a.map(function(t){return t.color})}for(var n=t.globals.legendFormatter,r=0;r<=i.length-1;r++){var o=n(i[r],{seriesIndex:r,w:t}),l=!1,h=!1;if(t.globals.collapsedSeries.length>0)for(var c=0;c<t.globals.collapsedSeries.length;c++)t.globals.collapsedSeries[c].index===r&&(l=!0);if(t.globals.ancillaryCollapsedSeriesIndices.length>0)for(var d=0;d<t.globals.ancillaryCollapsedSeriesIndices.length;d++)t.globals.ancillaryCollapsedSeriesIndices[d]===r&&(h=!0);var u=document.createElement("span");u.classList.add("apexcharts-legend-marker");var g=t.config.legend.markers.offsetX,p=t.config.legend.markers.offsetY,x=t.config.legend.markers.height,m=t.config.legend.markers.width,v=t.config.legend.markers.strokeWidth,y=t.config.legend.markers.strokeColor,w=t.config.legend.markers.radius,k=u.style;k.background=s[r],k.color=s[r],k.height=Array.isArray(x)?parseFloat(x[r])+"px":parseFloat(x)+"px",k.width=Array.isArray(m)?parseFloat(m[r])+"px":parseFloat(m)+"px",k.left=Array.isArray(g)?g[r]:g,k.top=Array.isArray(p)?p[r]:p,k.borderWidth=Array.isArray(v)?v[r]:v,k.borderColor=Array.isArray(y)?y[r]:y,k.borderRadius=Array.isArray(w)?parseFloat(w[r])+"px":parseFloat(w)+"px",t.config.legend.markers.customHTML&&(Array.isArray(t.config.legend.markers.customHTML)?u.innerHTML=t.config.legend.markers.customHTML[r]():u.innerHTML=t.config.legend.markers.customHTML()),f.setAttrs(u,{rel:r+1,"data:collapsed":l||h}),(l||h)&&u.classList.add("inactive-legend");var A=document.createElement("div"),S=document.createElement("span");S.classList.add("apexcharts-legend-text"),S.innerHTML=o;var C=t.config.legend.labels.useSeriesColors?t.globals.colors[r]:t.config.legend.labels.colors;C||(C=t.config.chart.foreColor),S.style.color=C,S.style.fontSize=parseFloat(t.config.legend.fontSize)+"px",S.style.fontFamily=e||t.config.chart.fontFamily,f.setAttrs(S,{rel:r+1,"data:collapsed":l||h}),A.appendChild(u),A.appendChild(S);var L=new b(this.ctx);if(!t.config.legend.showForZeroSeries)0===L.getSeriesTotalByIndex(r)&&L.seriesHaveSameValues(r)&&!L.isSeriesNull(r)&&-1===t.globals.collapsedSeriesIndices.indexOf(r)&&-1===t.globals.ancillaryCollapsedSeriesIndices.indexOf(r)&&A.classList.add("apexcharts-hidden-zero-series");t.config.legend.showForNullSeries||L.isSeriesNull(r)&&-1===t.globals.collapsedSeriesIndices.indexOf(r)&&-1===t.globals.ancillaryCollapsedSeriesIndices.indexOf(r)&&A.classList.add("apexcharts-hidden-null-series"),t.globals.dom.elLegendWrap.appendChild(A),t.globals.dom.elLegendWrap.classList.add(t.config.legend.horizontalAlign),t.globals.dom.elLegendWrap.classList.add("position-"+t.config.legend.position),A.classList.add("apexcharts-legend-series"),A.style.margin="".concat(t.config.legend.itemMargin.horizontal,"px ").concat(t.config.legend.itemMargin.vertical,"px"),t.globals.dom.elLegendWrap.style.width=t.config.legend.width?t.config.legend.width+"px":"",t.globals.dom.elLegendWrap.style.height=t.config.legend.height?t.config.legend.height+"px":"",f.setAttrs(A,{rel:r+1,"data:collapsed":l||h}),(l||h)&&A.classList.add("inactive-legend"),t.config.legend.onItemClick.toggleDataSeries||A.classList.add("no-click")}"heatmap"!==t.config.chart.type&&t.config.legend.onItemClick.toggleDataSeries&&t.globals.dom.elWrap.addEventListener("click",this.onLegendClick,!0),t.config.legend.onItemHover.highlightDataSeries&&(t.globals.dom.elWrap.addEventListener("mousemove",this.onLegendHovered,!0),t.globals.dom.elWrap.addEventListener("mouseout",this.onLegendHovered,!0))}},{key:"getLegendBBox",value:function(){var t=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),e=t.width;return{clwh:t.height,clww:e}}},{key:"setLegendWrapXY",value:function(t,e){var i=this.w,s=i.globals.dom.baseEl.querySelector(".apexcharts-legend"),a=s.getBoundingClientRect(),n=0,r=0;if("bottom"===i.config.legend.position)r+=i.globals.svgHeight-a.height/2;else if("top"===i.config.legend.position){var o=new V(this.ctx),l=o.getTitleSubtitleCoords("title").height,h=o.getTitleSubtitleCoords("subtitle").height;r=r+(l>0?l-10:0)+(h>0?h-10:0)}s.style.position="absolute",n=n+t+i.config.legend.offsetX,r=r+e+i.config.legend.offsetY,s.style.left=n+"px",s.style.top=r+"px","bottom"===i.config.legend.position?(s.style.top="auto",s.style.bottom=10+i.config.legend.offsetY+"px"):"right"===i.config.legend.position&&(s.style.left="auto",s.style.right=25+i.config.legend.offsetX+"px"),s.style.width&&(s.style.width=parseInt(i.config.legend.width)+"px"),s.style.height&&(s.style.height=parseInt(i.config.legend.height)+"px")}},{key:"legendAlignHorizontal",value:function(){var t=this.w;t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right=0;var e=this.getLegendBBox(),i=new V(this.ctx),s=i.getTitleSubtitleCoords("title"),a=i.getTitleSubtitleCoords("subtitle"),n=0;"bottom"===t.config.legend.position?n=-e.clwh/1.8:"top"===t.config.legend.position&&(n=s.height+a.height+t.config.title.margin+t.config.subtitle.margin-15),this.setLegendWrapXY(20,n)}},{key:"legendAlignVertical",value:function(){var t=this.w,e=this.getLegendBBox(),i=0;"left"===t.config.legend.position&&(i=20),"right"===t.config.legend.position&&(i=t.globals.svgWidth-e.clww-10),this.setLegendWrapXY(i,20)}},{key:"onLegendHovered",value:function(t){var e=this.w,i=t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker");if("heatmap"!==e.config.chart.type)!t.target.classList.contains("inactive-legend")&&i&&new B(this.ctx).toggleSeriesOnHover(t,t.target);else if(i){var s=parseInt(t.target.getAttribute("rel"))-1;this.ctx.fireEvent("legendHover",[this.ctx,s,this.w]),new B(this.ctx).highlightRangeInSeries(t,t.target)}}},{key:"onLegendClick",value:function(t){if(t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker")){var e=parseInt(t.target.getAttribute("rel"))-1,i="true"===t.target.getAttribute("data:collapsed"),s=this.w.config.chart.events.legendClick;"function"==typeof s&&s(this.ctx,e,this.w),this.ctx.fireEvent("legendClick",[this.ctx,e,this.w]);var a=this.w.config.legend.markers.onClick;"function"==typeof a&&t.target.classList.contains("apexcharts-legend-marker")&&(a(this.ctx,e,this.w),this.ctx.fireEvent("legendMarkerClick",[this.ctx,e,this.w])),this.toggleDataSeries(e,i)}}},{key:"getLegendStyles",value:function(){var t=document.createElement("style");t.setAttribute("type","text/css");var e=document.createTextNode("\n    \n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n\n      .apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        justify-content: flex-start;\n      }\n\n      .apexcharts-legend.position-bottom.center, .apexcharts-legend.position-top.center {\n        justify-content: center;  \n      }\n\n      .apexcharts-legend.position-bottom.right, .apexcharts-legend.position-top.right {\n        justify-content: flex-end;\n      }\n\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n      }\n\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\n        display: flex;\n        align-items: center;\n      }\n\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n\n      .apexcharts-legend-marker {\n        position: relative;\n        display: inline-block;\n        cursor: pointer;\n        margin-right: 3px;\n      }\n      \n      .apexcharts-legend.right .apexcharts-legend-series, .apexcharts-legend.left .apexcharts-legend-series{\n        display: inline-block;\n      }\n\n      .apexcharts-legend-series.no-click {\n        cursor: auto;\n      }\n\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n\n      .inactive-legend {\n        opacity: 0.45;\n      }");return t.appendChild(e),t}},{key:"resetToggleDataSeries",value:function(){var t=this.w,e=[];if(t.globals.axisCharts?t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex]").forEach(function(t){e.push(parseInt(t.getAttribute("data:realIndex")))}):t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[rel]").forEach(function(t){e.push(parseInt(t.getAttribute("rel"))-1)}),e.sort(),t.globals.collapsedSeries.length>0){for(var i=t.globals.risingSeries.slice(),s=t.config.series.slice(),a=0;a<t.globals.collapsedSeries.length;a++){var n=e.indexOf(t.globals.collapsedSeries[a].index);-1!==n&&(t.globals.axisCharts?s[n].data=t.globals.collapsedSeries.slice()[a].data.slice():s[n]=t.globals.collapsedSeries.slice()[a].data,i.push(n))}t.globals.collapsedSeries=[],t.globals.ancillaryCollapsedSeries=[],t.globals.collapsedSeriesIndices=[],t.globals.ancillaryCollapsedSeriesIndices=[],t.globals.risingSeries=i,t.config.series=s,this.ctx._updateSeries(t.config.series,t.config.chart.animations.dynamicAnimation.enabled)}}},{key:"toggleDataSeries",value:function(t,e){var i=this.w;if(i.globals.axisCharts||"radialBar"===i.config.chart.type){i.globals.resized=!0;var s=null,a=null;if(i.globals.risingSeries=[],i.globals.axisCharts?(s=i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t,"']")),a=parseInt(s.getAttribute("data:realIndex"))):(s=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t+1,"']")),a=parseInt(s.getAttribute("rel"))-1),e)this.riseCollapsedSeries(i.globals.collapsedSeries,i.globals.collapsedSeriesIndices,a),this.riseCollapsedSeries(i.globals.ancillaryCollapsedSeries,i.globals.ancillaryCollapsedSeriesIndices,a);else{if(i.globals.axisCharts){var n=!1;if(i.config.yaxis[a]&&i.config.yaxis[a].show&&i.config.yaxis[a].showAlways&&(n=!0,i.globals.ancillaryCollapsedSeriesIndices.indexOf(a)<0&&(i.globals.ancillaryCollapsedSeries.push({index:a,data:i.config.series[a].data.slice(),type:s.parentNode.className.baseVal.split("-")[1]}),i.globals.ancillaryCollapsedSeriesIndices.push(a))),!n){i.globals.collapsedSeries.push({index:a,data:i.config.series[a].data.slice(),type:s.parentNode.className.baseVal.split("-")[1]}),i.globals.collapsedSeriesIndices.push(a);var r=i.globals.risingSeries.indexOf(a);i.globals.risingSeries.splice(r,1)}i.config.series[a].data=[]}else i.globals.collapsedSeries.push({index:a,data:i.config.series[a]}),i.globals.collapsedSeriesIndices.push(a),i.config.series[a]=0;for(var o=s.childNodes,l=0;l<o.length;l++)o[l].classList.contains("apexcharts-series-markers-wrap")&&(o[l].classList.contains("apexcharts-hide")?o[l].classList.remove("apexcharts-hide"):o[l].classList.add("apexcharts-hide"));i.globals.allSeriesCollapsed=i.globals.collapsedSeries.length===i.globals.series.length,this.ctx._updateSeries(i.config.series,i.config.chart.animations.dynamicAnimation.enabled)}}else{i.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t+1,"'] path")).fire("click")}}},{key:"riseCollapsedSeries",value:function(t,e,i){var s=this.w;if(t.length>0)for(var a=0;a<t.length;a++)t[a].index===i&&(s.globals.axisCharts?(s.config.series[i].data=t[a].data.slice(),t.splice(a,1),e.splice(a,1),s.globals.risingSeries.push(i)):(s.config.series[i]=t[a].data,t.splice(a,1),e.splice(a,1),s.globals.risingSeries.push(i)),this.ctx._updateSeries(s.config.series,s.config.chart.animations.dynamicAnimation.enabled))}}]),t}(),rt=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return s(t,[{key:"checkResponsiveConfig",value:function(t){var e=this,i=this.w,s=i.config;if(0!==s.responsive.length){var a=s.responsive.slice();a.sort(function(t,e){return t.breakpoint>e.breakpoint?1:e.breakpoint>t.breakpoint?-1:0}).reverse();var n=new y({}),r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=a[0].breakpoint,r=window.innerWidth>0?window.innerWidth:screen.width;if(r>s){var o=b.extendArrayProps(n,i.globals.initialConfig);t=d.extend(o,t),t=d.extend(i.config,t),e.overrideResponsiveOptions(t)}else for(var l=0;l<a.length;l++)r<a[l].breakpoint&&(t=d.extend(n,t),t=b.extendArrayProps(t,a[l].options),t=d.extend(i.config,t),e.overrideResponsiveOptions(t))};if(t){var o=b.extendArrayProps(n,t);o=d.extend(i.config,o),r(o=d.extend(o,t))}else r({})}}},{key:"overrideResponsiveOptions",value:function(t){var e=new y(t).init();this.w.config=e}}]),t}(),ot=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.colors=[]}return s(t,[{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var t=this.w,e=new d;if(void 0===t.config.colors?t.globals.colors=this.predefined():t.globals.colors=t.config.colors,t.config.theme.monochrome.enabled){var i=[],s=t.globals.series.length;t.config.plotOptions.bar.distributed&&"bar"===t.config.chart.type&&(s=t.globals.series[0].length*t.globals.series.length);for(var a=t.config.theme.monochrome.color,n=1/(s/t.config.theme.monochrome.shadeIntensity),r=t.config.theme.monochrome.shadeTo,o=0,l=0;l<s;l++){var h=void 0;"dark"===r?(h=e.shadeColor(-1*o,a),o+=n):(h=e.shadeColor(o,a),o+=n),i.push(h)}t.globals.colors=i.slice()}var c=t.globals.colors.slice();this.pushExtraColors(t.globals.colors),void 0===t.config.stroke.colors?t.globals.stroke.colors=c:t.globals.stroke.colors=t.config.stroke.colors,this.pushExtraColors(t.globals.stroke.colors),void 0===t.config.fill.colors?t.globals.fill.colors=c:t.globals.fill.colors=t.config.fill.colors,this.pushExtraColors(t.globals.fill.colors),void 0===t.config.dataLabels.style.colors?t.globals.dataLabels.style.colors=c:t.globals.dataLabels.style.colors=t.config.dataLabels.style.colors,this.pushExtraColors(t.globals.dataLabels.style.colors,50),void 0===t.config.plotOptions.radar.polygons.fill.colors?t.globals.radarPolygons.fill.colors=["#fff"]:t.globals.radarPolygons.fill.colors=t.config.plotOptions.radar.polygons.fill.colors,this.pushExtraColors(t.globals.radarPolygons.fill.colors,20),void 0===t.config.markers.colors?t.globals.markers.colors=c:t.globals.markers.colors=t.config.markers.colors,this.pushExtraColors(t.globals.markers.colors)}},{key:"pushExtraColors",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=this.w,a=e||s.globals.series.length;if(null===i&&(i="bar"===s.config.chart.type&&s.config.plotOptions.bar.distributed||"heatmap"===s.config.chart.type&&s.config.plotOptions.heatmap.colorScale.inverse),i&&(a=s.globals.series[0].length*s.globals.series.length),t.length<a)for(var n=a-t.length,r=0;r<n;r++)t.push(t[r])}},{key:"predefined",value:function(){switch(this.w.config.theme.palette){case"palette1":this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];break;case"palette2":this.colors=["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"];break;case"palette3":this.colors=["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"];break;case"palette4":this.colors=["#546E7A","#4ecdc4","#c7f464","#81D4FA","#fd6a6a"];break;case"palette5":this.colors=["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"];break;case"palette6":this.colors=["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"];break;case"palette7":this.colors=["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"];break;case"palette8":this.colors=["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"];break;case"palette9":this.colors=["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"];break;case"palette10":this.colors=["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"];break;default:this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]}return this.colors}}]),t}(),lt=function(){function t(i){e(this,t),this.w=i.w,this.ttCtx=i,this.ctx=i.ctx}return s(t,[{key:"getNearestValues",value:function(t){var e=t.hoverArea,i=t.elGrid,s=t.clientX,a=t.clientY,n=t.hasBars,r=this.w,o=r.globals.gridWidth,l=o/(r.globals.dataPoints-1),h=i.getBoundingClientRect();(n&&r.globals.comboCharts||n)&&(l=o/r.globals.dataPoints);var c=s-h.left,d=a-h.top;c<0||d<0||c>r.globals.gridWidth||d>r.globals.gridHeight?(e.classList.remove("hovering-zoom"),e.classList.remove("hovering-pan")):r.globals.zoomEnabled?(e.classList.remove("hovering-pan"),e.classList.add("hovering-zoom")):r.globals.panEnabled&&(e.classList.remove("hovering-zoom"),e.classList.add("hovering-pan"));var u=Math.round(c/l);n&&(u=Math.ceil(c/l),u-=1);for(var g,f=null,p=null,x=[],m=0;m<r.globals.seriesXvalues.length;m++)x.push([r.globals.seriesXvalues[m][0]-1e-6].concat(r.globals.seriesXvalues[m]));return x=x.map(function(t){return t.filter(function(t){return t})}),g=r.globals.seriesYvalues.map(function(t){return t.filter(function(t){return t})}),r.globals.isXNumeric&&(f=(p=this.closestInMultiArray(c,d,x,g)).index,u=p.j,null!==f&&(x=r.globals.seriesXvalues[f],u=(p=this.closestInArray(c,x)).index)),(!u||u<1)&&(u=0),{capturedSeries:f,j:u,hoverX:c,hoverY:d}}},{key:"closestInMultiArray",value:function(t,e,i,s){var a=this.w,n=0,r=null,o=-1;a.globals.series.length>1?n=this.getFirstActiveXArray(i):r=0;var l=s[n][0],h=i[n][0],c=Math.abs(t-h),d=Math.abs(e-l),u=d+c;return s.map(function(a,n){a.map(function(a,l){var h=Math.abs(e-s[n][l]),g=Math.abs(t-i[n][l]),f=g+h;f<u&&(u=f,c=g,d=h,r=n,o=l)})}),{index:r,j:o}}},{key:"getFirstActiveXArray",value:function(t){for(var e=0,i=new b(this.ctx),s=t.map(function(t,e){return t.length>0?e:-1}),a=0;a<s.length;a++){var n=i.getSeriesTotalByIndex(a);if(-1!==s[a]&&0!==n&&!i.seriesHaveSameValues(a)){e=s[a];break}}return e}},{key:"closestInArray",value:function(t,e){for(var i=e[0],s=null,a=Math.abs(t-i),n=0;n<e.length;n++){var r=Math.abs(t-e[n]);r<a&&(a=r,i=e[n],s=n)}return{index:s}}},{key:"isXoverlap",value:function(t){var e=[],i=this.w.globals.seriesX.filter(function(t){return void 0!==t[0]});if(i.length>0)for(var s=0;s<i.length-1;s++)void 0!==i[s][t]&&void 0!==i[s+1][t]&&i[s][t]!==i[s+1][t]&&e.push("unEqual");return 0===e.length}},{key:"isinitialSeriesSameLen",value:function(){for(var t=!0,e=this.w.globals.initialSeries,i=0;i<e.length-1;i++)if(e[i].data.length!==e[i+1].data.length){t=!1;break}return t}},{key:"getBarsHeight",value:function(t){return c(t).reduce(function(t,e){return t+e.getBBox().height},0)}},{key:"toggleAllTooltipSeriesGroups",value:function(t){var e=this.w,i=this.ttCtx;0===i.allTooltipSeriesGroups.length&&(i.allTooltipSeriesGroups=e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var s=i.allTooltipSeriesGroups,a=0;a<s.length;a++)"enable"===t?(s[a].classList.add("active"),s[a].style.display=e.config.tooltip.items.display):(s[a].classList.remove("active"),s[a].style.display="none")}}]),t}(),ht=function(){function t(i){e(this,t),this.w=i.w,this.ctx=i.ctx,this.ttCtx=i,this.tooltipUtil=new lt(i)}return s(t,[{key:"drawSeriesTexts",value:function(t){var e=t.shared,i=void 0===e||e,s=t.ttItems,a=t.i,n=void 0===a?0:a,r=t.j,o=void 0===r?null:r;void 0!==this.w.config.tooltip.custom?this.handleCustomTooltip({i:n,j:o}):this.toggleActiveInactiveSeries(i);var l=this.getValuesToPrint({i:n,j:o});this.printLabels({i:n,j:o,values:l,ttItems:s,shared:i});var h=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=h.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=h.getBoundingClientRect().height}},{key:"printLabels",value:function(t){var e,i=t.i,s=t.j,a=t.values,n=t.ttItems,r=t.shared,o=this.w,l=a.xVal,h=a.zVal,c=a.xAxisTTVal,d="",u=o.globals.colors[i];null!==s&&o.config.plotOptions.bar.distributed&&(u=o.globals.colors[s]);for(var g=0,f=o.globals.series.length-1;g<o.globals.series.length;g++,f--){var p=this.getFormatters(i);if(d=this.getSeriesName({fn:p.yLbTitleFormatter,index:i,seriesIndex:i,j:s}),r){var x=o.config.tooltip.inverseOrder?f:g;p=this.getFormatters(x),d=this.getSeriesName({fn:p.yLbTitleFormatter,index:x,seriesIndex:i,j:s}),u=o.globals.colors[x],e=p.yLbFormatter(o.globals.series[x][s],{series:o.globals.series,seriesIndex:i,dataPointIndex:s,w:o}),(this.ttCtx.hasBars()&&o.config.chart.stacked&&0===o.globals.series[x][s]||void 0===o.globals.series[x][s])&&(e=void 0)}else e=p.yLbFormatter(o.globals.series[i][s],{series:o.globals.series,seriesIndex:i,dataPointIndex:s,w:o});null===s&&(e=p.yLbFormatter(o.globals.series[i],o)),this.DOMHandling({t:g,ttItems:n,values:{val:e,xVal:l,xAxisTTVal:c,zVal:h},seriesName:d,shared:r,pColor:u})}}},{key:"getFormatters",value:function(t){var e,i=this.w,s=i.globals.yLabelFormatters[t];return void 0!==i.globals.ttVal?Array.isArray(i.globals.ttVal)?(s=i.globals.ttVal[t]&&i.globals.ttVal[t].formatter,e=i.globals.ttVal[t]&&i.globals.ttVal[t].title&&i.globals.ttVal[t].title.formatter):(s=i.globals.ttVal.formatter,"function"==typeof i.globals.ttVal.title.formatter&&(e=i.globals.ttVal.title.formatter)):e=i.config.tooltip.y.title.formatter,"function"!=typeof s&&(s=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(t){return t}),"function"!=typeof e&&(e=function(t){return t}),{yLbFormatter:s,yLbTitleFormatter:e}}},{key:"getSeriesName",value:function(t){var e=t.fn,i=t.index,s=t.seriesIndex,a=t.j,n=this.w;return e(String(n.globals.seriesNames[i]),{series:n.globals.series,seriesIndex:s,dataPointIndex:a,w:n})}},{key:"DOMHandling",value:function(t){var e=t.t,i=t.ttItems,s=t.values,a=t.seriesName,n=t.shared,r=t.pColor,o=this.w,l=this.ttCtx,h=s.val,c=s.xVal,d=s.xAxisTTVal,u=s.zVal,g=null;g=i[e].children,o.config.tooltip.fillSeriesColor&&(i[e].style.backgroundColor=r,g[0].style.display="none"),l.showTooltipTitle&&(null===l.tooltipTitle&&(l.tooltipTitle=o.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),l.tooltipTitle.innerHTML=c),l.blxaxisTooltip&&(l.xaxisTooltipText.innerHTML=""!==d?d:c);var f=i[e].querySelector(".apexcharts-tooltip-text-label");f&&(f.innerHTML=a?a+": ":"");var p=i[e].querySelector(".apexcharts-tooltip-text-value");(p&&(p.innerHTML=h),g[0]&&g[0].classList.contains("apexcharts-tooltip-marker")&&(g[0].style.backgroundColor=r),o.config.tooltip.marker.show||(g[0].style.display="none"),null!==u)&&(i[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=o.config.tooltip.z.title,i[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=u);n&&g[0]&&(null==h||o.globals.collapsedSeriesIndices.indexOf(e)>-1?g[0].parentNode.style.display="none":g[0].parentNode.style.display=o.config.tooltip.items.display)}},{key:"toggleActiveInactiveSeries",value:function(t){var e=this.w;if(t)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var i=e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");i&&(i.classList.add("active"),i.style.display=e.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(t){var e=t.i,i=t.j,s=this.w,a=this.ctx.series.filteredSeriesX(),n="",r=null,o=null,l={series:s.globals.series,seriesIndex:e,dataPointIndex:i,w:s},h=s.globals.ttZFormatter;null===i?o=s.globals.series[e]:s.globals.isXNumeric?(n=a[e][i],0===a[e].length&&(n=a[this.tooltipUtil.getFirstActiveXArray(a)][i])):n=void 0!==s.globals.labels[i]?s.globals.labels[i]:"";var c=n;s.globals.isXNumeric&&"datetime"===s.config.xaxis.type?n=new D(this.ctx).xLabelFormat(s.globals.ttKeyFormatter,c):n=s.globals.xLabelFormatter(c,l);return void 0!==s.config.tooltip.x.formatter&&(n=s.globals.ttKeyFormatter(c,l)),s.globals.seriesZ.length>0&&s.globals.seriesZ[0].length>0&&(r=h(s.globals.seriesZ[e][i],s)),{val:o,xVal:n,xAxisTTVal:"function"==typeof s.config.xaxis.tooltip.formatter?s.globals.xaxisTooltipFormatter(c,l):n,zVal:r}}},{key:"handleCustomTooltip",value:function(t){var e=t.i,i=t.j,s=this.w;this.ttCtx.getElTooltip().innerHTML=s.config.tooltip.custom({series:s.globals.series,seriesIndex:e,dataPointIndex:i,w:s})}}]),t}(),ct=function(){function t(i){e(this,t),this.ttCtx=i,this.ctx=i.ctx,this.w=i.w}return s(t,[{key:"moveXCrosshairs",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.ttCtx,s=this.w,a=i.getElXCrosshairs(),n=t-i.xcrosshairsWidth/2,r=s.globals.labels.slice().length;if(null!==e&&(n=s.globals.gridWidth/r*e),"tickWidth"===s.config.xaxis.crosshairs.width||"barWidth"===s.config.xaxis.crosshairs.width?n+i.xcrosshairsWidth>s.globals.gridWidth&&(n=s.globals.gridWidth-i.xcrosshairsWidth):null!==e&&(n+=s.globals.gridWidth/r/2),n<0&&(n=0),n>s.globals.gridWidth&&(n=s.globals.gridWidth),null!==a&&(a.setAttribute("x",n),a.setAttribute("x1",n),a.setAttribute("x2",n),a.setAttribute("y2",s.globals.gridHeight),a.classList.add("active")),i.blxaxisTooltip){var o=n;"tickWidth"!==s.config.xaxis.crosshairs.width&&"barWidth"!==s.config.xaxis.crosshairs.width||(o=n+i.xcrosshairsWidth/2),this.moveXAxisTooltip(o)}}},{key:"moveYCrosshairs",value:function(t){var e=this.ttCtx;null!==e.ycrosshairs&&(f.setAttrs(e.ycrosshairs,{y1:t,y2:t}),f.setAttrs(e.ycrosshairsHidden,{y1:t,y2:t}))}},{key:"moveXAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;if(null!==i.xaxisTooltip){i.xaxisTooltip.classList.add("active");var s=i.xaxisOffY+e.config.xaxis.tooltip.offsetY+e.globals.translateY+1+e.config.xaxis.offsetY;if(t-=i.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(t)){t+=e.globals.translateX;var a;a=new f(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML),i.xaxisTooltipText.style.minWidth=a.width+"px",i.xaxisTooltip.style.left=t+"px",i.xaxisTooltip.style.top=s+"px"}}}},{key:"moveYAxisTooltip",value:function(t){var e=this.w,i=this.ttCtx;null===i.yaxisTTEls&&(i.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var s=parseInt(i.ycrosshairsHidden.getAttribute("y1")),a=e.globals.translateY+s,n=i.yaxisTTEls[t].getBoundingClientRect().height,r=e.globals.translateYAxisX[t]-2;e.config.yaxis[t].opposite&&(r-=26),a-=n/2,-1===e.globals.ignoreYAxisIndexes.indexOf(t)?(i.yaxisTTEls[t].classList.add("active"),i.yaxisTTEls[t].style.top=a+"px",i.yaxisTTEls[t].style.left=r+e.config.yaxis[t].tooltip.offsetX+"px"):i.yaxisTTEls[t].classList.remove("active")}},{key:"moveTooltip",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=this.w,a=this.ttCtx,n=a.getElTooltip(),r=a.tooltipRect,o=null!==i?parseInt(i):1,l=parseInt(t)+o+5,h=parseInt(e)+o/2;if(l>s.globals.gridWidth/2&&(l=l-r.ttWidth-o-15),l>s.globals.gridWidth-r.ttWidth-10&&(l=s.globals.gridWidth-r.ttWidth),l<-20&&(l=-20),s.config.tooltip.followCursor){var c=a.getElGrid().getBoundingClientRect();h=a.e.clientY-c.top-r.ttHeight/2}var d=this.positionChecks(r,l,h);l=d.x,h=d.y,isNaN(l)||(l+=s.globals.translateX,n.style.left=l+"px",n.style.top=h+"px")}},{key:"positionChecks",value:function(t,e,i){var s=this.w;return t.ttHeight+i>s.globals.gridHeight&&(i=s.globals.gridHeight-t.ttHeight+s.globals.translateY),i<0&&(i=0),{x:e,y:i}}},{key:"moveMarkers",value:function(t,e){var i=this.w,s=this.ttCtx;if(i.globals.markers.size[t]>0)for(var a=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-marker")),n=0;n<a.length;n++)parseInt(a[n].getAttribute("rel"))===e&&(s.marker.resetPointsSize(),s.marker.enlargeCurrentPoint(e,a[n]));else s.marker.resetPointsSize(),this.moveDynamicPointOnHover(e,t)}},{key:"moveDynamicPointOnHover",value:function(t,e){var i,s,a=this.w,n=this.ttCtx,r=a.globals.pointsArray,o=a.config.markers.hover.size;void 0===o&&(o=a.globals.markers.size[e]+a.config.markers.hover.sizeOffset),i=r[e][t][0],s=r[e][t][1]?r[e][t][1]:0;var l=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e,"'] .apexcharts-series-markers circle"));l.setAttribute("r",o),l.setAttribute("cx",i),l.setAttribute("cy",s),this.moveXCrosshairs(i),n.fixedTooltip||this.moveTooltip(i,s,o)}},{key:"moveDynamicPointsOnHover",value:function(t){var e,i=this.ttCtx,s=i.w,a=0,n=0,r=s.globals.pointsArray;e=new B(this.ctx).getActiveSeriesIndex();var o=s.config.markers.hover.size;void 0===o&&(o=s.globals.markers.size[e]+s.config.markers.hover.sizeOffset),r[e]&&(a=r[e][t][0],n=r[e][t][1]);var l=null,h=i.getAllMarkers();if(null!==(l=null!==h?h:s.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers circle")))for(var c=0;c<l.length;c++){var d=r[c];if(d&&d.length){var u=r[c][t][1];l[c].setAttribute("cx",a);var g=parseInt(l[c].parentNode.parentNode.parentNode.getAttribute("data:realIndex"));null!==u?(l[g]&&l[g].setAttribute("r",o),l[g]&&l[g].setAttribute("cy",u)):l[g]&&l[g].setAttribute("r",0)}}if(this.moveXCrosshairs(a),!i.fixedTooltip){var f=n||s.globals.gridHeight;this.moveTooltip(a,f,o)}}},{key:"moveStickyTooltipOverBars",value:function(t){var e,i=this.w,s=this.ttCtx,a=i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='1'] path[j='".concat(t,"'], .apexcharts-candlestick-series .apexcharts-series[rel='1'] path[j='").concat(t,"']")),n=a?parseFloat(a.getAttribute("cx")):0,r=a?parseFloat(a.getAttribute("barWidth")):0;i.globals.isXNumeric?n-=r/2:(n=s.xAxisTicksPositions[t-1]+s.dataPointsDividedWidth/2,isNaN(n)&&(n=s.xAxisTicksPositions[t]-s.dataPointsDividedWidth/2));var o=s.getElGrid().getBoundingClientRect();if(e=s.e.clientY-o.top-s.tooltipRect.ttHeight/2,this.moveXCrosshairs(n),!s.fixedTooltip){var l=e||i.globals.gridHeight;this.moveTooltip(n,l)}}}]),t}(),dt=function(){function t(i){e(this,t),this.w=i.w,this.ttCtx=i,this.ctx=i.ctx,this.tooltipPosition=new ct(i)}return s(t,[{key:"drawDynamicPoints",value:function(){for(var t=this.w,e=new f(this.ctx),i=new S(this.ctx),s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"),a=0;a<s.length;a++){var n=parseInt(s[a].getAttribute("data:realIndex")),r=t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(n,"'] .apexcharts-series-markers-wrap"));if(null!==r){var o=void 0,l="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));"line"!==t.config.chart.type&&"area"!==t.config.chart.type||t.globals.comboCharts||t.config.tooltip.intersect||(l+=" no-pointer-events");var h=i.getMarkerConfig(l,n);(o=e.drawMarker(0,0,h)).node.setAttribute("default-marker-size",0);var c=document.createElementNS(t.globals.SVGNS,"g");c.classList.add("apexcharts-series-markers"),c.appendChild(o.node),r.appendChild(c)}}}},{key:"enlargeCurrentPoint",value:function(t,e){var i=this.w;"bubble"!==i.config.chart.type&&this.newPointSize(t,e);var s=e.getAttribute("cx"),a=e.getAttribute("cy");if(this.tooltipPosition.moveXCrosshairs(s),!this.fixedTooltip){if("radar"===i.config.chart.type){var n=this.ttCtx.getElGrid().getBoundingClientRect();s=this.ttCtx.e.clientX-n.left}this.tooltipPosition.moveTooltip(s,a,i.config.markers.hover.size)}}},{key:"enlargePoints",value:function(t){for(var e=this.w,i=this.ttCtx,s=t,a=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),n=e.config.markers.hover.size,r=0;r<a.length;r++){var o=a[r].getAttribute("rel"),l=a[r].getAttribute("index");if(void 0===n&&(n=e.globals.markers.size[l]+e.config.markers.hover.sizeOffset),s===parseInt(o)){this.newPointSize(s,a[r]);var h=a[r].getAttribute("cx"),c=a[r].getAttribute("cy");this.tooltipPosition.moveXCrosshairs(h),i.fixedTooltip||this.tooltipPosition.moveTooltip(h,c,n)}else this.oldPointSize(a[r])}}},{key:"newPointSize",value:function(t,e){var i=this.w,s=i.config.markers.hover.size,a=null;a=0===t?e.parentNode.firstChild:e.parentNode.lastChild;var n=parseInt(a.getAttribute("index"));void 0===s&&(s=i.globals.markers.size[n]+i.config.markers.hover.sizeOffset),a.setAttribute("r",s)}},{key:"oldPointSize",value:function(t){var e=parseInt(t.getAttribute("default-marker-size"));t.setAttribute("r",e)}},{key:"resetPointsSize",value:function(){for(var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),e=0;e<t.length;e++){var i=parseInt(t[e].getAttribute("default-marker-size"));d.isNumber(i)?t[e].setAttribute("r",i):t[e].setAttribute("r",0)}}}]),t}(),ut=function(){function t(i){e(this,t),this.w=i.w,this.ttCtx=i}return s(t,[{key:"getAttr",value:function(t,e){return parseFloat(t.target.getAttribute(e))}},{key:"handleHeatTooltip",value:function(t){var e=t.e,i=t.opt,s=t.x,a=t.y,n=this.ttCtx,r=this.w;if(e.target.classList.contains("apexcharts-heatmap-rect")){var o=this.getAttr(e,"i"),l=this.getAttr(e,"j"),h=this.getAttr(e,"cx"),c=this.getAttr(e,"cy"),d=this.getAttr(e,"width"),u=this.getAttr(e,"height");if(n.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:o,j:l,shared:!1}),s=h+n.tooltipRect.ttWidth/2+d,a=c+n.tooltipRect.ttHeight/2-u/2,n.tooltipPosition.moveXCrosshairs(h+d/2),s>r.globals.gridWidth/2&&(s=h-n.tooltipRect.ttWidth/2+d),n.w.config.tooltip.followCursor){var g=n.getElGrid().getBoundingClientRect();a=n.e.clientY-g.top+r.globals.translateY/2-10}}return{x:s,y:a}}},{key:"handleMarkerTooltip",value:function(t){var e,i,s=t.e,a=t.opt,n=t.x,r=t.y,o=this.w,l=this.ttCtx;if(s.target.classList.contains("apexcharts-marker")){var h=parseInt(a.paths.getAttribute("cx")),c=parseInt(a.paths.getAttribute("cy")),u=parseFloat(a.paths.getAttribute("val"));if(i=parseInt(a.paths.getAttribute("rel")),e=parseInt(a.paths.parentNode.parentNode.parentNode.getAttribute("rel"))-1,l.intersect){var g=d.findAncestor(a.paths,"apexcharts-series");g&&(e=parseInt(g.getAttribute("data:realIndex")))}if(l.tooltipLabels.drawSeriesTexts({ttItems:a.ttItems,i:e,j:i,shared:!l.intersect&&o.config.tooltip.shared}),l.marker.enlargeCurrentPoint(i,a.paths),n=h,r=c-1.4*l.tooltipRect.ttHeight,l.w.config.tooltip.followCursor){var f=l.getElGrid().getBoundingClientRect();r=l.e.clientY-f.top}u<0&&(r=c)}return{x:n,y:r}}},{key:"handleBarTooltip",value:function(t){var e,i,s=t.e,a=t.opt,n=this.w,r=this.ttCtx,o=r.getElTooltip(),l=0,h=0,c=0,d=this.getBarTooltipXY({e:s,opt:a});e=d.i;var u=d.barHeight,g=d.j;if(r.isBarHorizontal&&r.hasBars()||!n.config.tooltip.shared?(h=d.x,c=d.y,i=Array.isArray(n.config.stroke.width)?n.config.stroke.width[e]:n.config.stroke.width,l=h):n.globals.comboCharts||n.config.tooltip.shared||(l/=2),isNaN(c)&&(c=n.globals.svgHeight-r.tooltipRect.ttHeight),h+r.tooltipRect.ttWidth>n.globals.gridWidth?h-=r.tooltipRect.ttWidth:h<0&&(h+=r.tooltipRect.ttWidth),r.w.config.tooltip.followCursor){var f=r.getElGrid().getBoundingClientRect();c=r.e.clientY-f.top}if(null===r.tooltip&&(r.tooltip=n.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),n.config.tooltip.shared||(n.globals.comboChartsHasBars?r.tooltipPosition.moveXCrosshairs(l+i/2):r.tooltipPosition.moveXCrosshairs(l)),!r.fixedTooltip&&(!n.config.tooltip.shared||r.isBarHorizontal&&r.hasBars())){x&&(h=n.globals.gridWidth-h),o.style.left=h+n.globals.translateX+"px";var p=parseInt(a.paths.parentNode.getAttribute("data:realIndex")),x=n.globals.isMultipleYAxis?n.config.yaxis[p].reversed:n.config.yaxis[0].reversed;!x||r.isBarHorizontal&&r.hasBars()||(c=c+u-2*(n.globals.series[e][g]<0?u:0)),r.tooltipRect.ttHeight+c>n.globals.gridHeight?(c=n.globals.gridHeight-r.tooltipRect.ttHeight+n.globals.translateY,o.style.top=c+"px"):o.style.top=c+n.globals.translateY-r.tooltipRect.ttHeight/2+"px"}}},{key:"getBarTooltipXY",value:function(t){var e=t.e,i=t.opt,s=this.w,a=null,n=this.ttCtx,r=0,o=0,l=0,h=0,c=0,d=e.target.classList;if(d.contains("apexcharts-bar-area")||d.contains("apexcharts-candlestick-area")){var u=e.target,g=u.getBoundingClientRect(),f=i.elGrid.getBoundingClientRect(),p=g.height;c=g.height;var x=g.width,m=parseInt(u.getAttribute("cx")),v=parseInt(u.getAttribute("cy"));h=parseFloat(u.getAttribute("barWidth"));var b="touchmove"===e.type?e.touches[0].clientX:e.clientX;a=parseInt(u.getAttribute("j")),r=parseInt(u.parentNode.getAttribute("rel"))-1,s.globals.comboCharts&&(r=parseInt(u.parentNode.getAttribute("data:realIndex"))),n.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:r,j:a,shared:!n.showOnIntersect&&s.config.tooltip.shared}),s.config.tooltip.followCursor?s.config.plotOptions.bar.horizontal?(o=b-f.left+15,l=v-n.dataPointsDividedHeight+p/2-n.tooltipRect.ttHeight/2):(o=s.globals.isXNumeric?m-x/2:m-n.dataPointsDividedWidth+x/2,l=e.clientY-f.top-n.tooltipRect.ttHeight/2-15):s.config.plotOptions.bar.horizontal?((o=m)<n.xyRatios.baseLineInvertedY&&(o=m-n.tooltipRect.ttWidth),l=v-n.dataPointsDividedHeight+p/2-n.tooltipRect.ttHeight/2):(o=s.globals.isXNumeric?m-x/2:m-n.dataPointsDividedWidth+x/2,l=v)}return{x:o,y:l,barHeight:c,barWidth:h,i:r,j:a}}}]),t}(),gt=function(){function t(i){e(this,t),this.w=i.w,this.ttCtx=i}return s(t,[{key:"drawXaxisTooltip",value:function(){var t=this.w,e=this.ttCtx,i="bottom"===t.config.xaxis.position;e.xaxisOffY=i?t.globals.gridHeight+1:1;var s=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",a=t.globals.dom.elWrap;e.blxaxisTooltip&&(null===t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")&&(e.xaxisTooltip=document.createElement("div"),e.xaxisTooltip.setAttribute("class",s),a.appendChild(e.xaxisTooltip),e.xaxisTooltipText=document.createElement("div"),e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),e.xaxisTooltipText.style.fontFamily=t.config.xaxis.tooltip.style.fontFamily||t.config.chart.fontFamily,e.xaxisTooltipText.style.fontSize=t.config.xaxis.tooltip.style.fontSize,e.xaxisTooltip.appendChild(e.xaxisTooltipText)))}},{key:"drawYaxisTooltip",value:function(){for(var t=this.w,e=this.ttCtx,i=0;i<t.config.yaxis.length;i++){var s=t.config.yaxis[i].opposite||t.config.yaxis[i].crosshairs.opposite;e.yaxisOffX=s?t.globals.gridWidth+1:1;var a="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i,s?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left"),n=t.globals.dom.elWrap;if(e.blyaxisTooltip)null===t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i))&&(e.yaxisTooltip=document.createElement("div"),e.yaxisTooltip.setAttribute("class",a),n.appendChild(e.yaxisTooltip),0===i&&(e.yaxisTooltipText=[]),e.yaxisTooltipText.push(document.createElement("div")),e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"),e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))}}},{key:"setXCrosshairWidth",value:function(){var t=this.w,e=this.ttCtx,i=e.getElXCrosshairs();if(e.xcrosshairsWidth=parseInt(t.config.xaxis.crosshairs.width),t.globals.comboCharts){var s=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==s&&"barWidth"===t.config.xaxis.crosshairs.width){var a=parseFloat(s.getAttribute("barWidth"));e.xcrosshairsWidth=a}else if("tickWidth"===t.config.xaxis.crosshairs.width){var n=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/n}}else if("tickWidth"===t.config.xaxis.crosshairs.width){var r=t.globals.labels.length;e.xcrosshairsWidth=t.globals.gridWidth/r}else if("barWidth"===t.config.xaxis.crosshairs.width){var o=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(null!==o){var l=parseFloat(o.getAttribute("barWidth"));e.xcrosshairsWidth=l}else e.xcrosshairsWidth=1}"bar"===t.config.chart.type&&t.config.plotOptions.bar.horizontal&&(e.xcrosshairsWidth=0),null!==i&&e.xcrosshairsWidth>0&&i.setAttribute("width",e.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var t=this.w,e=this.ttCtx;e.ycrosshairs=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),e.ycrosshairsHidden=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(t,e,i){var s=this.ttCtx,a=this.w,n=a.globals.yLabelFormatters[t];if(s.blyaxisTooltip){var r=s.getElGrid().getBoundingClientRect(),o=(e-r.top)*i.yRatio[t],l=a.globals.maxYArr[t]-a.globals.minYArr[t],h=a.globals.minYArr[t]+(l-o);s.tooltipPosition.moveYCrosshairs(e-r.top),s.yaxisTooltipText[t].innerHTML=n(h),s.tooltipPosition.moveYAxisTooltip(t)}}}]),t}(),ft=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w;var s=this.w;this.tooltipUtil=new lt(this),this.tooltipLabels=new ht(this),this.tooltipPosition=new ct(this),this.marker=new dt(this),this.intersect=new ut(this),this.axesTooltip=new gt(this),this.showOnIntersect=s.config.tooltip.intersect,this.showTooltipTitle=s.config.tooltip.x.show,this.fixedTooltip=s.config.tooltip.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarHorizontal=s.config.plotOptions.bar.horizontal,this.isBarShared=!s.config.plotOptions.bar.horizontal&&s.config.tooltip.shared}return s(t,[{key:"getElTooltip",value:function(t){return t||(t=this),t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip")}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(t){var e=this.w;this.xyRatios=t,this.blxaxisTooltip=e.config.xaxis.tooltip.enabled&&e.globals.axisCharts,this.blyaxisTooltip=e.config.yaxis[0].tooltip.enabled&&e.globals.axisCharts,this.allTooltipSeriesGroups=[],e.globals.axisCharts||(this.showTooltipTitle=!1);var i=document.createElement("div");if(i.classList.add("apexcharts-tooltip"),i.classList.add(e.config.tooltip.theme),e.globals.dom.elWrap.appendChild(i),e.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var s=new N(this.ctx);this.xAxisTicksPositions=s.getXAxisTicksPositions()}if((e.globals.comboCharts&&!e.config.tooltip.shared||e.config.tooltip.intersect&&!e.config.tooltip.shared||"bar"===e.config.chart.type&&!e.config.tooltip.shared)&&(this.showOnIntersect=!0),0!==e.config.markers.size&&0!==e.globals.markers.largestSize||this.marker.drawDynamicPoints(this),e.globals.collapsedSeries.length!==e.globals.series.length){this.dataPointsDividedHeight=e.globals.gridHeight/e.globals.dataPoints,this.dataPointsDividedWidth=e.globals.gridWidth/e.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=e.config.tooltip.style.fontFamily||e.config.chart.fontFamily,this.tooltipTitle.style.fontSize=e.config.tooltip.style.fontSize,i.appendChild(this.tooltipTitle));var a=e.globals.series.length;(e.globals.xyCharts||e.globals.comboCharts)&&e.config.tooltip.shared&&(a=this.showOnIntersect?1:e.globals.series.length),this.ttItems=this.createTTElements(a),this.addSVGEvents()}}},{key:"createTTElements",value:function(t){for(var e=this.w,i=[],s=this.getElTooltip(),a=0;a<t;a++){var n=document.createElement("div");n.classList.add("apexcharts-tooltip-series-group");var r=document.createElement("span");r.classList.add("apexcharts-tooltip-marker"),r.style.backgroundColor=e.globals.colors[a],n.appendChild(r);var o=document.createElement("div");o.classList.add("apexcharts-tooltip-text"),o.style.fontFamily=e.config.tooltip.style.fontFamily||e.config.chart.fontFamily,o.style.fontSize=e.config.tooltip.style.fontSize;var l=document.createElement("div");l.classList.add("apexcharts-tooltip-y-group");var h=document.createElement("span");h.classList.add("apexcharts-tooltip-text-label"),l.appendChild(h);var c=document.createElement("span");c.classList.add("apexcharts-tooltip-text-value"),l.appendChild(c);var d=document.createElement("div");d.classList.add("apexcharts-tooltip-z-group");var u=document.createElement("span");u.classList.add("apexcharts-tooltip-text-z-label"),d.appendChild(u);var g=document.createElement("span");g.classList.add("apexcharts-tooltip-text-z-value"),d.appendChild(g),o.appendChild(l),o.appendChild(d),n.appendChild(o),s.appendChild(n),i.push(n)}return i}},{key:"addSVGEvents",value:function(){var t=this.w,e=t.config.chart.type,i=this.getElTooltip(),s=!("bar"!==e&&"candlestick"!==e),a=t.globals.dom.Paper.node,n=this.getElGrid();n&&(this.seriesBound=n.getBoundingClientRect());var r,o=[],l=[],h={hoverArea:a,elGrid:n,tooltipEl:i,tooltipY:o,tooltipX:l,ttItems:this.ttItems};if(t.globals.axisCharts&&("area"===e||"line"===e||"scatter"===e||"bubble"===e?r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):s?r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area",".apexcharts-series .apexcharts-candlestick-area"):"heatmap"===e?r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap"):"radar"===e&&(r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-marker")),r&&r.length))for(var c=0;c<r.length;c++)o.push(r[c].getAttribute("cy")),l.push(r[c].getAttribute("cx"));if(t.globals.xyCharts&&!this.showOnIntersect||t.globals.comboCharts&&!this.showOnIntersect||s&&this.hasBars()&&t.config.tooltip.shared)this.addPathsEventListeners([a],h);else if(s&&!t.globals.comboCharts)this.addBarsEventListeners(h);else if("bubble"===e||"scatter"===e||"radar"===e||this.showOnIntersect&&("area"===e||"line"===e))this.addPointsEventsListeners(h);else if(!t.globals.axisCharts||"heatmap"===e){var d=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(d,h)}if(this.showOnIntersect){var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker");u.length>0&&this.addPathsEventListeners(u,h);var g=t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-marker");g.length>0&&this.addPathsEventListeners(g,h),this.hasBars()&&!t.config.tooltip.shared&&this.addBarsEventListeners(h)}}},{key:"drawFixedTooltipRect",value:function(){var t=this.w,e=this.getElTooltip(),i=e.getBoundingClientRect(),s=i.width+10,a=i.height+10,n=t.config.tooltip.fixed.offsetX,r=t.config.tooltip.fixed.offsetY;return t.config.tooltip.fixed.position.toLowerCase().indexOf("right")>-1&&(n=n+t.globals.svgWidth-s+10),t.config.tooltip.fixed.position.toLowerCase().indexOf("bottom")>-1&&(r=r+t.globals.svgHeight-a-10),e.style.left=n+"px",e.style.top=r+"px",{x:n,y:r,ttWidth:s,ttHeight:a}}},{key:"addPointsEventsListeners",value:function(t){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker");this.addPathsEventListeners(e,t)}},{key:"addBarsEventListeners",value:function(t){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-area, .apexcharts-candlestick-area");this.addPathsEventListeners(e,t)}},{key:"addPathsEventListeners",value:function(t,e){for(var i=this,s=this,a=function(a){var n={paths:t[a],tooltipEl:e.tooltipEl,tooltipY:e.tooltipY,tooltipX:e.tooltipX,elGrid:e.elGrid,hoverArea:e.hoverArea,ttItems:e.ttItems};i.w.globals.tooltipOpts=n;["mousemove","touchmove","mouseout","touchend"].map(function(e){return t[a].addEventListener(e,s.seriesHover.bind(s,n),{capture:!1,passive:!0})})},n=0;n<t.length;n++)a(n)}},{key:"seriesHover",value:function(t,e){var i=this,s=[],a=this.w;a.config.chart.group&&(s=this.ctx.getGroupedCharts()),a.globals.axisCharts&&(a.globals.minX===-1/0&&a.globals.maxX===1/0||0===a.globals.dataPoints)||(s.length?s.forEach(function(s){var a=i.getElTooltip(s),n={paths:t.paths,tooltipEl:a,tooltipY:t.tooltipY,tooltipX:t.tooltipX,elGrid:t.elGrid,hoverArea:t.hoverArea,ttItems:s.w.globals.tooltip.ttItems};s.w.globals.minX===i.w.globals.minX&&s.w.globals.maxX===i.w.globals.maxX&&s.w.globals.tooltip.seriesHoverByContext({chartCtx:s,ttCtx:s.w.globals.tooltip,opt:n,e:e})}):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:t,e:e}))}},{key:"seriesHoverByContext",value:function(t){var e=t.chartCtx,i=t.ttCtx,s=t.opt,a=t.e,n=e.w,r=this.getElTooltip();(i.tooltipRect={x:0,y:0,ttWidth:r.getBoundingClientRect().width,ttHeight:r.getBoundingClientRect().height},i.e=a,!i.hasBars()||n.globals.comboCharts||i.isBarShared)||n.config.tooltip.onDatasetHover.highlightDataSeries&&new B(e).toggleSeriesOnHover(a,a.target.parentNode);i.fixedTooltip&&i.drawFixedTooltipRect(),n.globals.axisCharts?i.axisChartsTooltips({e:a,opt:s,tooltipRect:i.tooltipRect}):i.nonAxisChartsTooltips({e:a,opt:s,tooltipRect:i.tooltipRect})}},{key:"axisChartsTooltips",value:function(t){var e,i,s,a=t.e,n=t.opt,r=this.w,o=null,l=n.elGrid.getBoundingClientRect(),h="touchmove"===a.type?a.touches[0].clientX:a.clientX,c="touchmove"===a.type?a.touches[0].clientY:a.clientY;if(this.clientY=c,this.clientX=h,c<l.top||c>l.top+l.height)this.handleMouseOut(n);else{var d=this.getElTooltip(),u=this.getElXCrosshairs(),g=r.globals.xyCharts||"bar"===r.config.chart.type&&!this.isBarHorizontal&&this.hasBars()&&r.config.tooltip.shared||r.globals.comboCharts&&this.hasBars;if("bar"===r.config.chart.type&&this.isBarHorizontal&&this.hasBars()&&(g=!1),"mousemove"===a.type||"touchmove"===a.type){if(null!==u&&u.classList.add("active"),null!==this.ycrosshairs&&this.blyaxisTooltip&&this.ycrosshairs.classList.add("active"),g&&!this.showOnIntersect){e=(o=this.tooltipUtil.getNearestValues({context:this,hoverArea:n.hoverArea,elGrid:n.elGrid,clientX:h,clientY:c,hasBars:this.hasBars})).j;var f=o.capturedSeries;if(o.hoverX<0||o.hoverX>r.globals.gridWidth)return void this.handleMouseOut(n);if(null!==f){if(null===r.globals.series[f][e])return void n.tooltipEl.classList.remove("active");void 0!==r.globals.series[f][e]?r.config.tooltip.shared&&this.tooltipUtil.isXoverlap(e)&&this.tooltipUtil.isinitialSeriesSameLen()?this.create(this,f,e,n.ttItems):this.create(this,f,e,n.ttItems,!1):this.tooltipUtil.isXoverlap(e)&&this.create(this,0,e,n.ttItems)}else this.tooltipUtil.isXoverlap(e)&&this.create(this,0,e,n.ttItems)}else if("heatmap"===r.config.chart.type){var p=this.intersect.handleHeatTooltip({e:a,opt:n,x:i,y:s});i=p.x,s=p.y,d.style.left=i+"px",d.style.top=s+"px"}else this.hasBars&&this.intersect.handleBarTooltip({e:a,opt:n}),this.hasMarkers&&this.intersect.handleMarkerTooltip({e:a,opt:n,x:i,y:s});if(this.blyaxisTooltip)for(var x=0;x<r.config.yaxis.length;x++)this.axesTooltip.drawYaxisTooltipText(x,c,this.xyRatios);n.tooltipEl.classList.add("active")}else"mouseout"!==a.type&&"touchend"!==a.type||this.handleMouseOut(n)}}},{key:"nonAxisChartsTooltips",value:function(t){var e=t.e,i=t.opt,s=t.tooltipRect,a=this.w,n=i.paths.getAttribute("rel"),r=this.getElTooltip(),o=0,l=0,h=null,c="touchmove"===e.type?e.touches[0].clientX:e.clientX;"radialBar"===a.config.chart.type?h=a.globals.dom.baseEl.querySelector(".apexcharts-radialbar"):(h=a.globals.dom.baseEl.querySelector(".apexcharts-pie"),o=parseInt(h.getAttribute("data:innerTranslateX")),l=parseInt(h.getAttribute("data:innerTranslateY")));var d=h.getBoundingClientRect();if("mousemove"===e.type||"touchmove"===e.type){r.classList.add("active"),this.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:parseInt(n)-1,shared:!1});var u=c-d.left-s.ttWidth/2.2+o,g=e.clientY-d.top-s.ttHeight/2-15+l;u<0?u=0:u+s.ttWidth>a.globals.gridWidth&&(u=c-d.left-s.ttWidth+o),g<0&&(g=s.ttHeight+20),r.style.left=u+a.globals.translateX+"px",r.style.top=g+"px"}else"mouseout"!==e.type&&"touchend"!==e.type||r.classList.remove("active")}},{key:"deactivateHoverFilter",value:function(){for(var t=this.w,e=new f(this.ctx),i=t.globals.dom.Paper.select(".apexcharts-bar-area"),s=0;s<i.length;s++)e.pathMouseLeave(i[s])}},{key:"handleMouseOut",value:function(t){var e=this.w,i=this.getElXCrosshairs();if(t.tooltipEl.classList.remove("active"),this.deactivateHoverFilter(),"bubble"!==e.config.chart.type&&this.marker.resetPointsSize(),null!==i&&i.classList.remove("active"),null!==this.ycrosshairs&&this.ycrosshairs.classList.remove("active"),this.blxaxisTooltip&&this.xaxisTooltip.classList.remove("active"),this.blyaxisTooltip){null===this.yaxisTTEls&&(this.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var s=0;s<this.yaxisTTEls.length;s++)this.yaxisTTEls[s].classList.remove("active")}}},{key:"getElMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")}},{key:"getAllMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker")}},{key:"hasMarkers",value:function(){return this.getElMarkers().length>0}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"create",value:function(t,e,i,s){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,n=this.w,r=t;null===a&&(a=n.config.tooltip.shared);var o=this.hasMarkers(),l=this.getElBars();if(a){if(r.tooltipLabels.drawSeriesTexts({ttItems:s,i:e,j:i,shared:!this.showOnIntersect&&n.config.tooltip.shared}),o&&(n.globals.markers.largestSize>0?r.marker.enlargePoints(i):r.tooltipPosition.moveDynamicPointsOnHover(i)),this.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(l),this.barSeriesHeight>0)){var h=new f(this.ctx),c=n.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(i,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(i);for(var d=0;d<c.length;d++)h.pathMouseEnter(c[d])}}else r.tooltipLabels.drawSeriesTexts({shared:!1,ttItems:s,i:e,j:i}),this.hasBars()&&r.tooltipPosition.moveStickyTooltipOverBars(i),o&&r.tooltipPosition.moveMarkers(e,i)}}]),t}(),pt=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w,this.ev=this.w.config.chart.events,this.localeValues=this.w.globals.locale.toolbar}return s(t,[{key:"createToolbar",value:function(){var t=this.w,e=document.createElement("div");if(e.setAttribute("class","apexcharts-toolbar"),t.globals.dom.elWrap.appendChild(e),this.elZoom=document.createElement("div"),this.elZoomIn=document.createElement("div"),this.elZoomOut=document.createElement("div"),this.elPan=document.createElement("div"),this.elSelection=document.createElement("div"),this.elZoomReset=document.createElement("div"),this.elMenuIcon=document.createElement("div"),this.elMenu=document.createElement("div"),this.elCustomIcons=[],this.t=t.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var i=0;i<this.t.customIcons.length;i++)this.elCustomIcons.push(document.createElement("div"));this.elMenuItems=[];var s=[];this.t.zoomin&&t.config.chart.zoom.enabled&&s.push({el:this.elZoomIn,icon:"string"==typeof this.t.zoomin?this.t.zoomin:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n',title:this.localeValues.zoomIn,class:"apexcharts-zoom-in-icon"}),this.t.zoomout&&t.config.chart.zoom.enabled&&s.push({el:this.elZoomOut,icon:"string"==typeof this.t.zoomout?this.t.zoomout:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n',title:this.localeValues.zoomOut,class:"apexcharts-zoom-out-icon"}),this.t.zoom&&t.config.chart.zoom.enabled&&s.push({el:this.elZoom,icon:"string"==typeof this.t.zoom?this.t.zoom:'<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>',title:this.localeValues.selectionZoom,class:t.globals.isTouchDevice?"hidden":"apexcharts-zoom-icon"}),this.t.selection&&t.config.chart.selection.enabled&&s.push({el:this.elSelection,icon:"string"==typeof this.t.selection?this.t.selection:'<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',title:this.localeValues.selection,class:t.globals.isTouchDevice?"hidden":"apexcharts-selection-icon"}),this.t.pan&&t.config.chart.zoom.enabled&&s.push({el:this.elPan,icon:"string"==typeof this.t.pan?this.t.pan:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',title:this.localeValues.pan,class:t.globals.isTouchDevice?"hidden":"apexcharts-pan-icon"}),this.t.reset&&t.config.chart.zoom.enabled&&s.push({el:this.elZoomReset,icon:"string"==typeof this.t.reset?this.t.reset:'<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>',title:this.localeValues.reset,class:"apexcharts-reset-zoom-icon"}),this.t.download&&s.push({el:this.elMenuIcon,icon:"string"==typeof this.t.download?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var a=0;a<this.elCustomIcons.length;a++)s.push({el:this.elCustomIcons[a],icon:this.t.customIcons[a].icon,title:this.t.customIcons[a].title,index:this.t.customIcons[a].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[a].class});s.forEach(function(t,e){t.index&&d.moveIndexInArray(s,e,t.index)});for(var n=0;n<s.length;n++)f.setAttrs(s[n].el,{class:s[n].class,title:s[n].title}),s[n].el.innerHTML=s[n].icon,e.appendChild(s[n].el);e.appendChild(this.elMenu),f.setAttrs(this.elMenu,{class:"apexcharts-menu"});for(var r=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG}],o=0;o<r.length;o++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[o].innerHTML=r[o].title,f.setAttrs(this.elMenuItems[o],{class:"apexcharts-menu-item ".concat(r[o].name),title:r[o].title}),this.elMenu.appendChild(this.elMenuItems[o]);t.globals.zoomEnabled?this.elZoom.classList.add("selected"):t.globals.panEnabled?this.elPan.classList.add("selected"):t.globals.selectionEnabled&&this.elSelection.classList.add("selected"),this.addToolbarEventListeners()}},{key:"addToolbarEventListeners",value:function(){var t=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleSelection.bind(this)),this.elZoom.addEventListener("click",this.toggleZooming.bind(this)),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach(function(e){e.classList.contains("exportSVG")?e.addEventListener("click",t.downloadSVG.bind(t)):e.classList.contains("exportPNG")&&e.addEventListener("click",t.downloadPNG.bind(t))});for(var e=0;e<this.t.customIcons.length;e++)this.elCustomIcons[e].addEventListener("click",this.t.customIcons[e].click)}},{key:"toggleSelection",value:function(){this.toggleOtherControls(),this.w.globals.selectionEnabled=!this.w.globals.selectionEnabled,this.elSelection.classList.contains("selected")?this.elSelection.classList.remove("selected"):this.elSelection.classList.add("selected")}},{key:"toggleZooming",value:function(){this.toggleOtherControls(),this.w.globals.zoomEnabled=!this.w.globals.zoomEnabled,this.elZoom.classList.contains("selected")?this.elZoom.classList.remove("selected"):this.elZoom.classList.add("selected")}},{key:"getToolbarIconsReference",value:function(){var t=this.w;this.elZoom||(this.elZoom=t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZooming",value:function(){this.toggleOtherControls(),this.w.globals.zoomEnabled=!0,this.elZoom&&this.elZoom.classList.add("selected"),this.elPan&&this.elPan.classList.remove("selected")}},{key:"enablePanning",value:function(){this.toggleOtherControls(),this.w.globals.panEnabled=!0,this.elPan&&this.elPan.classList.add("selected"),this.elZoom&&this.elZoom.classList.remove("selected")}},{key:"togglePanning",value:function(){this.toggleOtherControls(),this.w.globals.panEnabled=!this.w.globals.panEnabled,this.elPan.classList.contains("selected")?this.elPan.classList.remove("selected"):this.elPan.classList.add("selected")}},{key:"toggleOtherControls",value:function(){var t=this.w;t.globals.panEnabled=!1,t.globals.zoomEnabled=!1,t.globals.selectionEnabled=!1,this.getToolbarIconsReference(),this.elPan&&this.elPan.classList.remove("selected"),this.elSelection&&this.elSelection.classList.remove("selected"),this.elZoom&&this.elZoom.classList.remove("selected")}},{key:"handleZoomIn",value:function(){var t=this.w,e=(t.globals.minX+t.globals.maxX)/2,i=(t.globals.minX+e)/2,s=(t.globals.maxX+e)/2;t.globals.disableZoomIn||this.zoomUpdateOptions(i,s)}},{key:"handleZoomOut",value:function(){var t=this.w;if(!("datetime"===t.config.xaxis.type&&new Date(t.globals.minX).getUTCFullYear()<1e3)){var e=(t.globals.minX+t.globals.maxX)/2,i=t.globals.minX-(e-t.globals.minX),s=t.globals.maxX-(e-t.globals.maxX);t.globals.disableZoomOut||this.zoomUpdateOptions(i,s)}}},{key:"zoomUpdateOptions",value:function(t,e){var i={min:t,max:e},s=this.getBeforeZoomRange(i);s&&(i=s.xaxis),this.w.globals.zoomed=!0,this.ctx._updateOptions({xaxis:i},!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(i)}},{key:"zoomCallback",value:function(t,e){"function"==typeof this.ev.zoomed&&this.ev.zoomed(this.ctx,{xaxis:t,yaxis:e})}},{key:"getBeforeZoomRange",value:function(t,e){var i=null;return"function"==typeof this.ev.beforeZoom&&(i=this.ev.beforeZoom(this,{xaxis:t,yaxis:e})),i}},{key:"toggleMenu",value:function(){this.elMenu.classList.contains("open")?this.elMenu.classList.remove("open"):this.elMenu.classList.add("open")}},{key:"downloadPNG",value:function(){var t=new st(this.ctx);t.exportToPng(this.ctx),this.toggleMenu()}},{key:"downloadSVG",value:function(){var t=new st(this.ctx);t.exportToSVG(),this.toggleMenu()}},{key:"handleZoomReset",value:function(t){var e=this;this.ctx.getSyncedCharts().forEach(function(t){var i=t.w;i.globals.minX!==i.globals.initialminX&&i.globals.maxX!==i.globals.initialmaxX&&(t.revertDefaultAxisMinMax(),"function"==typeof i.config.chart.events.zoomed&&e.zoomCallback({min:i.config.xaxis.min,max:i.config.xaxis.max}),i.globals.zoomed=!1,t._updateSeries(i.globals.initialSeries,i.config.chart.animations.dynamicAnimation.enabled))})}},{key:"destroy",value:function(){this.elZoomReset&&(this.elZoomReset.removeEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.removeEventListener("click",this.toggleSelection.bind(this)),this.elZoom.removeEventListener("click",this.toggleZooming.bind(this)),this.elZoomIn.removeEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.removeEventListener("click",this.handleZoomOut.bind(this)),this.elPan.removeEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.removeEventListener("click",this.toggleMenu.bind(this))),this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),t}(),xt=function(t){function i(t){var s;return e(this,i),(s=h(this,o(i).call(this,t))).ctx=t,s.w=t.w,s.dragged=!1,s.graphics=new f(s.ctx),s.eventList=["mousedown","mousemove","touchstart","touchmove","mouseup","touchend"],s.clientX=0,s.clientY=0,s.startX=0,s.endX=0,s.dragX=0,s.startY=0,s.endY=0,s.dragY=0,s}return r(i,pt),s(i,[{key:"init",value:function(t){var e=this,i=t.xyRatios,s=this.w,a=this;this.xyRatios=i,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=s.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),s.globals.dom.elGraphical.add(this.zoomRect),s.globals.dom.elGraphical.add(this.selectionRect),"x"===s.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:s.globals.gridWidth,maxY:s.globals.gridHeight}).on("dragmove",this.selectionDragging.bind(this,"dragging")):"y"===s.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:s.globals.gridWidth}).on("dragmove",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=s.globals.dom.baseEl.querySelector(s.globals.chartClass),this.hoverArea.classList.add("zoomable"),this.eventList.forEach(function(t){e.hoverArea.addEventListener(t,a.svgMouseEvents.bind(a,i),{capture:!1,passive:!0})})}},{key:"destroy",value:function(){var t=this,e=this;this.eventList.forEach(function(i){t.hoverArea&&t.hoverArea.removeEventListener(i,e.svgMouseEvents.bind(e,e.xyRatios),{capture:!1,passive:!0})}),this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(t,e){var i=this.w,s=this,a=this.ctx.toolbar,n=i.globals.zoomEnabled?i.config.chart.zoom.type:i.config.chart.selection.type;if(e.shiftKey?(this.shiftWasPressed=!0,a.enablePanning()):this.shiftWasPressed&&(a.enableZooming(),this.shiftWasPressed=!1),!(e.target.classList.contains("apexcharts-selection-rect")||e.target.parentNode.classList.contains("apexcharts-toolbar"))){if(s.clientX="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientX:"touchend"===e.type?e.changedTouches[0].clientX:e.clientX,s.clientY="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientY:"touchend"===e.type?e.changedTouches[0].clientY:e.clientY,"mousedown"===e.type&&1===e.which){var r=s.gridRect.getBoundingClientRect();s.startX=s.clientX-r.left,s.startY=s.clientY-r.top,s.dragged=!1,s.w.globals.mousedown=!0}if(("mousemove"===e.type&&1===e.which||"touchmove"===e.type)&&(s.dragged=!0,i.globals.panEnabled?(i.globals.selection=null,s.w.globals.mousedown&&s.panDragging({context:s,zoomtype:n,xyRatios:t})):(s.w.globals.mousedown&&i.globals.zoomEnabled||s.w.globals.mousedown&&i.globals.selectionEnabled)&&(s.selection=s.selectionDrawing({context:s,zoomtype:n}))),"mouseup"===e.type||"touchend"===e.type){var o=s.gridRect.getBoundingClientRect();s.w.globals.mousedown&&(s.endX=s.clientX-o.left,s.endY=s.clientY-o.top,s.dragX=Math.abs(s.endX-s.startX),s.dragY=Math.abs(s.endY-s.startY),(i.globals.zoomEnabled||i.globals.selectionEnabled)&&s.selectionDrawn({context:s,zoomtype:n})),i.globals.zoomEnabled&&s.hideSelectionRect(this.selectionRect),s.dragged=!1,s.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}},{key:"makeSelectionRectDraggable",value:function(){var t=this.w;if(this.selectionRect){var e=this.selectionRect.node.getBoundingClientRect();e.width>0&&e.height>0&&this.slDraggableRect.selectize().resize({constraint:{minX:0,minY:0,maxX:t.globals.gridWidth,maxY:t.globals.gridHeight}}).on("resizing",this.selectionDragging.bind(this,"resizing"))}}},{key:"preselectedSelection",value:function(){var t=this.w,e=this.xyRatios;if(!t.globals.zoomEnabled)if(void 0!==t.globals.selection&&null!==t.globals.selection)this.drawSelectionRect(t.globals.selection);else if(void 0!==t.config.chart.selection.xaxis.min&&void 0!==t.config.chart.selection.xaxis.max){var i=(t.config.chart.selection.xaxis.min-t.globals.minX)/e.xRatio,s={x:i,y:0,width:t.globals.gridWidth-(t.globals.maxX-t.config.chart.selection.xaxis.max)/e.xRatio-i,height:t.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:!0};this.drawSelectionRect(s),this.makeSelectionRectDraggable(),"function"==typeof t.config.chart.events.selection&&t.config.chart.events.selection(this.ctx,{xaxis:{min:t.config.chart.selection.xaxis.min,max:t.config.chart.selection.xaxis.max},yaxis:{}})}}},{key:"drawSelectionRect",value:function(t){var e=t.x,i=t.y,s=t.width,a=t.height,n=t.translateX,r=t.translateY,o=this.w,l=this.zoomRect,h=this.selectionRect;if(this.dragged||null!==o.globals.selection){var c={transform:"translate("+n+", "+r+")"};o.globals.zoomEnabled&&this.dragged&&(l.attr({x:e,y:i,width:s,height:a,fill:o.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":o.config.chart.zoom.zoomedArea.fill.opacity,stroke:o.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":o.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":o.config.chart.zoom.zoomedArea.stroke.opacity}),f.setAttrs(l.node,c)),o.globals.selectionEnabled&&(h.attr({x:e,y:i,width:s>0?s:0,height:a>0?a:0,fill:o.config.chart.selection.fill.color,"fill-opacity":o.config.chart.selection.fill.opacity,stroke:o.config.chart.selection.stroke.color,"stroke-width":o.config.chart.selection.stroke.width,"stroke-dasharray":o.config.chart.selection.stroke.dashArray,"stroke-opacity":o.config.chart.selection.stroke.opacity}),f.setAttrs(h.node,c))}}},{key:"hideSelectionRect",value:function(t){t&&t.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(t){var e=t.context,i=t.zoomtype,s=this.w,a=e,n=this.gridRect.getBoundingClientRect(),r=a.startX-1,o=a.startY,l=a.clientX-n.left-r,h=a.clientY-n.top-o,c=0,d=0,u={};return(Math.abs(l+r)>s.globals.gridWidth||a.clientX-n.left<0)&&(a.hideSelectionRect(this.zoomRect),a.dragged=!1,a.w.globals.mousedown=!1),r>a.clientX-n.left&&(c=-(l=Math.abs(l))),o>a.clientY-n.top&&(d=-(h=Math.abs(h))),u="x"===i?{x:r,y:0,width:l,height:s.globals.gridHeight,translateX:c,translateY:0}:"y"===i?{x:0,y:o,width:s.globals.gridWidth,height:h,translateX:0,translateY:d}:{x:r,y:o,width:l,height:h,translateX:c,translateY:d},a.drawSelectionRect(u),u}},{key:"selectionDragging",value:function(t,e){var i=this,s=this.w,a=this.xyRatios,n=this.selectionRect,r=0;"resizing"===t&&(r=30),"function"==typeof s.config.chart.events.selection&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout(function(){var t=i.gridRect.getBoundingClientRect(),e=n.node.getBoundingClientRect(),r=s.globals.xAxisScale.niceMin+(e.left-t.left)*a.xRatio,o=s.globals.xAxisScale.niceMin+(e.right-t.left)*a.xRatio,l=s.globals.yAxisScale[0].niceMin+(t.bottom-e.bottom)*a.yRatio[0],h=s.globals.yAxisScale[0].niceMax-(e.top-t.top)*a.yRatio[0];s.config.chart.events.selection(i.ctx,{xaxis:{min:r,max:o},yaxis:{min:l,max:h}})},r))}},{key:"selectionDrawn",value:function(t){var e=t.context,i=t.zoomtype,s=this.w,a=e,n=this.xyRatios,r=this.ctx.toolbar;if(a.startX>a.endX){var o=a.startX;a.startX=a.endX,a.endX=o}if(a.startY>a.endY){var l=a.startY;a.startY=a.endY,a.endY=l}var h=s.globals.xAxisScale.niceMin+a.startX*n.xRatio,c=s.globals.xAxisScale.niceMin+a.endX*n.xRatio,u=[],g=[];if(s.config.yaxis.forEach(function(t,e){u.push(Math.floor(s.globals.yAxisScale[e].niceMax-n.yRatio[e]*a.startY)),g.push(Math.floor(s.globals.yAxisScale[e].niceMax-n.yRatio[e]*a.endY))}),a.dragged&&(a.dragX>10||a.dragY>10)&&h!==c)if(s.globals.zoomEnabled){var f=d.clone(s.config.yaxis);s.globals.zoomed||(s.globals.lastXAxis=d.clone(s.config.xaxis),s.globals.lastYAxis=d.clone(s.config.yaxis));var p={min:h,max:c};if("xy"!==i&&"y"!==i||f.forEach(function(t,e){f[e].min=g[e],f[e].max=u[e]}),s.config.chart.zoom.autoScaleYaxis){var x=new H(a.ctx);f=x.autoScaleY(a.ctx,{xaxis:p})}if(r){var m=r.getBeforeZoomRange(p,f);m&&(p=m.xaxis?m.xaxis:p,f=m.yaxis?m.yaxe:f)}"x"===i?a.ctx._updateOptions({xaxis:p},!1,a.w.config.chart.animations.dynamicAnimation.enabled):"y"===i?a.ctx._updateOptions({yaxis:f},!1,a.w.config.chart.animations.dynamicAnimation.enabled):a.ctx._updateOptions({xaxis:p,yaxis:f},!1,a.w.config.chart.animations.dynamicAnimation.enabled),"function"==typeof s.config.chart.events.zoomed&&r.zoomCallback(p,f),s.globals.zoomed=!0}else if(s.globals.selectionEnabled){var v,b=null;v={min:h,max:c},"xy"!==i&&"y"!==i||(b=d.clone(s.config.yaxis)).forEach(function(t,e){b[e].min=g[e],b[e].max=u[e]}),s.globals.selection=a.selection,"function"==typeof s.config.chart.events.selection&&s.config.chart.events.selection(a.ctx,{xaxis:v,yaxis:b})}}},{key:"panDragging",value:function(t){var e,i=t.context,s=(t.zoomtype,this.w),a=i;if(void 0!==s.globals.lastClientPosition.x){var n=s.globals.lastClientPosition.x-a.clientX,r=s.globals.lastClientPosition.y-a.clientY;Math.abs(n)>Math.abs(r)&&n>0?e="left":Math.abs(n)>Math.abs(r)&&n<0?e="right":Math.abs(r)>Math.abs(n)&&r>0?e="up":Math.abs(r)>Math.abs(n)&&r<0&&(e="down")}s.globals.lastClientPosition={x:a.clientX,y:a.clientY};var o=s.globals.minX,l=s.globals.maxX;this.panScrolled(e,o,l)}},{key:"panScrolled",value:function(t,e,i){var s=this.w,a=this.xyRatios,n=d.clone(s.config.yaxis);"left"===t?(e=s.globals.minX+s.globals.gridWidth/15*a.xRatio,i=s.globals.maxX+s.globals.gridWidth/15*a.xRatio):"right"===t&&(e=s.globals.minX-s.globals.gridWidth/15*a.xRatio,i=s.globals.maxX-s.globals.gridWidth/15*a.xRatio),(e<s.globals.initialminX||i>s.globals.initialmaxX)&&(e=s.globals.minX,i=s.globals.maxX);var r={min:e,max:i};s.config.chart.zoom.autoScaleYaxis&&(n=new H(me.ctx).autoScaleY(me.ctx,{xaxis:r}));this.ctx._updateOptions({xaxis:{min:e,max:i},yaxis:n},!1,!1),"function"==typeof s.config.chart.events.scrolled&&s.config.chart.events.scrolled(this.ctx,{xaxis:{min:e,max:i}})}}]),i}(),mt=function(){function t(i){e(this,t),this.ctx=i,this.w=i.w}return s(t,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(t){var e=this.w,i="title"===t?e.config.title:e.config.subtitle,s=e.globals.svgWidth/2,a=i.offsetY,n="middle";if("left"===i.align?(s=10,n="start"):"right"===i.align&&(s=e.globals.svgWidth-10,n="end"),s+=i.offsetX,a=a+parseInt(i.style.fontSize)+2,void 0!==i.text){var r=new f(this.ctx).drawText({x:s,y:a,text:i.text,textAnchor:n,fontSize:i.style.fontSize,fontFamily:i.style.fontFamily,foreColor:i.style.color,opacity:1});r.node.setAttribute("class","apexcharts-".concat(t,"-text")),e.globals.dom.Paper.add(r)}}}]),t}();et="undefined"!=typeof window?window:void 0,it=function(e,i){var s=(void 0!==this?this:e).SVG=function(t){if(s.supported)return t=new s.Doc(t),s.parser.draw||s.prepare(),t};if(s.ns="http://www.w3.org/2000/svg",s.xmlns="http://www.w3.org/2000/xmlns/",s.xlink="http://www.w3.org/1999/xlink",s.svgjs="http://svgjs.com/svgjs",s.supported=!0,!s.supported)return!1;s.did=1e3,s.eid=function(t){return"Svgjs"+d(t)+s.did++},s.create=function(t){var e=i.createElementNS(this.ns,t);return e.setAttribute("id",this.eid(t)),e},s.extend=function(){var t,e,i,a;for(e=(t=[].slice.call(arguments)).pop(),a=t.length-1;a>=0;a--)if(t[a])for(i in e)t[a].prototype[i]=e[i];s.Set&&s.Set.inherit&&s.Set.inherit()},s.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,s.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&s.extend(e,t.extend),t.construct&&s.extend(t.parent||s.Container,t.construct),e},s.adopt=function(t){return t?t.instance?t.instance:((i="svg"==t.nodeName?t.parentNode instanceof e.SVGElement?new s.Nested:new s.Doc:"linearGradient"==t.nodeName?new s.Gradient("linear"):"radialGradient"==t.nodeName?new s.Gradient("radial"):s[d(t.nodeName)]?new(s[d(t.nodeName)]):new s.Element(t)).type=t.nodeName,i.node=t,t.instance=i,i instanceof s.Doc&&i.namespace().defs(),i.setData(JSON.parse(t.getAttribute("svgjs:data"))||{}),i):null;var i},s.prepare=function(){var t=i.getElementsByTagName("body")[0],e=(t?new s.Doc(t):s.adopt(i.documentElement).nested()).size(2,0);s.parser={body:t||i.documentElement,draw:e.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:e.polyline().node,path:e.path().node,native:s.create("svg")}},s.parser={native:s.create("svg")},i.addEventListener("DOMContentLoaded",function(){s.parser.draw||s.prepare()},!1),s.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},s.utils={map:function(t,e){var i,s=t.length,a=[];for(i=0;i<s;i++)a.push(e(t[i]));return a},filter:function(t,e){var i,s=t.length,a=[];for(i=0;i<s;i++)e(t[i])&&a.push(t[i]);return a},radians:function(t){return t%360*Math.PI/180},degrees:function(t){return 180*t/Math.PI%360},filterSVGElements:function(t){return this.filter(t,function(t){return t instanceof e.SVGElement})}},s.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},s.Color=function(e){var i,a;(this.r=0,this.g=0,this.b=0,e)&&("string"==typeof e?s.regex.isRgb.test(e)?(i=s.regex.rgb.exec(e.replace(s.regex.whitespace,"")),this.r=parseInt(i[1]),this.g=parseInt(i[2]),this.b=parseInt(i[3])):s.regex.isHex.test(e)&&(i=s.regex.hex.exec(4==(a=e).length?["#",a.substring(1,2),a.substring(1,2),a.substring(2,3),a.substring(2,3),a.substring(3,4),a.substring(3,4)].join(""):a),this.r=parseInt(i[1],16),this.g=parseInt(i[2],16),this.b=parseInt(i[3],16)):"object"===t(e)&&(this.r=e.r,this.g=e.g,this.b=e.b))},s.extend(s.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+u(this.r)+u(this.g)+u(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new s.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new s.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),s.Color.test=function(t){return t+="",s.regex.isHex.test(t)||s.regex.isRgb.test(t)},s.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},s.Color.isColor=function(t){return s.Color.isRgb(t)||s.Color.test(t)},s.Array=function(t,e){0==(t=(t||[]).valueOf()).length&&e&&(t=e.valueOf()),this.value=this.parse(t)},s.extend(s.Array,{morph:function(t){if(this.destination=this.parse(t),this.value.length!=this.destination.length){for(var e=this.value[this.value.length-1],i=this.destination[this.destination.length-1];this.value.length>this.destination.length;)this.destination.push(i);for(;this.value.length<this.destination.length;)this.value.push(e)}return this},settle:function(){for(var t=0,e=this.value.length,i=[];t<e;t++)-1==i.indexOf(this.value[t])&&i.push(this.value[t]);return this.value=i},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,a=[];e<i;e++)a.push(this.value[e]+(this.destination[e]-this.value[e])*t);return new s.Array(a)},toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)},split:function(t){return t.trim().split(s.regex.delimiter).map(parseFloat)},reverse:function(){return this.value.reverse(),this},clone:function(){var t=new this.constructor;return t.value=function t(e){var i=e.slice(0);for(var s=i.length;s--;)Array.isArray(i[s])&&(i[s]=t(i[s]));return i}(this.value),t}}),s.PointArray=function(t,e){s.Array.call(this,t,e||[[0,0]])},s.PointArray.prototype=new s.Array,s.PointArray.prototype.constructor=s.PointArray,s.extend(s.PointArray,{toString:function(){for(var t=0,e=this.value.length,i=[];t<e;t++)i.push(this.value[t].join(","));return i.join(" ")},toLine:function(){return{x1:this.value[0][0],y1:this.value[0][1],x2:this.value[1][0],y2:this.value[1][1]}},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,a=[];e<i;e++)a.push([this.value[e][0]+(this.destination[e][0]-this.value[e][0])*t,this.value[e][1]+(this.destination[e][1]-this.value[e][1])*t]);return new s.PointArray(a)},parse:function(t){var e=[];if(t=t.valueOf(),Array.isArray(t)){if(Array.isArray(t[0]))return t.map(function(t){return t.slice()});if(null!=t[0].x)return t.map(function(t){return[t.x,t.y]})}else t=t.trim().split(s.regex.delimiter).map(parseFloat);t.length%2!=0&&t.pop();for(var i=0,a=t.length;i<a;i+=2)e.push([t[i],t[i+1]]);return e},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var s=this.value.length-1;s>=0;s--)this.value[s]=[this.value[s][0]+t,this.value[s][1]+e];return this},size:function(t,e){var i,s=this.bbox();for(i=this.value.length-1;i>=0;i--)s.width&&(this.value[i][0]=(this.value[i][0]-s.x)*t/s.width+s.x),s.height&&(this.value[i][1]=(this.value[i][1]-s.y)*e/s.height+s.y);return this},bbox:function(){return s.parser.draw||s.prepare(),s.parser.poly.setAttribute("points",this.toString()),s.parser.poly.getBBox()}});for(var a={M:function(t,e,i){return e.x=i.x=t[0],e.y=i.y=t[1],["M",e.x,e.y]},L:function(t,e){return e.x=t[0],e.y=t[1],["L",t[0],t[1]]},H:function(t,e){return e.x=t[0],["H",t[0]]},V:function(t,e){return e.y=t[0],["V",t[0]]},C:function(t,e){return e.x=t[4],e.y=t[5],["C",t[0],t[1],t[2],t[3],t[4],t[5]]},S:function(t,e){return e.x=t[2],e.y=t[3],["S",t[0],t[1],t[2],t[3]]},Q:function(t,e){return e.x=t[2],e.y=t[3],["Q",t[0],t[1],t[2],t[3]]},T:function(t,e){return e.x=t[0],e.y=t[1],["T",t[0],t[1]]},Z:function(t,e,i){return e.x=i.x,e.y=i.y,["Z"]},A:function(t,e){return e.x=t[5],e.y=t[6],["A",t[0],t[1],t[2],t[3],t[4],t[5],t[6]]}},n="mlhvqtcsaz".split(""),r=0,o=n.length;r<o;++r)a[n[r]]=function(t){return function(e,i,s){if("H"==t)e[0]=e[0]+i.x;else if("V"==t)e[0]=e[0]+i.y;else if("A"==t)e[5]=e[5]+i.x,e[6]=e[6]+i.y;else for(var n=0,r=e.length;n<r;++n)e[n]=e[n]+(n%2?i.y:i.x);return a[t](e,i,s)}}(n[r].toUpperCase());s.PathArray=function(t,e){s.Array.call(this,t,e||[["M",0,0]])},s.PathArray.prototype=new s.Array,s.PathArray.prototype.constructor=s.PathArray,s.extend(s.PathArray,{toString:function(){return function(t){for(var e=0,i=t.length,s="";e<i;e++)s+=t[e][0],null!=t[e][1]&&(s+=t[e][1],null!=t[e][2]&&(s+=" ",s+=t[e][2],null!=t[e][3]&&(s+=" ",s+=t[e][3],s+=" ",s+=t[e][4],null!=t[e][5]&&(s+=" ",s+=t[e][5],s+=" ",s+=t[e][6],null!=t[e][7]&&(s+=" ",s+=t[e][7])))));return s+" "}(this.value)},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var s,a=this.value.length-1;a>=0;a--)"M"==(s=this.value[a][0])||"L"==s||"T"==s?(this.value[a][1]+=t,this.value[a][2]+=e):"H"==s?this.value[a][1]+=t:"V"==s?this.value[a][1]+=e:"C"==s||"S"==s||"Q"==s?(this.value[a][1]+=t,this.value[a][2]+=e,this.value[a][3]+=t,this.value[a][4]+=e,"C"==s&&(this.value[a][5]+=t,this.value[a][6]+=e)):"A"==s&&(this.value[a][6]+=t,this.value[a][7]+=e);return this},size:function(t,e){var i,s,a=this.bbox();for(i=this.value.length-1;i>=0;i--)"M"==(s=this.value[i][0])||"L"==s||"T"==s?(this.value[i][1]=(this.value[i][1]-a.x)*t/a.width+a.x,this.value[i][2]=(this.value[i][2]-a.y)*e/a.height+a.y):"H"==s?this.value[i][1]=(this.value[i][1]-a.x)*t/a.width+a.x:"V"==s?this.value[i][1]=(this.value[i][1]-a.y)*e/a.height+a.y:"C"==s||"S"==s||"Q"==s?(this.value[i][1]=(this.value[i][1]-a.x)*t/a.width+a.x,this.value[i][2]=(this.value[i][2]-a.y)*e/a.height+a.y,this.value[i][3]=(this.value[i][3]-a.x)*t/a.width+a.x,this.value[i][4]=(this.value[i][4]-a.y)*e/a.height+a.y,"C"==s&&(this.value[i][5]=(this.value[i][5]-a.x)*t/a.width+a.x,this.value[i][6]=(this.value[i][6]-a.y)*e/a.height+a.y)):"A"==s&&(this.value[i][1]=this.value[i][1]*t/a.width,this.value[i][2]=this.value[i][2]*e/a.height,this.value[i][6]=(this.value[i][6]-a.x)*t/a.width+a.x,this.value[i][7]=(this.value[i][7]-a.y)*e/a.height+a.y);return this},equalCommands:function(t){var e,i,a;for(t=new s.PathArray(t),a=this.value.length===t.value.length,e=0,i=this.value.length;a&&e<i;e++)a=this.value[e][0]===t.value[e][0];return a},morph:function(t){return t=new s.PathArray(t),this.equalCommands(t)?this.destination=t:this.destination=null,this},at:function(t){if(!this.destination)return this;var e,i,a,n,r=this.value,o=this.destination.value,l=[],h=new s.PathArray;for(e=0,i=r.length;e<i;e++){for(l[e]=[r[e][0]],a=1,n=r[e].length;a<n;a++)l[e][a]=r[e][a]+(o[e][a]-r[e][a])*t;"A"===l[e][0]&&(l[e][4]=+(0!=l[e][4]),l[e][5]=+(0!=l[e][5]))}return h.value=l,h},parse:function(t){if(t instanceof s.PathArray)return t.valueOf();var e,i={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};t="string"==typeof t?t.replace(s.regex.numbersWithDots,h).replace(s.regex.pathLetters," $& ").replace(s.regex.hyphen,"$1 -").trim().split(s.regex.delimiter):t.reduce(function(t,e){return[].concat.call(t,e)},[]);var n=[],r=new s.Point,o=new s.Point,l=0,c=t.length;do{s.regex.isPathLetter.test(t[l])?(e=t[l],++l):"M"==e?e="L":"m"==e&&(e="l"),n.push(a[e].call(null,t.slice(l,l+=i[e.toUpperCase()]).map(parseFloat),r,o))}while(c>l);return n},bbox:function(){return s.parser.draw||s.prepare(),s.parser.path.setAttribute("d",this.toString()),s.parser.path.getBBox()}}),s.Number=s.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-3.4e38:3.4e38:"string"==typeof t?(e=t.match(s.regex.numberAndUnit))&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5]):t instanceof s.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new s.Number(t),new s.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new s.Number(t),new s.Number(this-t,this.unit||t.unit)},times:function(t){return t=new s.Number(t),new s.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new s.Number(t),new s.Number(this/t,this.unit||t.unit)},to:function(t){var e=new s.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new s.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new s.Number(this.destination).minus(this).times(t).plus(this):this}}}),s.Element=s.invent({create:function(t){this._stroke=s.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var i=g(this,t,e);return this.width(new s.Number(i.width)).height(new s.Number(i.height))},clone:function(t){this.writeDataToDom();var e=m(this.node.cloneNode(!0));return t?t.add(e):this.after(e),e},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},inside:function(t,e){var i=this.bbox();return t>i.x&&e>i.y&&t<i.x+i.width&&e<i.y+i.height},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(s.regex.delimiter)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter(function(e){return e!=t}).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return s.get(this.attr(t))},parent:function(t){var i=this;if(!i.node.parentNode)return null;if(i=s.adopt(i.node.parentNode),!t)return i;for(;i&&i.node instanceof e.SVGElement;){if("string"==typeof t?i.matches(t):i instanceof t)return i;if(!i.node.parentNode||"#document"==i.node.parentNode.nodeName)return null;i=s.adopt(i.node.parentNode)}},doc:function(){return this instanceof s.Doc?this:this.parent(s.Doc)},parents:function(t){var e=[],i=this;do{if(!(i=i.parent(t))||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return function(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}(this.node,t)},native:function(){return this.node},svg:function(t){var e=i.createElement("svg");if(!(t&&this instanceof s.Parent))return e.appendChild(t=i.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),e.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");e.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var a=0,n=e.firstChild.childNodes.length;a<n;a++)this.node.appendChild(e.firstChild.firstChild);return this},writeDataToDom:function(){(this.each||this.lines)&&(this.each?this:this.lines()).each(function(){this.writeDataToDom()});return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return function(t,e){return t instanceof e}(this,t)}}}),s.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return 1-Math.cos(t*Math.PI/2)}},s.morph=function(t){return function(e,i){return new s.MorphObj(e,i).at(t)}},s.Situation=s.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new s.Number(t.duration).valueOf(),this.delay=new s.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),s.FX=s.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(e,i,a){"object"===t(e)&&(i=e.ease,a=e.delay,e=e.duration);var n=new s.Situation({duration:e||1e3,delay:a||0,ease:s.easing[i||"-"]||i});return this.queue(n),this},delay:function(t){var e=new s.Situation({duration:t,delay:0,ease:s.easing["-"]});return this.queue(e)},target:function(t){return t&&t instanceof s.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=e.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){e.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof s.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof s.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e,i,a=this.situation;if(a.init)return this;for(t in a.animations)for(i=this.target()[t](),Array.isArray(i)||(i=[i]),Array.isArray(a.animations[t])||(a.animations[t]=[a.animations[t]]),e=i.length;e--;)a.animations[t][e]instanceof s.Number&&(i[e]=new s.Number(i[e])),a.animations[t][e]=i[e].morph(a.animations[t][e]);for(t in a.attrs)a.attrs[t]=new s.MorphObj(this.target().attr(t),a.attrs[t]);for(t in a.styles)a.styles[t]=new s.MorphObj(this.target().style(t),a.styles[t]);return a.initialTransformation=this.target().matrixify(),a.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var i=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!i&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},reset:function(){if(this.situation){var t=this.situation;this.stop(),this.situation=t,this.atStart()}return this},finish:function(){for(this.stop(!0,!1);this.dequeue().situation&&this.stop(!0,!1););return this.clearQueue().clearCurrent(),this},atStart:function(){return this.at(0,!0)},atEnd:function(){return!0===this.situation.loops&&(this.situation.loops=this.situation.loop+1),"number"==typeof this.situation.loops?this.at(this.situation.loops,!0):this.at(1,!0)},at:function(t,e){var i=this.situation.duration/this._speed;return this.absPos=t,e||(this.situation.reversed&&(this.absPos=1-this.absPos),this.absPos+=this.situation.loop),this.situation.start=+new Date-this.absPos*i,this.situation.finish=this.situation.start+i,this.step(!0)},speed:function(t){return 0===t?this.pause():t?(this._speed=t,this.at(this.absPos,!0)):this._speed},loop:function(t,e){var i=this.last();return i.loops=null==t||t,i.loop=0,e&&(i.reversing=!0),this},pause:function(){return this.paused=!0,this.stopAnimFrame(),this},play:function(){return this.paused?(this.paused=!1,this.at(this.absPos,!0)):this},reverse:function(t){var e=this.last();return e.reversed=void 0===t?!e.reversed:t,this},progress:function(t){return t?this.situation.ease(this.pos):this.pos},after:function(t){var e=this.last();return this.target().on("finished.fx",function i(s){s.detail.situation==e&&(t.call(this,e),this.off("finished.fx",i))}),this._callStart()},during:function(t){var e=this.last(),i=function(i){i.detail.situation==e&&t.call(this,i.detail.pos,s.morph(i.detail.pos),i.detail.eased,e)};return this.target().off("during.fx",i).on("during.fx",i),this.after(function(){this.off("during.fx",i)}),this._callStart()},afterAll:function(t){var e=function e(i){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},duringAll:function(t){var e=function(e){t.call(this,e.detail.pos,s.morph(e.detail.pos),e.detail.eased,e.detail.situation)};return this.target().off("during.fx",e).on("during.fx",e),this.afterAll(function(){this.off("during.fx",e)}),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,this._callStart()},step:function(t){var e,i,s;(t||(this.absPos=this.timeToAbsPos(+new Date)),!1!==this.situation.loops)?(e=Math.max(this.absPos,0),i=Math.floor(e),!0===this.situation.loops||i<this.situation.loops?(this.pos=e-i,s=this.situation.loop,this.situation.loop=i):(this.absPos=this.situation.loops,this.pos=1,s=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-s)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos);this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var a=this.situation.ease(this.pos);for(var n in this.situation.once)n>this.lastPos&&n<=a&&(this.situation.once[n].call(this.target(),this.pos,a),delete this.situation.once[n]);return this.active&&this.target().fire("during",{pos:this.pos,eased:a,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=a,this):this},eachAt:function(){var t,e,i,a=this,n=this.target(),r=this.situation;for(t in r.animations)i=[].concat(r.animations[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(r.ease(a.pos),a.pos):t}),n[t].apply(n,i);for(t in r.attrs)i=[t].concat(r.attrs[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(r.ease(a.pos),a.pos):t}),n.attr.apply(n,i);for(t in r.styles)i=[t].concat(r.styles[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(r.ease(a.pos),a.pos):t}),n.style.apply(n,i);if(r.transforms.length){for(i=r.initialTransformation,t=0,e=r.transforms.length;t<e;t++){var o=r.transforms[t];o instanceof s.Matrix?i=o.relative?i.multiply((new s.Matrix).morph(o).at(r.ease(this.pos))):i.morph(o).at(r.ease(this.pos)):(o.relative||o.undo(i.extract()),i=i.multiply(o.at(r.ease(this.pos))))}n.matrix(i)}return this},once:function(t,e,i){var s=this.last();return i||(t=s.ease(t)),s.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:s.Element,construct:{animate:function(t,e,i){return(this.fx||(this.fx=new s.FX(this))).animate(t,e,i)},delay:function(t){return(this.fx||(this.fx=new s.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this},pause:function(){return this.fx&&this.fx.pause(),this},play:function(){return this.fx&&this.fx.play(),this},speed:function(t){if(this.fx){if(null==t)return this.fx.speed();this.fx.speed(t)}return this}}}),s.MorphObj=s.invent({create:function(t,e){return s.Color.isColor(e)?new s.Color(t).morph(e):s.regex.delimiter.test(t)?s.regex.pathLetters.test(t)?new s.PathArray(t).morph(e):new s.Array(t).morph(e):s.regex.numberAndUnit.test(e)?new s.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),s.extend(s.FX,{attr:function(e,i,s){if("object"===t(e))for(var a in e)this.attr(a,e[a]);else this.add(e,i,"attrs");return this},style:function(e,i){if("object"===t(e))for(var s in e)this.style(s,e[s]);else this.add(e,i,"styles");return this},x:function(t,e){if(this.target()instanceof s.G)return this.transform({x:t},e),this;var i=new s.Number(t);return i.relative=e,this.add("x",i)},y:function(t,e){if(this.target()instanceof s.G)return this.transform({y:t},e),this;var i=new s.Number(t);return i.relative=e,this.add("y",i)},cx:function(t){return this.add("cx",new s.Number(t))},cy:function(t){return this.add("cy",new s.Number(t))},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},size:function(t,e){var i;this.target()instanceof s.Text?this.attr("font-size",t):(t&&e||(i=this.target().bbox()),t||(t=i.width/i.height*e),e||(e=i.height/i.width*t),this.add("width",new s.Number(t)).add("height",new s.Number(e)));return this},width:function(t){return this.add("width",new s.Number(t))},height:function(t){return this.add("height",new s.Number(t))},plot:function(t,e,i,s){return 4==arguments.length?this.plot([t,e,i,s]):this.add("plot",new(this.target().morphArray)(t))},leading:function(t){return this.target().leading?this.add("leading",new s.Number(t)):this},viewbox:function(t,e,i,a){return this.target()instanceof s.Container&&this.add("viewbox",new s.ViewBox(t,e,i,a)),this},update:function(t){if(this.target()instanceof s.Stop){if("number"==typeof t||t instanceof s.Number)return this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]});null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",t.offset)}return this}}),s.Box=s.invent({create:function(e,i,a,n){if(!("object"!==t(e)||e instanceof s.Element))return s.Box.call(this,null!=e.left?e.left:e.x,null!=e.top?e.top:e.y,e.width,e.height);4==arguments.length&&(this.x=e,this.y=i,this.width=a,this.height=n),v(this)},extend:{merge:function(t){var e=new this.constructor;return e.x=Math.min(this.x,t.x),e.y=Math.min(this.y,t.y),e.width=Math.max(this.x+this.width,t.x+t.width)-e.x,e.height=Math.max(this.y+this.height,t.y+t.height)-e.y,v(e)},transform:function(t){var e,i=1/0,a=-1/0,n=1/0,r=-1/0;return[new s.Point(this.x,this.y),new s.Point(this.x2,this.y),new s.Point(this.x,this.y2),new s.Point(this.x2,this.y2)].forEach(function(e){e=e.transform(t),i=Math.min(i,e.x),a=Math.max(a,e.x),n=Math.min(n,e.y),r=Math.max(r,e.y)}),(e=new this.constructor).x=i,e.width=a-i,e.y=n,e.height=r-n,v(e),e}}}),s.BBox=s.invent({create:function(t){if(s.Box.apply(this,[].slice.call(arguments)),t instanceof s.Element){var e;try{if(!i.documentElement.contains){for(var a=t.node;a.parentNode;)a=a.parentNode;if(a!=i)throw new Error("Element not in the dom")}e=t.node.getBBox()}catch(i){if(t instanceof s.Shape){s.parser.draw||s.prepare();var n=t.clone(s.parser.draw.instance).show();e=n.node.getBBox(),n.remove()}else e={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}s.Box.call(this,e)}},inherit:s.Box,parent:s.Element,construct:{bbox:function(){return new s.BBox(this)}}}),s.BBox.prototype.constructor=s.BBox,s.extend(s.Element,{tbox:function(){return console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead."),this.rbox(this.doc())}}),s.RBox=s.invent({create:function(t){s.Box.apply(this,[].slice.call(arguments)),t instanceof s.Element&&s.Box.call(this,t.node.getBoundingClientRect())},inherit:s.Box,parent:s.Element,extend:{addOffset:function(){return this.x+=e.pageXOffset,this.y+=e.pageYOffset,this}},construct:{rbox:function(t){return t?new s.RBox(this).transform(t.screenCTM().inverse()):new s.RBox(this).addOffset()}}}),s.RBox.prototype.constructor=s.RBox,s.Matrix=s.invent({create:function(e){var i,a=p([1,0,0,1,0,0]);for(e=e instanceof s.Element?e.matrixify():"string"==typeof e?p(e.split(s.regex.delimiter).map(parseFloat)):6==arguments.length?p([].slice.call(arguments)):Array.isArray(e)?p(e):"object"===t(e)?e:a,i=y.length-1;i>=0;--i)this[y[i]]=null!=e[y[i]]?e[y[i]]:a[y[i]]},extend:{extract:function(){var t=f(this,0,1),e=f(this,1,0),i=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(i*Math.PI/180)+this.f*Math.sin(i*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(i*Math.PI/180)+this.e*Math.sin(-i*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),skewX:-i,skewY:180/Math.PI*Math.atan2(e.y,e.x),scaleX:Math.sqrt(this.a*this.a+this.b*this.b),scaleY:Math.sqrt(this.c*this.c+this.d*this.d),rotation:i,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new s.Matrix(this)}},clone:function(){return new s.Matrix(this)},morph:function(t){return this.destination=new s.Matrix(t),this},at:function(t){return this.destination?new s.Matrix({a:this.a+(this.destination.a-this.a)*t,b:this.b+(this.destination.b-this.b)*t,c:this.c+(this.destination.c-this.c)*t,d:this.d+(this.destination.d-this.d)*t,e:this.e+(this.destination.e-this.e)*t,f:this.f+(this.destination.f-this.f)*t}):this},multiply:function(t){return new s.Matrix(this.native().multiply(function(t){t instanceof s.Matrix||(t=new s.Matrix(t));return t}(t).native()))},inverse:function(){return new s.Matrix(this.native().inverse())},translate:function(t,e){return new s.Matrix(this.native().translate(t||0,e||0))},scale:function(t,e,i,a){return 1==arguments.length?e=t:3==arguments.length&&(a=i,i=e,e=t),this.around(i,a,new s.Matrix(t,0,0,e,0,0))},rotate:function(t,e,i){return t=s.utils.radians(t),this.around(e,i,new s.Matrix(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0))},flip:function(t,e){return"x"==t?this.scale(-1,1,e,0):"y"==t?this.scale(1,-1,0,e):this.scale(-1,-1,t,null!=e?e:t)},skew:function(t,e,i,a){return 1==arguments.length?e=t:3==arguments.length&&(a=i,i=e,e=t),t=s.utils.radians(t),e=s.utils.radians(e),this.around(i,a,new s.Matrix(1,Math.tan(e),Math.tan(t),1,0,0))},skewX:function(t,e,i){return this.skew(t,0,e,i)},skewY:function(t,e,i){return this.skew(0,t,e,i)},around:function(t,e,i){return this.multiply(new s.Matrix(1,0,0,1,t||0,e||0)).multiply(i).multiply(new s.Matrix(1,0,0,1,-t||0,-e||0))},native:function(){for(var t=s.parser.native.createSVGMatrix(),e=y.length-1;e>=0;e--)t[y[e]]=this[y[e]];return t},toString:function(){return"matrix("+b(this.a)+","+b(this.b)+","+b(this.c)+","+b(this.d)+","+b(this.e)+","+b(this.f)+")"}},parent:s.Element,construct:{ctm:function(){return new s.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof s.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new s.Matrix(e)}return new s.Matrix(this.node.getScreenCTM())}}}),s.Point=s.invent({create:function(e,i){var s;s=Array.isArray(e)?{x:e[0],y:e[1]}:"object"===t(e)?{x:e.x,y:e.y}:null!=e?{x:e,y:null!=i?i:e}:{x:0,y:0},this.x=s.x,this.y=s.y},extend:{clone:function(){return new s.Point(this)},morph:function(t,e){return this.destination=new s.Point(t,e),this},at:function(t){return this.destination?new s.Point({x:this.x+(this.destination.x-this.x)*t,y:this.y+(this.destination.y-this.y)*t}):this},native:function(){var t=s.parser.native.createSVGPoint();return t.x=this.x,t.y=this.y,t},transform:function(t){return new s.Point(this.native().matrixTransform(t.native()))}}}),s.extend(s.Element,{point:function(t,e){return new s.Point(t,e).transform(this.screenCTM().inverse())}}),s.extend(s.Element,{attr:function(e,i,a){if(null==e){for(e={},a=(i=this.node.attributes).length-1;a>=0;a--)e[i[a].nodeName]=s.regex.isNumber.test(i[a].nodeValue)?parseFloat(i[a].nodeValue):i[a].nodeValue;return e}if("object"===t(e))for(i in e)this.attr(i,e[i]);else if(null===i)this.node.removeAttribute(e);else{if(null==i)return null==(i=this.node.getAttribute(e))?s.defaults.attrs[e]:s.regex.isNumber.test(i)?parseFloat(i):i;"stroke-width"==e?this.attr("stroke",parseFloat(i)>0?this._stroke:null):"stroke"==e&&(this._stroke=i),"fill"!=e&&"stroke"!=e||(s.regex.isImage.test(i)&&(i=this.doc().defs().image(i,0,0)),i instanceof s.Image&&(i=this.doc().defs().pattern(0,0,function(){this.add(i)}))),"number"==typeof i?i=new s.Number(i):s.Color.isColor(i)?i=new s.Color(i):Array.isArray(i)&&(i=new s.Array(i)),"leading"==e?this.leading&&this.leading(i):"string"==typeof a?this.node.setAttributeNS(a,e,i.toString()):this.node.setAttribute(e,i.toString()),!this.rebuild||"font-size"!=e&&"x"!=e||this.rebuild(e,i)}return this}}),s.extend(s.Element,{transform:function(e,i){var a,n;if("object"!==t(e))return a=new s.Matrix(this).extract(),"string"==typeof e?a[e]:a;if(a=new s.Matrix(this),i=!!i||!!e.relative,null!=e.a)a=i?a.multiply(new s.Matrix(e)):new s.Matrix(e);else if(null!=e.rotation)x(e,this),a=i?a.rotate(e.rotation,e.cx,e.cy):a.rotate(e.rotation-a.extract().rotation,e.cx,e.cy);else if(null!=e.scale||null!=e.scaleX||null!=e.scaleY){if(x(e,this),e.scaleX=null!=e.scale?e.scale:null!=e.scaleX?e.scaleX:1,e.scaleY=null!=e.scale?e.scale:null!=e.scaleY?e.scaleY:1,!i){var r=a.extract();e.scaleX=1*e.scaleX/r.scaleX,e.scaleY=1*e.scaleY/r.scaleY}a=a.scale(e.scaleX,e.scaleY,e.cx,e.cy)}else if(null!=e.skew||null!=e.skewX||null!=e.skewY){if(x(e,this),e.skewX=null!=e.skew?e.skew:null!=e.skewX?e.skewX:0,e.skewY=null!=e.skew?e.skew:null!=e.skewY?e.skewY:0,!i){r=a.extract();a=a.multiply((new s.Matrix).skew(r.skewX,r.skewY,e.cx,e.cy).inverse())}a=a.skew(e.skewX,e.skewY,e.cx,e.cy)}else e.flip?("x"==e.flip||"y"==e.flip?e.offset=null==e.offset?this.bbox()["c"+e.flip]:e.offset:null==e.offset?(n=this.bbox(),e.flip=n.cx,e.offset=n.cy):e.flip=e.offset,a=(new s.Matrix).flip(e.flip,e.offset)):null==e.x&&null==e.y||(i?a=a.translate(e.x,e.y):(null!=e.x&&(a.e=e.x),null!=e.y&&(a.f=e.y)));return this.attr("transform",a)}}),s.extend(s.FX,{transform:function(e,i){var a,n,r=this.target();return"object"!==t(e)?(a=new s.Matrix(r).extract(),"string"==typeof e?a[e]:a):(i=!!i||!!e.relative,null!=e.a?a=new s.Matrix(e):null!=e.rotation?(x(e,r),a=new s.Rotate(e.rotation,e.cx,e.cy)):null!=e.scale||null!=e.scaleX||null!=e.scaleY?(x(e,r),e.scaleX=null!=e.scale?e.scale:null!=e.scaleX?e.scaleX:1,e.scaleY=null!=e.scale?e.scale:null!=e.scaleY?e.scaleY:1,a=new s.Scale(e.scaleX,e.scaleY,e.cx,e.cy)):null!=e.skewX||null!=e.skewY?(x(e,r),e.skewX=null!=e.skewX?e.skewX:0,e.skewY=null!=e.skewY?e.skewY:0,a=new s.Skew(e.skewX,e.skewY,e.cx,e.cy)):e.flip?("x"==e.flip||"y"==e.flip?e.offset=null==e.offset?r.bbox()["c"+e.flip]:e.offset:null==e.offset?(n=r.bbox(),e.flip=n.cx,e.offset=n.cy):e.flip=e.offset,a=(new s.Matrix).flip(e.flip,e.offset)):null==e.x&&null==e.y||(a=new s.Translate(e.x,e.y)),a?(a.relative=i,this.last().transforms.push(a),this._callStart()):this)}}),s.extend(s.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(s.regex.transforms).slice(0,-1).map(function(t){var e=t.trim().split("(");return[e[0],e[1].split(s.regex.delimiter).map(function(t){return parseFloat(t)})]}).reduce(function(t,e){return"matrix"==e[0]?t.multiply(p(e[1])):t[e[0]].apply(t,e[1])},new s.Matrix)},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.screenCTM().inverse();return this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),s.Transformation=s.invent({create:function(e,i){if(arguments.length>1&&"boolean"!=typeof i)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(e))for(var s=0,a=this.arguments.length;s<a;++s)this[this.arguments[s]]=e[s];else if("object"===t(e))for(s=0,a=this.arguments.length;s<a;++s)this[this.arguments[s]]=e[this.arguments[s]];this.inversed=!1,!0===i&&(this.inversed=!0)},extend:{arguments:[],method:"",at:function(t){for(var e=[],i=0,a=this.arguments.length;i<a;++i)e.push(this[this.arguments[i]]);var n=this._undo||new s.Matrix;return n=(new s.Matrix).morph(s.Matrix.prototype[this.method].apply(n,e)).at(t),this.inversed?n.inverse():n},undo:function(t){for(var e=0,i=this.arguments.length;e<i;++e)t[this.arguments[e]]=void 0===this[this.arguments[e]]?0:t[this.arguments[e]];return t.cx=this.cx,t.cy=this.cy,this._undo=new(s[d(this.method)])(t,!0).at(1),this}}}),s.Translate=s.invent({parent:s.Matrix,inherit:s.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),s.Rotate=s.invent({parent:s.Matrix,inherit:s.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["rotation","cx","cy"],method:"rotate",at:function(t){var e=(new s.Matrix).rotate((new s.Number).morph(this.rotation-(this._undo?this._undo.rotation:0)).at(t),this.cx,this.cy);return this.inversed?e.inverse():e},undo:function(t){return this._undo=t,this}}}),s.Scale=s.invent({parent:s.Matrix,inherit:s.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["scaleX","scaleY","cx","cy"],method:"scale"}}),s.Skew=s.invent({parent:s.Matrix,inherit:s.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["skewX","skewY","cx","cy"],method:"skew"}}),s.extend(s.Element,{style:function(e,i){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"===t(e))for(i in e)this.style(i,e[i]);else{if(!s.regex.isCss.test(e))return this.node.style[c(e)];for(e=e.split(/\s*;\s*/).filter(function(t){return!!t}).map(function(t){return t.split(/\s*:\s*/)});i=e.pop();)this.style(i[0],i[1])}else this.node.style[c(e)]=null===i||s.regex.isBlank.test(i)?"":i;return this}}),s.Parent=s.invent({create:function(t){this.constructor.call(this,t)},inherit:s.Element,extend:{children:function(){return s.utils.map(s.utils.filterSVGElements(this.node.childNodes),function(t){return s.adopt(t)})},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return s.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){var i,a,n=this.children();for(i=0,a=n.length;i<a;i++)n[i]instanceof s.Element&&t.apply(n[i],[i,n]),e&&n[i]instanceof s.Container&&n[i].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),s.extend(s.Parent,{ungroup:function(t,e){return 0===e||this instanceof s.Defs||this.node==s.parser.draw?this:(t=t||(this instanceof s.Doc?this:this.parent(s.Parent)),e=e||1/0,this.each(function(){return this instanceof s.Defs?this:this instanceof s.Parent?this.ungroup(t,e-1):this.toParent(t)}),this.node.firstChild||this.remove(),this)},flatten:function(t,e){return this.ungroup(t,e)}}),s.Container=s.invent({create:function(t){this.constructor.call(this,t)},inherit:s.Parent}),s.ViewBox=s.invent({create:function(e){var i,a,n,r,o,l,h,c=1,d=1,u=/[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;if(e instanceof s.Element){for(l=e,h=e,o=(e.attr("viewBox")||"").match(u),e.bbox,n=new s.Number(e.width()),r=new s.Number(e.height());"%"==n.unit;)c*=n.value,n=new s.Number(l instanceof s.Doc?l.parent().offsetWidth:l.parent().width()),l=l.parent();for(;"%"==r.unit;)d*=r.value,r=new s.Number(h instanceof s.Doc?h.parent().offsetHeight:h.parent().height()),h=h.parent();this.x=0,this.y=0,this.width=n*c,this.height=r*d,this.zoom=1,o&&(i=parseFloat(o[0]),a=parseFloat(o[1]),n=parseFloat(o[2]),r=parseFloat(o[3]),this.zoom=this.width/this.height>n/r?this.height/r:this.width/n,this.x=i,this.y=a,this.width=n,this.height=r)}else e="string"==typeof e?e.match(u).map(function(t){return parseFloat(t)}):Array.isArray(e)?e:"object"===t(e)?[e.x,e.y,e.width,e.height]:4==arguments.length?[].slice.call(arguments):[0,0,0,0],this.x=e[0],this.y=e[1],this.width=e[2],this.height=e[3]},extend:{toString:function(){return this.x+" "+this.y+" "+this.width+" "+this.height},morph:function(t,e,i,a){return this.destination=new s.ViewBox(t,e,i,a),this},at:function(t){return this.destination?new s.ViewBox([this.x+(this.destination.x-this.x)*t,this.y+(this.destination.y-this.y)*t,this.width+(this.destination.width-this.width)*t,this.height+(this.destination.height-this.height)*t]):this}},parent:s.Container,construct:{viewbox:function(t,e,i,a){return 0==arguments.length?new s.ViewBox(this):this.attr("viewBox",new s.ViewBox(t,e,i,a))}}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(t){s.Element.prototype[t]=function(e){return s.on(this.node,t,e),this}}),s.listeners=[],s.handlerMap=[],s.listenerId=0,s.on=function(t,e,i,a,n){var r=i.bind(a||t.instance||t),o=(s.handlerMap.indexOf(t)+1||s.handlerMap.push(t))-1,l=e.split(".")[0],h=e.split(".")[1]||"*";s.listeners[o]=s.listeners[o]||{},s.listeners[o][l]=s.listeners[o][l]||{},s.listeners[o][l][h]=s.listeners[o][l][h]||{},i._svgjsListenerId||(i._svgjsListenerId=++s.listenerId),s.listeners[o][l][h][i._svgjsListenerId]=r,t.addEventListener(l,r,n||!1)},s.off=function(t,e,i){var a=s.handlerMap.indexOf(t),n=e&&e.split(".")[0],r=e&&e.split(".")[1],o="";if(-1!=a)if(i){if("function"==typeof i&&(i=i._svgjsListenerId),!i)return;s.listeners[a][n]&&s.listeners[a][n][r||"*"]&&(t.removeEventListener(n,s.listeners[a][n][r||"*"][i],!1),delete s.listeners[a][n][r||"*"][i])}else if(r&&n){if(s.listeners[a][n]&&s.listeners[a][n][r]){for(i in s.listeners[a][n][r])s.off(t,[n,r].join("."),i);delete s.listeners[a][n][r]}}else if(r)for(e in s.listeners[a])for(o in s.listeners[a][e])r===o&&s.off(t,[e,r].join("."));else if(n){if(s.listeners[a][n]){for(o in s.listeners[a][n])s.off(t,[n,o].join("."));delete s.listeners[a][n]}}else{for(e in s.listeners[a])s.off(t,e);delete s.listeners[a],delete s.handlerMap[a]}},s.extend(s.Element,{on:function(t,e,i,a){return s.on(this.node,t,e,i,a),this},off:function(t,e){return s.off(this.node,t,e),this},fire:function(t,i){return t instanceof e.Event?this.node.dispatchEvent(t):this.node.dispatchEvent(t=new s.CustomEvent(t,{detail:i,cancelable:!0})),this._event=t,this},event:function(){return this._event}}),s.Defs=s.invent({create:"defs",inherit:s.Container}),s.G=s.invent({create:"g",inherit:s.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)},y:function(t){return null==t?this.transform("y"):this.transform({y:t-this.y()},!0)},cx:function(t){return null==t?this.gbox().cx:this.x(t-this.gbox().width/2)},cy:function(t){return null==t?this.gbox().cy:this.y(t-this.gbox().height/2)},gbox:function(){var t=this.bbox(),e=this.transform();return t.x+=e.x,t.x2+=e.x,t.cx+=e.x,t.y+=e.y,t.y2+=e.y,t.cy+=e.y,t}},construct:{group:function(){return this.put(new s.G)}}}),s.Doc=s.invent({create:function(t){t&&("svg"==(t="string"==typeof t?i.getElementById(t):t).nodeName?this.constructor.call(this,t):(this.constructor.call(this,s.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:s.Container,extend:{namespace:function(){return this.attr({xmlns:s.ns,version:"1.1"}).attr("xmlns:xlink",s.xlink,s.xmlns).attr("xmlns:svgjs",s.svgjs,s.xmlns)},defs:function(){var t;this._defs||((t=this.node.getElementsByTagName("defs")[0])?this._defs=s.adopt(t):this._defs=new s.Defs,this.node.appendChild(this._defs.node));return this._defs},parent:function(){return this.node.parentNode&&"#document"!=this.node.parentNode.nodeName?this.node.parentNode:null},spof:function(){var t=this.node.getScreenCTM();return t&&this.style("left",-t.e%1+"px").style("top",-t.f%1+"px"),this},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,s.parser.draw&&!s.parser.draw.parentNode&&this.node.appendChild(s.parser.draw),this},clone:function(t){this.writeDataToDom();var e=this.node,i=m(e.cloneNode(!0));return t?(t.node||t).appendChild(i.node):e.parentNode.insertBefore(i.node,e.nextSibling),i}}}),s.extend(s.Element,{siblings:function(){return this.parent().children()},position:function(){return this.parent().index(this)},next:function(){return this.siblings()[this.position()+1]},previous:function(){return this.siblings()[this.position()-1]},forward:function(){var t=this.position()+1,e=this.parent();return e.removeElement(this).add(this,t),e instanceof s.Doc&&e.node.appendChild(e.defs().node),this},backward:function(){var t=this.position();return t>0&&this.parent().removeElement(this).add(this,t-1),this},front:function(){var t=this.parent();return t.node.appendChild(this.node),t instanceof s.Doc&&t.node.appendChild(t.defs().node),this},back:function(){return this.position()>0&&this.parent().removeElement(this).add(this,0),this},before:function(t){t.remove();var e=this.position();return this.parent().add(t,e),this},after:function(t){t.remove();var e=this.position();return this.parent().add(t,e+1),this}}),s.Mask=s.invent({create:function(){this.constructor.call(this,s.create("mask")),this.targets=[]},inherit:s.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unmask();return this.targets=[],s.Element.prototype.remove.call(this),this}},construct:{mask:function(){return this.defs().put(new s.Mask)}}}),s.extend(s.Element,{maskWith:function(t){return this.masker=t instanceof s.Mask?t:this.parent().mask().add(t),this.masker.targets.push(this),this.attr("mask",'url("#'+this.masker.attr("id")+'")')},unmask:function(){return delete this.masker,this.attr("mask",null)}}),s.ClipPath=s.invent({create:function(){this.constructor.call(this,s.create("clipPath")),this.targets=[]},inherit:s.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unclip();return this.targets=[],this.parent().removeElement(this),this}},construct:{clip:function(){return this.defs().put(new s.ClipPath)}}}),s.extend(s.Element,{clipWith:function(t){return this.clipper=t instanceof s.ClipPath?t:this.parent().clip().add(t),this.clipper.targets.push(this),this.attr("clip-path",'url("#'+this.clipper.attr("id")+'")')},unclip:function(){return delete this.clipper,this.attr("clip-path",null)}}),s.Gradient=s.invent({create:function(t){this.constructor.call(this,s.create(t+"Gradient")),this.type=t},inherit:s.Container,extend:{at:function(t,e,i){return this.put(new s.Stop).update(t,e,i)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="gradientTransform"),s.Container.prototype.attr.call(this,t,e,i)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),s.extend(s.Gradient,s.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new s.Number(t),fy:new s.Number(e)}):this.attr({x1:new s.Number(t),y1:new s.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new s.Number(t),cy:new s.Number(e)}):this.attr({x2:new s.Number(t),y2:new s.Number(e)})}}),s.extend(s.Defs,{gradient:function(t,e){return this.put(new s.Gradient(t)).update(e)}}),s.Stop=s.invent({create:"stop",inherit:s.Element,extend:{update:function(t){return("number"==typeof t||t instanceof s.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new s.Number(t.offset)),this}}}),s.Pattern=s.invent({create:"pattern",inherit:s.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="patternTransform"),s.Container.prototype.attr.call(this,t,e,i)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),s.extend(s.Defs,{pattern:function(t,e,i){return this.put(new s.Pattern).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),s.Shape=s.invent({create:function(t){this.constructor.call(this,t)},inherit:s.Element}),s.Bare=s.invent({create:function(t,e){if(this.constructor.call(this,s.create(t)),e)for(var i in e.prototype)"function"==typeof e.prototype[i]&&(this[i]=e.prototype[i])},inherit:s.Element,extend:{words:function(t){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this.node.appendChild(i.createTextNode(t)),this}}}),s.extend(s.Parent,{element:function(t,e){return this.put(new s.Bare(t,e))}}),s.Symbol=s.invent({create:"symbol",inherit:s.Container,construct:{symbol:function(){return this.put(new s.Symbol)}}}),s.Use=s.invent({create:"use",inherit:s.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,s.xlink)}},construct:{use:function(t,e){return this.put(new s.Use).element(t,e)}}}),s.Rect=s.invent({create:"rect",inherit:s.Shape,construct:{rect:function(t,e){return this.put(new s.Rect).size(t,e)}}}),s.Circle=s.invent({create:"circle",inherit:s.Shape,construct:{circle:function(t){return this.put(new s.Circle).rx(new s.Number(t).divide(2)).move(0,0)}}}),s.extend(s.Circle,s.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),s.Ellipse=s.invent({create:"ellipse",inherit:s.Shape,construct:{ellipse:function(t,e){return this.put(new s.Ellipse).size(t,e).move(0,0)}}}),s.extend(s.Ellipse,s.Rect,s.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),s.extend(s.Circle,s.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new s.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new s.Number(t).divide(2))},size:function(t,e){var i=g(this,t,e);return this.rx(new s.Number(i.width).divide(2)).ry(new s.Number(i.height).divide(2))}}),s.Line=s.invent({create:"line",inherit:s.Shape,extend:{array:function(){return new s.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,i,a){return null==t?this.array():(t=void 0!==e?{x1:t,y1:e,x2:i,y2:a}:new s.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=g(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,i,a){return s.Line.prototype.plot.apply(this.put(new s.Line),null!=t?[t,e,i,a]:[0,0,0,0])}}}),s.Polyline=s.invent({create:"polyline",inherit:s.Shape,construct:{polyline:function(t){return this.put(new s.Polyline).plot(t||new s.PointArray)}}}),s.Polygon=s.invent({create:"polygon",inherit:s.Shape,construct:{polygon:function(t){return this.put(new s.Polygon).plot(t||new s.PointArray)}}}),s.extend(s.Polyline,s.Polygon,{array:function(){return this._array||(this._array=new s.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.clear().attr("points","string"==typeof t?t:this._array=new s.PointArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=g(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),s.extend(s.Line,s.Polyline,s.Polygon,{morphArray:s.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),s.Path=s.invent({create:"path",inherit:s.Shape,extend:{morphArray:s.PathArray,array:function(){return this._array||(this._array=new s.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.clear().attr("d","string"==typeof t?t:this._array=new s.PathArray(t))},clear:function(){return delete this._array,this},move:function(t,e){return this.attr("d",this.array().move(t,e))},x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},size:function(t,e){var i=g(this,t,e);return this.attr("d",this.array().size(i.width,i.height))},width:function(t){return null==t?this.bbox().width:this.size(t,this.bbox().height)},height:function(t){return null==t?this.bbox().height:this.size(this.bbox().width,t)}},construct:{path:function(t){return this.put(new s.Path).plot(t||new s.PathArray)}}}),s.Image=s.invent({create:"image",inherit:s.Shape,extend:{load:function(t){if(!t)return this;var i=this,a=new e.Image;return s.on(a,"load",function(){s.off(a);var e=i.parent(s.Pattern);null!==e&&(0==i.width()&&0==i.height()&&i.size(a.width,a.height),e&&0==e.width()&&0==e.height()&&e.size(i.width(),i.height()),"function"==typeof i._loaded&&i._loaded.call(i,{width:a.width,height:a.height,ratio:a.width/a.height,url:t}))}),s.on(a,"error",function(t){s.off(a),"function"==typeof i._error&&i._error.call(i,t)}),this.attr("href",a.src=this.src=t,s.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,i){return this.put(new s.Image).load(t).size(e||0,i||e||0)}}}),s.Text=s.invent({create:function(){this.constructor.call(this,s.create("text")),this.dom.leading=new s.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",s.defaults.attrs["font-family"])},inherit:s.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},y:function(t){var e=this.attr("y"),i="number"==typeof e?e-this.bbox().y:0;return null==t?"number"==typeof e?e-i:e:this.attr("y","number"==typeof t.valueOf()?t+i:t)},cx:function(t){return null==t?this.bbox().cx:this.x(t-this.bbox().width/2)},cy:function(t){return null==t?this.bbox().cy:this.y(t-this.bbox().height/2)},text:function(t){if(void 0===t){t="";for(var e=this.node.childNodes,i=0,a=e.length;i<a;++i)0!=i&&3!=e[i].nodeType&&1==s.adopt(e[i]).dom.newLined&&(t+="\n"),t+=e[i].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{i=0;for(var n=(t=t.split("\n")).length;i<n;i++)this.tspan(t[i]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new s.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=s.utils.map(s.utils.filterSVGElements(t.childNodes),function(t){return s.adopt(t)});return new s.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,i=0,a=this.dom.leading*new s.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?i+=a:(this.attr("dy",a+i),i=0))}),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new s.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new s.Text).text(t)},plain:function(t){return this.put(new s.Text).plain(t)}}}),s.Tspan=s.invent({create:"tspan",inherit:s.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(s.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),s.extend(s.Text,s.Tspan,{plain:function(t){return!1===this._build&&this.clear(),this.node.appendChild(i.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,i=new s.Tspan;return!1===this._build&&this.clear(),e.appendChild(i.node),i.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),s.TextPath=s.invent({create:"textPath",inherit:s.Parent,parent:s.Text,construct:{morphArray:s.PathArray,path:function(t){for(var e=new s.TextPath,i=this.doc().defs().path(t);this.node.hasChildNodes();)e.node.appendChild(this.node.firstChild);return this.node.appendChild(e.node),e.attr("href","#"+i,s.xlink),this},array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),i=null;return e&&(i=e.plot(t)),null==t?i:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return s.adopt(this.node.firstChild)}}}),s.Nested=s.invent({create:function(){this.constructor.call(this,s.create("svg")),this.style("overflow","visible")},inherit:s.Container,construct:{nested:function(){return this.put(new s.Nested)}}}),s.A=s.invent({create:"a",inherit:s.Container,extend:{to:function(t){return this.attr("href",t,s.xlink)},show:function(t){return this.attr("show",t,s.xlink)},target:function(t){return this.attr("target",t)}},construct:{link:function(t){return this.put(new s.A).to(t)}}}),s.extend(s.Element,{linkTo:function(t){var e=new s.A;return"function"==typeof t?t.call(e,e):e.to(t),this.parent().put(e).put(this)}}),s.Marker=s.invent({create:"marker",inherit:s.Container,extend:{width:function(t){return this.attr("markerWidth",t)},height:function(t){return this.attr("markerHeight",t)},ref:function(t,e){return this.attr("refX",t).attr("refY",e)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return"url(#"+this.id()+")"}},construct:{marker:function(t,e,i){return this.defs().marker(t,e,i)}}}),s.extend(s.Defs,{marker:function(t,e,i){return this.put(new s.Marker).size(t,e).ref(t/2,e/2).viewbox(0,0,t,e).attr("orient","auto").update(i)}}),s.extend(s.Line,s.Polyline,s.Polygon,s.Path,{marker:function(t,e,i,a){var n=["marker"];return"all"!=t&&n.push(t),n=n.join("-"),t=arguments[1]instanceof s.Marker?arguments[1]:this.doc().marker(e,i,a),this.attr(n,t)}});var l={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};function h(t,e,i,a){return i+a.replace(s.regex.dots," .")}function c(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}function u(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function g(t,e,i){if(null==e||null==i){var s=t.bbox();null==e?e=s.width/s.height*i:null==i&&(i=s.height/s.width*e)}return{width:e,height:i}}function f(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function p(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function x(t,e){t.cx=null==t.cx?e.bbox().cx:t.cx,t.cy=null==t.cy?e.bbox().cy:t.cy}function m(t){for(var i=t.childNodes.length-1;i>=0;i--)t.childNodes[i]instanceof e.SVGElement&&m(t.childNodes[i]);return s.adopt(t).id(s.eid(t.nodeName))}function v(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function b(t){return Math.abs(t)>1e-37?t:0}["fill","stroke"].forEach(function(t){var e,i={};i[t]=function(i){if(void 0===i)return this;if("string"==typeof i||s.Color.isRgb(i)||i&&"function"==typeof i.fill)this.attr(t,i);else for(e=l[t].length-1;e>=0;e--)null!=i[l[t][e]]&&this.attr(l.prefix(t,l[t][e]),i[l[t][e]]);return this},s.extend(s.Element,s.FX,i)}),s.extend(s.Element,s.FX,{rotate:function(t,e,i){return this.transform({rotation:t,cx:e,cy:i})},skew:function(t,e,i,s){return 1==arguments.length||3==arguments.length?this.transform({skew:t,cx:e,cy:i}):this.transform({skewX:t,skewY:e,cx:i,cy:s})},scale:function(t,e,i,s){return 1==arguments.length||3==arguments.length?this.transform({scale:t,cx:e,cy:i}):this.transform({scaleX:t,scaleY:e,cx:i,cy:s})},translate:function(t,e){return this.transform({x:t,y:e})},flip:function(t,e){return e="number"==typeof t?t:e,this.transform({flip:t||"both",offset:e})},matrix:function(t){return this.attr("transform",new s.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new s.Number(t).plus(this instanceof s.FX?0:this.x()),!0)},dy:function(t){return this.y(new s.Number(t).plus(this instanceof s.FX?0:this.y()),!0)},dmove:function(t,e){return this.dx(t).dy(e)}}),s.extend(s.Rect,s.Ellipse,s.Circle,s.Gradient,s.FX,{radius:function(t,e){var i=(this._target||this).type;return"radial"==i||"circle"==i?this.attr("r",new s.Number(t)):this.rx(t).ry(null==e?t:e)}}),s.extend(s.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),s.extend(s.Parent,s.Text,s.Tspan,s.FX,{font:function(e,i){if("object"===t(e))for(i in e)this.font(i,e[i]);return"leading"==e?this.leading(i):"anchor"==e?this.attr("text-anchor",i):"size"==e||"family"==e||"weight"==e||"stretch"==e||"variant"==e||"style"==e?this.attr("font-"+e,i):this.attr(e,i)}}),s.Set=s.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){var t,e,i=[].slice.call(arguments);for(t=0,e=i.length;t<e;t++)this.members.push(i[t]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;e<i;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members},bbox:function(){if(0==this.members.length)return new s.RBox;var t=this.members[0].rbox(this.members[0].doc());return this.each(function(){t=t.merge(this.rbox(this.doc()))}),t}},construct:{set:function(t){return new s.Set(t)}}}),s.FX.Set=s.invent({create:function(t){this.set=t}}),s.Set.inherit=function(){var t=[];for(var e in s.Shape.prototype)"function"==typeof s.Shape.prototype[e]&&"function"!=typeof s.Set.prototype[e]&&t.push(e);for(var e in t.forEach(function(t){s.Set.prototype[t]=function(){for(var e=0,i=this.members.length;e<i;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new s.FX.Set(this)):this}}),t=[],s.FX.prototype)"function"==typeof s.FX.prototype[e]&&"function"!=typeof s.FX.Set.prototype[e]&&t.push(e);t.forEach(function(t){s.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;e<i;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}})},s.extend(s.Element,{data:function(e,i,s){if("object"===t(e))for(i in e)this.data(i,e[i]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+e))}catch(t){return this.attr("data-"+e)}else this.attr("data-"+e,null===i?null:!0===s||"string"==typeof i||"number"==typeof i?i:JSON.stringify(i));return this}}),s.extend(s.Element,{remember:function(e,i){if("object"===t(arguments[0]))for(var i in e)this.remember(i,e[i]);else{if(1==arguments.length)return this.memory()[e];this.memory()[e]=i}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),s.get=function(t){var e=i.getElementById(function(t){var e=(t||"").toString().match(s.regex.reference);if(e)return e[1]}(t)||t);return s.adopt(e)},s.select=function(t,e){return new s.Set(s.utils.map((e||i).querySelectorAll(t),function(t){return s.adopt(t)}))},s.extend(s.Parent,{select:function(t){return s.select(t,this.node)}});var y="abcdef".split("");if("function"!=typeof e.CustomEvent){var w=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var s=i.createEvent("CustomEvent");return s.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),s};w.prototype=e.Event.prototype,s.CustomEvent=w}else s.CustomEvent=e.CustomEvent;return function(t){for(var i=0,s=["moz","webkit"],a=0;a<s.length&&!e.requestAnimationFrame;++a)t.requestAnimationFrame=t[s[a]+"RequestAnimationFrame"],t.cancelAnimationFrame=t[s[a]+"CancelAnimationFrame"]||t[s[a]+"CancelRequestAnimationFrame"];t.requestAnimationFrame=t.requestAnimationFrame||function(e){var s=(new Date).getTime(),a=Math.max(0,16-(s-i)),n=t.setTimeout(function(){e(s+a)},a);return i=s+a,n},t.cancelAnimationFrame=t.cancelAnimationFrame||t.clearTimeout}(e),s},"function"==typeof define&&define.amd?define(function(){return it(et,et.document)}):"object"===("undefined"==typeof exports?"undefined":t(exports))?module.exports=et.document?it(et,et.document):function(t){return it(t,t.document)}:et.SVG=it(et,et.document),function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(t,e){return this.add(t,e),!t.attr("in")&&this.autoSetIn&&t.attr("in",this.source),t.attr("result")||t.attr("result",t),t},blend:function(t,e,i){return this.put(new SVG.BlendEffect(t,e,i))},colorMatrix:function(t,e){return this.put(new SVG.ColorMatrixEffect(t,e))},convolveMatrix:function(t){return this.put(new SVG.ConvolveMatrixEffect(t))},componentTransfer:function(t){return this.put(new SVG.ComponentTransferEffect(t))},composite:function(t,e,i){return this.put(new SVG.CompositeEffect(t,e,i))},flood:function(t,e){return this.put(new SVG.FloodEffect(t,e))},offset:function(t,e){return this.put(new SVG.OffsetEffect(t,e))},image:function(t){return this.put(new SVG.ImageEffect(t))},merge:function(){var t=[void 0];for(var e in arguments)t.push(arguments[e]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,t)))},gaussianBlur:function(t,e){return this.put(new SVG.GaussianBlurEffect(t,e))},morphology:function(t,e){return this.put(new SVG.MorphologyEffect(t,e))},diffuseLighting:function(t,e,i){return this.put(new SVG.DiffuseLightingEffect(t,e,i))},displacementMap:function(t,e,i,s,a){return this.put(new SVG.DisplacementMapEffect(t,e,i,s,a))},specularLighting:function(t,e,i,s){return this.put(new SVG.SpecularLightingEffect(t,e,i,s))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(t,e,i,s,a){return this.put(new SVG.TurbulenceEffect(t,e,i,s,a))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(t){var e=this.put(new SVG.Filter);return"function"==typeof t&&t.call(e,e),e}}),SVG.extend(SVG.Container,{filter:function(t){return this.defs().filter(t)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(t){return this.filterer=t instanceof SVG.Element?t:this.doc().filter(t),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(t){return this.filterer&&!0===t&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",t)},result:function(t){return null==t?this.attr("result"):this.attr("result",t)},toString:function(){return this.result()}}});var t={blend:function(t,e){return this.parent()&&this.parent().blend(this,t,e)},colorMatrix:function(t,e){return this.parent()&&this.parent().colorMatrix(t,e).in(this)},convolveMatrix:function(t){return this.parent()&&this.parent().convolveMatrix(t).in(this)},componentTransfer:function(t){return this.parent()&&this.parent().componentTransfer(t).in(this)},composite:function(t,e){return this.parent()&&this.parent().composite(this,t,e)},flood:function(t,e){return this.parent()&&this.parent().flood(t,e)},offset:function(t,e){return this.parent()&&this.parent().offset(t,e).in(this)},image:function(t){return this.parent()&&this.parent().image(t)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(t,e){return this.parent()&&this.parent().gaussianBlur(t,e).in(this)},morphology:function(t,e){return this.parent()&&this.parent().morphology(t,e).in(this)},diffuseLighting:function(t,e,i){return this.parent()&&this.parent().diffuseLighting(t,e,i).in(this)},displacementMap:function(t,e,i,s){return this.parent()&&this.parent().displacementMap(this,t,e,i,s)},specularLighting:function(t,e,i,s){return this.parent()&&this.parent().specularLighting(t,e,i,s).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(t,e,i,s,a){return this.parent()&&this.parent().turbulence(t,e,i,s,a).in(this)}};SVG.extend(SVG.Effect,t),SVG.extend(SVG.ParentEffect,t),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(t){this.attr("in",t)}}});var e={blend:function(t,e,i){this.attr({in:t,in2:e,mode:i||"normal"})},colorMatrix:function(t,e){"matrix"==t&&(e=a(e)),this.attr({type:t,values:void 0===e?null:e})},convolveMatrix:function(t){t=a(t),this.attr({order:Math.sqrt(t.split(" ").length),kernelMatrix:t})},composite:function(t,e,i){this.attr({in:t,in2:e,operator:i})},flood:function(t,e){this.attr("flood-color",t),null!=e&&this.attr("flood-opacity",e)},offset:function(t,e){this.attr({dx:t,dy:e})},image:function(t){this.attr("href",t,SVG.xlink)},displacementMap:function(t,e,i,s,a){this.attr({in:t,in2:e,scale:i,xChannelSelector:s,yChannelSelector:a})},gaussianBlur:function(t,e){null!=t||null!=e?this.attr("stdDeviation",function(t){if(!Array.isArray(t))return t;for(var e=0,i=t.length,s=[];e<i;e++)s.push(t[e]);return s.join(" ")}(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(t,e){this.attr({operator:t,radius:e})},tile:function(){},turbulence:function(t,e,i,s,a){this.attr({numOctaves:e,seed:i,stitchTiles:s,baseFrequency:t,type:a})}},i={merge:function(){var t;if(arguments[0]instanceof SVG.Set){var e=this;arguments[0].each(function(t){this instanceof SVG.MergeNode?e.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&e.put(new SVG.MergeNode(this))})}else{t=Array.isArray(arguments[0])?arguments[0]:arguments;for(var i=0;i<t.length;i++)t[i]instanceof SVG.MergeNode?this.put(t[i]):this.put(new SVG.MergeNode(t[i]))}},componentTransfer:function(t){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(t){this[t]=new(SVG["Func"+t.toUpperCase()])("identity"),this.rgb.add(this[t]),this.node.appendChild(this[t].node)}.bind(this)),t)for(var e in t.rgb&&(["r","g","b"].forEach(function(e){this[e].attr(t.rgb)}.bind(this)),delete t.rgb),t)this[e].attr(t[e])},diffuseLighting:function(t,e,i){this.attr({surfaceScale:t,diffuseConstant:e,kernelUnitLength:i})},specularLighting:function(t,e,i,s){this.attr({surfaceScale:t,diffuseConstant:e,specularExponent:i,kernelUnitLength:s})}},s={distantLight:function(t,e){this.attr({azimuth:t,elevation:e})},pointLight:function(t,e,i){this.attr({x:t,y:e,z:i})},spotLight:function(t,e,i,s,a,n){this.attr({x:t,y:e,z:i,pointsAtX:s,pointsAtY:a,pointsAtZ:n})},mergeNode:function(t){this.attr("in",t)}};function a(t){return Array.isArray(t)&&(t=new SVG.Array(t)),t.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function n(){var t=function(){};for(var e in"function"==typeof arguments[arguments.length-1]&&(t=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var i in arguments[e])t(arguments[e][i],i,arguments[e])}["r","g","b","a"].forEach(function(t){s["Func"+t.toUpperCase()]=function(t){switch(this.attr("type",t),t){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}}),n(e,function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})}),n(i,function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})}),n(s,function(t,e){var i=e.charAt(0).toUpperCase()+e.slice(1);SVG[i]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+i)),t.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})}),SVG.extend(SVG.MergeEffect,{in:function(t){return t instanceof SVG.MergeNode?this.add(t,0):this.add(new SVG.MergeNode(t),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(t){return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",t)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function t(t,a,n,r,o,l,h){for(var c=t.slice(a,n||h),d=r.slice(o,l||h),u=0,g={pos:[0,0],start:[0,0]},f={pos:[0,0],start:[0,0]};;){if(c[u]=e.call(g,c[u]),d[u]=e.call(f,d[u]),c[u][0]!=d[u][0]||"M"==c[u][0]||"A"==c[u][0]&&(c[u][4]!=d[u][4]||c[u][5]!=d[u][5])?(Array.prototype.splice.apply(c,[u,1].concat(s.call(g,c[u]))),Array.prototype.splice.apply(d,[u,1].concat(s.call(f,d[u])))):(c[u]=i.call(g,c[u]),d[u]=i.call(f,d[u])),++u==c.length&&u==d.length)break;u==c.length&&c.push(["C",g.pos[0],g.pos[1],g.pos[0],g.pos[1],g.pos[0],g.pos[1]]),u==d.length&&d.push(["C",f.pos[0],f.pos[1],f.pos[0],f.pos[1],f.pos[0],f.pos[1]])}return{start:c,dest:d}}function e(t){switch(t[0]){case"z":case"Z":t[0]="L",t[1]=this.start[0],t[2]=this.start[1];break;case"H":t[0]="L",t[2]=this.pos[1];break;case"V":t[0]="L",t[2]=t[1],t[1]=this.pos[0];break;case"T":t[0]="Q",t[3]=t[1],t[4]=t[2],t[1]=this.reflection[1],t[2]=this.reflection[0];break;case"S":t[0]="C",t[6]=t[4],t[5]=t[3],t[4]=t[2],t[3]=t[1],t[2]=this.reflection[1],t[1]=this.reflection[0]}return t}function i(t){var e=t.length;return this.pos=[t[e-2],t[e-1]],-1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4],2*this.pos[1]-t[e-3]]),t}function s(t){var e=[t];switch(t[0]){case"M":return this.pos=this.start=[t[1],t[2]],e;case"L":t[5]=t[3]=t[1],t[6]=t[4]=t[2],t[1]=this.pos[0],t[2]=this.pos[1];break;case"Q":t[6]=t[4],t[5]=t[3],t[4]=1*t[4]/3+2*t[2]/3,t[3]=1*t[3]/3+2*t[1]/3,t[2]=1*this.pos[1]/3+2*t[2]/3,t[1]=1*this.pos[0]/3+2*t[1]/3;break;case"A":t=(e=function(t,e){var i,s,a,n,r,o,l,h,c,d,u,g,f,p,x,m,v,b,y,w,k,A,S,C,L,z,M=Math.abs(e[1]),P=Math.abs(e[2]),E=e[3]%360,T=e[4],X=e[5],I=e[6],Y=e[7],F=new SVG.Point(t),O=new SVG.Point(I,Y),R=[];if(0===M||0===P||F.x===O.x&&F.y===O.y)return[["C",F.x,F.y,O.x,O.y,O.x,O.y]];i=new SVG.Point((F.x-O.x)/2,(F.y-O.y)/2).transform((new SVG.Matrix).rotate(E)),(s=i.x*i.x/(M*M)+i.y*i.y/(P*P))>1&&(s=Math.sqrt(s),M*=s,P*=s);a=(new SVG.Matrix).rotate(E).scale(1/M,1/P).rotate(-E),F=F.transform(a),O=O.transform(a),n=[O.x-F.x,O.y-F.y],o=n[0]*n[0]+n[1]*n[1],r=Math.sqrt(o),n[0]/=r,n[1]/=r,l=o<4?Math.sqrt(1-o/4):0,T===X&&(l*=-1);h=new SVG.Point((O.x+F.x)/2+l*-n[1],(O.y+F.y)/2+l*n[0]),c=new SVG.Point(F.x-h.x,F.y-h.y),d=new SVG.Point(O.x-h.x,O.y-h.y),u=Math.acos(c.x/Math.sqrt(c.x*c.x+c.y*c.y)),c.y<0&&(u*=-1);g=Math.acos(d.x/Math.sqrt(d.x*d.x+d.y*d.y)),d.y<0&&(g*=-1);X&&u>g&&(g+=2*Math.PI);!X&&u<g&&(g-=2*Math.PI);for(p=Math.ceil(2*Math.abs(u-g)/Math.PI),m=[],v=u,f=(g-u)/p,x=4*Math.tan(f/4)/3,k=0;k<=p;k++)y=Math.cos(v),b=Math.sin(v),w=new SVG.Point(h.x+y,h.y+b),m[k]=[new SVG.Point(w.x+x*b,w.y-x*y),w,new SVG.Point(w.x-x*b,w.y+x*y)],v+=f;for(m[0][0]=m[0][1].clone(),m[m.length-1][2]=m[m.length-1][1].clone(),a=(new SVG.Matrix).rotate(E).scale(M,P).rotate(-E),k=0,A=m.length;k<A;k++)m[k][0]=m[k][0].transform(a),m[k][1]=m[k][1].transform(a),m[k][2]=m[k][2].transform(a);for(k=1,A=m.length;k<A;k++)w=m[k-1][2],S=w.x,C=w.y,w=m[k][0],L=w.x,z=w.y,w=m[k][1],I=w.x,Y=w.y,R.push(["C",S,C,L,z,I,Y]);return R}(this.pos,t))[0]}return t[0]="C",this.pos=[t[5],t[6]],this.reflection=[2*t[5]-t[3],2*t[6]-t[4]],e}function a(t,e){if(!1===e)return!1;for(var i=e,s=t.length;i<s;++i)if("M"==t[i][0])return i;return!1}SVG.extend(SVG.PathArray,{morph:function(e){for(var i=this.value,s=this.parse(e),n=0,r=0,o=!1,l=!1;!1!==n||!1!==r;){var h;o=a(i,!1!==n&&n+1),l=a(s,!1!==r&&r+1),!1===n&&(n=0==(h=new SVG.PathArray(c.start).bbox()).height||0==h.width?i.push(i[0])-1:i.push(["M",h.x+h.width/2,h.y+h.height/2])-1),!1===r&&(r=0==(h=new SVG.PathArray(c.dest).bbox()).height||0==h.width?s.push(s[0])-1:s.push(["M",h.x+h.width/2,h.y+h.height/2])-1);var c=t(i,n,o,s,r,l);i=i.slice(0,n).concat(c.start,!1===o?[]:i.slice(o)),s=s.slice(0,r).concat(c.dest,!1===l?[]:s.slice(l)),n=!1!==o&&n+c.start.length,r=!1!==l&&r+c.dest.length}return this.value=i,this.destination=new SVG.PathArray,this.destination.value=s,this}})}(),function(){function t(t){t.remember("_draggable",this),this.el=t}t.prototype.init=function(t,e){var i=this;this.constraint=t,this.value=e,this.el.on("mousedown.drag",function(t){i.start(t)}),this.el.on("touchstart.drag",function(t){i.start(t)})},t.prototype.transformPoint=function(t,e){var i=(t=t||window.event).changedTouches&&t.changedTouches[0]||t;return this.p.x=i.pageX-(e||0),this.p.y=i.pageY,this.p.matrixTransform(this.m)},t.prototype.getBBox=function(){var t=this.el.bbox();return this.el instanceof SVG.Nested&&(t=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(t.x=this.el.x(),t.y=this.el.y()),t},t.prototype.start=function(t){if("click"!=t.type&&"mousedown"!=t.type&&"mousemove"!=t.type||1==(t.which||t.buttons)){var e=this;this.el.fire("beforedrag",{event:t,handler:this}),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var i,s=this.getBBox();if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":i/=2;break;case"start":i=0}this.startPoints={point:this.transformPoint(t,i),box:s,transform:this.el.transform()},SVG.on(window,"mousemove.drag",function(t){e.drag(t)}),SVG.on(window,"touchmove.drag",function(t){e.drag(t)}),SVG.on(window,"mouseup.drag",function(t){e.end(t)}),SVG.on(window,"touchend.drag",function(t){e.end(t)}),this.el.fire("dragstart",{event:t,p:this.startPoints.point,m:this.m,handler:this}),t.preventDefault(),t.stopPropagation()}},t.prototype.drag=function(t){var e=this.getBBox(),i=this.transformPoint(t),s=this.startPoints.box.x+i.x-this.startPoints.point.x,a=this.startPoints.box.y+i.y-this.startPoints.point.y,n=this.constraint,r=i.x-this.startPoints.point.x,o=i.y-this.startPoints.point.y,l=new CustomEvent("dragmove",{detail:{event:t,p:i,m:this.m,handler:this},cancelable:!0});if(this.el.fire(l),l.defaultPrevented)return i;if("function"==typeof n){var h=n.call(this.el,s,a,this.m);"boolean"==typeof h&&(h={x:h,y:h}),!0===h.x?this.el.x(s):!1!==h.x&&this.el.x(h.x),!0===h.y?this.el.y(a):!1!==h.y&&this.el.y(h.y)}else"object"==typeof n&&(null!=n.minX&&s<n.minX?s=n.minX:null!=n.maxX&&s>n.maxX-e.width&&(s=n.maxX-e.width),null!=n.minY&&a<n.minY?a=n.minY:null!=n.maxY&&a>n.maxY-e.height&&(a=n.maxY-e.height),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:r,y:o},!0):this.el.move(s,a));return i},t.prototype.end=function(t){var e=this.drag(t);this.el.fire("dragend",{event:t,p:e,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(e,i){"function"!=typeof e&&"object"!=typeof e||(i=e,e=!0);var s=this.remember("_draggable")||new t(this);return(e=void 0===e||e)?s.init(i||{},e):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function t(t){this.el=t,t.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1}}t.prototype.init=function(t,e){var i=this.el.bbox();for(var s in this.options={},this.el.selectize.defaults)this.options[s]=this.el.selectize.defaults[s],void 0!==e[s]&&(this.options[s]=e[s]);this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(i.x,i.y)),this.options.deepSelect&&-1!==["line","polyline","polygon"].indexOf(this.el.type)?this.selectPoints(t):this.selectRect(t),this.observe(),this.cleanup()},t.prototype.selectPoints=function(t){return this.pointSelection.isSelected=t,this.pointSelection.set?this:(this.pointSelection.set=this.parent.set(),this.drawCircles(),this)},t.prototype.getPointArray=function(){var t=this.el.bbox();return this.el.array().valueOf().map(function(e){return[e[0]-t.x,e[1]-t.y]})},t.prototype.drawCircles=function(){for(var t=this,e=this.getPointArray(),i=0,s=e.length;i<s;++i){var a=function(e){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var s=i.pageX||i.touches[0].pageX,a=i.pageY||i.touches[0].pageY;t.el.fire("point",{x:s,y:a,i:e,event:i})}}(i);this.pointSelection.set.add(this.nested.circle(this.options.radius).center(e[i][0],e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",a).on("mousedown",a))}},t.prototype.updatePointSelection=function(){var t=this.getPointArray();this.pointSelection.set.each(function(e){this.cx()===t[e][0]&&this.cy()===t[e][1]||this.center(t[e][0],t[e][1])})},t.prototype.updateRectSelection=function(){var t=this.el.bbox();this.rectSelection.set.get(0).attr({width:t.width,height:t.height}),this.options.points&&(this.rectSelection.set.get(2).center(t.width,0),this.rectSelection.set.get(3).center(t.width,t.height),this.rectSelection.set.get(4).center(0,t.height),this.rectSelection.set.get(5).center(t.width/2,0),this.rectSelection.set.get(6).center(t.width,t.height/2),this.rectSelection.set.get(7).center(t.width/2,t.height),this.rectSelection.set.get(8).center(0,t.height/2)),this.options.rotationPoint&&(this.options.points?this.rectSelection.set.get(9).center(t.width/2,20):this.rectSelection.set.get(1).center(t.width/2,20))},t.prototype.selectRect=function(t){var e=this,i=this.el.bbox();function s(t){return function(i){(i=i||window.event).preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation();var s=i.pageX||i.touches[0].pageX,a=i.pageY||i.touches[0].pageY;e.el.fire(t,{x:s,y:a,event:i})}}if(this.rectSelection.isSelected=t,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width,i.height).addClass(this.options.classRect)),this.options.points&&!this.rectSelection.set.get(1)){var a="touchstart",n="mousedown";this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0,0).attr("class",this.options.classPoints+"_lt").on(n,s("lt")).on(a,s("lt"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width,0).attr("class",this.options.classPoints+"_rt").on(n,s("rt")).on(a,s("rt"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width,i.height).attr("class",this.options.classPoints+"_rb").on(n,s("rb")).on(a,s("rb"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0,i.height).attr("class",this.options.classPoints+"_lb").on(n,s("lb")).on(a,s("lb"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width/2,0).attr("class",this.options.classPoints+"_t").on(n,s("t")).on(a,s("t"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width,i.height/2).attr("class",this.options.classPoints+"_r").on(n,s("r")).on(a,s("r"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width/2,i.height).attr("class",this.options.classPoints+"_b").on(n,s("b")).on(a,s("b"))),this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0,i.height/2).attr("class",this.options.classPoints+"_l").on(n,s("l")).on(a,s("l"))),this.rectSelection.set.each(function(){this.addClass(e.options.classPoints)})}if(this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var r=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation();var i=t.pageX||t.touches[0].pageX,s=t.pageY||t.touches[0].pageY;e.el.fire("rot",{x:i,y:s,event:t})};this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",r).on("mousedown",r))}},t.prototype.handler=function(){var t=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(t.x,t.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},t.prototype.observe=function(){var t=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver(function(){t.handler()}),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch(t){}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",function(){t.handler()})},t.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each(function(){this.remove()}),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each(function(){this.remove()}),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(e,i){return"object"==typeof e&&(i=e,e=!0),(this.remember("_selectHandler")||new t(this)).init(void 0===e||e,i||{}),this}}),SVG.Element.prototype.selectize.defaults={points:!0,classRect:"svg_select_boundingRect",classPoints:"svg_select_points",radius:7,rotationPoint:!0,deepSelect:!1}}(),function(){(function(){function t(t){t.remember("_resizeHandler",this),this.el=t,this.parameters={},this.lastUpdateCall=null,this.p=t.doc().node.createSVGPoint()}t.prototype.transformPoint=function(t,e,i){return this.p.x=t-(this.offset.x-window.pageXOffset),this.p.y=e-(this.offset.y-window.pageYOffset),this.p.matrixTransform(i||this.m)},t.prototype._extractPosition=function(t){return{x:null!=t.clientX?t.clientX:t.touches[0].clientX,y:null!=t.clientY?t.clientY:t.touches[0].clientY}},t.prototype.init=function(t){var e=this;if(this.stop(),"stop"!==t){for(var i in this.options={},this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i],void 0!==t[i]&&(this.options[i]=t[i]);this.el.on("lt.resize",function(t){e.resize(t||window.event)}),this.el.on("rt.resize",function(t){e.resize(t||window.event)}),this.el.on("rb.resize",function(t){e.resize(t||window.event)}),this.el.on("lb.resize",function(t){e.resize(t||window.event)}),this.el.on("t.resize",function(t){e.resize(t||window.event)}),this.el.on("r.resize",function(t){e.resize(t||window.event)}),this.el.on("b.resize",function(t){e.resize(t||window.event)}),this.el.on("l.resize",function(t){e.resize(t||window.event)}),this.el.on("rot.resize",function(t){e.resize(t||window.event)}),this.el.on("point.resize",function(t){e.resize(t||window.event)}),this.update()}},t.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},t.prototype.resize=function(t){var e=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var i=this._extractPosition(t.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(i.x,i.y),x:t.detail.x,y:t.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},"text"===this.el.type&&(this.parameters.fontSize=this.el.attr()["font-size"]),void 0!==t.detail.i){var s=this.el.array().valueOf();this.parameters.i=t.detail.i,this.parameters.pointCoords=[s[t.detail.i][0],s[t.detail.i][1]]}switch(t.type){case"lt":this.calc=function(t,e){var i=this.snapToGrid(t,e);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y+i[1]).size(this.parameters.box.width-i[0],this.parameters.box.height-i[1])}};break;case"rt":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).size(this.parameters.box.width+i[0],this.parameters.box.height-i[1])}};break;case"rb":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+i[0],this.parameters.box.height+i[1])}};break;case"lb":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0&&this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-i[0]);i=this.checkAspectRatio(i),this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).size(this.parameters.box.width-i[0],this.parameters.box.height+i[1])}};break;case"t":this.calc=function(t,e){var i=this.snapToGrid(t,e,2);if(this.parameters.box.height-i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y+i[1]).height(this.parameters.box.height-i[1])}};break;case"r":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.width+i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+i[0])}};break;case"b":this.calc=function(t,e){var i=this.snapToGrid(t,e,0);if(this.parameters.box.height+i[1]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+i[1])}};break;case"l":this.calc=function(t,e){var i=this.snapToGrid(t,e,1);if(this.parameters.box.width-i[0]>0){if("text"===this.parameters.type)return;this.el.move(this.parameters.box.x+i[0],this.parameters.box.y).width(this.parameters.box.width-i[0])}};break;case"rot":this.calc=function(t,e){var i=t+this.parameters.p.x,s=e+this.parameters.p.y,a=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),n=180*(Math.atan2(s-this.parameters.box.y-this.parameters.box.height/2,i-this.parameters.box.x-this.parameters.box.width/2)-a)/Math.PI;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(this.parameters.rotation+n-n%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(t,e){var i=this.snapToGrid(t,e,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),s=this.el.array().valueOf();s[this.parameters.i][0]=this.parameters.pointCoords[0]+i[0],s[this.parameters.i][1]=this.parameters.pointCoords[1]+i[1],this.el.plot(s)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:t}),SVG.on(window,"touchmove.resize",function(t){e.update(t||window.event)}),SVG.on(window,"touchend.resize",function(){e.done()}),SVG.on(window,"mousemove.resize",function(t){e.update(t||window.event)}),SVG.on(window,"mouseup.resize",function(){e.done()})},t.prototype.update=function(t){if(t){var e=this._extractPosition(t),i=this.transformPoint(e.x,e.y),s=i.x-this.parameters.p.x,a=i.y-this.parameters.p.y;this.lastUpdateCall=[s,a],this.calc(s,a),this.el.fire("resizing",{dx:s,dy:a,event:t})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},t.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},t.prototype.snapToGrid=function(t,e,i,s){var a;return void 0!==s?a=[(i+t)%this.options.snapToGrid,(s+e)%this.options.snapToGrid]:(i=null==i?3:i,a=[(this.parameters.box.x+t+(1&i?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+e+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]),t-=Math.abs(a[0])<this.options.snapToGrid/2?a[0]:a[0]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),e-=Math.abs(a[1])<this.options.snapToGrid/2?a[1]:a[1]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(t,e,i,s)},t.prototype.constraintToBox=function(t,e,i,s){var a,n,r=this.options.constraint||{};return void 0!==s?(a=i,n=s):(a=this.parameters.box.x+(1&i?0:this.parameters.box.width),n=this.parameters.box.y+(2&i?0:this.parameters.box.height)),void 0!==r.minX&&a+t<r.minX&&(t=r.minX-a),void 0!==r.maxX&&a+t>r.maxX&&(t=r.maxX-a),void 0!==r.minY&&n+e<r.minY&&(e=r.minY-n),void 0!==r.maxY&&n+e>r.maxY&&(e=r.maxY-n),[t,e]},t.prototype.checkAspectRatio=function(t){if(!this.options.saveAspectRatio)return t;var e=t.slice(),i=this.parameters.box.width/this.parameters.box.height,s=this.parameters.box.width+t[0],a=this.parameters.box.height-t[1],n=s/a;return n<i?e[1]=s/i-this.parameters.box.height:n>i&&(e[0]=this.parameters.box.width-a*i),e},SVG.extend(SVG.Element,{resize:function(e){return(this.remember("_resizeHandler")||new t(this)).init(e||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}();return function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===i&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}('.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-gridline, .apexcharts-text {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n.apexcharts-tooltip.light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n.apexcharts-tooltip.dark {\n  color: #fff;\n  background: rgba(30,30,30, 0.8);\n}\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.apexcharts-tooltip.light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n.apexcharts-tooltip.dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #222;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value, \n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n.apexcharts-tooltip-series-group.active, .apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n.apexcharts-tooltip-candlestick > div {\n  margin: 4px 0;\n}\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip:after, .apexcharts-xaxistooltip:before {\n\tleft: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-left: -6px;\n}\n.apexcharts-xaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after, .apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top:after, .apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip:after, .apexcharts-yaxistooltip:before {\n\ttop: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n.apexcharts-yaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-top: -6px;\n}\n.apexcharts-yaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after, .apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right:after, .apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip.active {\n  opacity: 1;\n}\n\n.apexcharts-xcrosshairs, .apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.active, .apexcharts-ycrosshairs.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-zoom-rect {\n  pointer-events: none;\n}\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_points, .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n.svg_select_points_l, .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n  fill: #888;\n}\n.apexcharts-canvas.zoomable .hovering-zoom {\n  cursor: crosshair\n}\n.apexcharts-canvas.zoomable .hovering-pan {\n  cursor: move\n}\n\n.apexcharts-xaxis,\n.apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.apexcharts-zoom-icon, \n.apexcharts-zoom-in-icon,\n.apexcharts-zoom-out-icon,\n.apexcharts-reset-zoom-icon, \n.apexcharts-pan-icon, \n.apexcharts-selection-icon,\n.apexcharts-menu-icon, \n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg, \n.apexcharts-zoom-in-icon svg,\n.apexcharts-zoom-out-icon svg,\n.apexcharts-reset-zoom-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n.apexcharts-zoom-icon.selected svg, \n.apexcharts-selection-icon.selected svg, \n.apexcharts-reset-zoom-icon.selected svg {\n  fill: #008FFB;\n}\n.apexcharts-selection-icon:not(.selected):hover svg,\n.apexcharts-zoom-icon:not(.selected):hover svg, \n.apexcharts-zoom-in-icon:hover svg, \n.apexcharts-zoom-out-icon:hover svg, \n.apexcharts-reset-zoom-icon:hover svg, \n.apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon, .apexcharts-menu-icon {\n  position: relative;\n}\n.apexcharts-reset-zoom-icon {\n  margin-left: 5px;\n}\n.apexcharts-zoom-icon, .apexcharts-reset-zoom-icon, .apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoom-in-icon, .apexcharts-zoom-out-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoom-out-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n.apexcharts-pan-icon.selected svg {\n  stroke: #008FFB;\n}\n.apexcharts-pan-icon:not(.selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  top: 0px;\n  right: 3px;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; \n}\n\n.apexcharts-toolbar svg {\n  pointer-events: none;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-toolbar {\n    /*opacity: 0;*/\n  }\n\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  } \n}\n\n.apexcharts-datalabel.hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabel, .apexcharts-datalabel-label, .apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events, .apexcharts-radar-series path, .apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}'),"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(t){if("Element"in t){var e=t.Element.prototype,i=Object,s=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array.prototype.indexOf||function(t){for(var e=0,i=this.length;e<i;e++)if(e in this&&this[e]===t)return e;return-1},n=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},r=function(t,e){if(""===e)throw new n("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new n("INVALID_CHARACTER_ERR","The token must not contain space characters.");return a.call(t,e)},o=function(t){for(var e=s.call(t.getAttribute("class")||""),i=e?e.split(/\s+/):[],a=0,n=i.length;a<n;a++)this.push(i[a]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},l=o.prototype=[],h=function(){return new o(this)};if(n.prototype=Error.prototype,l.item=function(t){return this[t]||null},l.contains=function(t){return~r(this,t+"")},l.add=function(){var t,e=arguments,i=0,s=e.length,a=!1;do{t=e[i]+"",~r(this,t)||(this.push(t),a=!0)}while(++i<s);a&&this._updateClassName()},l.remove=function(){var t,e,i=arguments,s=0,a=i.length,n=!1;do{for(t=i[s]+"",e=r(this,t);~e;)this.splice(e,1),n=!0,e=r(this,t)}while(++s<a);n&&this._updateClassName()},l.toggle=function(t,e){var i=this.contains(t),s=i?!0!==e&&"remove":!1!==e&&"add";return s&&this[s](t),!0===e||!1===e?e:!i},l.replace=function(t,e){var i=r(t+"");~i&&(this.splice(i,1,e),this._updateClassName())},l.toString=function(){return this.join(" ")},i.defineProperty){var c={get:h,enumerable:!0,configurable:!0};try{i.defineProperty(e,"classList",c)}catch(t){void 0!==t.number&&-2146823252!==t.number||(c.enumerable=!1,i.defineProperty(e,"classList",c))}}else i.prototype.__defineGetter__&&e.__defineGetter__("classList",h)}}(self),function(){var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var i,s=arguments.length;for(i=0;i<s;i++)t=arguments[i],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:i.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var i=this.toString().split(" "),s=i.indexOf(t+"");~s&&(i=i.slice(s),this.remove.apply(this,i),this.add(e),this.add.apply(this,i.slice(1)))}),t=null}()),function(){var t=!1;function e(t){var e=t.__resizeTriggers__,i=e.firstElementChild,s=e.lastElementChild,a=i.firstElementChild;s.scrollLeft=s.scrollWidth,s.scrollTop=s.scrollHeight,a.style.width=i.offsetWidth+1+"px",a.style.height=i.offsetHeight+1+"px",i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight}function i(t){var i=this;e(this),this.__resizeRAF__&&r(this.__resizeRAF__),this.__resizeRAF__=n(function(){(function(t){return t.offsetWidth!=t.__resizeLast__.width||t.offsetHeight!=t.__resizeLast__.height})(i)&&(i.__resizeLast__.width=i.offsetWidth,i.__resizeLast__.height=i.offsetHeight,i.__resizeListeners__.forEach(function(e){e.call(t)}))})}var s,a,n=(s=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return window.setTimeout(t,20)},function(t){return s(t)}),r=(a=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout,function(t){return a(t)}),o=!1,l="",h="animationstart",c="Webkit Moz O ms".split(" "),d="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),u=document.createElement("fakeelement");if(void 0!==u.style.animationName&&(o=!0),!1===o)for(var g=0;g<c.length;g++)if(void 0!==u.style[c[g]+"AnimationName"]){l="-"+c[g].toLowerCase()+"-",h=d[g];break}var f="@"+l+"keyframes resizeanim { from { opacity: 0; } to { opacity: 0; } } ",p=l+"animation: 1ms resizeanim; ";window.addResizeListener=function(s,a){s.__resizeTriggers__||("static"==getComputedStyle(s).position&&(s.style.position="relative"),function(){if(!t){var e=(f||"")+".resize-triggers { "+(p||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),i.appendChild(s),t=!0}}(),s.__resizeLast__={},s.__resizeListeners__=[],(s.__resizeTriggers__=document.createElement("div")).className="resize-triggers",s.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',s.appendChild(s.__resizeTriggers__),e(s),s.addEventListener("scroll",i,!0),h&&s.__resizeTriggers__.addEventListener(h,function(t){"resizeanim"==t.animationName&&e(s)})),s.__resizeListeners__.push(a)},window.removeResizeListener=function(t,e){t&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1),t.__resizeListeners__.length||(t.removeEventListener("scroll",i),t.__resizeTriggers__=!t.removeChild(t.__resizeTriggers__)))}}(),window.Apex={},function(){function i(t,s){e(this,i),this.opts=s,this.ctx=this,this.w=new k(s).init(),this.el=t,this.w.globals.cuid=(Math.random()+1).toString(36).substring(4),this.w.globals.chartID=this.w.config.chart.id?this.w.config.chart.id:this.w.globals.cuid,this.initModules(),this.create=d.bind(this.create,this),this.windowResizeHandler=this.windowResize.bind(this)}return s(i,[{key:"render",value:function(){var t=this;return new q(function(e,i){if(null!==t.el){void 0===Apex._chartInstances&&(Apex._chartInstances=[]),t.w.config.chart.id&&Apex._chartInstances.push({id:t.w.globals.chartID,group:t.w.config.chart.group,chart:t}),t.setLocale(t.w.config.chart.defaultLocale);var s=t.w.config.chart.events.beforeMount;"function"==typeof s&&s(t,t.w),t.fireEvent("beforeMount",[t,t.w]),window.addEventListener("resize",t.windowResizeHandler),window.addResizeListener(t.el.parentNode,t.parentResizeCallback.bind(t));var a=t.create(t.w.config.series,{});if(!a)return e(t);t.mount(a).then(function(){e(a),"function"==typeof t.w.config.chart.events.mounted&&t.w.config.chart.events.mounted(t,t.w),t.fireEvent("mounted",[t,t.w])}).catch(function(t){i(t)})}else i(new Error("Element not found"))})}},{key:"initModules",value:function(){this.animations=new g(this.ctx),this.annotations=new m(this.ctx),this.core=new _(this.el,this),this.grid=new at(this),this.coreUtils=new b(this),this.config=new y({}),this.crosshairs=new E(this.ctx),this.options=new x,this.responsive=new rt(this.ctx),this.series=new B(this.ctx),this.theme=new ot(this.ctx),this.formatters=new D(this.ctx),this.titleSubtitle=new mt(this.ctx),this.legend=new nt(this.ctx),this.toolbar=new pt(this.ctx),this.dimensions=new V(this.ctx),this.zoomPanSelection=new xt(this.ctx),this.w.globals.tooltip=new ft(this.ctx)}},{key:"addEventListener",value:function(t,e){var i=this.w;i.globals.events.hasOwnProperty(t)?i.globals.events[t].push(e):i.globals.events[t]=[e]}},{key:"removeEventListener",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){var s=i.globals.events[t].indexOf(e);-1!==s&&i.globals.events[t].splice(s,1)}}},{key:"fireEvent",value:function(t,e){var i=this.w;if(i.globals.events.hasOwnProperty(t)){e&&e.length||(e=[]);for(var s=i.globals.events[t],a=s.length,n=0;n<a;n++)s[n].apply(null,e)}}},{key:"create",value:function(t,e){var i=this.w;this.initModules();var s=this.w.globals;if(s.noData=!1,s.animationEnded=!1,this.responsive.checkResponsiveConfig(e),null===this.el)return s.animationEnded=!0,null;if(this.core.setupElements(),0===s.svgWidth)return s.animationEnded=!0,null;var a=b.checkComboSeries(t);s.comboCharts=a.comboCharts,s.comboChartsHasBars=a.comboChartsHasBars,(0===t.length||1===t.length&&t[0].data&&0===t[0].data.length)&&this.series.handleNoData(),this.setupEventHandlers(),this.core.parseData(t),this.theme.init(),new S(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),this.legend.init(),this.series.hasAllSeriesEqualX(),s.axisCharts&&(this.core.coreCalculations(),"category"!==i.config.xaxis.type&&this.formatters.setLabelFormatters()),this.formatters.heatmapLabelFormatters(),this.dimensions.plotCoords();var n=this.core.xySettings();this.grid.createGridMask();var r=this.core.plotChartType(t,n);this.core.shiftGraphPosition();var o={plot:{left:i.globals.translateX,top:i.globals.translateY,width:i.globals.gridWidth,height:i.globals.gridHeight}};return{elGraph:r,xyRatios:n,elInner:i.globals.dom.elGraphical,dimensions:o}}},{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this,i=e.w;return new q(function(s,a){if(null===e.el)return a(new Error("Not enough data to display or target element not found"));if((null===t||i.globals.allSeriesCollapsed)&&e.series.handleNoData(),e.core.drawAxis(i.config.chart.type,t.xyRatios),e.grid=new at(e),"back"===i.config.grid.position&&e.grid.drawGrid(),"back"===i.config.annotations.position&&e.annotations.drawAnnotations(),t.elGraph instanceof Array)for(var n=0;n<t.elGraph.length;n++)i.globals.dom.elGraphical.add(t.elGraph[n]);else i.globals.dom.elGraphical.add(t.elGraph);if("front"===i.config.grid.position&&e.grid.drawGrid(),"front"===i.config.xaxis.crosshairs.position&&e.crosshairs.drawXCrosshairs(),"front"===i.config.yaxis[0].crosshairs.position&&e.crosshairs.drawYCrosshairs(),"front"===i.config.annotations.position&&e.annotations.drawAnnotations(),!i.globals.noData){if(i.config.tooltip.enabled&&!i.globals.noData&&e.w.globals.tooltip.drawTooltip(t.xyRatios),i.globals.axisCharts&&i.globals.isXNumeric)(i.config.chart.zoom.enabled||i.config.chart.selection&&i.config.chart.selection.enabled||i.config.chart.pan&&i.config.chart.pan.enabled)&&e.zoomPanSelection.init({xyRatios:t.xyRatios});else{var r=i.config.chart.toolbar.tools;r.zoom=!1,r.zoomin=!1,r.zoomout=!1,r.selection=!1,r.pan=!1,r.reset=!1}i.config.chart.toolbar.show&&!i.globals.allSeriesCollapsed&&e.toolbar.createToolbar()}i.globals.memory.methodsToExec.length>0&&i.globals.memory.methodsToExec.forEach(function(t){t.method(t.params,!1,t.context)}),s(e)})}},{key:"clearPreviousPaths",value:function(){var t=this.w;t.globals.previousPaths=[],t.globals.allSeriesCollapsed=!1,t.globals.collapsedSeries=[],t.globals.collapsedSeriesIndices=[]}},{key:"updateOptions",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=this.w;return t.series&&(t.series[0].data&&(t.series=t.series.map(function(t,e){return n({},a.config.series[e],{name:t.name?t.name:a.config.series[e].name,type:t.type,data:t.data})})),this.revertDefaultAxisMinMax()),t.xaxis&&((t.xaxis.min||t.xaxis.max)&&this.forceXAxisUpdate(t),t.xaxis.categories&&t.xaxis.categories.length&&a.config.xaxis.convertedCatToNumeric&&(t=v.convertCatToNumeric(t))),a.globals.collapsedSeriesIndices.length>0&&this.clearPreviousPaths(),this._updateOptions(t,e,i,s)}},{key:"_updateOptions",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.getSyncedCharts().forEach(function(n){var r=n.w;return r.globals.shouldAnimate=s,i||(r.globals.resized=!0,r.globals.dataChanged=!0,s&&n.series.getPreviousPaths()),e&&"object"===t(e)&&(n.config=new y(e),e=b.extendArrayProps(n.config,e),r.config=d.extend(r.config,e),a&&(r.globals.lastXAxis=[],r.globals.lastYAxis=[],r.globals.initialConfig=d.extend({},r.config),r.globals.initialSeries=JSON.parse(JSON.stringify(r.config.series)))),n.update(e)})}},{key:"updateSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.revertDefaultAxisMinMax(),this._updateSeries(t,e,i)}},{key:"appendSeries",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.w.config.series.slice();return i.push(t),this.revertDefaultAxisMinMax(),this._updateSeries(i,e)}},{key:"_updateSeries",value:function(t,e){var i,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=this.w;return this.w.globals.shouldAnimate=e,a.globals.dataChanged=!0,a.globals.allSeriesCollapsed&&(a.globals.allSeriesCollapsed=!1),e&&this.series.getPreviousPaths(),t[0].data?(i=t.map(function(t,e){return n({},a.config.series[e],{name:t.name?t.name:a.config.series[e].name,type:t.type,data:t.data})}),a.config.series=i):a.config.series=t.slice(),s&&(a.globals.initialConfig.series=JSON.parse(JSON.stringify(a.config.series)),a.globals.initialSeries=JSON.parse(JSON.stringify(a.config.series))),this.update()}},{key:"getSyncedCharts",value:function(){var t=this.getGroupedCharts(),e=[this];return t.length&&(e=[],t.forEach(function(t){e.push(t)})),e}},{key:"getGroupedCharts",value:function(){var t=this;return Apex._chartInstances.filter(function(t){if(t.group)return!0}).map(function(e){return t.w.config.chart.group===e.group?e.chart:t})}},{key:"appendData",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var s=i.w.config.series.slice(),a=0;a<s.length;a++)if(void 0!==t[a])for(var n=0;n<t[a].data.length;n++)s[a].data.push(t[a].data[n]);return i.w.config.series=s,e&&(i.w.globals.initialSeries=JSON.parse(JSON.stringify(i.w.config.series))),this.update()}},{key:"update",value:function(t){var e=this;return new q(function(i,s){e.clear();var a=e.create(e.w.config.series,t);if(!a)return i(e);e.mount(a).then(function(){"function"==typeof e.w.config.chart.events.updated&&e.w.config.chart.events.updated(e,e.w),e.fireEvent("updated",[e,e.w]),e.w.globals.isDirty=!0,i(e)}).catch(function(t){s(t)})})}},{key:"forceXAxisUpdate",value:function(t){var e=this.w;void 0!==t.xaxis.min&&(e.config.xaxis.min=t.xaxis.min,e.globals.lastXAxis.min=t.xaxis.min),void 0!==t.xaxis.max&&(e.config.xaxis.max=t.xaxis.max,e.globals.lastXAxis.max=t.xaxis.max)}},{key:"revertDefaultAxisMinMax",value:function(){var t=this.w;t.config.xaxis.min=t.globals.lastXAxis.min,t.config.xaxis.max=t.globals.lastXAxis.max,t.config.yaxis.map(function(e,i){t.globals.zoomed&&void 0!==t.globals.lastYAxis[i]&&(e.min=t.globals.lastYAxis[i].min,e.max=t.globals.lastYAxis[i].max)})}},{key:"clear",value:function(){this.zoomPanSelection&&this.zoomPanSelection.destroy(),this.toolbar&&this.toolbar.destroy(),this.animations=null,this.annotations=null,this.core=null,this.grid=null,this.series=null,this.responsive=null,this.theme=null,this.formatters=null,this.titleSubtitle=null,this.legend=null,this.dimensions=null,this.options=null,this.crosshairs=null,this.zoomPanSelection=null,this.toolbar=null,this.w.globals.tooltip=null,this.clearDomElements()}},{key:"killSVG",value:function(t){return new q(function(e,i){t.each(function(t,e){this.removeClass("*"),this.off(),this.stop()},!0),t.ungroup(),t.clear(),e("done")})}},{key:"clearDomElements",value:function(){var t=this.w.globals.dom;if(null!==this.el)for(;this.el.firstChild;)this.el.removeChild(this.el.firstChild);this.killSVG(t.Paper),t.Paper.remove(),t.elWrap=null,t.elGraphical=null,t.elLegendWrap=null,t.baseEl=null,t.elGridRect=null,t.elGridRectMask=null,t.elGridRectMarkerMask=null,t.elDefs=null}},{key:"destroy",value:function(){this.clear();var t=this.w.config.chart.id;t&&Apex._chartInstances.forEach(function(e,i){e.id===t&&Apex._chartInstances.splice(i,1)}),window.removeEventListener("resize",this.windowResizeHandler),window.removeResizeListener(this.el.parentNode,this.parentResizeCallback.bind(this))}},{key:"toggleSeries",value:function(t){var e=this.series.getSeriesByName(t),i=parseInt(e.getAttribute("data:realIndex")),s=e.classList.contains("apexcharts-series-collapsed");this.legend.toggleDataSeries(i,s)}},{key:"resetToggleSeries",value:function(){this.legend.resetToggleDataSeries()}},{key:"setupEventHandlers",value:function(){var t=this.w,e=this,i=t.globals.dom.baseEl.querySelector(t.globals.chartClass);["mousedown","mousemove","touchstart","touchmove","mouseup","touchend"].forEach(function(s){i.addEventListener(s,function(i){"mousedown"===i.type&&1===i.which||("mouseup"===i.type&&1===i.which||"touchend"===i.type)&&("function"==typeof t.config.chart.events.click&&t.config.chart.events.click(i,e,t),e.fireEvent("click",[i,e,t]))},{capture:!1,passive:!0})}),this.core.setupBrushHandler()}},{key:"addXaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=this;i&&(s=i),s.annotations.addXaxisAnnotationExternal(t,e,s)}},{key:"addYaxisAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=this;i&&(s=i),s.annotations.addYaxisAnnotationExternal(t,e,s)}},{key:"addPointAnnotation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=this;i&&(s=i),s.annotations.addPointAnnotationExternal(t,e,s)}},{key:"clearAnnotations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this;t&&(e=t),e.annotations.clearAnnotations(e)}},{key:"addText",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=this;i&&(s=i),s.annotations.addText(t,e,s)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(t,e){return this.coreUtils.getSeriesTotalsXRange(t,e)}},{key:"getHighestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new W(this.ctx).getMinYMaxY(t).highestY}},{key:"getLowestValueInSeries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new W(this.ctx).getMinYMaxY(t).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"setLocale",value:function(t){this.setCurrentLocaleValues(t)}},{key:"setCurrentLocaleValues",value:function(t){var e=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(e=this.w.config.chart.locales.concat(window.Apex.chart.locales));var i=e.filter(function(e){return e.name===t})[0];if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var s=d.extend(p,i);this.w.globals.locale=s.options}},{key:"svgUrl",value:function(){return new st(this.ctx).svgUrl()}},{key:"dataURI",value:function(){return new st(this.ctx).dataURI()}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.windowResize()}},{key:"windowResize",value:function(){var t=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout(function(){t.w.globals.resized=!0,t.w.globals.dataChanged=!1,t.update()},150)}}],[{key:"initOnLoad",value:function(){for(var t=document.querySelectorAll("[data-apexcharts]"),e=0;e<t.length;e++){new i(t[e],JSON.parse(t[e].getAttribute("data-options"))).render()}}},{key:"exec",value:function(t,e){var i=this.getChartByID(t);if(i){for(var s=arguments.length,a=new Array(s>2?s-2:0),n=2;n<s;n++)a[n-2]=arguments[n];switch(e){case"updateOptions":return i.updateOptions.apply(i,a);case"updateSeries":return i.updateSeries.apply(i,a);case"appendData":return i.appendData.apply(i,a);case"addXaxisAnnotation":return i.addXaxisAnnotation.apply(i,a);case"addYaxisAnnotation":return i.addYaxisAnnotation.apply(i,a);case"addPointAnnotation":return i.addPointAnnotation.apply(i,a);case"clearAnnotations":return i.clearAnnotations.apply(i,a);case"destroy":return i.destroy()}}}},{key:"merge",value:function(t,e){return d.extend(t,e)}},{key:"getChartByID",value:function(t){return Apex._chartInstances.filter(function(e){return e.id===t})[0].chart}}]),i}()});
;/*!jQuery Kontrol*/
/**
 * Small extensible jQuery library of new UI controls ;
 * Dial (was jQuery Knob), XY pad, Bars.
 *
 * Version: 0.9.0 (15/07/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function($) {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function (e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function () {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.mx = 0; // x value of mouse down point of the current mouse move
        this.my = 0; // y value of mouse down point of the current mose move
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.sH = null; // start hook
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook

        this.run = function () {
            var cf = function (e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s.init();
                s._configure()
                 ._draw();
            };

            if(this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend(
                {
                    // Config
                    min : this.$.data('min') || 0,
                    max : this.$.data('max') || 100,
                    stopper : true,
                    readOnly : this.$.data('readonly'),
                    noScroll : this.$.data('noScroll'),

                    // UI
                    cursor : (this.$.data('cursor') === true && 30)
                                || this.$.data('cursor')
                                || 0,
                    thickness : this.$.data('thickness') || 0.35,
                    width : this.$.data('width') || 200,
                    height : this.$.data('height') || 200,
                    displayInput : this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious : this.$.data('displayprevious'),
                    fgColor : this.$.data('fgcolor') || '#87CEEB',
                    inline : false,
                    //context : {'lineCap' : 'butt'},

                    // Hooks
                    start:null,  // function () {}
                    draw : null, // function () {}
                    change : null, // function (value) {}
                    cancel : null, // function () {}
                    release : null // function (value) {}
                }, this.o
            );

            // routing value
            if(this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input')
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = $this.val();

                    $this.bind(
                        'change'
                        , function () {
                            var val = {};
                            val[k] = $this.val();
                            s.val(val);
                        }
                    );
                });
                this.$.find('legend').remove();

            } else {
                // input = integer
                this.i = this.$;
                this.v = this.$.val();
                (this.v == '') && (this.v = this.o.min);

                this.$.bind(
                    'change'
                    , function () {
                        s.val(s.$.val());
                    }
                );
            }

            (!this.o.displayInput) && this.$.hide();

            this.$c = $('<canvas width="' +
                            this.o.width + 'px" height="' +
                            this.o.height + 'px"></canvas>');
            this.c = this.$c[0].getContext("2d");

            this.$
                .wrap($('<div style="' + (this.o.inline ? 'display:inline;' : '') +
                        'width:' + this.o.width + 'px;height:' +
                        this.o.height + 'px;"></div>'))
                .before(this.$c);

            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            this._draw();

            return this;
        };

        this._draw = function () {

            // canvas pre-rendering
            var d = true,
                c = document.createElement('canvas');

            c.width = s.o.width;
            c.height = s.o.height;
            s.g = c.getContext('2d');

            s.clear();

            s.dH
            && (d = s.dH());

            (d !== false) && s.draw();

            s.c.drawImage(c, 0, 0);
            c = null;
        };

        this._touch = function (e) {

            var touchMove = function (e) {

                var v = s.xy2val(
                            e.originalEvent.touches[s.t].pageX,
                            e.originalEvent.touches[s.t].pageY,
                            'touch'
                            );

                if (v == s.cv) return;

                if (
                    s.cH
                    && (s.cH(v) === false)
                ) return;


                s.change(v);
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            if (
                this.sH
                && (this.sH() === false)
            ) return;

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k"
                    , function () {
                        k.c.d.unbind('touchmove.k touchend.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function (e) {

            var mouseMove = function (e) {
                var v = s.xy2val(e.pageX, e.pageY, 'mouse');
                if (v == s.cv) return;

                if (
                    s.cH
                    && (s.cH(v) === false)
                ) return;

                s.change(v);
                s._draw();
            };

            if (
                this.sH
                && (this.sH() === false)
            ) return;

            // First click
            s.mx = e.pageX;
            s.my = e.pageY;
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k"
                    , function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (
                                s.eH
                                && (s.eH() === false)
                            ) return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k"
                    , function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function () {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;
            return this;
        };

        this._listen = function () {

            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                         }
                    )
                    .bind(
                        "touchstart"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                         }
                    );
                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            return this;
        };

        this._configure = function () {

            // Hooks
            if (this.o.start) this.sH = this.o.start;
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function () {
            this.$c[0].width = this.$c[0].width;
        };

        // Abstract methods
        this.listen = function () {}; // on start, one time
        this.extend = function () {}; // each time configure triggered
        this.init = function () {}; // each time configure triggered
        this.change = function (v) {}; // on change
        this.val = function (v) {}; // on release
        this.xy2val = function (x, y, method) {}; //
        this.draw = function () {}; // on change / on release
        this.clear = function () { this._clear(); };

        // Utils
        this.h2rgba = function (h, a) {
            var rgb;
            h = h.substring(1,7)
            rgb = [parseInt(h.substring(0,2),16)
                   ,parseInt(h.substring(2,4),16)
                   ,parseInt(h.substring(4,6),16)];
            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function (f, t) {
            for (var i in f) { t[i] = f[i]; }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function () {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2*Math.PI;

        this.extend = function () {
            this.o = $.extend(
                {
                    bgColor : this.$.data('bgcolor') || '#EEEEEE',
                    angleOffset : this.$.data('angleoffset') || 0,
                    angleArc : this.$.data('anglearc') || 360,
                    flatMouse : this.$.data('flatMouse'),
                    inline : true
                }, this.o
            );
        };

        this.val = function (v) {
            if (null != v) {
                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                this.v = this.cv;
                this.$.val(this.v);
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function (x, y, m) {
            var a, ret;

            if ((m === 'mouse') && (this.o.flatMouse)) {
                a = ((this.my - y) + (x - this.mx)) / (this.o.height);
                ret = ~~ (a * (this.o.max - this.o.min) + parseFloat(this.v));
                ret = max(min(ret, this.o.max), this.o.min);
            } else {
                a = Math.atan2(
                    x - (this.x + this.w2)
                    , - (y - this.y - this.w2)
                ) - this.angleOffset;

                if(this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {
                    // if isset angleArc option, set to min if .5 under min
                    a = 0;
                } else if (a < 0) {
                    a += this.PI2;
                }

                ret = ~~ (0.5 + (a * (this.o.max - this.o.min) / this.angleArc))
                    + this.o.min;
            }

            this.o.stopper
            && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function () {
            // bind MouseWheel
            var s = this,
                mw = function (e) {
                            if(s.o.noScroll)
                                return;

                            e.preventDefault();

                            var ori = e.originalEvent
                                ,deltaX = ori.detail || ori.wheelDeltaX
                                ,deltaY = ori.detail || ori.wheelDeltaY
                                ,v = parseInt(s.$.val()) + (deltaX>0 || deltaY>0 ? 1 : deltaX<0 || deltaY<0 ? -1 : 0);

                            if (
                                s.cH
                                && (s.cH(v) === false)
                            ) return;

                            s.val(v);
                        }
                , kval, to, m = 1, kv = {37:-1, 38:1, 39:1, 40:-1};

            this.$
                .bind(
                    "keydown"
                    ,function (e) {

                        var kc = e.keyCode;

                        // numpad support
                        if(kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {

                            (kc !== 13)         // enter
                            && (kc !== 8)       // bs
                            && (kc !== 9)       // tab
                            && (kc !== 189)     // -
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = parseInt(s.$.val()) + kv[kc] * m;

                                s.o.stopper
                                && (v = max(min(v, s.o.max), s.o.min));

                                s.change(v);
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(
                                    function () { m*=2; }
                                    ,30
                                );
                            }
                        }
                    }
                )
                .bind(
                    "keyup"
                    ,function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }

                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw)
        };

        this.init = function () {

            if (
                this.v < this.o.min
                || this.v > this.o.max
            ) this.v = this.o.min;

            this.$.val(this.v);
            this.w2 = this.o.width / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2;
            this.lineWidth = this.xy * this.o.thickness;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                            String(Math.abs(this.o.max)).length
                            , String(Math.abs(this.o.min)).length
                            , 2
                            ) + 2;

            this.o.displayInput
                && this.i.css({
                        'width' : ((this.o.width / 2 + 4) >> 0) + 'px'
                        ,'height' : ((this.o.width / 3) >> 0) + 'px'
                        ,'position' : 'absolute'
                        ,'vertical-align' : 'middle'
                        ,'margin-top' : ((this.o.width / 3) >> 0) + 'px'
                        ,'margin-left' : '-' + ((this.o.width * 3 / 4 + 2) >> 0) + 'px'
                        ,'border' : 0
                        ,'background' : 'none'
                        ,'font' : 'bold ' + ((this.o.width / s) >> 0) + 'px Arial'
                        ,'text-align' : 'center'
                        ,'color' : this.o.fgColor
                        ,'padding' : '0px'
                        ,'-webkit-appearance': 'none'
                        })
                || this.i.css({
                        'width' : '0px'
                        ,'visibility' : 'hidden'
                        });
        };

        this.change = function (v) {
            this.cv = v;
            this.$.val(v);
        };

        this.angle = function (v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.draw = function () {

            var c = this.g,                 // context
                a = this.angle(this.cv)    // Angle
                , sat = this.startAngle     // Start angle
                , eat = sat + a             // End angle
                , sa, ea                    // Previous angles
                , r = 1;

            c.lineWidth = this.lineWidth;

            /*for(o in this.o.context) {
                c[o] = this.o.context[o];
            }*/

            this.o.cursor
                && (sat = eat - this.cursorExt)
                && (eat = eat + this.cursorExt);

            c.beginPath();
                c.strokeStyle = this.o.bgColor;
                c.arc(this.xy, this.xy, this.radius, this.endAngle, this.startAngle, true);
            c.stroke();

            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.v);
                sa = this.startAngle;
                this.o.cursor
                    && (sa = ea - this.cursorExt)
                    && (ea = ea + this.cursorExt);

                c.beginPath();
                    c.strokeStyle = this.pColor;
                    c.arc(this.xy, this.xy, this.radius, sa, ea, false);
                c.stroke();
                r = (this.cv == this.v);
            }

            c.beginPath();
                c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                c.arc(this.xy, this.xy, this.radius, sat, eat, false);
            c.stroke();
        };

        this.cancel = function () {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function (o) {
        return this.each(
            function () {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };


    /**
     * k.XY
     */
    k.XY = function () {
        k.o.call(this);

        this.m = [];
        this.p = [];
        this.f = []; // factor
        this.s = {0:1,1:-1};
        this.cur2 = 0;
        this.cursor = 0;
        this.v = {};
        this.div = null;

        this.extend = function () {
            this.o = $.extend(
                {
                    min : this.$.data('min') || 0,
                    max : this.$.data('max') || 100,
                    width : this.$.data('width') || 200,
                    height : this.$.data('height') || 200
                }, this.o
            );
        };

        this._coord = function() {
            for(var i in this.v) {
                this.m[i] = ~~ (0.5 + ((this.s[i] * this.v[i] - this.o.min) / this.f[i]) + this.cur2) ;
                this.p[i] = this.m[i];
            }
        };

        this.init = function () {
            this.cursor = this.o.cursor || 30;
            this.cur2 = this.cursor / 2;

            this.f[0] = (this.o.max - this.o.min) / (this.o.width - this.cursor);
            this.f[1] = (this.o.max - this.o.min) / (this.o.height - this.cursor);

            if (!this.isInit) {
                this._coord();
            }

            if(this.o.displayInput) {
                var s = this;
                this.$.css({
                        'margin-top' : '-30px'
                        , 'border' : 0
                        , 'font' : '11px Arial'
                        });

                this.i.each(
                    function (){
                        $(this).css({
                            'width' : (s.o.width / 4) + 'px'
                            ,'border' : 0
                            ,'background' : 'none'
                            ,'color' : s.o.fgColor
                            ,'padding' : '0px'
                            ,'-webkit-appearance': 'none'
                            });
                    });
            } else {
                this.$.css({
                        'width' : '0px'
                        ,'visibility' : 'hidden'
                        });
            }
        };

        this.xy2val = function (x, y) {
            this.m[0] = max(this.cur2, min(x - this.x, this.o.width - this.cur2));
            this.m[1] = max(this.cur2, min(y - this.y, this.o.height - this.cur2));

            return {
                0 : ~~ (this.o.min + (this.m[0] - this.cur2) * this.f[0]),
                1 : ~~ (this.o.min + (this.o.height - this.m[1] - this.cur2) * this.f[1])
            };
        };

        this.change = function (v) {
            this.cv = v;
            this.i[0].val(this.cv[0]);
            this.i[1].val(this.cv[1]);
        };

        this.val = function (v) {
            if (null !== v) {
                this.cv = v;
                this.copy(this.cv, this.v);
                this._coord();
                this._draw();
            } else {
                return this.v;
            }
        };

        this.cancel = function () {
            this.copy(this.v, this.cv);
            this.i[0].val(this.cv[0]);
            this.i[1].val(this.cv[1]);
            this.m[0] = this.p[0];
            this.m[1] = this.p[1];
            this._draw();
        };

        this.draw = function () {

            var c = this.g
                , r = 1;

            if (this.o.displayPrevious) {
                c.beginPath();
                c.lineWidth = this.cursor;
                c.strokeStyle = this.pColor;
                c.moveTo(this.p[0], this.p[1] + this.cur2);
                c.lineTo(this.p[0], this.p[1] - this.cur2);
                c.stroke();
                r = (this.cv[0] == this.v[0] && this.cv[1] == this.v[1]);
            }

            c.beginPath();
            c.lineWidth = this.cursor;
            c.strokeStyle = r  ? this.o.fgColor : this.fgColor;
            c.moveTo(this.m[0], this.m[1] + this.cur2);
            c.lineTo(this.m[0], this.m[1] - this.cur2);
            c.stroke();
        };
    };

    $.fn.xy = function (o) {
        return this.each(
            function () {
                var x = new k.XY();
                x.$ = $(this);
                x.o = o;
                x.run();
            }
        ).parent();
    };


    /**
     * k.Bars
     */
    k.Bars = function () {
        k.o.call(this);

        this.bar = null;
        this.mid = null;
        this.col = null;
        this.colWidth = null;
        this.fontSize = null;
        this.displayMidLine = false;

        this.extend = function () {

            this.o = $.extend(
                {
                    min : this.$.data('min') || 0,
                    max : this.$.data('max') || 100,
                    width : this.$.data('width') || 600,
                    displayInput : this.$.data('displayinput') == null || this.$.data('displayinput'),
                    height : (this.$.data('height') || 200),
                    fgColor : this.$.data('fgcolor') || '#87CEEB',
                    bgColor : this.$.data('bgcolor') || '#CCCCCC',
                    cols : this.$.data('cols') || 8,
                    spacing : this.$.data('spacing') || 1
                }
                ,this.o
            );

            // initialize colWith
            (this.o.cols == 1) && (this.o.spacing = 0);
            this.colWidth = (((this.o.width - this.o.spacing * this.o.cols) / this.o.cols) >> 0);

            if(this.o.displayInput) {
                this.fontSize = max(~~ (this.colWidth/3), 10);
                this.o.height -= this.fontSize;
            }
        };

        this.xy2val = function (x, y) {
            var cw = this.colWidth + this.o.spacing
                ,val = (
                        max(this.o.min
                        , min(this.o.max, - ( - this.mid + (y - this.y)) / this.bar))
                       ) >> 0
                ,ret = {};

            this.col = max(0, min(this.o.cols-1, ((x - this.x) / cw) >> 0));
            ret[this.col] = val;
            return ret;
        };

        this.init = function () {

            this.bar = this.o.height / (this.o.max - this.o.min);
            this.mid = (this.o.max * this.bar) >> 0;
            this.displayMidLine = this.o.cursor && this.o.min < 0;

            if(this.o.displayInput) {
                var s = this;
                this.$.css({
                        'margin' : '0px'
                        ,'border' : 0
                        ,'padding' : '0px'
                        });

                this.i.each(
                    function (){
                        $(this).css({
                            'width' : (s.colWidth - 4 +  s.o.spacing) + 'px'
                            ,'border' : 0
                            ,'background' : 'none'
                            ,'font' : s.fontSize+'px Arial' //this.fontSize
                            ,'color' : s.o.fgColor
                            ,'margin' : '0px'
                            ,'padding' : '0px'
                            ,'-webkit-appearance': 'none'
                            ,'text-align' : 'center'
                            });
                    });
            } else {
                this.$.css({
                        'width' : '0px'
                        ,'visibility' : 'hidden'
                        });
            }
        };

        this.change = function (v) {
            for (var i in v) {
                this.cv[i] = v[i];
                this.i[i].val(this.cv[i]);
            }
        };

        this.val = function (v) {
            if (null !== v) {
                this.copy(v, this.cv);
                this.copy(this.cv, this.v);

                // reset cur col
                this.col = null;
                this._draw();
            } else {
                return this.v;
            }
        };

        this.cancel = function () {
            this.copy(this.v, this.cv);

            // reset cur col
            this.col = null;
            this._draw();
        };

        this._bar = function (col) {

            var x = (col * (this.colWidth + this.o.spacing) + this.colWidth / 2);

            if (this.displayMidLine) {
                this.g.beginPath();
                this.g.lineWidth = this.colWidth;
                this.g.strokeStyle = this.o.fgColor;
                this.g.moveTo(x, this.mid);
                this.g.lineTo(x, this.mid + 1);
                this.g.stroke();
            }

            if (this.o.displayPrevious) {
                this.g.beginPath();
                this.g.lineWidth = this.colWidth;
                this.g.strokeStyle = (this.cv[col] == this.v[col]) ? this.o.fgColor : this.pColor;
                if (this.o.cursor) {
                    this.g.lineTo(x, this.mid - ((this.v[col] * this.bar) >> 0) + this.o.cursor / 2);
                } else {
                    this.g.moveTo(x, this.mid);
                }
                this.g.lineTo(x, this.mid - ((this.v[col] * this.bar) >> 0) - this.o.cursor / 2);
                this.g.stroke();
            }

            this.g.beginPath();
            this.g.lineWidth = this.colWidth;
            this.g.strokeStyle = this.fgColor;
            if (this.o.cursor) {
                this.g.lineTo(x, this.mid - ((this.cv[col] * this.bar) >> 0) + this.o.cursor / 2);
            } else {
                this.g.moveTo(x, this.mid);
            }
            this.g.lineTo(x, this.mid - ((this.cv[col] * this.bar) >> 0) - this.o.cursor / 2);
            this.g.stroke();
        };

        this.clear = function () {
            if (this.col) {
                // current col
                this.c.clearRect(
                    this.col * (this.colWidth + this.o.spacing)
                    , 0
                    , this.colWidth + this.o.spacing
                    , this.o.height
                );
            } else {
                this._clear();
            }
        }

        this.draw = function () {
            if (this.col) {
                this._bar(this.col);
            } else {
                for (var i = 0; i < this.o.cols; i++) {
                    this._bar(i);
                }
            }
        };
    };

    $.fn.bars = function (o) {
        return this.each(
            function () {
                var b = new k.Bars();
                b.$ = $(this);
                b.o = o;
                b.run();
            }
        ).parent();
    };
	
	
	/**
     * k.YSLIDER
     */
    k.YSLIDER = function () {
        k.o.call(this);

        this.m = [];
        this.p = [];
        this.f = []; // factor
        this.s = {0:1,1:-1};
        this.cur2 = 0;
        this.cursor = 0;
        this.v = {};
        this.div = null;

        this.extend = function () {
            this.o = $.extend(
                {
                    min : this.$.data('min') || 0,
                    max : this.$.data('max') || 100,
                    width : this.$.data('width') || 22,
                    height : this.$.data('height') || 200
                }, this.o
            );
        };

        this._coord = function() {
            for(var i in this.v) {
                this.m[i] = ~~ (0.5 + ((this.s[i] * this.v[i] - this.o.min) / this.f[i]) + this.cur2) ;
                this.p[i] = this.m[i];
            }
        };

        this.init = function () {
            this.cursor = this.o.cursor || 30;
            this.cur2 = this.cursor / 2;

            this.f[0] = (this.o.max - this.o.min) / (this.o.width - this.cursor);
            this.f[1] = (this.o.max - this.o.min) / (this.o.height - this.cursor);

            if (!this.isInit) {
                this._coord();
            }

            if(this.o.displayInput) {
                var s = this;
                this.$.css({
                        'margin-top' : '-30px'
                        , 'border' : 0
                        , 'font' : '11px Arial'
                        });

                this.i.each(
                    function (){
                        $(this).css({
                            'width' : (s.o.width / 4) + 'px'
                            ,'border' : 0
                            ,'background' : 'none'
                            ,'color' : s.o.fgColor
                            ,'padding' : '0px'
                            ,'-webkit-appearance': 'none'
                            });
                    });
            } else {
                this.$.css({
                        'width' : '0px'
                        ,'visibility' : 'hidden'
                        });
            }
        };

        this.xy2val = function (x, y) {
            this.m[0] = max(this.cur2, min(x - this.x, this.o.width - this.cur2));
            this.m[1] = max(this.cur2, min(y - this.y, this.o.height - this.cur2));

            return {
                0 : ~~ (this.o.min + (this.m[0] - this.cur2) * this.f[0]),
                1 : ~~ (this.o.min + (this.o.height - this.m[1] - this.cur2) * this.f[1])
            };
        };

        this.change = function (v) {
            this.cv = v;
            this.i[0].val(this.cv[0]);
            this.i[1].val(this.cv[1]);
        };

        this.val = function (v) {
            if (null !== v) {
                this.cv = v;
                this.copy(this.cv, this.v);
                this._coord();
                this._draw();
            } else {
                return this.v;
            }
        };

        this.cancel = function () {
            this.copy(this.v, this.cv);
            this.i[0].val(this.cv[0]);
            this.i[1].val(this.cv[1]);
            this.m[0] = this.p[0];
            this.m[1] = this.p[1];
            this._draw();
        };

        this.draw = function () {

            var c = this.g
                , r = 1;

            if (this.o.displayPrevious) {
                c.beginPath();
                c.lineWidth = this.cursor;
                c.strokeStyle = this.pColor;
                c.moveTo(this.p[0], this.p[1] + this.cur2);
                c.lineTo(this.p[0], this.p[1] - this.cur2);
                c.stroke();
                r = (this.cv[0] == this.v[0] && this.cv[1] == this.v[1]);
            }

            c.beginPath();
            c.lineWidth = this.cursor;
            c.strokeStyle = r  ? this.o.fgColor : this.fgColor;
            c.moveTo(this.m[0], this.m[1] + this.cur2);
            c.lineTo(this.m[0], this.m[1] - this.cur2);
            c.stroke();
        };
    };

    $.fn.kyslider = function (o) {
        return this.each(
            function () {
                var x = new k.YSLIDER();
                x.$ = $(this);
                x.o = o;
                x.run();
            }
        ).parent();
    };
	
	
})(jQuery);
;/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
(function (root, factory) { 
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipe = factory();
	}
})(this, function () {

	'use strict';
	var PhotoSwipe = function(template, UiClass, items, options){

/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
var framework = {
	features: null,
	bind: function(target, type, listener, unbind) {
		var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
		type = type.split(' ');
		for(var i = 0; i < type.length; i++) {
			if(type[i]) {
				target[methodName]( type[i], listener, false);
			}
		}
	},
	isArray: function(obj) {
		return (obj instanceof Array);
	},
	createEl: function(classes, tag) {
		var el = document.createElement(tag || 'div');
		if(classes) {
			el.className = classes;
		}
		return el;
	},
	getScrollY: function() {
		var yOffset = window.pageYOffset;
		return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
	},
	unbind: function(target, type, listener) {
		framework.bind(target,type,listener,true);
	},
	removeClass: function(el, className) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
	},
	addClass: function(el, className) {
		if( !framework.hasClass(el,className) ) {
			el.className += (el.className ? ' ' : '') + className;
		}
	},
	hasClass: function(el, className) {
		return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
	},
	getChildByClass: function(parentEl, childClassName) {
		var node = parentEl.firstChild;
		while(node) {
			if( framework.hasClass(node, childClassName) ) {
				return node;
			}
			node = node.nextSibling;
		}
	},
	arraySearch: function(array, value, key) {
		var i = array.length;
		while(i--) {
			if(array[i][key] === value) {
				return i;
			} 
		}
		return -1;
	},
	extend: function(o1, o2, preventOverwrite) {
		for (var prop in o2) {
			if (o2.hasOwnProperty(prop)) {
				if(preventOverwrite && o1.hasOwnProperty(prop)) {
					continue;
				}
				o1[prop] = o2[prop];
			}
		}
	},
	easing: {
		sine: {
			out: function(k) {
				return Math.sin(k * (Math.PI / 2));
			},
			inOut: function(k) {
				return - (Math.cos(Math.PI * k) - 1) / 2;
			}
		},
		cubic: {
			out: function(k) {
				return --k * k * k + 1;
			}
		}
		/*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/
	},

	/**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */
	detectFeatures: function() {
		if(framework.features) {
			return framework.features;
		}
		var helperEl = framework.createEl(),
			helperStyle = helperEl.style,
			vendor = '',
			features = {};

		// IE8 and below
		features.oldIE = document.all && !document.addEventListener;

		features.touch = 'ontouchstart' in window;

		if(window.requestAnimationFrame) {
			features.raf = window.requestAnimationFrame;
			features.caf = window.cancelAnimationFrame;
		}

		features.pointerEvent = !!(window.PointerEvent) || navigator.msPointerEnabled;

		// fix false-positive detection of old Android in new IE
		// (IE11 ua string contains "Android 4.0")
		
		if(!features.pointerEvent) { 

			var ua = navigator.userAgent;

			// Detect if device is iPhone or iPod and if it's older than iOS 8
			// http://stackoverflow.com/a/14223920
			// 
			// This detection is made because of buggy top/bottom toolbars
			// that don't trigger window.resize event.
			// For more info refer to _isFixedPosition variable in core.js

			if (/iP(hone|od)/.test(navigator.platform)) {
				var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
				if(v && v.length > 0) {
					v = parseInt(v[1], 10);
					if(v >= 1 && v < 8 ) {
						features.isOldIOSPhone = true;
					}
				}
			}

			// Detect old Android (before KitKat)
			// due to bugs related to position:fixed
			// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
			
			var match = ua.match(/Android\s([0-9\.]*)/);
			var androidversion =  match ? match[1] : 0;
			androidversion = parseFloat(androidversion);
			if(androidversion >= 1 ) {
				if(androidversion < 4.4) {
					features.isOldAndroid = true; // for fixed position bug & performance
				}
				features.androidVersion = androidversion; // for touchend bug
			}	
			features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

			// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
		}
		
		var styleChecks = ['transform', 'perspective', 'animationName'],
			vendors = ['', 'webkit','Moz','ms','O'],
			styleCheckItem,
			styleName;

		for(var i = 0; i < 4; i++) {
			vendor = vendors[i];

			for(var a = 0; a < 3; a++) {
				styleCheckItem = styleChecks[a];

				// uppercase first letter of property name, if vendor is present
				styleName = vendor + (vendor ? 
										styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
										styleCheckItem);
			
				if(!features[styleCheckItem] && styleName in helperStyle ) {
					features[styleCheckItem] = styleName;
				}
			}

			if(vendor && !features.raf) {
				vendor = vendor.toLowerCase();
				features.raf = window[vendor+'RequestAnimationFrame'];
				if(features.raf) {
					features.caf = window[vendor+'CancelAnimationFrame'] || 
									window[vendor+'CancelRequestAnimationFrame'];
				}
			}
		}
			
		if(!features.raf) {
			var lastTime = 0;
			features.raf = function(fn) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
			features.caf = function(id) { clearTimeout(id); };
		}

		// Detect SVG support
		features.svg = !!document.createElementNS && 
						!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

		framework.features = features;

		return features;
	}
};

framework.detectFeatures();

// Override addEventListener for old versions of IE
if(framework.features.oldIE) {

	framework.bind = function(target, type, listener, unbind) {
		
		type = type.split(' ');

		var methodName = (unbind ? 'detach' : 'attach') + 'Event',
			evName,
			_handleEv = function() {
				listener.handleEvent.call(listener);
			};

		for(var i = 0; i < type.length; i++) {
			evName = type[i];
			if(evName) {

				if(typeof listener === 'object' && listener.handleEvent) {
					if(!unbind) {
						listener['oldIE' + evName] = _handleEv;
					} else {
						if(!listener['oldIE' + evName]) {
							return false;
						}
					}

					target[methodName]( 'on' + evName, listener['oldIE' + evName]);
				} else {
					target[methodName]( 'on' + evName, listener);
				}

			}
		}
	};
	
}

/*>>framework-bridge*/

/*>>core*/
//function(template, UiClass, items, options)

var self = this;

/**
 * Static vars, don't change unless you know what you're doing.
 */
var DOUBLE_TAP_RADIUS = 25, 
	NUM_HOLDERS = 3;

/**
 * Options
 */
var _options = {
	allowPanToNext:true,
	spacing: 0.12,
	bgOpacity: 1,
	mouseUsed: false,
	loop: true,
	pinchToClose: true,
	closeOnScroll: true,
	closeOnVerticalDrag: true,
	verticalDragRange: 0.75,
	hideAnimationDuration: 333,
	showAnimationDuration: 333,
	showHideOpacity: false,
	focus: true,
	escKey: true,
	arrowKeys: true,
	mainScrollEndFriction: 0.35,
	panEndFriction: 0.35,
	isClickableElement: function(el) {
        return el.tagName === 'A';
    },
    getDoubleTapZoom: function(isMouseClick, item) {
    	if(isMouseClick) {
    		return 1;
    	} else {
    		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
    	}
    },
    maxSpreadZoom: 1.33,
	modal: true,

	// not fully implemented yet
	scaleMode: 'fit' // TODO
};
framework.extend(_options, options);


/**
 * Private helper variables & functions
 */

var _getEmptyPoint = function() { 
		return {x:0,y:0}; 
	};

var _isOpen,
	_isDestroying,
	_closedByScroll,
	_currentItemIndex,
	_containerStyle,
	_containerShiftIndex,
	_currPanDist = _getEmptyPoint(),
	_startPanOffset = _getEmptyPoint(),
	_panOffset = _getEmptyPoint(),
	_upMoveEvents, // drag move, drag end & drag cancel events array
	_downEvents, // drag start events array
	_globalEventHandlers,
	_viewportSize = {},
	_currZoomLevel,
	_startZoomLevel,
	_translatePrefix,
	_translateSufix,
	_updateSizeInterval,
	_itemsNeedUpdate,
	_currPositionIndex = 0,
	_offset = {},
	_slideSize = _getEmptyPoint(), // size of slide area, including spacing
	_itemHolders,
	_prevItemIndex,
	_indexDiff = 0, // difference of indexes since last content update
	_dragStartEvent,
	_dragMoveEvent,
	_dragEndEvent,
	_dragCancelEvent,
	_transformKey,
	_pointerEventEnabled,
	_isFixedPosition = true,
	_likelyTouchDevice,
	_modules = [],
	_requestAF,
	_cancelAF,
	_initalClassName,
	_initalWindowScrollY,
	_oldIE,
	_currentWindowScrollY,
	_features,
	_windowVisibleSize = {},
	_renderMaxResolution = false,
	_orientationChangeTimeout,


	// Registers PhotoSWipe module (History, Controller ...)
	_registerModule = function(name, module) {
		framework.extend(self, module.publicMethods);
		_modules.push(name);
	},

	_getLoopedId = function(index) {
		var numSlides = _getNumItems();
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	
	// Micro bind/trigger
	_listeners = {},
	_listen = function(name, fn) {
		if(!_listeners[name]) {
			_listeners[name] = [];
		}
		return _listeners[name].push(fn);
	},
	_shout = function(name) {
		var listeners = _listeners[name];

		if(listeners) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			for(var i = 0; i < listeners.length; i++) {
				listeners[i].apply(self, args);
			}
		}
	},

	_getCurrentTime = function() {
		return new Date().getTime();
	},
	_applyBgOpacity = function(opacity) {
		_bgOpacity = opacity;
		self.bg.style.opacity = opacity * _options.bgOpacity;
	},

	_applyZoomTransform = function(styleObj,x,y,zoom,item) {
		if(!_renderMaxResolution || (item && item !== self.currItem) ) {
			zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
		}
			
		styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
	},
	_applyCurrentZoomPan = function( allowRenderResolution ) {
		if(_currZoomElementStyle) {

			if(allowRenderResolution) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					if(!_renderMaxResolution) {
						_setImageSize(self.currItem, false, true);
						_renderMaxResolution = true;
					}
				} else {
					if(_renderMaxResolution) {
						_setImageSize(self.currItem);
						_renderMaxResolution = false;
					}
				}
			}
			

			_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
		}
	},
	_applyZoomPanToItem = function(item) {
		if(item.container) {

			_applyZoomTransform(item.container.style, 
								item.initialPosition.x, 
								item.initialPosition.y, 
								item.initialZoomLevel,
								item);
		}
	},
	_setTranslateX = function(x, elStyle) {
		elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
	},
	_moveMainScroll = function(x, dragging) {

		if(!_options.loop && dragging) {
			var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
				delta = Math.round(x - _mainScrollPos.x);

			if( (newSlideIndexOffset < 0 && delta > 0) || 
				(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
				x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
			} 
		}
		
		_mainScrollPos.x = x;
		_setTranslateX(x, _containerStyle);
	},
	_calculatePanOffset = function(axis, zoomLevel) {
		var m = _midZoomPoint[axis] - _offset[axis];
		return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
	},
	
	_equalizePoints = function(p1, p2) {
		p1.x = p2.x;
		p1.y = p2.y;
		if(p2.id) {
			p1.id = p2.id;
		}
	},
	_roundPoint = function(p) {
		p.x = Math.round(p.x);
		p.y = Math.round(p.y);
	},

	_mouseMoveTimeout = null,
	_onFirstMouseMove = function() {
		// Wait until mouse move event is fired at least twice during 100ms
		// We do this, because some mobile browsers trigger it on touchstart
		if(_mouseMoveTimeout ) { 
			framework.unbind(document, 'mousemove', _onFirstMouseMove);
			framework.addClass(template, 'pswp--has_mouse');
			_options.mouseUsed = true;
			_shout('mouseUsed');
		}
		_mouseMoveTimeout = setTimeout(function() {
			_mouseMoveTimeout = null;
		}, 100);
	},

	_bindEvents = function() {
		framework.bind(document, 'keydown', self);

		if(_features.transform) {
			// don't bind click event in browsers that don't support transform (mostly IE8)
			framework.bind(self.scrollWrap, 'click', self);
		}
		

		if(!_options.mouseUsed) {
			framework.bind(document, 'mousemove', _onFirstMouseMove);
		}

		framework.bind(window, 'resize scroll orientationchange', self);

		_shout('bindEvents');
	},

	_unbindEvents = function() {
		framework.unbind(window, 'resize scroll orientationchange', self);
		framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
		framework.unbind(document, 'keydown', self);
		framework.unbind(document, 'mousemove', _onFirstMouseMove);

		if(_features.transform) {
			framework.unbind(self.scrollWrap, 'click', self);
		}

		if(_isDragging) {
			framework.unbind(window, _upMoveEvents, self);
		}

		clearTimeout(_orientationChangeTimeout);

		_shout('unbindEvents');
	},
	
	_calculatePanBounds = function(zoomLevel, update) {
		var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
		if(update) {
			_currPanBounds = bounds;
		}
		return bounds;
	},
	
	_getMinZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.initialZoomLevel;
	},
	_getMaxZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.w > 0 ? _options.maxSpreadZoom : 1;
	},

	// Return true if offset is out of the bounds
	_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
		if(destZoomLevel === self.currItem.initialZoomLevel) {
			destPanOffset[axis] = self.currItem.initialPosition[axis];
			return true;
		} else {
			destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

			if(destPanOffset[axis] > destPanBounds.min[axis]) {
				destPanOffset[axis] = destPanBounds.min[axis];
				return true;
			} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
				destPanOffset[axis] = destPanBounds.max[axis];
				return true;
			}
		}
		return false;
	},

	_setupTransforms = function() {

		if(_transformKey) {
			// setup 3d transforms
			var allow3dTransform = _features.perspective && !_likelyTouchDevice;
			_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
			_translateSufix = _features.perspective ? ', 0px)' : ')';	
			return;
		}

		// Override zoom/pan/move functions in case old browser is used (most likely IE)
		// (so they use left/top/width/height, instead of CSS transform)
	
		_transformKey = 'left';
		framework.addClass(template, 'pswp--ie');

		_setTranslateX = function(x, elStyle) {
			elStyle.left = x + 'px';
		};
		_applyZoomPanToItem = function(item) {

			var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
				s = item.container.style,
				w = zoomRatio * item.w,
				h = zoomRatio * item.h;

			s.width = w + 'px';
			s.height = h + 'px';
			s.left = item.initialPosition.x + 'px';
			s.top = item.initialPosition.y + 'px';

		};
		_applyCurrentZoomPan = function() {
			if(_currZoomElementStyle) {

				var s = _currZoomElementStyle,
					item = self.currItem,
					zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					w = zoomRatio * item.w,
					h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';


				s.left = _panOffset.x + 'px';
				s.top = _panOffset.y + 'px';
			}
			
		};
	},

	_onKeyDown = function(e) {
		var keydownAction = '';
		if(_options.escKey && e.keyCode === 27) { 
			keydownAction = 'close';
		} else if(_options.arrowKeys) {
			if(e.keyCode === 37) {
				keydownAction = 'prev';
			} else if(e.keyCode === 39) { 
				keydownAction = 'next';
			}
		}

		if(keydownAction) {
			// don't do anything if special key pressed to prevent from overriding default browser actions
			// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
			if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
				if(e.preventDefault) {
					e.preventDefault();
				} else {
					e.returnValue = false;
				} 
				self[keydownAction]();
			}
		}
	},

	_onGlobalClick = function(e) {
		if(!e) {
			return;
		}

		// don't allow click event to pass through when triggering after drag or some other gesture
		if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
			e.preventDefault();
			e.stopPropagation();
		}
	},

	_updatePageScrollOffset = function() {
		self.setScrollOffset(0, framework.getScrollY());		
	};
	


	



// Micro animation engine
var _animations = {},
	_numAnimations = 0,
	_stopAnimation = function(name) {
		if(_animations[name]) {
			if(_animations[name].raf) {
				_cancelAF( _animations[name].raf );
			}
			_numAnimations--;
			delete _animations[name];
		}
	},
	_registerStartAnimation = function(name) {
		if(_animations[name]) {
			_stopAnimation(name);
		}
		if(!_animations[name]) {
			_numAnimations++;
			_animations[name] = {};
		}
	},
	_stopAllAnimations = function() {
		for (var prop in _animations) {

			if( _animations.hasOwnProperty( prop ) ) {
				_stopAnimation(prop);
			} 
			
		}
	},
	_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
		var startAnimTime = _getCurrentTime(), t;
		_registerStartAnimation(name);

		var animloop = function(){
			if ( _animations[name] ) {
				
				t = _getCurrentTime() - startAnimTime; // time diff
				//b - beginning (start prop)
				//d - anim duration

				if ( t >= d ) {
					_stopAnimation(name);
					onUpdate(endProp);
					if(onComplete) {
						onComplete();
					}
					return;
				}
				onUpdate( (endProp - b) * easingFn(t/d) + b );

				_animations[name].raf = _requestAF(animloop);
			}
		};
		animloop();
	};
	


var publicMethods = {

	// make a few local variables and functions public
	shout: _shout,
	listen: _listen,
	viewportSize: _viewportSize,
	options: _options,

	isMainScrollAnimating: function() {
		return _mainScrollAnimating;
	},
	getZoomLevel: function() {
		return _currZoomLevel;
	},
	getCurrentIndex: function() {
		return _currentItemIndex;
	},
	isDragging: function() {
		return _isDragging;
	},	
	isZooming: function() {
		return _isZooming;
	},
	setScrollOffset: function(x,y) {
		_offset.x = x;
		_currentWindowScrollY = _offset.y = y;
		_shout('updateScrollOffset', _offset);
	},
	applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
		_panOffset.x = panX;
		_panOffset.y = panY;
		_currZoomLevel = zoomLevel;
		_applyCurrentZoomPan( allowRenderResolution );
	},

	init: function() {

		if(_isOpen || _isDestroying) {
			return;
		}

		var i;

		self.framework = framework; // basic functionality
		self.template = template; // root DOM element of PhotoSwipe
		self.bg = framework.getChildByClass(template, 'pswp__bg');

		_initalClassName = template.className;
		_isOpen = true;
				
		_features = framework.detectFeatures();
		_requestAF = _features.raf;
		_cancelAF = _features.caf;
		_transformKey = _features.transform;
		_oldIE = _features.oldIE;
		
		self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
		self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

		_containerStyle = self.container.style; // for fast access

		// Objects that hold slides (there are only 3 in DOM)
		self.itemHolders = _itemHolders = [
			{el:self.container.children[0] , wrap:0, index: -1},
			{el:self.container.children[1] , wrap:0, index: -1},
			{el:self.container.children[2] , wrap:0, index: -1}
		];

		// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
		_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

		_setupTransforms();

		// Setup global events
		_globalEventHandlers = {
			resize: self.updateSize,

			// Fixes: iOS 10.3 resize event
			// does not update scrollWrap.clientWidth instantly after resize
			// https://github.com/dimsemenov/PhotoSwipe/issues/1315
			orientationchange: function() {
				clearTimeout(_orientationChangeTimeout);
				_orientationChangeTimeout = setTimeout(function() {
					if(_viewportSize.x !== self.scrollWrap.clientWidth) {
						self.updateSize();
					}
				}, 500);
			},
			scroll: _updatePageScrollOffset,
			keydown: _onKeyDown,
			click: _onGlobalClick
		};

		// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
		// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
		var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
		if(!_features.animationName || !_features.transform || oldPhone) {
			_options.showAnimationDuration = _options.hideAnimationDuration = 0;
		}

		// init modules
		for(i = 0; i < _modules.length; i++) {
			self['init' + _modules[i]]();
		}
		
		// init
		if(UiClass) {
			var ui = self.ui = new UiClass(self, framework);
			ui.init();
		}

		_shout('firstUpdate');
		_currentItemIndex = _currentItemIndex || _options.index || 0;
		// validate index
		if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
			_currentItemIndex = 0;
		}
		self.currItem = _getItemAt( _currentItemIndex );

		
		if(_features.isOldIOSPhone || _features.isOldAndroid) {
			_isFixedPosition = false;
		}
		
		template.setAttribute('aria-hidden', 'false');
		if(_options.modal) {
			if(!_isFixedPosition) {
				template.style.position = 'absolute';
				template.style.top = framework.getScrollY() + 'px';
			} else {
				template.style.position = 'fixed';
			}
		}

		if(_currentWindowScrollY === undefined) {
			_shout('initialLayout');
			_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
		}
		
		// add classes to root element of PhotoSwipe
		var rootClasses = 'pswp--open ';
		if(_options.mainClass) {
			rootClasses += _options.mainClass + ' ';
		}
		if(_options.showHideOpacity) {
			rootClasses += 'pswp--animate_opacity ';
		}
		rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
		rootClasses += _features.animationName ? ' pswp--css_animation' : '';
		rootClasses += _features.svg ? ' pswp--svg' : '';
		framework.addClass(template, rootClasses);

		self.updateSize();

		// initial update
		_containerShiftIndex = -1;
		_indexDiff = null;
		for(i = 0; i < NUM_HOLDERS; i++) {
			_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
		}

		if(!_oldIE) {
			framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
		}	

		_listen('initialZoomInEnd', function() {
			self.setContent(_itemHolders[0], _currentItemIndex-1);
			self.setContent(_itemHolders[2], _currentItemIndex+1);

			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

			if(_options.focus) {
				// focus causes layout, 
				// which causes lag during the animation, 
				// that's why we delay it untill the initial zoom transition ends
				template.focus();
			}
			 

			_bindEvents();
		});

		// set content for center slide (first time)
		self.setContent(_itemHolders[1], _currentItemIndex);
		
		self.updateCurrItem();

		_shout('afterInit');

		if(!_isFixedPosition) {

			// On all versions of iOS lower than 8.0, we check size of viewport every second.
			// 
			// This is done to detect when Safari top & bottom bars appear, 
			// as this action doesn't trigger any events (like resize). 
			// 
			// On iOS8 they fixed this.
			// 
			// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
			
			_updateSizeInterval = setInterval(function() {
				if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
					self.updateSize();
				}
			}, 1000);
		}

		framework.addClass(template, 'pswp--visible');
	},

	// Close the gallery, then destroy it
	close: function() {
		if(!_isOpen) {
			return;
		}

		_isOpen = false;
		_isDestroying = true;
		_shout('close');
		_unbindEvents();

		_showOrHide(self.currItem, null, true, self.destroy);
	},

	// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
	destroy: function() {
		_shout('destroy');

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}
		
		template.setAttribute('aria-hidden', 'true');
		template.className = _initalClassName;

		if(_updateSizeInterval) {
			clearInterval(_updateSizeInterval);
		}

		framework.unbind(self.scrollWrap, _downEvents, self);

		// we unbind scroll event at the end, as closing animation may depend on it
		framework.unbind(window, 'scroll', self);

		_stopDragUpdateLoop();

		_stopAllAnimations();

		_listeners = null;
	},

	/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
	panTo: function(x,y,force) {
		if(!force) {
			if(x > _currPanBounds.min.x) {
				x = _currPanBounds.min.x;
			} else if(x < _currPanBounds.max.x) {
				x = _currPanBounds.max.x;
			}

			if(y > _currPanBounds.min.y) {
				y = _currPanBounds.min.y;
			} else if(y < _currPanBounds.max.y) {
				y = _currPanBounds.max.y;
			}
		}
		
		_panOffset.x = x;
		_panOffset.y = y;
		_applyCurrentZoomPan();
	},
	
	handleEvent: function (e) {
		e = e || window.event;
		if(_globalEventHandlers[e.type]) {
			_globalEventHandlers[e.type](e);
		}
	},


	goTo: function(index) {

		index = _getLoopedId(index);

		var diff = index - _currentItemIndex;
		_indexDiff = diff;

		_currentItemIndex = index;
		self.currItem = _getItemAt( _currentItemIndex );
		_currPositionIndex -= diff;
		
		_moveMainScroll(_slideSize.x * _currPositionIndex);
		

		_stopAllAnimations();
		_mainScrollAnimating = false;

		self.updateCurrItem();
	},
	next: function() {
		self.goTo( _currentItemIndex + 1);
	},
	prev: function() {
		self.goTo( _currentItemIndex - 1);
	},

	// update current zoom/pan objects
	updateCurrZoomItem: function(emulateSetContent) {
		if(emulateSetContent) {
			_shout('beforeChange', 0);
		}

		// itemHolder[1] is middle (current) item
		if(_itemHolders[1].el.children.length) {
			var zoomElement = _itemHolders[1].el.children[0];
			if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
				_currZoomElementStyle = zoomElement.style;
			} else {
				_currZoomElementStyle = null;
			}
		} else {
			_currZoomElementStyle = null;
		}
		
		_currPanBounds = self.currItem.bounds;	
		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

		_panOffset.x = _currPanBounds.center.x;
		_panOffset.y = _currPanBounds.center.y;

		if(emulateSetContent) {
			_shout('afterChange');
		}
	},


	invalidateCurrItems: function() {
		_itemsNeedUpdate = true;
		for(var i = 0; i < NUM_HOLDERS; i++) {
			if( _itemHolders[i].item ) {
				_itemHolders[i].item.needsUpdate = true;
			}
		}
	},

	updateCurrItem: function(beforeAnimation) {

		if(_indexDiff === 0) {
			return;
		}

		var diffAbs = Math.abs(_indexDiff),
			tempHolder;

		if(beforeAnimation && diffAbs < 2) {
			return;
		}


		self.currItem = _getItemAt( _currentItemIndex );
		_renderMaxResolution = false;
		
		_shout('beforeChange', _indexDiff);

		if(diffAbs >= NUM_HOLDERS) {
			_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
			diffAbs = NUM_HOLDERS;
		}
		for(var i = 0; i < diffAbs; i++) {
			if(_indexDiff > 0) {
				tempHolder = _itemHolders.shift();
				_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

				_containerShiftIndex++;
				_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
			} else {
				tempHolder = _itemHolders.pop();
				_itemHolders.unshift( tempHolder ); // move last to first

				_containerShiftIndex--;
				_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
			}
			
		}

		// reset zoom/pan on previous item
		if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

			var prevItem = _getItemAt(_prevItemIndex);
			if(prevItem.initialZoomLevel !== _currZoomLevel) {
				_calculateItemSize(prevItem , _viewportSize );
				_setImageSize(prevItem);
				_applyZoomPanToItem( prevItem ); 				
			}

		}

		// reset diff after update
		_indexDiff = 0;

		self.updateCurrZoomItem();

		_prevItemIndex = _currentItemIndex;

		_shout('afterChange');
		
	},



	updateSize: function(force) {
		
		if(!_isFixedPosition && _options.modal) {
			var windowScrollY = framework.getScrollY();
			if(_currentWindowScrollY !== windowScrollY) {
				template.style.top = windowScrollY + 'px';
				_currentWindowScrollY = windowScrollY;
			}
			if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
				return;
			}
			_windowVisibleSize.x = window.innerWidth;
			_windowVisibleSize.y = window.innerHeight;

			//template.style.width = _windowVisibleSize.x + 'px';
			template.style.height = _windowVisibleSize.y + 'px';
		}



		_viewportSize.x = self.scrollWrap.clientWidth;
		_viewportSize.y = self.scrollWrap.clientHeight;

		_updatePageScrollOffset();

		_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
		_slideSize.y = _viewportSize.y;

		_moveMainScroll(_slideSize.x * _currPositionIndex);

		_shout('beforeResize'); // even may be used for example to switch image sources


		// don't re-calculate size on inital size update
		if(_containerShiftIndex !== undefined) {

			var holder,
				item,
				hIndex;

			for(var i = 0; i < NUM_HOLDERS; i++) {
				holder = _itemHolders[i];
				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

				hIndex = _currentItemIndex+i-1;

				if(_options.loop && _getNumItems() > 2) {
					hIndex = _getLoopedId(hIndex);
				}

				// update zoom level on items and refresh source (if needsUpdate)
				item = _getItemAt( hIndex );

				// re-render gallery item if `needsUpdate`,
				// or doesn't have `bounds` (entirely new slide object)
				if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

					self.cleanSlide( item );
					
					self.setContent( holder, hIndex );

					// if "center" slide
					if(i === 1) {
						self.currItem = item;
						self.updateCurrZoomItem(true);
					}

					item.needsUpdate = false;

				} else if(holder.index === -1 && hIndex >= 0) {
					// add content first time
					self.setContent( holder, hIndex );
				}
				if(item && item.container) {
					_calculateItemSize(item, _viewportSize);
					_setImageSize(item);
					_applyZoomPanToItem( item );
				}
				
			}
			_itemsNeedUpdate = false;
		}	

		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
		_currPanBounds = self.currItem.bounds;

		if(_currPanBounds) {
			_panOffset.x = _currPanBounds.center.x;
			_panOffset.y = _currPanBounds.center.y;
			_applyCurrentZoomPan( true );
		}
		
		_shout('resize');
	},
	
	// Zoom current item to
	zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
		/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/

		if(centerPoint) {
			_startZoomLevel = _currZoomLevel;
			_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
			_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
			_equalizePoints(_startPanOffset, _panOffset);
		}

		var destPanBounds = _calculatePanBounds(destZoomLevel, false),
			destPanOffset = {};

		_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
		_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

		var initialZoomLevel = _currZoomLevel;
		var initialPanOffset = {
			x: _panOffset.x,
			y: _panOffset.y
		};

		_roundPoint(destPanOffset);

		var onUpdate = function(now) {
			if(now === 1) {
				_currZoomLevel = destZoomLevel;
				_panOffset.x = destPanOffset.x;
				_panOffset.y = destPanOffset.y;
			} else {
				_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
				_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
				_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
			}

			if(updateFn) {
				updateFn(now);
			}

			_applyCurrentZoomPan( now === 1 );
		};

		if(speed) {
			_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
		} else {
			onUpdate(1);
		}
	}


};


/*>>core*/

/*>>gestures*/
/**
 * Mouse/touch/pointer event handlers.
 * 
 * separated from @core.js for readability
 */

var MIN_SWIPE_DISTANCE = 30,
	DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

var _gestureStartTime,
	_gestureCheckSpeedTime,

	// pool of objects that are used during dragging of zooming
	p = {}, // first point
	p2 = {}, // second point (for zoom gesture)
	delta = {},
	_currPoint = {},
	_startPoint = {},
	_currPointers = [],
	_startMainScrollPos = {},
	_releaseAnimData,
	_posPoints = [], // array of points during dragging, used to determine type of gesture
	_tempPoint = {},

	_isZoomingIn,
	_verticalDragInitiated,
	_oldAndroidTouchEndTimeout,
	_currZoomedItemIndex = 0,
	_centerPoint = _getEmptyPoint(),
	_lastReleaseTime = 0,
	_isDragging, // at least one pointer is down
	_isMultitouch, // at least two _pointers are down
	_zoomStarted, // zoom level changed during zoom gesture
	_moved,
	_dragAnimFrame,
	_mainScrollShifted,
	_currentPoints, // array of current touch points
	_isZooming,
	_currPointsDistance,
	_startPointsDistance,
	_currPanBounds,
	_mainScrollPos = _getEmptyPoint(),
	_currZoomElementStyle,
	_mainScrollAnimating, // true, if animation after swipe gesture is running
	_midZoomPoint = _getEmptyPoint(),
	_currCenterPoint = _getEmptyPoint(),
	_direction,
	_isFirstMove,
	_opacityChanged,
	_bgOpacity,
	_wasOverInitialZoom,

	_isEqualPoints = function(p1, p2) {
		return p1.x === p2.x && p1.y === p2.y;
	},
	_isNearbyPoints = function(touch0, touch1) {
		return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
	},
	_calculatePointsDistance = function(p1, p2) {
		_tempPoint.x = Math.abs( p1.x - p2.x );
		_tempPoint.y = Math.abs( p1.y - p2.y );
		return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
	},
	_stopDragUpdateLoop = function() {
		if(_dragAnimFrame) {
			_cancelAF(_dragAnimFrame);
			_dragAnimFrame = null;
		}
	},
	_dragUpdateLoop = function() {
		if(_isDragging) {
			_dragAnimFrame = _requestAF(_dragUpdateLoop);
			_renderMovement();
		}
	},
	_canPan = function() {
		return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
	},
	
	// find the closest parent DOM element
	_closestElement = function(el, fn) {
	  	if(!el || el === document) {
	  		return false;
	  	}

	  	// don't search elements above pswp__scroll-wrap
	  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
	  		return false;
	  	}

	  	if( fn(el) ) {
	  		return el;
	  	}

	  	return _closestElement(el.parentNode, fn);
	},

	_preventObj = {},
	_preventDefaultEventBehaviour = function(e, isDown) {
	    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

		_shout('preventDragEvent', e, isDown, _preventObj);
		return _preventObj.prevent;

	},
	_convertTouchToPoint = function(touch, p) {
		p.x = touch.pageX;
		p.y = touch.pageY;
		p.id = touch.identifier;
		return p;
	},
	_findCenterOfPoints = function(p1, p2, pCenter) {
		pCenter.x = (p1.x + p2.x) * 0.5;
		pCenter.y = (p1.y + p2.y) * 0.5;
	},
	_pushPosPoint = function(time, x, y) {
		if(time - _gestureCheckSpeedTime > 50) {
			var o = _posPoints.length > 2 ? _posPoints.shift() : {};
			o.x = x;
			o.y = y; 
			_posPoints.push(o);
			_gestureCheckSpeedTime = time;
		}
	},

	_calculateVerticalDragOpacityRatio = function() {
		var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
		return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
	},

	
	// points pool, reused during touch events
	_ePoint1 = {},
	_ePoint2 = {},
	_tempPointsArr = [],
	_tempCounter,
	_getTouchPoints = function(e) {
		// clean up previous points, without recreating array
		while(_tempPointsArr.length > 0) {
			_tempPointsArr.pop();
		}

		if(!_pointerEventEnabled) {
			if(e.type.indexOf('touch') > -1) {

				if(e.touches && e.touches.length > 0) {
					_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
					if(e.touches.length > 1) {
						_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
					}
				}
				
			} else {
				_ePoint1.x = e.pageX;
				_ePoint1.y = e.pageY;
				_ePoint1.id = '';
				_tempPointsArr[0] = _ePoint1;//_ePoint1;
			}
		} else {
			_tempCounter = 0;
			// we can use forEach, as pointer events are supported only in modern browsers
			_currPointers.forEach(function(p) {
				if(_tempCounter === 0) {
					_tempPointsArr[0] = p;
				} else if(_tempCounter === 1) {
					_tempPointsArr[1] = p;
				}
				_tempCounter++;

			});
		}
		return _tempPointsArr;
	},

	_panOrMoveMainScroll = function(axis, delta) {

		var panFriction,
			overDiff = 0,
			newOffset = _panOffset[axis] + delta[axis],
			startOverDiff,
			dir = delta[axis] > 0,
			newMainScrollPosition = _mainScrollPos.x + delta.x,
			mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
			newPanPos,
			newMainScrollPos;

		// calculate fdistance over the bounds and friction
		if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
			panFriction = _options.panEndFriction;
			// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
			// Looks not as nice as was expected. Left for history.
			// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
		} else {
			panFriction = 1;
		}
		
		newOffset = _panOffset[axis] + delta[axis] * panFriction;

		// move main scroll or start panning
		if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


			if(!_currZoomElementStyle) {
				
				newMainScrollPos = newMainScrollPosition;

			} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
				
				if(dir) {
					if(newOffset > _currPanBounds.min[axis]) {
						panFriction = _options.panEndFriction;
						overDiff = _currPanBounds.min[axis] - newOffset;
						startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
					}
					
					// drag right
					if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;
						if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}
					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
						
					}

				} else {

					if(newOffset < _currPanBounds.max[axis] ) {
						panFriction =_options.panEndFriction;
						overDiff = newOffset - _currPanBounds.max[axis];
						startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
					}

					if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;

						if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}

					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
					}

				}


				//
			}

			if(axis === 'x') {

				if(newMainScrollPos !== undefined) {
					_moveMainScroll(newMainScrollPos, true);
					if(newMainScrollPos === _startMainScrollPos.x) {
						_mainScrollShifted = false;
					} else {
						_mainScrollShifted = true;
					}
				}

				if(_currPanBounds.min.x !== _currPanBounds.max.x) {
					if(newPanPos !== undefined) {
						_panOffset.x = newPanPos;
					} else if(!_mainScrollShifted) {
						_panOffset.x += delta.x * panFriction;
					}
				}

				return newMainScrollPos !== undefined;
			}

		}

		if(!_mainScrollAnimating) {
			
			if(!_mainScrollShifted) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					_panOffset[axis] += delta[axis] * panFriction;
				
				}
			}

			
		}
		
	},

	// Pointerdown/touchstart/mousedown handler
	_onDragStart = function(e) {

		// Allow dragging only via left mouse button.
		// As this handler is not added in IE8 - we ignore e.which
		// 
		// http://www.quirksmode.org/js/events_properties.html
		// https://developer.mozilla.org/en-US/docs/Web/API/event.button
		if(e.type === 'mousedown' && e.button > 0  ) {
			return;
		}

		if(_initialZoomRunning) {
			e.preventDefault();
			return;
		}

		if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
			return;
		}

		if(_preventDefaultEventBehaviour(e, true)) {
			e.preventDefault();
		}



		_shout('pointerDown');

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex < 0) {
				pointerIndex = _currPointers.length;
			}
			_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
		}
		


		var startPointsList = _getTouchPoints(e),
			numPoints = startPointsList.length;

		_currentPoints = null;

		_stopAllAnimations();

		// init drag
		if(!_isDragging || numPoints === 1) {

			

			_isDragging = _isFirstMove = true;
			framework.bind(window, _upMoveEvents, self);

			_isZoomingIn = 
				_wasOverInitialZoom = 
				_opacityChanged = 
				_verticalDragInitiated = 
				_mainScrollShifted = 
				_moved = 
				_isMultitouch = 
				_zoomStarted = false;

			_direction = null;

			_shout('firstTouchStart', startPointsList);

			_equalizePoints(_startPanOffset, _panOffset);

			_currPanDist.x = _currPanDist.y = 0;
			_equalizePoints(_currPoint, startPointsList[0]);
			_equalizePoints(_startPoint, _currPoint);

			//_equalizePoints(_startMainScrollPos, _mainScrollPos);
			_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

			_posPoints = [{
				x: _currPoint.x,
				y: _currPoint.y
			}];

			_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

			//_mainScrollAnimationEnd(true);
			_calculatePanBounds( _currZoomLevel, true );
			
			// Start rendering
			_stopDragUpdateLoop();
			_dragUpdateLoop();
			
		}

		// init zoom
		if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
			_startZoomLevel = _currZoomLevel;
			_zoomStarted = false; // true if zoom changed at least once

			_isZooming = _isMultitouch = true;
			_currPanDist.y = _currPanDist.x = 0;

			_equalizePoints(_startPanOffset, _panOffset);

			_equalizePoints(p, startPointsList[0]);
			_equalizePoints(p2, startPointsList[1]);

			_findCenterOfPoints(p, p2, _currCenterPoint);

			_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
			_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
			_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
		}


	},

	// Pointermove/touchmove/mousemove handler
	_onDragMove = function(e) {

		e.preventDefault();

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex > -1) {
				var p = _currPointers[pointerIndex];
				p.x = e.pageX;
				p.y = e.pageY; 
			}
		}

		if(_isDragging) {
			var touchesList = _getTouchPoints(e);
			if(!_direction && !_moved && !_isZooming) {

				if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
					// if main scroll position is shifted – direction is always horizontal
					_direction = 'h';
				} else {
					var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
					// check the direction of movement
					if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
						_direction = diff > 0 ? 'h' : 'v';
						_currentPoints = touchesList;
					}
				}
				
			} else {
				_currentPoints = touchesList;
			}
		}	
	},
	// 
	_renderMovement =  function() {

		if(!_currentPoints) {
			return;
		}

		var numPoints = _currentPoints.length;

		if(numPoints === 0) {
			return;
		}

		_equalizePoints(p, _currentPoints[0]);

		delta.x = p.x - _currPoint.x;
		delta.y = p.y - _currPoint.y;

		if(_isZooming && numPoints > 1) {
			// Handle behaviour for more than 1 point

			_currPoint.x = p.x;
			_currPoint.y = p.y;
		
			// check if one of two points changed
			if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
				return;
			}

			_equalizePoints(p2, _currentPoints[1]);


			if(!_zoomStarted) {
				_zoomStarted = true;
				_shout('zoomGestureStarted');
			}
			
			// Distance between two points
			var pointsDistance = _calculatePointsDistance(p,p2);

			var zoomLevel = _calculateZoomLevel(pointsDistance);

			// slightly over the of initial zoom level
			if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
				_wasOverInitialZoom = true;
			}

			// Apply the friction if zoom level is out of the bounds
			var zoomFriction = 1,
				minZoomLevel = _getMinZoomLevel(),
				maxZoomLevel = _getMaxZoomLevel();

			if ( zoomLevel < minZoomLevel ) {
				
				if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
					// fade out background if zooming out
					var minusDiff = minZoomLevel - zoomLevel;
					var percent = 1 - minusDiff / (minZoomLevel / 1.2);

					_applyBgOpacity(percent);
					_shout('onPinchClose', percent);
					_opacityChanged = true;
				} else {
					zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
					if(zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
				}
				
			} else if ( zoomLevel > maxZoomLevel ) {
				// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
				zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
				if(zoomFriction > 1) {
					zoomFriction = 1;
				}
				zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
			}

			if(zoomFriction < 0) {
				zoomFriction = 0;
			}

			// distance between touch points after friction is applied
			_currPointsDistance = pointsDistance;

			// _centerPoint - The point in the middle of two pointers
			_findCenterOfPoints(p, p2, _centerPoint);
		
			// paning with two pointers pressed
			_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
			_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
			_equalizePoints(_currCenterPoint, _centerPoint);

			_panOffset.x = _calculatePanOffset('x', zoomLevel);
			_panOffset.y = _calculatePanOffset('y', zoomLevel);

			_isZoomingIn = zoomLevel > _currZoomLevel;
			_currZoomLevel = zoomLevel;
			_applyCurrentZoomPan();

		} else {

			// handle behaviour for one point (dragging or panning)

			if(!_direction) {
				return;
			}

			if(_isFirstMove) {
				_isFirstMove = false;

				// subtract drag distance that was used during the detection direction  

				if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
					delta.x -= _currentPoints[0].x - _startPoint.x;
				}
				
				if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
					delta.y -= _currentPoints[0].y - _startPoint.y;
				}
			}

			_currPoint.x = p.x;
			_currPoint.y = p.y;

			// do nothing if pointers position hasn't changed
			if(delta.x === 0 && delta.y === 0) {
				return;
			}

			if(_direction === 'v' && _options.closeOnVerticalDrag) {
				if(!_canPan()) {
					_currPanDist.y += delta.y;
					_panOffset.y += delta.y;

					var opacityRatio = _calculateVerticalDragOpacityRatio();

					_verticalDragInitiated = true;
					_shout('onVerticalDrag', opacityRatio);

					_applyBgOpacity(opacityRatio);
					_applyCurrentZoomPan();
					return ;
				}
			}

			_pushPosPoint(_getCurrentTime(), p.x, p.y);

			_moved = true;
			_currPanBounds = self.currItem.bounds;
			
			var mainScrollChanged = _panOrMoveMainScroll('x', delta);
			if(!mainScrollChanged) {
				_panOrMoveMainScroll('y', delta);

				_roundPoint(_panOffset);
				_applyCurrentZoomPan();
			}

		}

	},
	
	// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
	_onDragRelease = function(e) {

		if(_features.isOldAndroid ) {

			if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
				return;
			}

			// on Android (v4.1, 4.2, 4.3 & possibly older) 
			// ghost mousedown/up event isn't preventable via e.preventDefault,
			// which causes fake mousedown event
			// so we block mousedown/up for 600ms
			if( e.type.indexOf('touch') > -1 ) {
				clearTimeout(_oldAndroidTouchEndTimeout);
				_oldAndroidTouchEndTimeout = setTimeout(function() {
					_oldAndroidTouchEndTimeout = 0;
				}, 600);
			}
			
		}

		_shout('pointerUp');

		if(_preventDefaultEventBehaviour(e, false)) {
			e.preventDefault();
		}

		var releasePoint;

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			
			if(pointerIndex > -1) {
				releasePoint = _currPointers.splice(pointerIndex, 1)[0];

				if(navigator.msPointerEnabled) {
					var MSPOINTER_TYPES = {
						4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
						2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
						3: 'pen' // event.MSPOINTER_TYPE_PEN
					};
					releasePoint.type = MSPOINTER_TYPES[e.pointerType];

					if(!releasePoint.type) {
						releasePoint.type = e.pointerType || 'mouse';
					}
				} else {
					releasePoint.type = e.pointerType || 'mouse';
				}

			}
		}

		var touchList = _getTouchPoints(e),
			gestureType,
			numPoints = touchList.length;

		if(e.type === 'mouseup') {
			numPoints = 0;
		}

		// Do nothing if there were 3 touch points or more
		if(numPoints === 2) {
			_currentPoints = null;
			return true;
		}

		// if second pointer released
		if(numPoints === 1) {
			_equalizePoints(_startPoint, touchList[0]);
		}				


		// pointer hasn't moved, send "tap release" point
		if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
			if(!releasePoint) {
				if(e.type === 'mouseup') {
					releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
				} else if(e.changedTouches && e.changedTouches[0]) {
					releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
				}		
			}

			_shout('touchRelease', e, releasePoint);
		}

		// Difference in time between releasing of two last touch points (zoom gesture)
		var releaseTimeDiff = -1;

		// Gesture completed, no pointers left
		if(numPoints === 0) {
			_isDragging = false;
			framework.unbind(window, _upMoveEvents, self);

			_stopDragUpdateLoop();

			if(_isZooming) {
				// Two points released at the same time
				releaseTimeDiff = 0;
			} else if(_lastReleaseTime !== -1) {
				releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
			}
		}
		_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
		
		if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
			gestureType = 'zoom';
		} else {
			gestureType = 'swipe';
		}

		if(_isZooming && numPoints < 2) {
			_isZooming = false;

			// Only second point released
			if(numPoints === 1) {
				gestureType = 'zoomPointerUp';
			}
			_shout('zoomGestureEnded');
		}

		_currentPoints = null;
		if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
			// nothing to animate
			return;
		}
	
		_stopAllAnimations();

		
		if(!_releaseAnimData) {
			_releaseAnimData = _initDragReleaseAnimationData();
		}
		
		_releaseAnimData.calculateSwipeSpeed('x');


		if(_verticalDragInitiated) {

			var opacityRatio = _calculateVerticalDragOpacityRatio();

			if(opacityRatio < _options.verticalDragRange) {
				self.close();
			} else {
				var initalPanY = _panOffset.y,
					initialBgOpacity = _bgOpacity;

				_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
					
					_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

					_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
					_applyCurrentZoomPan();
				});

				_shout('onVerticalDrag', 1);
			}

			return;
		}


		// main scroll 
		if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
			var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
			if(itemChanged) {
				return;
			}
			gestureType = 'zoomPointerUp';
		}

		// prevent zoom/pan animation when main scroll animation runs
		if(_mainScrollAnimating) {
			return;
		}
		
		// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
		if(gestureType !== 'swipe') {
			_completeZoomGesture();
			return;
		}
	
		// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
		if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
			_completePanGesture(_releaseAnimData);
		}
	},


	// Returns object with data about gesture
	// It's created only once and then reused
	_initDragReleaseAnimationData  = function() {
		// temp local vars
		var lastFlickDuration,
			tempReleasePos;

		// s = this
		var s = {
			lastFlickOffset: {},
			lastFlickDist: {},
			lastFlickSpeed: {},
			slowDownRatio:  {},
			slowDownRatioReverse:  {},
			speedDecelerationRatio:  {},
			speedDecelerationRatioAbs:  {},
			distanceOffset:  {},
			backAnimDestination: {},
			backAnimStarted: {},
			calculateSwipeSpeed: function(axis) {
				

				if( _posPoints.length > 1) {
					lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
					tempReleasePos = _posPoints[_posPoints.length-2][axis];
				} else {
					lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
					tempReleasePos = _startPoint[axis];
				}
				s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
				s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
				if(s.lastFlickDist[axis] > 20) {
					s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
				} else {
					s.lastFlickSpeed[axis] = 0;
				}
				if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
					s.lastFlickSpeed[axis] = 0;
				}
				
				s.slowDownRatio[axis] = 0.95;
				s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
				s.speedDecelerationRatio[axis] = 1;
			},

			calculateOverBoundsAnimOffset: function(axis, speed) {
				if(!s.backAnimStarted[axis]) {

					if(_panOffset[axis] > _currPanBounds.min[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.min[axis];
						
					} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.max[axis];
					}

					if(s.backAnimDestination[axis] !== undefined) {
						s.slowDownRatio[axis] = 0.7;
						s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
						if(s.speedDecelerationRatioAbs[axis] < 0.05) {

							s.lastFlickSpeed[axis] = 0;
							s.backAnimStarted[axis] = true;

							_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
								s.backAnimDestination[axis], 
								speed || 300, 
								framework.easing.sine.out, 
								function(pos) {
									_panOffset[axis] = pos;
									_applyCurrentZoomPan();
								}
							);

						}
					}
				}
			},

			// Reduces the speed by slowDownRatio (per 10ms)
			calculateAnimOffset: function(axis) {
				if(!s.backAnimStarted[axis]) {
					s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
												s.slowDownRatioReverse[axis] - 
												s.slowDownRatioReverse[axis] * s.timeDiff / 10);

					s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
					s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
					_panOffset[axis] += s.distanceOffset[axis];

				}
			},

			panAnimLoop: function() {
				if ( _animations.zoomPan ) {
					_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

					s.now = _getCurrentTime();
					s.timeDiff = s.now - s.lastNow;
					s.lastNow = s.now;
					
					s.calculateAnimOffset('x');
					s.calculateAnimOffset('y');

					_applyCurrentZoomPan();
					
					s.calculateOverBoundsAnimOffset('x');
					s.calculateOverBoundsAnimOffset('y');


					if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

						// round pan position
						_panOffset.x = Math.round(_panOffset.x);
						_panOffset.y = Math.round(_panOffset.y);
						_applyCurrentZoomPan();
						
						_stopAnimation('zoomPan');
						return;
					}
				}

			}
		};
		return s;
	},

	_completePanGesture = function(animData) {
		// calculate swipe speed for Y axis (paanning)
		animData.calculateSwipeSpeed('y');

		_currPanBounds = self.currItem.bounds;
		
		animData.backAnimDestination = {};
		animData.backAnimStarted = {};

		// Avoid acceleration animation if speed is too low
		if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
			animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

			// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
			animData.calculateOverBoundsAnimOffset('x');
			animData.calculateOverBoundsAnimOffset('y');
			return true;
		}

		// Animation loop that controls the acceleration after pan gesture ends
		_registerStartAnimation('zoomPan');
		animData.lastNow = _getCurrentTime();
		animData.panAnimLoop();
	},


	_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
		var itemChanged;
		if(!_mainScrollAnimating) {
			_currZoomedItemIndex = _currentItemIndex;
		}


		
		var itemsDiff;

		if(gestureType === 'swipe') {
			var totalShiftDist = _currPoint.x - _startPoint.x,
				isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

			// if container is shifted for more than MIN_SWIPE_DISTANCE, 
			// and last flick gesture was in right direction
			if(totalShiftDist > MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
				// go to prev item
				itemsDiff = -1;
			} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
				// go to next item
				itemsDiff = 1;
			}
		}

		var nextCircle;

		if(itemsDiff) {
			
			_currentItemIndex += itemsDiff;

			if(_currentItemIndex < 0) {
				_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
				nextCircle = true;
			} else if(_currentItemIndex >= _getNumItems()) {
				_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
				nextCircle = true;
			}

			if(!nextCircle || _options.loop) {
				_indexDiff += itemsDiff;
				_currPositionIndex -= itemsDiff;
				itemChanged = true;
			}
			

			
		}

		var animateToX = _slideSize.x * _currPositionIndex;
		var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
		var finishAnimDuration;


		if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
			// "return to current" duration, e.g. when dragging from slide 0 to -1
			finishAnimDuration = 333; 
		} else {
			finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
									animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
									333;

			finishAnimDuration = Math.min(finishAnimDuration, 400);
			finishAnimDuration = Math.max(finishAnimDuration, 250);
		}

		if(_currZoomedItemIndex === _currentItemIndex) {
			itemChanged = false;
		}
		
		_mainScrollAnimating = true;
		
		_shout('mainScrollAnimStart');

		_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
			_moveMainScroll,
			function() {
				_stopAllAnimations();
				_mainScrollAnimating = false;
				_currZoomedItemIndex = -1;
				
				if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
					self.updateCurrItem();
				}
				
				_shout('mainScrollAnimComplete');
			}
		);

		if(itemChanged) {
			self.updateCurrItem(true);
		}

		return itemChanged;
	},

	_calculateZoomLevel = function(touchesDistance) {
		return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
	},

	// Resets zoom if it's out of bounds
	_completeZoomGesture = function() {
		var destZoomLevel = _currZoomLevel,
			minZoomLevel = _getMinZoomLevel(),
			maxZoomLevel = _getMaxZoomLevel();

		if ( _currZoomLevel < minZoomLevel ) {
			destZoomLevel = minZoomLevel;
		} else if ( _currZoomLevel > maxZoomLevel ) {
			destZoomLevel = maxZoomLevel;
		}

		var destOpacity = 1,
			onUpdate,
			initialOpacity = _bgOpacity;

		if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
			//_closedByScroll = true;
			self.close();
			return true;
		}

		if(_opacityChanged) {
			onUpdate = function(now) {
				_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
			};
		}

		self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
		return true;
	};


_registerModule('Gestures', {
	publicMethods: {

		initGestures: function() {

			// helper function that builds touch/pointer/mouse events
			var addEventNames = function(pref, down, move, up, cancel) {
				_dragStartEvent = pref + down;
				_dragMoveEvent = pref + move;
				_dragEndEvent = pref + up;
				if(cancel) {
					_dragCancelEvent = pref + cancel;
				} else {
					_dragCancelEvent = '';
				}
			};

			_pointerEventEnabled = _features.pointerEvent;
			if(_pointerEventEnabled && _features.touch) {
				// we don't need touch events, if browser supports pointer events
				_features.touch = false;
			}

			if(_pointerEventEnabled) {
				if(navigator.msPointerEnabled) {
					// IE10 pointer events are case-sensitive
					addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
				} else {
					addEventNames('pointer', 'down', 'move', 'up', 'cancel');
				}
			} else if(_features.touch) {
				addEventNames('touch', 'start', 'move', 'end', 'cancel');
				_likelyTouchDevice = true;
			} else {
				addEventNames('mouse', 'down', 'move', 'up');	
			}

			_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
			_downEvents = _dragStartEvent;

			if(_pointerEventEnabled && !_likelyTouchDevice) {
				_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
			}
			// make variable public
			self.likelyTouchDevice = _likelyTouchDevice; 
			
			_globalEventHandlers[_dragStartEvent] = _onDragStart;
			_globalEventHandlers[_dragMoveEvent] = _onDragMove;
			_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

			if(_dragCancelEvent) {
				_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
			}

			// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
			if(_features.touch) {
				_downEvents += ' mousedown';
				_upMoveEvents += ' mousemove mouseup';
				_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
				_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
				_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
			}

			if(!_likelyTouchDevice) {
				// don't allow pan to next slide from zoomed state on Desktop
				_options.allowPanToNext = false;
			}
		}

	}
});


/*>>gestures*/

/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */


var _showOrHideTimeout,
	_showOrHide = function(item, img, out, completeFn) {

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}

		_initialZoomRunning = true;
		_initialContentSet = true;
		
		// dimensions of small thumbnail {x:,y:,w:}.
		// Height is optional, as calculated based on large image.
		var thumbBounds; 
		if(item.initialLayout) {
			thumbBounds = item.initialLayout;
			item.initialLayout = null;
		} else {
			thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
		}

		var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

		var onComplete = function() {
			_stopAnimation('initialZoom');
			if(!out) {
				_applyBgOpacity(1);
				if(img) {
					img.style.display = 'block';
				}
				framework.addClass(template, 'pswp--animated-in');
				_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
			} else {
				self.template.removeAttribute('style');
				self.bg.removeAttribute('style');
			}

			if(completeFn) {
				completeFn();
			}
			_initialZoomRunning = false;
		};

		// if bounds aren't provided, just open gallery without animation
		if(!duration || !thumbBounds || thumbBounds.x === undefined) {

			_shout('initialZoom' + (out ? 'Out' : 'In') );

			_currZoomLevel = item.initialZoomLevel;
			_equalizePoints(_panOffset,  item.initialPosition );
			_applyCurrentZoomPan();

			template.style.opacity = out ? 0 : 1;
			_applyBgOpacity(1);

			if(duration) {
				setTimeout(function() {
					onComplete();
				}, duration);
			} else {
				onComplete();
			}

			return;
		}

		var startAnimation = function() {
			var closeWithRaf = _closedByScroll,
				fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
			
			// apply hw-acceleration to image
			if(item.miniImg) {
				item.miniImg.style.webkitBackfaceVisibility = 'hidden';
			}

			if(!out) {
				_currZoomLevel = thumbBounds.w / item.w;
				_panOffset.x = thumbBounds.x;
				_panOffset.y = thumbBounds.y - _initalWindowScrollY;

				self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
				_applyCurrentZoomPan();
			}

			_registerStartAnimation('initialZoom');
			
			if(out && !closeWithRaf) {
				framework.removeClass(template, 'pswp--animated-in');
			}

			if(fadeEverything) {
				if(out) {
					framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
				} else {
					setTimeout(function() {
						framework.addClass(template, 'pswp--animate_opacity');
					}, 30);
				}
			}

			_showOrHideTimeout = setTimeout(function() {

				_shout('initialZoom' + (out ? 'Out' : 'In') );
				

				if(!out) {

					// "in" animation always uses CSS transitions (instead of rAF).
					// CSS transition work faster here, 
					// as developer may also want to animate other things, 
					// like ui on top of sliding area, which can be animated just via CSS
					
					_currZoomLevel = item.initialZoomLevel;
					_equalizePoints(_panOffset,  item.initialPosition );
					_applyCurrentZoomPan();
					_applyBgOpacity(1);

					if(fadeEverything) {
						template.style.opacity = 1;
					} else {
						_applyBgOpacity(1);
					}

					_showOrHideTimeout = setTimeout(onComplete, duration + 20);
				} else {

					// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
					var destZoomLevel = thumbBounds.w / item.w,
						initialPanOffset = {
							x: _panOffset.x,
							y: _panOffset.y
						},
						initialZoomLevel = _currZoomLevel,
						initalBgOpacity = _bgOpacity,
						onUpdate = function(now) {
							
							if(now === 1) {
								_currZoomLevel = destZoomLevel;
								_panOffset.x = thumbBounds.x;
								_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
							} else {
								_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
								_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
								_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
							}
							
							_applyCurrentZoomPan();
							if(fadeEverything) {
								template.style.opacity = 1 - now;
							} else {
								_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
							}
						};

					if(closeWithRaf) {
						_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
					} else {
						onUpdate(1);
						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					}
				}
			
			}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
					// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
					// Which avoids lag at the beginning of scale transition.
		};
		startAnimation();

		
	};

/*>>show-hide-transition*/

/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/

var _items,
	_tempPanAreaSize = {},
	_imagesToAppendPool = [],
	_initialContentSet,
	_initialZoomRunning,
	_controllerDefaultOptions = {
		index: 0,
		errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
		forceProgressiveLoading: false, // TODO
		preload: [1,1],
		getNumItemsFn: function() {
			return _items.length;
		}
	};


var _getItemAt,
	_getNumItems,
	_initialIsLoop,
	_getZeroBounds = function() {
		return {
			center:{x:0,y:0}, 
			max:{x:0,y:0}, 
			min:{x:0,y:0}
		};
	},
	_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
		var bounds = item.bounds;

		// position of element when it's centered
		bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
		bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

		// maximum pan position
		bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
							Math.round(_tempPanAreaSize.x - realPanElementW) : 
							bounds.center.x;
		
		bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
							Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
							bounds.center.y;
		
		// minimum pan position
		bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
		bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
	},
	_calculateItemSize = function(item, viewportSize, zoomLevel) {

		if (item.src && !item.loadError) {
			var isInitial = !zoomLevel;
			
			if(isInitial) {
				if(!item.vGap) {
					item.vGap = {top:0,bottom:0};
				}
				// allows overriding vertical margin for individual items
				_shout('parseVerticalMargin', item);
			}


			_tempPanAreaSize.x = viewportSize.x;
			_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

			if (isInitial) {
				var hRatio = _tempPanAreaSize.x / item.w;
				var vRatio = _tempPanAreaSize.y / item.h;

				item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
				//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

				var scaleMode = _options.scaleMode;

				if (scaleMode === 'orig') {
					zoomLevel = 1;
				} else if (scaleMode === 'fit') {
					zoomLevel = item.fitRatio;
				}

				if (zoomLevel > 1) {
					zoomLevel = 1;
				}

				item.initialZoomLevel = zoomLevel;
				
				if(!item.bounds) {
					// reuse bounds object
					item.bounds = _getZeroBounds(); 
				}
			}

			if(!zoomLevel) {
				return;
			}

			_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

			if (isInitial && zoomLevel === item.initialZoomLevel) {
				item.initialPosition = item.bounds.center;
			}

			return item.bounds;
		} else {
			item.w = item.h = 0;
			item.initialZoomLevel = item.fitRatio = 1;
			item.bounds = _getZeroBounds();
			item.initialPosition = item.bounds.center;

			// if it's not image, we return zero bounds (content is not zoomable)
			return item.bounds;
		}
		
	},

	


	_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
		

		if(item.loadError) {
			return;
		}

		if(img) {

			item.imageAppended = true;
			_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
			
			baseDiv.appendChild(img);

			if(keepPlaceholder) {
				setTimeout(function() {
					if(item && item.loaded && item.placeholder) {
						item.placeholder.style.display = 'none';
						item.placeholder = null;
					}
				}, 500);
			}
		}
	},
	


	_preloadImage = function(item) {
		item.loading = true;
		item.loaded = false;
		var img = item.img = framework.createEl('pswp__img', 'img');
		var onComplete = function() {
			item.loading = false;
			item.loaded = true;

			if(item.loadComplete) {
				item.loadComplete(item);
			} else {
				item.img = null; // no need to store image object
			}
			img.onload = img.onerror = null;
			img = null;
		};
		img.onload = onComplete;
		img.onerror = function() {
			item.loadError = true;
			onComplete();
		};		

		img.src = item.src;// + '?a=' + Math.random();

		return img;
	},
	_checkForError = function(item, cleanUp) {
		if(item.src && item.loadError && item.container) {

			if(cleanUp) {
				item.container.innerHTML = '';
			}

			item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
			return true;
			
		}
	},
	_setImageSize = function(item, img, maxRes) {
		if(!item.src) {
			return;
		}

		if(!img) {
			img = item.container.lastChild;
		}

		var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
			h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
		
		if(item.placeholder && !item.loaded) {
			item.placeholder.style.width = w + 'px';
			item.placeholder.style.height = h + 'px';
		}

		img.style.width = w + 'px';
		img.style.height = h + 'px';
	},
	_appendImagesPool = function() {

		if(_imagesToAppendPool.length) {
			var poolItem;

			for(var i = 0; i < _imagesToAppendPool.length; i++) {
				poolItem = _imagesToAppendPool[i];
				if( poolItem.holder.index === poolItem.index ) {
					_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
				}
			}
			_imagesToAppendPool = [];
		}
	};
	


_registerModule('Controller', {

	publicMethods: {

		lazyLoadItem: function(index) {
			index = _getLoopedId(index);
			var item = _getItemAt(index);

			if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
				return;
			}

			_shout('gettingData', index, item);

			if (!item.src) {
				return;
			}

			_preloadImage(item);
		},
		initController: function() {
			framework.extend(_options, _controllerDefaultOptions, true);
			self.items = _items = items;
			_getItemAt = self.getItemAt;
			_getNumItems = _options.getNumItemsFn; //self.getNumItems;



			_initialIsLoop = _options.loop;
			if(_getNumItems() < 3) {
				_options.loop = false; // disable loop if less then 3 items
			}

			_listen('beforeChange', function(diff) {

				var p = _options.preload,
					isNext = diff === null ? true : (diff >= 0),
					preloadBefore = Math.min(p[0], _getNumItems() ),
					preloadAfter = Math.min(p[1], _getNumItems() ),
					i;


				for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
					self.lazyLoadItem(_currentItemIndex+i);
				}
				for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
					self.lazyLoadItem(_currentItemIndex-i);
				}
			});

			_listen('initialLayout', function() {
				self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			});

			_listen('mainScrollAnimComplete', _appendImagesPool);
			_listen('initialZoomInEnd', _appendImagesPool);



			_listen('destroy', function() {
				var item;
				for(var i = 0; i < _items.length; i++) {
					item = _items[i];
					// remove reference to DOM elements, for GC
					if(item.container) {
						item.container = null; 
					}
					if(item.placeholder) {
						item.placeholder = null;
					}
					if(item.img) {
						item.img = null;
					}
					if(item.preloader) {
						item.preloader = null;
					}
					if(item.loadError) {
						item.loaded = item.loadError = false;
					}
				}
				_imagesToAppendPool = null;
			});
		},


		getItemAt: function(index) {
			if (index >= 0) {
				return _items[index] !== undefined ? _items[index] : false;
			}
			return false;
		},

		allowProgressiveImg: function() {
			// 1. Progressive image loading isn't working on webkit/blink 
			//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
			//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
			//    
			// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
			//    That's why it's disabled on touch devices (mainly because of swipe transition)
			//    
			// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

			// Don't allow progressive loading on non-large touch devices
			return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
			// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
		},

		setContent: function(holder, index) {

			if(_options.loop) {
				index = _getLoopedId(index);
			}

			var prevItem = self.getItemAt(holder.index);
			if(prevItem) {
				prevItem.container = null;
			}
	
			var item = self.getItemAt(index),
				img;
			
			if(!item) {
				holder.el.innerHTML = '';
				return;
			}

			// allow to override data
			_shout('gettingData', index, item);

			holder.index = index;
			holder.item = item;

			// base container DIV is created only once for each of 3 holders
			var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

			

			if(!item.src && item.html) {
				if(item.html.tagName) {
					baseDiv.appendChild(item.html);
				} else {
					baseDiv.innerHTML = item.html;
				}
			}

			_checkForError(item);

			_calculateItemSize(item, _viewportSize);
			
			if(item.src && !item.loadError && !item.loaded) {

				item.loadComplete = function(item) {

					// gallery closed before image finished loading
					if(!_isOpen) {
						return;
					}

					// check if holder hasn't changed while image was loading
					if(holder && holder.index === index ) {
						if( _checkForError(item, true) ) {
							item.loadComplete = item.img = null;
							_calculateItemSize(item, _viewportSize);
							_applyZoomPanToItem(item);

							if(holder.index === _currentItemIndex) {
								// recalculate dimensions
								self.updateCurrZoomItem();
							}
							return;
						}
						if( !item.imageAppended ) {
							if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
								_imagesToAppendPool.push({
									item:item,
									baseDiv:baseDiv,
									img:item.img,
									index:index,
									holder:holder,
									clearPlaceholder:true
								});
							} else {
								_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
							}
						} else {
							// remove preloader & mini-img
							if(!_initialZoomRunning && item.placeholder) {
								item.placeholder.style.display = 'none';
								item.placeholder = null;
							}
						}
					}

					item.loadComplete = null;
					item.img = null; // no need to store image element after it's added

					_shout('imageLoadComplete', index, item);
				};

				if(framework.features.transform) {
					
					var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
					placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

					var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
					if(item.msrc) {
						placeholder.src = item.msrc;
					}
					
					_setImageSize(item, placeholder);

					baseDiv.appendChild(placeholder);
					item.placeholder = placeholder;

				}
				

				

				if(!item.loading) {
					_preloadImage(item);
				}


				if( self.allowProgressiveImg() ) {
					// just append image
					if(!_initialContentSet && _features.transform) {
						_imagesToAppendPool.push({
							item:item, 
							baseDiv:baseDiv, 
							img:item.img, 
							index:index, 
							holder:holder
						});
					} else {
						_appendImage(index, item, baseDiv, item.img, true, true);
					}
				}
				
			} else if(item.src && !item.loadError) {
				// image object is created every time, due to bugs of image loading & delay when switching images
				img = framework.createEl('pswp__img', 'img');
				img.style.opacity = 1;
				img.src = item.src;
				_setImageSize(item, img);
				_appendImage(index, item, baseDiv, img, true);
			}
			

			if(!_initialContentSet && index === _currentItemIndex) {
				_currZoomElementStyle = baseDiv.style;
				_showOrHide(item, (img ||item.img) );
			} else {
				_applyZoomPanToItem(item);
			}

			holder.el.innerHTML = '';
			holder.el.appendChild(baseDiv);
		},

		cleanSlide: function( item ) {
			if(item.img ) {
				item.img.onload = item.img.onerror = null;
			}
			item.loaded = item.loading = item.img = item.imageAppended = false;
		}

	}
});

/*>>items-controller*/

/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */

var tapTimer,
	tapReleasePoint = {},
	_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
		var e = document.createEvent( 'CustomEvent' ),
			eDetail = {
				origEvent:origEvent, 
				target:origEvent.target, 
				releasePoint: releasePoint, 
				pointerType:pointerType || 'touch'
			};

		e.initCustomEvent( 'pswpTap', true, true, eDetail );
		origEvent.target.dispatchEvent(e);
	};

_registerModule('Tap', {
	publicMethods: {
		initTap: function() {
			_listen('firstTouchStart', self.onTapStart);
			_listen('touchRelease', self.onTapRelease);
			_listen('destroy', function() {
				tapReleasePoint = {};
				tapTimer = null;
			});
		},
		onTapStart: function(touchList) {
			if(touchList.length > 1) {
				clearTimeout(tapTimer);
				tapTimer = null;
			}
		},
		onTapRelease: function(e, releasePoint) {
			if(!releasePoint) {
				return;
			}

			if(!_moved && !_isMultitouch && !_numAnimations) {
				var p0 = releasePoint;
				if(tapTimer) {
					clearTimeout(tapTimer);
					tapTimer = null;

					// Check if taped on the same place
					if ( _isNearbyPoints(p0, tapReleasePoint) ) {
						_shout('doubleTap', p0);
						return;
					}
				}

				if(releasePoint.type === 'mouse') {
					_dispatchTapEvent(e, releasePoint, 'mouse');
					return;
				}

				var clickedTagName = e.target.tagName.toUpperCase();
				// avoid double tap delay on buttons and elements that have class pswp__single-tap
				if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
					_dispatchTapEvent(e, releasePoint);
					return;
				}

				_equalizePoints(tapReleasePoint, p0);

				tapTimer = setTimeout(function() {
					_dispatchTapEvent(e, releasePoint);
					tapTimer = null;
				}, 300);
			}
		}
	}
});

/*>>tap*/

/*>>desktop-zoom*/
/**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 * 
 */

var _wheelDelta;
	
_registerModule('DesktopZoom', {

	publicMethods: {

		initDesktopZoom: function() {

			if(_oldIE) {
				// no zoom for old IE (<=8)
				return;
			}

			if(_likelyTouchDevice) {
				// if detected hardware touch support, we wait until mouse is used,
				// and only then apply desktop-zoom features
				_listen('mouseUsed', function() {
					self.setupDesktopZoom();
				});
			} else {
				self.setupDesktopZoom(true);
			}

		},

		setupDesktopZoom: function(onInit) {

			_wheelDelta = {};

			var events = 'wheel mousewheel DOMMouseScroll';
			
			_listen('bindEvents', function() {
				framework.bind(template, events,  self.handleMouseWheel);
			});

			_listen('unbindEvents', function() {
				if(_wheelDelta) {
					framework.unbind(template, events, self.handleMouseWheel);
				}
			});

			self.mouseZoomedIn = false;

			var hasDraggingClass,
				updateZoomable = function() {
					if(self.mouseZoomedIn) {
						framework.removeClass(template, 'pswp--zoomed-in');
						self.mouseZoomedIn = false;
					}
					if(_currZoomLevel < 1) {
						framework.addClass(template, 'pswp--zoom-allowed');
					} else {
						framework.removeClass(template, 'pswp--zoom-allowed');
					}
					removeDraggingClass();
				},
				removeDraggingClass = function() {
					if(hasDraggingClass) {
						framework.removeClass(template, 'pswp--dragging');
						hasDraggingClass = false;
					}
				};

			_listen('resize' , updateZoomable);
			_listen('afterChange' , updateZoomable);
			_listen('pointerDown', function() {
				if(self.mouseZoomedIn) {
					hasDraggingClass = true;
					framework.addClass(template, 'pswp--dragging');
				}
			});
			_listen('pointerUp', removeDraggingClass);

			if(!onInit) {
				updateZoomable();
			}
			
		},

		handleMouseWheel: function(e) {

			if(_currZoomLevel <= self.currItem.fitRatio) {
				if( _options.modal ) {

					if (!_options.closeOnScroll || _numAnimations || _isDragging) {
						e.preventDefault();
					} else if(_transformKey && Math.abs(e.deltaY) > 2) {
						// close PhotoSwipe
						// if browser supports transforms & scroll changed enough
						_closedByScroll = true;
						self.close();
					}

				}
				return true;
			}

			// allow just one event to fire
			e.stopPropagation();

			// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
			_wheelDelta.x = 0;

			if('deltaX' in e) {
				if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
					// 18 - average line height
					_wheelDelta.x = e.deltaX * 18;
					_wheelDelta.y = e.deltaY * 18;
				} else {
					_wheelDelta.x = e.deltaX;
					_wheelDelta.y = e.deltaY;
				}
			} else if('wheelDelta' in e) {
				if(e.wheelDeltaX) {
					_wheelDelta.x = -0.16 * e.wheelDeltaX;
				}
				if(e.wheelDeltaY) {
					_wheelDelta.y = -0.16 * e.wheelDeltaY;
				} else {
					_wheelDelta.y = -0.16 * e.wheelDelta;
				}
			} else if('detail' in e) {
				_wheelDelta.y = e.detail;
			} else {
				return;
			}

			_calculatePanBounds(_currZoomLevel, true);

			var newPanX = _panOffset.x - _wheelDelta.x,
				newPanY = _panOffset.y - _wheelDelta.y;

			// only prevent scrolling in nonmodal mode when not at edges
			if (_options.modal ||
				(
				newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
				newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
				) ) {
				e.preventDefault();
			}

			// TODO: use rAF instead of mousewheel?
			self.panTo(newPanX, newPanY);
		},

		toggleDesktopZoom: function(centerPoint) {
			centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

			var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
			var zoomOut = _currZoomLevel === doubleTapZoomLevel;
			
			self.mouseZoomedIn = !zoomOut;

			self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
			framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
		}

	}
});


/*>>desktop-zoom*/

/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */


var _historyDefaultOptions = {
	history: true,
	galleryUID: 1
};

var _historyUpdateTimeout,
	_hashChangeTimeout,
	_hashAnimCheckTimeout,
	_hashChangedByScript,
	_hashChangedByHistory,
	_hashReseted,
	_initialHash,
	_historyChanged,
	_closedFromURL,
	_urlChangedOnce,
	_windowLoc,

	_supportsPushState,

	_getHash = function() {
		return _windowLoc.hash.substring(1);
	},
	_cleanHistoryTimeouts = function() {

		if(_historyUpdateTimeout) {
			clearTimeout(_historyUpdateTimeout);
		}

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}
	},

	// pid - Picture index
	// gid - Gallery index
	_parseItemIndexFromURL = function() {
		var hash = _getHash(),
			params = {};

		if(hash.length < 5) { // pid=1
			return params;
		}

		var i, vars = hash.split('&');
		for (i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');	
			if(pair.length < 2) {
				continue;
			}
			params[pair[0]] = pair[1];
		}
		if(_options.galleryPIDs) {
			// detect custom pid in hash and search for it among the items collection
			var searchfor = params.pid;
			params.pid = 0; // if custom pid cannot be found, fallback to the first item
			for(i = 0; i < _items.length; i++) {
				if(_items[i].pid === searchfor) {
					params.pid = i;
					break;
				}
			}
		} else {
			params.pid = parseInt(params.pid,10)-1;
		}
		if( params.pid < 0 ) {
			params.pid = 0;
		}
		return params;
	},
	_updateHash = function() {

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}


		if(_numAnimations || _isDragging) {
			// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
			// that's why we update hash only when no animations running
			_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
			return;
		}
		
		if(_hashChangedByScript) {
			clearTimeout(_hashChangeTimeout);
		} else {
			_hashChangedByScript = true;
		}


		var pid = (_currentItemIndex + 1);
		var item = _getItemAt( _currentItemIndex );
		if(item.hasOwnProperty('pid')) {
			// carry forward any custom pid assigned to the item
			pid = item.pid;
		}
		var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

		if(!_historyChanged) {
			if(_windowLoc.hash.indexOf(newHash) === -1) {
				_urlChangedOnce = true;
			}
			// first time - add new hisory record, then just replace
		}

		var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

		if( _supportsPushState ) {

			if('#' + newHash !== window.location.hash) {
				history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
			}

		} else {
			if(_historyChanged) {
				_windowLoc.replace( newURL );
			} else {
				_windowLoc.hash = newHash;
			}
		}
		
		

		_historyChanged = true;
		_hashChangeTimeout = setTimeout(function() {
			_hashChangedByScript = false;
		}, 60);
	};



	

_registerModule('History', {

	

	publicMethods: {
		initHistory: function() {

			framework.extend(_options, _historyDefaultOptions, true);

			if( !_options.history ) {
				return;
			}


			_windowLoc = window.location;
			_urlChangedOnce = false;
			_closedFromURL = false;
			_historyChanged = false;
			_initialHash = _getHash();
			_supportsPushState = ('pushState' in history);


			if(_initialHash.indexOf('gid=') > -1) {
				_initialHash = _initialHash.split('&gid=')[0];
				_initialHash = _initialHash.split('?gid=')[0];
			}
			

			_listen('afterChange', self.updateURL);
			_listen('unbindEvents', function() {
				framework.unbind(window, 'hashchange', self.onHashChange);
			});


			var returnToOriginal = function() {
				_hashReseted = true;
				if(!_closedFromURL) {

					if(_urlChangedOnce) {
						history.back();
					} else {

						if(_initialHash) {
							_windowLoc.hash = _initialHash;
						} else {
							if (_supportsPushState) {

								// remove hash from url without refreshing it or scrolling to top
								history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
							} else {
								_windowLoc.hash = '';
							}
						}
					}
					
				}

				_cleanHistoryTimeouts();
			};


			_listen('unbindEvents', function() {
				if(_closedByScroll) {
					// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
					// this is done to keep the scroll position
					returnToOriginal();
				}
			});
			_listen('destroy', function() {
				if(!_hashReseted) {
					returnToOriginal();
				}
			});
			_listen('firstUpdate', function() {
				_currentItemIndex = _parseItemIndexFromURL().pid;
			});

			

			
			var index = _initialHash.indexOf('pid=');
			if(index > -1) {
				_initialHash = _initialHash.substring(0, index);
				if(_initialHash.slice(-1) === '&') {
					_initialHash = _initialHash.slice(0, -1);
				}
			}
			

			setTimeout(function() {
				if(_isOpen) { // hasn't destroyed yet
					framework.bind(window, 'hashchange', self.onHashChange);
				}
			}, 40);
			
		},
		onHashChange: function() {

			if(_getHash() === _initialHash) {

				_closedFromURL = true;
				self.close();
				return;
			}
			if(!_hashChangedByScript) {

				_hashChangedByHistory = true;
				self.goTo( _parseItemIndexFromURL().pid );
				_hashChangedByHistory = false;
			}
			
		},
		updateURL: function() {

			// Delay the update of URL, to avoid lag during transition, 
			// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
			
			_cleanHistoryTimeouts();
			

			if(_hashChangedByHistory) {
				return;
			}

			if(!_historyChanged) {
				_updateHash(); // first time
			} else {
				_historyUpdateTimeout = setTimeout(_updateHash, 800);
			}
		}
	
	}
});


/*>>history*/
	framework.extend(self, publicMethods); };
	return PhotoSwipe;
});
;/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) { 
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipeUI_Default = factory();
	}
})(this, function () {

	'use strict';



var PhotoSwipeUI_Default =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
		_shareButton,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
			timeToIdle: 4000, 
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s
			
			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},
				
			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.getAttribute('class') || '',
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;
			
			
			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}
			
			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' + 
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}
			
			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' + 
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {
			
				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false); 
								// items-controller.js function allowProgressiveImg
							}
							
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);
					
				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {
				
				var bars = _options.barsSize; 
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}
				
				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {
					
					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{ 
			name: 'caption', 
			option: 'captionEl',
			onInit: function(el) {  
				_captionContainer = el; 
			} 
		},
		{ 
			name: 'share-modal', 
			option: 'shareEl',
			onInit: function(el) {  
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--share', 
			option: 'shareEl',
			onInit: function(el) { 
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--zoom', 
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		},
		{ 
			name: 'counter', 
			option: 'counterEl',
			onInit: function(el) {  
				_indexIndicator = el;
			} 
		},
		{ 
			name: 'button--close', 
			option: 'closeEl',
			onTap: pswp.close
		},
		{ 
			name: 'button--arrow--left', 
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{ 
			name: 'button--arrow--right', 
			option: 'arrowEl',
			onTap: pswp.next
		},
		{ 
			name: 'button--fs', 
			option: 'fullscreenEl',
			onTap: function() {  
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			} 
		},
		{ 
			name: 'preloader', 
			option: 'preloaderEl',
			onInit: function(el) {  
				_loadingIndicator = el;
			} 
		}

	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options
							
							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}
							
							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};


	

	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

		// create local link
		_listen = pswp.listen;


		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t && 
				t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
				( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
			) {
				preventObj.prevent = false;
			}
		});

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});
		

		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);
		
		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {
			
			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}
		
		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
										_options.indexIndicatorSep + 
										_options.getNumItemsFn();
		}
	};
	
	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}
			
		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}
			
		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};

			

		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() { 
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll; 
				_options.closeOnScroll = false; 

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK](); 
				}
			};
			api.exit = function() { 
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK](); 

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI_Default;


});

;(function (root, factory) {
	if (typeof exports === 'object') {
		module.exports = factory(root);
	} else if (typeof define === 'function' && define.amd) {
		define('colors', [], function () {
			return factory(root);
		});
	} else {
		root.Colors = factory(root);
	}
}(this, function(window, undefined) {
	"use strict"

	var _valueRanges = {
			rgb:   {r: [0, 255], g: [0, 255], b: [0, 255]},
			hsv:   {h: [0, 360], s: [0, 100], v: [0, 100]},
			hsl:   {h: [0, 360], s: [0, 100], l: [0, 100]},
			alpha: {alpha: [0, 1]},
			HEX:   {HEX: [0, 16777215]} // maybe we don't need this
		},

		_Math = window.Math,
		_round = _Math.round,

		_instance = {},
		_colors = {},

		grey = {r: 0.298954, g: 0.586434, b: 0.114612}, // CIE-XYZ 1931
		luminance = {r: 0.2126, g: 0.7152, b: 0.0722}, // W3C 2.0

		Colors = function(options) {
			this.colors = {RND: {}};
			this.options = {
				color: 'rgba(0,0,0,0)', // init value(s)...
				grey: grey,
				luminance: luminance,
				valueRanges: _valueRanges
				// customBG: '#808080'
				// convertCallback: undefined,
				// allMixDetails: false
			};
			initInstance(this, options || {});
		},
		initInstance = function(THIS, options) {
			var importColor,
				_options = THIS.options,
				customBG;

			focusInstance(THIS);
			for (var option in options) {
				if (options[option] !== undefined) _options[option] = options[option];
			}
			customBG = _options.customBG;
			_options.customBG = (typeof customBG === 'string') ? ColorConverter.txt2color(customBG).rgb : customBG;
			_colors = setColor(THIS.colors, _options.color, undefined, true); // THIS.colors = _colors = 
		},
		focusInstance = function(THIS) {
			if (_instance !== THIS) {
				_instance = THIS;
				_colors = THIS.colors;
			}
		};

	Colors.prototype.setColor = function(newCol, type, alpha) {
		focusInstance(this);
		if (newCol) {
			return setColor(this.colors, newCol, type, undefined, alpha);
		} else {
			if (alpha !== undefined) {
				this.colors.alpha = limitValue(alpha, 0, 1);
			}
			return convertColors(type);
		}
	};

	Colors.prototype.setCustomBackground = function(col) { // wild gues,... check again...
		focusInstance(this); // needed???
		this.options.customBG = (typeof col === 'string') ? ColorConverter.txt2color(col).rgb : col;
		// return setColor(this.colors, this.options.customBG, 'rgb', true); // !!!!RGB
		return setColor(this.colors, undefined, 'rgb'); // just recalculate existing
	};

	Colors.prototype.saveAsBackground = function() { // alpha
		focusInstance(this); // needed???
		// return setColor(this.colors, this.colors.RND.rgb, 'rgb', true);
		return setColor(this.colors, undefined, 'rgb', true);
	};

	Colors.prototype.toString = function(colorMode, forceAlpha) {
		return ColorConverter.color2text((colorMode || 'rgb').toLowerCase(), this.colors, forceAlpha);
	};

	// ------------------------------------------------------ //
	// ---------- Color calculation related stuff  ---------- //
	// -------------------------------------------------------//

	function setColor(colors, color, type, save, alpha) { // color only full range
		if (typeof color === 'string') {
			var color = ColorConverter.txt2color(color); // new object
			type = color.type;
			_colors[type] = color[type];
			alpha = alpha !== undefined ? alpha : color.alpha;
		} else if (color) {
			for (var n in color) {
				colors[type][n] = limitValue(color[n] / _valueRanges[type][n][1], 0 , 1);
			}
		}
		if (alpha !== undefined) {
			colors.alpha = limitValue(+alpha, 0, 1);
		}
		return convertColors(type, save ? colors : undefined);
	}

	function saveAsBackground(RGB, rgb, alpha) {
		var grey = _instance.options.grey,
			color = {};

		color.RGB = {r: RGB.r, g: RGB.g, b: RGB.b};
		color.rgb = {r: rgb.r, g: rgb.g, b: rgb.b};
		color.alpha = alpha;
		// color.RGBLuminance = getLuminance(RGB);
		color.equivalentGrey = _round(grey.r * RGB.r + grey.g * RGB.g + grey.b * RGB.b);

		color.rgbaMixBlack = mixColors(rgb, {r: 0, g: 0, b: 0}, alpha, 1);
		color.rgbaMixWhite = mixColors(rgb, {r: 1, g: 1, b: 1}, alpha, 1);
		color.rgbaMixBlack.luminance = getLuminance(color.rgbaMixBlack, true);
		color.rgbaMixWhite.luminance = getLuminance(color.rgbaMixWhite, true);

		if (_instance.options.customBG) {
			color.rgbaMixCustom = mixColors(rgb, _instance.options.customBG, alpha, 1);
			color.rgbaMixCustom.luminance = getLuminance(color.rgbaMixCustom, true);
			_instance.options.customBG.luminance = getLuminance(_instance.options.customBG, true);
		}

		return color;
	}

	function convertColors(type, colorObj) {
		// console.time('convertColors');
		var colors = colorObj || _colors,
			convert = ColorConverter,
			options = _instance.options,
			ranges = _valueRanges,
			RND = colors.RND,
			// type = colorType, // || _mode.type,
			modes, mode = '', from = '', // value = '',
			exceptions = {hsl: 'hsv', rgb: type},
			RGB = RND.rgb, SAVE, SMART;

		if (type !== 'alpha') {
			for (var typ in ranges) {
				if (!ranges[typ][typ]) { // no alpha|HEX
					if (type !== typ) {
						from = exceptions[typ] || 'rgb';
						colors[typ] = convert[from + '2' + typ](colors[from]);
					}

					if (!RND[typ]) RND[typ] = {};
					modes = colors[typ];
					for(mode in modes) {
						RND[typ][mode] = _round(modes[mode] * ranges[typ][mode][1]);
					}
				}
			}

			RGB = RND.rgb;
			colors.HEX = convert.RGB2HEX(RGB);
			colors.equivalentGrey =
				options.grey.r * colors.rgb.r +
				options.grey.g * colors.rgb.g +
				options.grey.b * colors.rgb.b;
			colors.webSave = SAVE = getClosestWebColor(RGB, 51);
			// colors.webSave.HEX = convert.RGB2HEX(colors.webSave);
			colors.webSmart = SMART = getClosestWebColor(RGB, 17);
			// colors.webSmart.HEX = convert.RGB2HEX(colors.webSmart);
			colors.saveColor =
				RGB.r === SAVE.r && RGB.g === SAVE.g && RGB.b === SAVE.b  ? 'web save' :
				RGB.r === SMART.r && RGB.g === SMART.g && RGB.b === SMART.b  ? 'web smart' : '';
			colors.hueRGB = ColorConverter.hue2RGB(colors.hsv.h);

			if (colorObj) {
				colors.background = saveAsBackground(RGB, colors.rgb, colors.alpha);
			}
		} // else RGB = RND.rgb;

		var rgb = colors.rgb, // for better minification...
			alpha = colors.alpha,
			luminance = 'luminance',
			background = colors.background,
			rgbaMixBlack, rgbaMixWhite, rgbaMixCustom, 
			rgbaMixBG, rgbaMixBGMixBlack, rgbaMixBGMixWhite, rgbaMixBGMixCustom;

		rgbaMixBlack = mixColors(rgb, {r: 0, g: 0, b: 0}, alpha, 1);
		rgbaMixBlack[luminance] = getLuminance(rgbaMixBlack, true);
		colors.rgbaMixBlack = rgbaMixBlack;

		rgbaMixWhite = mixColors(rgb, {r: 1, g: 1, b: 1}, alpha, 1);
		rgbaMixWhite[luminance] = getLuminance(rgbaMixWhite, true);
		colors.rgbaMixWhite = rgbaMixWhite;

		if (options.customBG) {
			rgbaMixBGMixCustom = mixColors(rgb, background.rgbaMixCustom, alpha, 1);
			rgbaMixBGMixCustom[luminance] = getLuminance(rgbaMixBGMixCustom, true);
			rgbaMixBGMixCustom.WCAG2Ratio = getWCAG2Ratio(rgbaMixBGMixCustom[luminance],
				background.rgbaMixCustom[luminance]);
			colors.rgbaMixBGMixCustom = rgbaMixBGMixCustom;
			/* ------ */
			rgbaMixBGMixCustom.luminanceDelta = _Math.abs(
				rgbaMixBGMixCustom[luminance] - background.rgbaMixCustom[luminance]);
			rgbaMixBGMixCustom.hueDelta = getHueDelta(background.rgbaMixCustom, rgbaMixBGMixCustom, true);
			/* ------ */
		}

		colors.RGBLuminance = getLuminance(RGB);
		colors.HUELuminance = getLuminance(colors.hueRGB);

		// renderVars.readyToRender = true;
		if (options.convertCallback) {
			options.convertCallback(colors, type); //, convert); //, _mode);
		}

		// console.timeEnd('convertColors')
		// if (colorObj)
		return colors;
	}


	// ------------------------------------------------------ //
	// ------------------ color conversion ------------------ //
	// -------------------------------------------------------//

	var ColorConverter = {
		txt2color: function(txt) {
			var color = {},
				parts = txt.replace(/(?:#|\)|%)/g, '').split('('),
				values = (parts[1] || '').split(/,\s*/),
				type = parts[1] ? parts[0].substr(0, 3) : 'rgb',
				m = '';

			color.type = type;
			color[type] = {};
			if (parts[1]) {
				for (var n = 3; n--; ) {
					m = type[n] || type.charAt(n); // IE7
					color[type][m] = +values[n] / _valueRanges[type][m][1];
				}
			} else {
				color.rgb = ColorConverter.HEX2rgb(parts[0]);
			}
			// color.color = color[type];
			color.alpha = values[3] ? +values[3] : 1;

			return color;
		},

		color2text: function(colorMode, colors, forceAlpha) {
			var alpha = forceAlpha !== false && _round(colors.alpha * 100) / 100,
				hasAlpha = typeof alpha === 'number' &&
					forceAlpha !== false && (forceAlpha || alpha !== 1),
				RGB = colors.RND.rgb,
				HSL = colors.RND.hsl,
				shouldBeHex = colorMode === 'hex' && hasAlpha,
				isHex = colorMode === 'hex' && !shouldBeHex,
				isRgb = colorMode === 'rgb' || shouldBeHex,
				innerText = isRgb ? RGB.r + ', ' + RGB.g + ', ' + RGB.b :
					!isHex ? HSL.h + ', ' + HSL.s + '%, ' + HSL.l + '%' :
					'#' + colors.HEX;

			return isHex ? innerText : (shouldBeHex ? 'rgb' : colorMode) + 
				(hasAlpha ? 'a' : '') + '(' + innerText +
				(hasAlpha ? ', ' + alpha : '') + ')';
		},

		RGB2HEX: function(RGB) {
			return (
				(RGB.r < 16 ? '0' : '') + RGB.r.toString(16) +
				(RGB.g < 16 ? '0' : '') + RGB.g.toString(16) +
				(RGB.b < 16 ? '0' : '') + RGB.b.toString(16)
			).toUpperCase();
		},

		HEX2rgb: function(HEX) {
			HEX = HEX.split(''); // IE7
			return {
				r: +('0x' + HEX[0] + HEX[HEX[3] ? 1 : 0]) / 255,
				g: +('0x' + HEX[HEX[3] ? 2 : 1] + (HEX[3] || HEX[1])) / 255,
				b: +('0x' + (HEX[4] || HEX[2]) + (HEX[5] || HEX[2])) / 255
			};
		},

		hue2RGB: function(hue) {
			var h = hue * 6,
				mod = ~~h % 6, // _Math.floor(h) -> faster in most browsers
				i = h === 6 ? 0 : (h - mod);

			return {
				r: _round([1, 1 - i, 0, 0, i, 1][mod] * 255),
				g: _round([i, 1, 1, 1 - i, 0, 0][mod] * 255),
				b: _round([0, 0, i, 1, 1, 1 - i][mod] * 255)
			};
		},

		// ------------------------ HSV ------------------------ //

		rgb2hsv: function(rgb) { // faster
			var r = rgb.r,
				g = rgb.g,
				b = rgb.b,
				k = 0, chroma, min, s;

			if (g < b) {
				g = b + (b = g, 0);
				k = -1;
			}
			min = b;
			if (r < g) {
				r = g + (g = r, 0);
				k = -2 / 6 - k;
				min = _Math.min(g, b); // g < b ? g : b; ???
			}
			chroma = r - min;
			s = r ? (chroma / r) : 0;
			return {
				h: s < 1e-15 ? ((_colors && _colors.hsl && _colors.hsl.h) || 0) :
					chroma ? _Math.abs(k + (g - b) / (6 * chroma)) : 0,
				s: r ? (chroma / r) : ((_colors && _colors.hsv && _colors.hsv.s) || 0), // ??_colors.hsv.s || 0
				v: r
			};
		},

		hsv2rgb: function(hsv) {
			var h = hsv.h * 6,
				s = hsv.s,
				v = hsv.v,
				i = ~~h, // _Math.floor(h) -> faster in most browsers
				f = h - i,
				p = v * (1 - s),
				q = v * (1 - f * s),
				t = v * (1 - (1 - f) * s),
				mod = i % 6;

			return {
				r: [v, q, p, p, t, v][mod],
				g: [t, v, v, q, p, p][mod],
				b: [p, p, t, v, v, q][mod]
			};
		},

		// ------------------------ HSL ------------------------ //

		hsv2hsl: function(hsv) {
			var l = (2 - hsv.s) * hsv.v,
				s = hsv.s * hsv.v;

			s = !hsv.s ? 0 : l < 1 ? (l ? s / l : 0) : s / (2 - l);

			return {
				h: hsv.h,
				s: !hsv.v && !s ? ((_colors && _colors.hsl && _colors.hsl.s) || 0) : s, // ???
				l: l / 2
			};
		},

		rgb2hsl: function(rgb, dependent) { // not used in Color
			var hsv = ColorConverter.rgb2hsv(rgb);

			return ColorConverter.hsv2hsl(dependent ? hsv : (_colors.hsv = hsv));
		},

		hsl2rgb: function(hsl) {
			var h = hsl.h * 6,
				s = hsl.s,
				l = hsl.l,
				v = l < 0.5 ? l * (1 + s) : (l + s) - (s * l),
				m = l + l - v,
				sv = v ? ((v - m) / v) : 0,
				sextant = ~~h, // _Math.floor(h) -> faster in most browsers
				fract = h - sextant,
				vsf = v * sv * fract,
				t = m + vsf,
				q = v - vsf,
				mod = sextant % 6;

			return {
				r: [v, q, m, m, t, v][mod],
				g: [t, v, v, q, m, m][mod],
				b: [m, m, t, v, v, q][mod]
			};
		}
	};

	// ------------------------------------------------------ //
	// ------------------ helper functions ------------------ //
	// -------------------------------------------------------//

	function getClosestWebColor(RGB, val) {
		var out = {},
			tmp = 0,
			half = val / 2;

		for (var n in RGB) {
			tmp = RGB[n] % val; // 51 = 'web save', 17 = 'web smart'
			out[n] = RGB[n] + (tmp > half ? val - tmp : -tmp);
		}
		return out;
	}

	function getHueDelta(rgb1, rgb2, nominal) {
		return (_Math.max(rgb1.r - rgb2.r, rgb2.r - rgb1.r) +
				_Math.max(rgb1.g - rgb2.g, rgb2.g - rgb1.g) +
				_Math.max(rgb1.b - rgb2.b, rgb2.b - rgb1.b)) * (nominal ? 255 : 1) / 765;
	}

	function getLuminance(rgb, normalized) {
		var div = normalized ? 1 : 255,
			RGB = [rgb.r / div, rgb.g / div, rgb.b / div],
			luminance = _instance.options.luminance;

		for (var i = RGB.length; i--; ) {
			RGB[i] = RGB[i] <= 0.03928 ? RGB[i] / 12.92 : _Math.pow(((RGB[i] + 0.055) / 1.055), 2.4);
		}
		return ((luminance.r * RGB[0]) + (luminance.g * RGB[1]) + (luminance.b * RGB[2]));
	}

	function mixColors(topColor, bottomColor, topAlpha, bottomAlpha) {
		var newColor = {},
			alphaTop = (topAlpha !== undefined ? topAlpha : 1),
			alphaBottom = (bottomAlpha !== undefined ? bottomAlpha : 1),
			alpha = alphaTop + alphaBottom * (1 - alphaTop); // 1 - (1 - alphaTop) * (1 - alphaBottom);

		for(var n in topColor) {
			newColor[n] = (topColor[n] * alphaTop + bottomColor[n] * alphaBottom * (1 - alphaTop)) / alpha;
		}
		newColor.a = alpha;
		return newColor;
	}

	function getWCAG2Ratio(lum1, lum2) {
		var ratio = 1;

		if (lum1 >= lum2) {
			ratio = (lum1 + 0.05) / (lum2 + 0.05);
		} else {
			ratio = (lum2 + 0.05) / (lum1 + 0.05);
		}
		return _round(ratio * 100) / 100;
	}

	function limitValue(value, min, max) {
		// return _Math.max(min, _Math.min(max, value)); // faster??
		return (value > max ? max : value < min ? min : value);
	}

	return Colors;
}));
;(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(root, require('jquery'), require('colors'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery', 'colors'], function (jQuery, Colors) {
            return factory(root, jQuery, Colors);
        });
    } else {
        factory(root, root.jQuery, root.Colors);
    }
}(this, function(window, $, Colors, undefined){
    'use strict';

    var $document = $(document),
        _instance = $(),
        _colorPicker,
        _color,
        _options,

        _$trigger, _$UI,
        _$z_slider, _$xy_slider,
        _$xy_cursor, _$z_cursor , _$alpha , _$alpha_cursor,

        _pointermove = 'touchmove.tcp mousemove.tcp pointermove.tcp',
        _pointerdown = 'touchstart.tcp mousedown.tcp pointerdown.tcp',
        _pointerup = 'touchend.tcp mouseup.tcp pointerup.tcp',
        _GPU = false,
        _animate = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame || function(cb){cb()},
        _html = '<div class="cp-color-picker"><div class="cp-z-slider"><div c' +
            'lass="cp-z-cursor"></div></div><div class="cp-xy-slider"><div cl' +
            'ass="cp-white"></div><div class="cp-xy-cursor"></div></div><div ' +
            'class="cp-alpha"><div class="cp-alpha-cursor"></div></div></div>',
            // 'grunt-contrib-uglify' puts all this back to one single string...
        _css = '.cp-color-picker{position:absolute;overflow:hidden;padding:6p' +
            'x 6px 0;background-color:#444;color:#bbb;font-family:Arial,Helve' +
            'tica,sans-serif;font-size:12px;font-weight:400;cursor:default;bo' +
            'rder-radius:5px}.cp-color-picker>div{position:relative;overflow:' +
            'hidden}.cp-xy-slider{float:left;height:128px;width:128px;margin-' +
            'bottom:6px;background:linear-gradient(to right,#FFF,rgba(255,255' +
            ',255,0))}.cp-white{height:100%;width:100%;background:linear-grad' +
            'ient(rgba(0,0,0,0),#000)}.cp-xy-cursor{position:absolute;top:0;w' +
            'idth:10px;height:10px;margin:-5px;border:1px solid #fff;border-r' +
            'adius:100%;box-sizing:border-box}.cp-z-slider{float:right;margin' +
            '-left:6px;height:128px;width:20px;background:linear-gradient(red' +
            ' 0,#f0f 17%,#00f 33%,#0ff 50%,#0f0 67%,#ff0 83%,red 100%)}.cp-z-' +
            'cursor{position:absolute;margin-top:-4px;width:100%;border:4px s' +
            'olid #fff;border-color:transparent #fff;box-sizing:border-box}.c' +
            'p-alpha{clear:both;width:100%;height:16px;margin:6px 0;backgroun' +
            'd:linear-gradient(to right,#444,rgba(0,0,0,0))}.cp-alpha-cursor{' +
            'position:absolute;margin-left:-4px;height:100%;border:4px solid ' +
            '#fff;border-color:#fff transparent;box-sizing:border-box}',

        ColorPicker = function(options) {
            _color = this.color = new Colors(options);
            _options = _color.options;
            _colorPicker = this;
        };

    ColorPicker.prototype = {
        render: preRender,
        toggle: toggle
    };

    function extractValue(elm) {
        return elm.value || elm.getAttribute('value') ||
            $(elm).css('background-color') || '#FFF';
    }

    function resolveEventType(event) {
        event = event.originalEvent && event.originalEvent.touches ?
            event.originalEvent.touches[0] : event;

        return event.originalEvent ? event.originalEvent : event;
    }

    function findElement($elm) {
        return $($elm.find(_options.doRender)[0] || $elm[0]);
    }

    function toggle(event) {
        var $this = $(this),
            position = $this.offset(),
            $window = $(window),
            gap = _options.gap;

        if (event) {
            _$trigger = findElement($this);
            _$trigger._colorMode = _$trigger.data('colorMode');

            _colorPicker.$trigger = $this;

            (_$UI || build()).css(
                _options.positionCallback.call(_colorPicker, $this) ||
                {'left': (_$UI._left = position.left) -
                    ((_$UI._left += _$UI._width -
                    ($window.scrollLeft() + $window.width())) + gap > 0 ?
                    _$UI._left + gap : 0),
                'top': (_$UI._top = position.top + $this.outerHeight()) -
                    ((_$UI._top += _$UI._height -
                    ($window.scrollTop() + $window.height())) + gap > 0 ?
                    _$UI._top + gap : 0)
            }).show(_options.animationSpeed, function() {
                if (event === true) { // resize, scroll
                    return;
                }
                _$alpha.toggle(!!_options.opacity)._width = _$alpha.width();
                _$xy_slider._width = _$xy_slider.width();
                _$xy_slider._height = _$xy_slider.height();
                _$z_slider._height = _$z_slider.height();
                _color.setColor(extractValue(_$trigger[0]));

                preRender(true);
            })
            .off('.tcp').on(_pointerdown,
                '.cp-xy-slider,.cp-z-slider,.cp-alpha', pointerdown);
        } else if (_colorPicker.$trigger) {
            $(_$UI).hide(_options.animationSpeed, function() {
                preRender(false);
                _colorPicker.$trigger = null;
            }).off('.tcp');
        }
    }

    function build() {
        $('head')[_options.cssPrepend ? 'prepend' : 'append']
            ('<style type="text/css" id="tinyColorPickerStyles">' +
                (_options.css || _css) + (_options.cssAddon || '') + '</style>');

        return $(_html).css({'margin': _options.margin})
            .appendTo('body')
            .show(0, function() {
                _colorPicker.$UI = _$UI = $(this);

                _GPU = _options.GPU && _$UI.css('perspective') !== undefined;
                _$z_slider = $('.cp-z-slider', this);
                _$xy_slider = $('.cp-xy-slider', this);
                _$xy_cursor = $('.cp-xy-cursor', this);
                _$z_cursor = $('.cp-z-cursor', this);
                _$alpha = $('.cp-alpha', this);
                _$alpha_cursor = $('.cp-alpha-cursor', this);
                _options.buildCallback.call(_colorPicker, _$UI);
                _$UI.prepend('<div>').children().eq(0).css('width',
                    _$UI.children().eq(0).width()); // stabilizer
                _$UI._width = this.offsetWidth;
                _$UI._height = this.offsetHeight;
            }).hide();
    }

    function pointerdown(e) {
        var action = this.className
                .replace(/cp-(.*?)(?:\s*|$)/, '$1').replace('-', '_');

        if ((e.button || e.which) > 1) return;

        e.preventDefault && e.preventDefault();
        e.returnValue = false;

        _$trigger._offset = $(this).offset();

        (action = action === 'xy_slider' ? xy_slider :
            action === 'z_slider' ? z_slider : alpha)(e);
        preRender();

        $document.on(_pointerup, function(e) {
            $document.off('.tcp');
        }).on(_pointermove, function(e) {
            action(e);
            preRender();
        });
    }

    function xy_slider(event) {
        var e = resolveEventType(event),
            x = e.pageX - _$trigger._offset.left,
            y = e.pageY - _$trigger._offset.top;

        _color.setColor({
            s: x / _$xy_slider._width * 100,
            v: 100 - (y / _$xy_slider._height * 100)
        }, 'hsv');
    }

    function z_slider(event) {
        var z = resolveEventType(event).pageY - _$trigger._offset.top;

        _color.setColor({h: 360 - (z / _$z_slider._height * 360)}, 'hsv');
    }

    function alpha(event) {
        var x = resolveEventType(event).pageX - _$trigger._offset.left,
            alpha = x / _$alpha._width;

        _color.setColor({}, 'rgb', alpha);
    }

    function preRender(toggled) {
        var colors = _color.colors,
            hueRGB = colors.hueRGB,
            RGB = colors.RND.rgb,
            HSL = colors.RND.hsl,
            dark = _options.dark,
            light = _options.light,
            colorText = _color.toString(_$trigger._colorMode, _options.forceAlpha),
            HUEContrast = colors.HUELuminance > 0.22 ? dark : light,
            alphaContrast = colors.rgbaMixBlack.luminance > 0.22 ? dark : light,
            h = (1 - colors.hsv.h) * _$z_slider._height,
            s = colors.hsv.s * _$xy_slider._width,
            v = (1 - colors.hsv.v) * _$xy_slider._height,
            a = colors.alpha * _$alpha._width,
            translate3d = _GPU ? 'translate3d' : '',
            triggerValue = _$trigger[0].value,
            hasNoValue = _$trigger[0].hasAttribute('value') && // question this
                triggerValue === '' && toggled !== undefined;

        _$xy_slider._css = {
            backgroundColor: 'rgb(' +
                hueRGB.r + ',' + hueRGB.g + ',' + hueRGB.b + ')'};
        _$xy_cursor._css = {
            transform: translate3d + '(' + s + 'px, ' + v + 'px, 0)',
            left: !_GPU ? s : '',
            top: !_GPU ? v : '',
            borderColor : colors.RGBLuminance > 0.22 ? dark : light
        };
        _$z_cursor._css = {
            transform: translate3d + '(0, ' + h + 'px, 0)',
            top: !_GPU ? h : '',
            borderColor : 'transparent ' + HUEContrast
        };
        _$alpha._css = {backgroundColor: '#' + colors.HEX};
        _$alpha_cursor._css = {
            transform: translate3d + '(' + a + 'px, 0, 0)',
            left: !_GPU ? a : '',
            borderColor : alphaContrast + ' transparent'
        };
        _$trigger._css = {
            backgroundColor : hasNoValue ? '' : colorText,
            color: hasNoValue ? '' :
                colors.rgbaMixBGMixCustom.luminance > 0.22 ? dark : light
        };
        _$trigger.text = hasNoValue ? '' : triggerValue !== colorText ? colorText : '';

        toggled !== undefined ? render(toggled) : _animate(render);
    }

    // As _animate() is actually requestAnimationFrame(), render() gets called
    // decoupled from any pointer action (whenever the browser decides to do
    // so) as an event. preRender() is coupled to toggle() and all pointermove
    // actions; that's where all the calculations happen. render() can now be
    // called without extra calculations which results in faster rendering.
    function render(toggled) {
        _$xy_slider.css(_$xy_slider._css);
        _$xy_cursor.css(_$xy_cursor._css);
        _$z_cursor.css(_$z_cursor._css);
        _$alpha.css(_$alpha._css);
        _$alpha_cursor.css(_$alpha_cursor._css);

        _options.doRender && _$trigger.css(_$trigger._css);
        _$trigger.text && _$trigger.val(_$trigger.text);

        _options.renderCallback.call(
            _colorPicker,
            _$trigger,
            typeof toggled === 'boolean' ? toggled : undefined
        );
    }

    $.fn.colorPicker = function(options) {
        var _this = this,
            noop = function(){};

        options = $.extend({
            animationSpeed: 150,
            GPU: true,
            doRender: true,
            customBG: '#FFF',
            opacity: true,
            renderCallback: noop,
            buildCallback: noop,
            positionCallback: noop,
            body: document.body,
            scrollResize: true,
            gap: 4,
            dark: '#222',
            light: '#DDD',
            // cssPrepend: true,
            // forceAlpha: undefined,
            // css: '',
            // cssAddon: '',
            // margin: '',
            // preventFocus: false
        }, options);

        !_colorPicker && options.scrollResize && $(window)
        .on('resize.tcp scroll.tcp', function() {
            if (_colorPicker.$trigger) {
                _colorPicker.toggle.call(_colorPicker.$trigger[0], true);
            }
        });
        _instance = _instance.add(this);
        this.colorPicker = _colorPicker || new ColorPicker(options);
        this.options = options;

        $(options.body).off('.tcp').on(_pointerdown, function(e) {
            _instance.add(_$UI).add($(_$UI).find(e.target)).
                index(e.target) === -1 && toggle();
        });

        return this.on('focusin.tcp click.tcp', function(event) {
            _colorPicker.color.options = // swap options to fake new instance
                $.extend(_colorPicker.color.options, _options = _this.options);
            toggle.call(this, event);
        })
        .on('change.tcp', function() {
            _color.setColor(this.value || '#FFF');
            _this.colorPicker.render(true);
        })
        .each(function() {
            var value = extractValue(this),
                mode = value.split('('),
                $elm = findElement($(this));

            $elm.data('colorMode', mode[1] ? mode[0].substr(0, 3) : 'HEX')
                .attr('readonly', _options.preventFocus);
            options.doRender &&
            $elm.css({'background-color': value,
                'color': function() {
                    return _color.setColor(value)
                        .rgbaMixBGMixCustom.luminance > 0.22 ?
                        options.dark : options.light
                }
            });
        });
    };

    $.fn.colorPicker.destroy = function() {
        $('*').off('.tcp'); // slower but saver
        _colorPicker.toggle(false);
        _instance = $();
        // destroy _colorPicker
    };

}));
;
//# sourceMappingURL=scripts.js.map
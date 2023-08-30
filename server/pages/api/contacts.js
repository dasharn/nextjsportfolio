"use strict";
(() => {
var exports = {};
exports.id = 617;
exports.ids = [617];
exports.modules = {

/***/ 582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_runMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(336);


// Initializing the cors middleware
const cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({
    methods: [
        "GET",
        "HEAD"
    ]
});
async function handler(req, res) {
    await (0,_utils_runMiddleware__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res, cors);
    if (req.method === "GET") {
        const contactMediums = [
            {
                medium: "github",
                username: "Dasharn",
                link: "https://github.com/Dasharn"
            },
            {
                medium: "email",
                username: "dasharndennis@gmail.com",
                link: "mailto:dasharndennis@gmail.com"
            },
            {
                medium: "linkedin",
                username: "Dasharn",
                link: "https://www.linkedin.com/in/dasharndennis/"
            }, 
        ];
        res.json(contactMediums);
    } else {
        return res.status(400).json({
            message: "Only GET request allowed"
        });
    }
}


/***/ }),

/***/ 336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ runMiddleware)
/* harmony export */ });
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject)=>{
        fn(req, res, (result)=>{
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(245));
module.exports = __webpack_exports__;

})();
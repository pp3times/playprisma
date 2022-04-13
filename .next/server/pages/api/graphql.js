"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "micro-cors":
/*!*****************************!*\
  !*** external "micro-cors" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("micro-cors");

/***/ }),

/***/ "(api)/./graphql/resolvers.ts":
/*!******************************!*\
  !*** ./graphql/resolvers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resolvers\": () => (/* binding */ resolvers)\n/* harmony export */ });\nconst resolvers = {\n    Query: {\n        links: ()=>[\n                {\n                    category: \"Open Source\",\n                    description: \"Fullstack React framework\",\n                    id: \"8a9020b2-363b-4a4f-ad26-d6d55b51bqes\",\n                    imageUrl: \"https://nextjs.org/static/twitter-cards/home.jpg\",\n                    title: \"Next.js\",\n                    url: \"https://nextjs.org\"\n                },\n                {\n                    category: \"Open Source\",\n                    description: \"Next Generation ORM for TypeScript and JavaScript\",\n                    id: \"2a3121b2-363b-4a4f-ad26-d6c35b41bade\",\n                    imageUrl: \"https://www.prisma.io/images/og-image.png\",\n                    title: \"Prisma\",\n                    url: \"https://prisma.io\"\n                },\n                {\n                    category: \"Open Source\",\n                    description: \"Utility-fist css framework\",\n                    id: \"6a9122b2-363b-4a4f-ad26-d6c55b51baed\",\n                    imageUrl: \"https://tailwindcss.com/_next/static/media/twitter-large-card.85c0ff9e455da585949ff0aa50981857.jpg\",\n                    title: \"TailwindCSS\",\n                    url: \"https://tailwindcss.com\"\n                }, \n            ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ncmFwaHFsL3Jlc29sdmVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUyxHQUFHO0lBQ3ZCQyxLQUFLLEVBQUU7UUFDTEMsS0FBSyxFQUFFLElBQU07Z0JBQ1g7b0JBQ0VDLFFBQVEsRUFBRSxhQUFhO29CQUN2QkMsV0FBVyxFQUFFLDJCQUEyQjtvQkFDeENDLEVBQUUsRUFBRSxzQ0FBc0M7b0JBQzFDQyxRQUFRLEVBQUUsa0RBQWtEO29CQUM1REMsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCQyxHQUFHLEVBQUUsb0JBQW9CO2lCQUMxQjtnQkFDRDtvQkFDRUwsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCQyxXQUFXLEVBQUUsbURBQW1EO29CQUNoRUMsRUFBRSxFQUFFLHNDQUFzQztvQkFDMUNDLFFBQVEsRUFBRSwyQ0FBMkM7b0JBRXJEQyxLQUFLLEVBQUUsUUFBUTtvQkFDZkMsR0FBRyxFQUFFLG1CQUFtQjtpQkFDekI7Z0JBQ0Q7b0JBQ0VMLFFBQVEsRUFBRSxhQUFhO29CQUN2QkMsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekNDLEVBQUUsRUFBRSxzQ0FBc0M7b0JBQzFDQyxRQUFRLEVBQ04sb0dBQW9HO29CQUN0R0MsS0FBSyxFQUFFLGFBQWE7b0JBQ3BCQyxHQUFHLEVBQUUseUJBQXlCO2lCQUMvQjthQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXdlc29tZS1saW5rcy8uL2dyYXBocWwvcmVzb2x2ZXJzLnRzP2I5OTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICBsaW5rczogKCkgPT4gW1xuICAgICAge1xuICAgICAgICBjYXRlZ29yeTogXCJPcGVuIFNvdXJjZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGdWxsc3RhY2sgUmVhY3QgZnJhbWV3b3JrXCIsXG4gICAgICAgIGlkOiBcIjhhOTAyMGIyLTM2M2ItNGE0Zi1hZDI2LWQ2ZDU1YjUxYnFlc1wiLFxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL25leHRqcy5vcmcvc3RhdGljL3R3aXR0ZXItY2FyZHMvaG9tZS5qcGdcIixcbiAgICAgICAgdGl0bGU6IFwiTmV4dC5qc1wiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9uZXh0anMub3JnXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjYXRlZ29yeTogXCJPcGVuIFNvdXJjZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJOZXh0IEdlbmVyYXRpb24gT1JNIGZvciBUeXBlU2NyaXB0IGFuZCBKYXZhU2NyaXB0XCIsXG4gICAgICAgIGlkOiBcIjJhMzEyMWIyLTM2M2ItNGE0Zi1hZDI2LWQ2YzM1YjQxYmFkZVwiLFxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL3d3dy5wcmlzbWEuaW8vaW1hZ2VzL29nLWltYWdlLnBuZ1wiLFxuXG4gICAgICAgIHRpdGxlOiBcIlByaXNtYVwiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9wcmlzbWEuaW9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNhdGVnb3J5OiBcIk9wZW4gU291cmNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlV0aWxpdHktZmlzdCBjc3MgZnJhbWV3b3JrXCIsXG4gICAgICAgIGlkOiBcIjZhOTEyMmIyLTM2M2ItNGE0Zi1hZDI2LWQ2YzU1YjUxYmFlZFwiLFxuICAgICAgICBpbWFnZVVybDpcbiAgICAgICAgICBcImh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL19uZXh0L3N0YXRpYy9tZWRpYS90d2l0dGVyLWxhcmdlLWNhcmQuODVjMGZmOWU0NTVkYTU4NTk0OWZmMGFhNTA5ODE4NTcuanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIlRhaWx3aW5kQ1NTXCIsXG4gICAgICAgIHVybDogXCJodHRwczovL3RhaWx3aW5kY3NzLmNvbVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJyZXNvbHZlcnMiLCJRdWVyeSIsImxpbmtzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsImlkIiwiaW1hZ2VVcmwiLCJ0aXRsZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./graphql/resolvers.ts\n");

/***/ }),

/***/ "(api)/./graphql/schema.ts":
/*!***************************!*\
  !*** ./graphql/schema.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeDefs\": () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`\n  type Link {\n    id: String\n    title: String\n    description: String\n    url: String\n    category: String\n    imageUrl: String\n    users: [String]\n  }\n\n  type Query {\n    links: [Link]!\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ncmFwaHFsL3NjaGVtYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFFbkMsTUFBTUMsUUFBUSxHQUFHRCxvREFBRyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQWM1QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd2Vzb21lLWxpbmtzLy4vZ3JhcGhxbC9zY2hlbWEudHM/MTJiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1taWNyb1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gIHR5cGUgTGluayB7XG4gICAgaWQ6IFN0cmluZ1xuICAgIHRpdGxlOiBTdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgdXJsOiBTdHJpbmdcbiAgICBjYXRlZ29yeTogU3RyaW5nXG4gICAgaW1hZ2VVcmw6IFN0cmluZ1xuICAgIHVzZXJzOiBbU3RyaW5nXVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgbGlua3M6IFtMaW5rXSFcbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJncWwiLCJ0eXBlRGVmcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./graphql/schema.ts\n");

/***/ }),

/***/ "(api)/./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphql/schema */ \"(api)/./graphql/schema.ts\");\n/* harmony import */ var _graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/resolvers */ \"(api)/./graphql/resolvers.ts\");\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micro-cors */ \"micro-cors\");\n/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(micro_cors__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst cors = micro_cors__WEBPACK_IMPORTED_MODULE_3___default()();\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n    typeDefs: _graphql_schema__WEBPACK_IMPORTED_MODULE_1__.typeDefs,\n    resolvers: _graphql_resolvers__WEBPACK_IMPORTED_MODULE_2__.resolvers\n});\nconst startServer = apolloServer.start();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors(async function handler(req, res) {\n    if (req.method === \"OPTIONS\") {\n        res.end();\n        return false;\n    }\n    await startServer;\n    await apolloServer.createHandler({\n        path: \"/api/graphql\"\n    })(req, res);\n}));\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3JhcGhxbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNIO0FBQ0k7QUFDdEI7QUFFOUIsTUFBTUksSUFBSSxHQUFHRCxpREFBSSxFQUFFO0FBRW5CLE1BQU1FLFlBQVksR0FBRyxJQUFJTCw2REFBWSxDQUFDO0lBQUVDLFFBQVE7SUFBRUMsU0FBUztDQUFFLENBQUM7QUFFOUQsTUFBTUksV0FBVyxHQUFHRCxZQUFZLENBQUNFLEtBQUssRUFBRTtBQUV4QyxpRUFBZUgsSUFBSSxDQUFDLGVBQWVJLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDbkQsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQzVCRCxHQUFHLENBQUNFLEdBQUcsRUFBRSxDQUFDO1FBQ1YsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE1BQU1OLFdBQVcsQ0FBQztJQUVsQixNQUFNRCxZQUFZLENBQUNRLGFBQWEsQ0FBQztRQUFFQyxJQUFJLEVBQUUsY0FBYztLQUFFLENBQUMsQ0FBQ0wsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztDQUN0RSxDQUFDLEVBQUM7QUFFSSxNQUFNSyxNQUFNLEdBQUc7SUFDcEJDLEdBQUcsRUFBRTtRQUNIQyxVQUFVLEVBQUUsS0FBSztLQUNsQjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd2Vzb21lLWxpbmtzLy4vcGFnZXMvYXBpL2dyYXBocWwudHM/ZWExZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1taWNyb1wiO1xuaW1wb3J0IHsgdHlwZURlZnMgfSBmcm9tIFwiLi4vLi4vZ3JhcGhxbC9zY2hlbWFcIjtcbmltcG9ydCB7IHJlc29sdmVycyB9IGZyb20gXCIuLi8uLi9ncmFwaHFsL3Jlc29sdmVyc1wiO1xuaW1wb3J0IENvcnMgZnJvbSBcIm1pY3JvLWNvcnNcIjtcblxuY29uc3QgY29ycyA9IENvcnMoKTtcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSk7XG5cbmNvbnN0IHN0YXJ0U2VydmVyID0gYXBvbGxvU2VydmVyLnN0YXJ0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvcnMoYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJPUFRJT05TXCIpIHtcbiAgICByZXMuZW5kKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGF3YWl0IHN0YXJ0U2VydmVyO1xuXG4gIGF3YWl0IGFwb2xsb1NlcnZlci5jcmVhdGVIYW5kbGVyKHsgcGF0aDogXCIvYXBpL2dyYXBocWxcIiB9KShyZXEsIHJlcyk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkFwb2xsb1NlcnZlciIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiQ29ycyIsImNvcnMiLCJhcG9sbG9TZXJ2ZXIiLCJzdGFydFNlcnZlciIsInN0YXJ0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVuZCIsImNyZWF0ZUhhbmRsZXIiLCJwYXRoIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/graphql.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/graphql.ts"));
module.exports = __webpack_exports__;

})();
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var api_1 = require("./routes/api");
var app = express_1.default();
exports.app = app;
// Middle-wares
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(function (req, _res, next) {
    console.info(req.method + " " + req.path);
    next();
});
// setup ejs
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/assets/', express_1.default.static(path.resolve(__dirname, 'public', 'assets')));
app.get('/', function (_req, res) {
    res.render('index');
});
app.get('/exercise', function (_req, res) {
    res.render('exercise');
});
app.get('/stats', function (_req, res) {
    res.render('stats');
});
app.use('/api/workouts', api_1.apiRoutes);
app.use("*", function (_req, res) {
    res.redirect('/');
});

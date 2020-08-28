const rootDir = process.cwd();

module.exports.rootDir = rootDir;

const cfgfile = "src/config.yml";

module.exports.cfgfile = cfgfile;

const extractionDir = "sync_repos";

module.exports.extractionDir = extractionDir;

const markdowncodeticks = "```";

module.exports.markdowncodeticks = markdowncodeticks;

function fmtStartCodeBlock (ext) {
  return markdowncodeticks + ext;
}

module.exports.fmtStartCodeBlock = fmtStartCodeBlock;

const readstart = "@@@START";

module.exports.readstart = readstart;

const readend   = "@@@END";

module.exports.readend = readend;

const writestart = "<!--START";

module.exports.writestart = writestart;

const writeend = "<!--END";

module.exports.writeend = writeend;

function fmtProgressBar (message) {
  return "⭐ " + "| {bar} | {percentage}% | {value}/{total} chunks | " + message;
}

module.exports.fmtProgressBar = fmtProgressBar;

const colleges = require("../data/colleges.json");

module.exports = function handler(req, res) {
  const state = String((req.query && req.query.state) || "").trim().toLowerCase();
  const budget = String((req.query && req.query.budget) || "low").toLowerCase();
  const career = String((req.query && req.query.career) || "").trim().toLowerCase();
  const limit = Math.min(10, Math.max(1, Number(req.query && req.query.limit) || 6));

  if (!state) return res.status(400).json({error:"state is required"});

  let list = colleges.filter(c => String(c.state||"").toLowerCase() === state);

  const keys = {
    "technology & software":["iit","nit","iiit","engineering","technology","computer"],
    "practical technology / iot":["iit","nit","iiit","engineering","technology","electronics"],
    "business & management":["iim","business","management","university"],
    "finance & professional studies":["commerce","business","university","management"],
    "creative & digital media":["media","design","arts","fashion","university"],
    "people & public service":["university","arts","government","college"]
  }[career] || [];

  if (keys.length) {
    const relevant = list.filter(c =>
      keys.some(k => (String(c.name)+" "+String(c.type)).toLowerCase().includes(k))
    );
    if (relevant.length >= 3) list = relevant;
  }

  list = list.filter(c => c.fee != null);
  list.sort((a,b) => budget === "low"
    ? (a.fee||Infinity)-(b.fee||Infinity)
    : (b.rating||0)-(a.rating||0));

  res.setHeader("Cache-Control","s-maxage=86400, stale-while-revalidate=604800");
  return res.status(200).json({
    source:"India-Edu-Cities public dataset",
    sourceNote:"Fee values are dataset estimates. Verify current fees on the institution's official website.",
    count:list.length,
    colleges:list.slice(0,limit)
  });
};

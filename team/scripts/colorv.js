// redirect.js
(function() {
  // الدومين/الدومينات المسموح بها (بدون https أو http)
  const ALLOWED = ['rbxpro.store', 'www.rbxpro.store'];

  // الدومين الحالي (hostname فقط، بدون بورت)
  const host = (window.location.hostname || '').toLowerCase();

  // إذا لم يكن الدومين ضمن المسموح به، قم بالتحويل فورًا
  if (!ALLOWED.includes(host)) {
    // احتفظ بالمسار، الاستعلام، والهاش عند التحويل
    const target = 'https://www.rbxpro.store' 
      + window.location.pathname 
      + window.location.search 
      + window.location.hash;

    // استبدال الموقع الحالي في التاريخ (لا يترك الصفحة في التاريخ الخلفي)
    window.location.replace(target);
  }
})();

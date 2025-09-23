const ResidentPortalTab = () => {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="space-y-3 lg:col-span-8">
        <h2 className="text-lg font-semibold">Квитанции</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between text-sm">
            <span>Автоподтяжка из ГИС ЖКХ (если доступна)</span>
            <button className="rounded-lg border border-slate-200 px-3 py-1.5 hover:bg-slate-50">
              Открыть последнюю
            </button>
          </div>
        </div>

        <h2 className="text-lg font-semibold">Обращение</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="grid gap-2 text-sm">
            <input
              placeholder="Тема обращения"
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <textarea
              placeholder="Опишите проблему…"
              rows={4}
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <button className="mt-1 rounded-lg bg-slate-900 px-3 py-2 text-white">
              Отправить
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3 lg:col-span-4">
        <h2 className="text-lg font-semibold">Показания ПУ</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="grid gap-2 text-sm">
            <input
              placeholder="Лицевой счёт"
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <input
              placeholder="ХВС"
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <input
              placeholder="ГВС"
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <button className="mt-1 rounded-lg bg-slate-900 px-3 py-2 text-white">
              Передать
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold">Контакты УК</h3>
          <ul className="space-y-1 text-sm text-slate-700">
            <li>Диспетчер: +7 (000) 000-00-00</li>
            <li>Эл. почта: uk@example.com</li>
            <li>Адрес: ул. Примерная, 1</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResidentPortalTab;

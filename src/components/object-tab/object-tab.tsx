import { useMemo, useState } from "react";
import { HOUSES } from "src/data/objects.constant";
import Badge from "../ui/badge/badge";
import Metric from "../ui/metric/metric";

const ObjectsTab = ({
  query,
  onOpenHouse,
  activeHouse,
  onCloseDetail,
}: {
  query: string;
  onOpenHouse: (id: string) => void;
  activeHouse: (typeof HOUSES)[number] | null;
  onCloseDetail: () => void;
}) => {
  const [filter, setFilter] = useState("Все");
  const filtered = useMemo(
    () =>
      HOUSES.filter(
        (h) =>
          (filter === "Все" ||
            (filter === ">=80%"
              ? h.collectedPercent >= 80
              : h.collectedPercent < 80)) &&
          (h.name + h.address).toLowerCase().includes(query.toLowerCase())
      ),
    [query, filter]
  );

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <section className="lg:col-span-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Объекты</h2>
          <div className="flex items-center gap-2">
            <select
              className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>Все</option>
              <option>{">=80%"}</option>
              <option>{"<80%"}</option>
            </select>
            <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white">
              Добавить объект
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {filtered.map((h) => (
            <button
              key={h.id}
              onClick={() => onOpenHouse(h.id)}
              className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow"
            >
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-slate-200 to-slate-100" />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {h.name}
                  </p>
                  <Badge color={h.collectedPercent >= 80 ? "green" : "amber"}>
                    {h.collectedPercent}%
                  </Badge>
                </div>
                <p className="truncate text-xs text-slate-500">{h.address}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                  <span>
                    Корпусов: <b>{h.buildings}</b>
                  </span>
                  <span>
                    ПУ ок:{" "}
                    <b>
                      {h.metersOk}/{h.metersTotal}
                    </b>
                  </span>
                  <span>
                    Открытых заявок: <b>{h.openTickets}</b>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Right panel: 3D + details */}
      <aside className="lg:col-span-4">
        <div className="sticky top-16 space-y-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-3">
            <h3 className="mb-2 text-sm font-semibold">3D-модель (прототип)</h3>
            <div className="aspect-[4/3] w-full rounded-xl border border-dashed border-slate-300 bg-slate-100 grid place-items-center text-slate-500 text-sm">
              <div>
                <div className="mx-auto mb-2 size-10 rounded-full border-4 border-slate-400 border-b-transparent animate-spin" />
                Плейсхолдер под Canvas/WebGL сцену
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              В целевой версии — интерактив: наведение на корпуса, контекст-меню
              дома, слои по приборам/заявкам.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Сводка по дому</h3>
              {activeHouse && (
                <button
                  className="text-xs text-slate-500 hover:text-slate-700"
                  onClick={onCloseDetail}
                >
                  Сбросить
                </button>
              )}
            </div>
            {activeHouse ? (
              <div className="space-y-2 text-sm">
                <p className="font-medium">{activeHouse.name}</p>
                <p className="text-slate-500">{activeHouse.address}</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <Metric
                    label="Собрано средств"
                    value={`${activeHouse.collectedPercent}%`}
                    trend="up"
                  />
                  <Metric
                    label="Открытые заявки"
                    value={String(activeHouse.openTickets)}
                  />
                  <Metric
                    label="ПУ в норме"
                    value={`${activeHouse.metersOk}/${activeHouse.metersTotal}`}
                  />
                  <Metric
                    label="Корпусов"
                    value={String(activeHouse.buildings)}
                  />
                </div>
                <div className="mt-3 grid gap-2">
                  <button className="rounded-lg border border-slate-200 px-3 py-2 text-left hover:bg-slate-50">
                    Показания приборов
                  </button>
                  <button className="rounded-lg border border-slate-200 px-3 py-2 text-left hover:bg-slate-50">
                    Заявки и обращения
                  </button>
                  <button className="rounded-lg border border-slate-200 px-3 py-2 text-left hover:bg-slate-50">
                    Закупки и материалы
                  </button>
                  <button className="rounded-lg border border-slate-200 px-3 py-2 text-left hover:bg-slate-50">
                    Прикрепленные сотрудники
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-500">
                Выберите объект слева, чтобы посмотреть детали.
              </p>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ObjectsTab;

import { REQUESTS } from "@/data/requests";
import Badge from "../ui/badge/badge";
import Td from "../ui/td/td";
import Th from "../ui/th/th";
import { EStatus } from "@/types/status";

const getStatusColor = (status: string) => {
  switch (status) {
    case EStatus.CLOSED:
      return "green";
    case EStatus.IN_PROGRESS:
      return "blue";
    case EStatus.NEW:
      return "amber";
    case EStatus.HOLD:
      return "slate";
  }
};

const MyCabinetTab = () => {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="space-y-3 lg:col-span-8">
        <h2 className="text-lg font-semibold">Мои заявки</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <Th>№</Th>
                <Th>Тип</Th>
                <Th>Объект</Th>
                <Th>Статус</Th>
                <Th>Обновлено</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {REQUESTS.slice(0, 2).map((r) => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <Td>{r.id}</Td>
                  <Td>{r.type}</Td>
                  <Td className="max-w-[220px] truncate">{r.house}</Td>
                  <Td>
                    <Badge color={getStatusColor(r.status)}>{r.status}</Badge>
                  </Td>
                  <Td>сегодня</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3 lg:col-span-4">
        <h2 className="text-lg font-semibold">Формы ввода</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold">Показания приборов</h3>
          <div className="grid gap-2 text-sm">
            <input
              placeholder="Объект"
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <input
              placeholder="Лицевой счёт/кв."
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <input
              placeholder="ПУ: холодная вода"
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <input
              placeholder="ПУ: горячая вода"
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <button className="mt-1 rounded-lg bg-slate-900 px-3 py-2 text-white">
              Отправить
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold">Запрос на закупку</h3>
          <div className="grid gap-2 text-sm">
            <input
              placeholder="Материал/описание"
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <input
              placeholder="Количество"
              className="rounded-lg border border-slate-200 px-3 py-2"
            />
            <button className="mt-1 rounded-lg bg-slate-900 px-3 py-2 text-white">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCabinetTab;

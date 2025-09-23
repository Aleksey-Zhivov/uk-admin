import { useState, useMemo } from "react";
import { REQUESTS } from "@/data/requests";
import Th from "../ui/th/th";
import Badge from "../ui/badge/badge";
import Td from "../ui/td/td";

const RequestsTab = ({
  reqStatus,
  setReqStatus,
}: {
  reqStatus: string;
  setReqStatus: (v: string) => void;
}) => {
  const [q, setQ] = useState("");
  const rows = useMemo(
    () =>
      REQUESTS.filter(
        (r) =>
          (!reqStatus || r.status === reqStatus) &&
          (r.id + r.type + r.house + r.unit + r.assignee)
            .toLowerCase()
            .includes(q.toLowerCase())
      ),
    [q, reqStatus]
  );

  return (
    <section className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">Заявки и обращения</h2>
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Поиск…"
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
          />
          <select
            value={reqStatus}
            onChange={(e) => setReqStatus(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm"
          >
            <option value="">Все статусы</option>
            <option>Новая</option>
            <option>В работе</option>
            <option>Закрыта</option>
          </select>
          <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white">
            Создать заявку
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <Th>№</Th>
              <Th>Тип</Th>
              <Th>Объект</Th>
              <Th>Адрес/кв.</Th>
              <Th>Статус</Th>
              <Th>Назначена</Th>
              <Th>Создана</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50">
                <Td>{r.id}</Td>
                <Td>{r.type}</Td>
                <Td className="max-w-[220px] truncate">{r.house}</Td>
                <Td>{r.unit}</Td>
                <Td>
                  <Badge
                    color={
                      r.status === "Закрыта"
                        ? "green"
                        : r.status === "В работе"
                        ? "blue"
                        : "amber"
                    }
                  >
                    {r.status}
                  </Badge>
                </Td>
                <Td>{r.assignee}</Td>
                <Td>{r.created}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RequestsTab;

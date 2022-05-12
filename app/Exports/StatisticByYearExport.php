<?php

namespace App\Exports;

use App\Models\Order;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;

class StatisticByYearExport implements FromQuery, WithHeadings, WithMapping, WithColumnWidths
{
    use Exportable;

    public function __construct(string $from_year, string $to_year)
    {
        $this->from_year = $from_year;
        $this->to_year = $to_year;
    }

    public function query()
    {
        return Order::query()->select(
            DB::raw("SUM(status = '0') AS order_standby"),
            DB::raw("SUM(status = '1') AS order_contacted"),
            DB::raw("SUM(status = '2') AS order_done"),
            DB::raw("SUM(status = '3') AS order_cancel"),
            DB::raw('DATE_FORMAT(created_at, "%Y") as day')
        )
            ->whereBetween(DB::raw('DATE_FORMAT(created_at, "%Y")'), [$this->from_year, $this->to_year])
            ->groupBy(DB::raw('DATE_FORMAT(created_at, "%Y")'))
            ->orderBy(DB::raw('DATE_FORMAT(created_at, "%Y")'), 'ASC');
    }

    public function map($row): array
    {
        $fields = [
            $row->day,
            $row->order_standby,
            $row->order_contacted,
            $row->order_done,
            $row->order_cancel
        ];
        return $fields;
    }

    public function headings(): array
    {
        return ["Năm", "Chờ xử lý", "Đã liên hệ", "Hoàn thành", "Bị huỷ"];
    }

    public function columnWidths(): array
    {
        return [
            'A' => 20,
            'B' => 15,
            'C' => 15,
            'D' => 15,
            'E' => 15,
        ];
    }
}

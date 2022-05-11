<?php

namespace App\Repositories\Contact;

use App\Repositories\Contact\ContactInterface;
use Illuminate\Http\Request;
use App\Models\Contact;

/**
 * Class OrderRepository.
 */
class ContactRepository implements ContactInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Contact::class;
    }

    public function list($currentEntries)
    {
        return Contact::orderby('id', 'DESC')->paginate($currentEntries);
    }

    public function search($query, $currentEntries)
    {
        return Contact::where('full_name', 'LIKE', '%' . $query . '%')
            ->orwhere('email', 'LIKE', '%' . $query . '%')
            ->orwhere('phone_number', 'LIKE', '%' . $query . '%')
            ->orderby('id', 'DESC')->paginate($currentEntries);
    }

    public function filter($value, $currentEntries)
    {
        return Contact::where('status', $value)->orderby('id', 'DESC')->paginate($currentEntries);
    }
}

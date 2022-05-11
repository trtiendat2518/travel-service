<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ConsultingResource;
use App\Repositories\Contact\ContactInterface;
use App\Models\Contact;
use Illuminate\Http\Request;

class ConsultingController extends Controller
{
    /**
     * @var ContactInterface|\App\Repositories\Repository
     */
    protected $contactRepository;

    public function __construct(ContactInterface $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Quản lý liên hệ tư vấn";
        $meta_title = "Quản lý liên hệ tư vấn";
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.consulting.list')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show($currentEntries)
    {
        $listContacts = $this->contactRepository->list($currentEntries);
        return ConsultingResource::collection($listContacts);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $contactId)
    {
        $contact = Contact::find($contactId);
        $contact->status = $request->status;
        $contact->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy($contactId)
    {
        $contact = Contact::find($contactId);
        $contact->delete();
    }

    public function search($query, $currentEntries)
    {
        $searchContact = $this->contactRepository->search($query, $currentEntries);
        return ConsultingResource::collection($searchContact);
    }

    public function filter($value, $currentEntries)
    {
        $filterContact = $this->contactRepository->filter($value, $currentEntries);
        return ConsultingResource::collection($filterContact);
    }
}

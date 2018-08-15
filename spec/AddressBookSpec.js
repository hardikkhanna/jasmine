describe('Address Book',function(){
    it('should be able to add contact',function() {
        var addressBook = new AddressBook();
        this contact = new Contact();
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
});
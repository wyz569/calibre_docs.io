//
// Copyright 2005-2009 Mentor Graphics Corporation
//
//    All Rights Reserved.
//
// THIS WORK CONTAINS TRADE SECRET
// AND PROPRIETARY INFORMATION WHICH IS THE
// PROPERTY OF MENTOR GRAPHICS
// CORPORATION OR ITS LICENSORS AND IS
// SUBJECT TO LICENSE TERMS.
//
// |------------------------------------------------------------------------|
// | customer_orig.js                                                       |
// |                                                                        |
// | DO NOT EDIT THIS FILE!                                                 |
// | This file is the master template for creating a custom InfoHub tab.    |
// | If the file 'customer.js' is not available, or to start from scratch,  |
// | create a copy of this file within the current directory and rename the |
// | copy to 'customer.js'.  For more instructions, open the help file      |
// | <path_to_docs>/htmldocs/mgc_html_help/mgc_html_help.htm and click on   |
// | the "Adding a "Custom" Tab to the InfoHub" topic.                      |
// |------------------------------------------------------------------------|


// Custom tab contents
//
// Change value below from 'false' to 'true' to display custom tab
IHTab_Custom.fVisible( false );
//
// Change "Custom Info" text to customize tab title
IHTab_Custom.fSetTitle( "Custom Info" );

// -----------------------------------------------------------
// There are 2 ways to define the contents for the custom tab:
// -----------------------------------------------------------

//  1) Define standard tab contents with links and/or list boxes.
//
Entry = new TabEntry_Object( "Title 1" );             // Sets title for entry
Entry.fAddLink( "Link 1", "url1" );                   // Adds link to entry
Entry.fAddLink( "Link 2", "url2" );                   // Adds another link
IHTab_Custom.fAddEntry( Entry );

Entry = new TabEntry_Object( "Title 2" );             // Sets title for entry
List = new List_Object();                             // Creates new listbox
List.fAddItem( "Item 1 Title", "url3" );              // Adds item to listbox
List.fAddItem( "Item 2 Title", "url4" );              // Adds another item to listbox
Entry.fAddList( List );                               // Adds listbox to entry
IHTab_Custom.fAddEntry( Entry );                      // Adds entry to tab

Entry = new TabEntry_Object( "Title 3" );             // Sets title for entry
Entry.fAddLink( "Link 3", "url5" );                   // Adds link to entry
Entry.fAddLink( "Link 4", "url6" );                   // Adds link to entry
List = new List_Object();                             // Creates new listbox
List.fSetTitle( "Listbox Title" );                    // Sets title for listbox
List.fAddItem( "Item 3 Title", "url7" );              // Adds item to listbox
List.fAddItem( "Item 4 Title", "url8" );              // Adds item to listbox
Entry.fAddList( List );                               // Adds listbox to entry
IHTab_Custom.fAddEntry( Entry );


//  2) Specify the path or URL to a shared customer.js file to load.
//
//SetCustomerJS( "http://host/path/to/customer.js" );


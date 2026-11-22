(: 
   XQuery Expression:
   Select all books from bookstore.xml whose price is greater than 50
:)

for $b in doc("bookstore.xml")/bookstore/book
where $b/price > 50
return 
  <result>
    <title>{data($b/title)}</title>
    <author>{data($b/author)}</author>
    <year>{data($b/year)}</year>
    <price>{data($b/price)}</price>
    <category>{data($b/@category)}</category>
  </result>

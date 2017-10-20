mkdir temp
cd References
copy "*.js" ..\temp\core.js
cd Directions
copy "*.js" ..\..\temp\directions.js
cd ..\Search
copy "*.js" ..\..\temp\search.js
cd ..\VenueMaps
copy "*.js" ..\..\temp\venuemaps.js
cd ..
cd ..
cd temp
copy "*.js" ..\Microsoft.Maps-vsdoc.js
cd ..
rmdir /s /q temp

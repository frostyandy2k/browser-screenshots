if [ -z "$1" ]
  then
    DEFAULT_URL=http://test-shop.blc.localhost:8070
    echo "No argument supplied, defaulting to ${DEFAULT_URL}"
    URL=$DEFAULT_URL
  else
      URL=$1
fi
URLS=
# Declare an array of string with type
declare -a URLS=(
    "/"
    "/apparel/hats"
    "/gifts-accessories/mugs"
    "/gifts-accessories/mugs/ceramic-mug-mom"
    "/cart"
    "/login"
    ) 

# Iterate the string array using for loop
for val in ${URLS[@]}; do
    echo Taking screenshot of: $URL$val
    node index.js $URL$val
done

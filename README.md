# Web Development Project 5 - *Globe Explora*

Submitted by: **Seedorf Otchere**

This web app: **Globe Explora, allows users to explore a list of countries by fetching data from a public API. It displays key country details such as population, region, and capital. Users can filter countries by region, search for specific countries, and view summary statistics like total countries, average population, and number of regions.**

Time spent: **15** hours spent in total

## Required Features

The following **required** functionality is completed:

First Part

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *Total Countries*
    - *Average Population*
    - *Regions*
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

Second Part

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset

The following **optional** features are implemented:
First Part: 
- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [x] The user can enter specific bounds for filter values

Second Part:
- [x] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [x] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 


The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!
  - A list of country details with an image of the country’s flag and other basic information.
  - Simple CSS styling to create a visually appealing dashboard with cards for each country.
  - Simple CSS styling to create a visually appealing dashboard with cards for each country.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
First Part: 
<img src='./public/vid-walkthrough.gif' title='Video Walkthrough 1' width='' alt='Video Walkthrough' />

Second Part: 
<img src='./public/vid-walkthrough-2.gif' title='Video Walkthrough 2' alt='Video Walkthrough'>

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
- Handling and updating state with filtered results was straightforward, but making sure the data updated correctly when filters or search input changed was a bit tricky.

## License

    Copyright 2025 Seedorf Otchere

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

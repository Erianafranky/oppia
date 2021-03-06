// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Data and controllers for the Oppia admin page.
 */

oppia.constant('ADMIN_HANDLER_URL', '/adminhandler');
oppia.constant('PROFILE_URL_TEMPLATE', '/profile/<username>');
oppia.constant(
  'ADMIN_JOB_OUTPUT_URL_TEMPLATE', '/adminjoboutput?job_id=<jobId>');
oppia.constant(
  'ADMIN_TOPICS_CSV_DOWNLOAD_HANDLER_URL', '/admintopicscsvdownloadhandler');

oppia.controller('Admin', [
  '$scope', '$http', '$window', 'AdminRouterService',
  function($scope, $http, $window, AdminRouterService) {
    $scope.username = GLOBALS.USERNAME;
    $scope.userEmail = GLOBALS.USER_EMAIL;
    $scope.profilePictureDataUrl = GLOBALS.PROFILE_PICTURE_DATA_URL;
    $scope.isModerator = GLOBALS.IS_MODERATOR;
    $scope.isSuperAdmin = GLOBALS.IS_SUPER_ADMIN;
    $scope.logoutUrl = GLOBALS.LOGOUT_URL;
    $scope.inDevMode = GLOBALS.DEV_MODE;

    $scope.statusMessage = '';
    $scope.isActivitiesTabOpen = AdminRouterService.isActivitiesTabOpen;
    $scope.isJobsTabOpen = AdminRouterService.isJobsTabOpen;
    $scope.isConfigTabOpen = AdminRouterService.isConfigTabOpen;
    $scope.isMiscTabOpen = AdminRouterService.isMiscTabOpen;

    $scope.setStatusMessage = function(statusMessage) {
      $scope.statusMessage = statusMessage;
    };

    $scope.$watch(function() {
      return $window.location.hash;
    }, AdminRouterService.showTab);
  }
]);

import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";
/**

Generates an iCalendar file or URL
@param {Object} options - The options object
@param {string} [options.output] - The name of the output file
@param {string} options.responseFormat - The desired response format - either "file" or "url"
@param {string} options.summary - The summary of the event
@param {string} options.description - The description of the event
@param {string} options.organizerEmail - The email address of the organizer of the event
@param {string[]} options.attendeesEmails - An array of email addresses of attendees of the event
@param {string} [options.location] - The location of the event
@param {string} options.timeZone - The time zone of the event
@param {string} options.startTime - The start time of the event
@param {string} options.endTime - The end time of the event
@param {string} options.meetingDate - The date of the event
@param {boolean} options.recurring - Whether the event is recurring or not
@param {Object} [options.recurrence] - The recurrence options for the event
@param {string} [options.recurrence.frequency] - The frequency of the event's recurrence - possible values are "daily", "weekly", "monthly", or "yearly"
@param {number} [options.recurrence.count] - The number of times the event should recur
@returns {Promise<{data: string}>} A promise that resolves to an object with the data - either the file or URL depending on the response format
*/
async function ical({
  output,
  responseFormat,
  summary,
  description,
  organizerEmail,
  attendeesEmails,
  location,
  timeZone,
  startTime,
  endTime,
  meetingDate,
  recurring,
  recurrence,
}: {
  output?: string;
  responseFormat: "file" | "url";
  summary: string;
  description: string;
  organizerEmail: string;
  attendeesEmails: string[];
  location?: string;
  timeZone: string;
  startTime: string;
  endTime: string;
  meetingDate: string;
  recurring: boolean;
  recurrence?: {
    frequency: string;
    count: number;
  };
}): Promise<{ data: string }> {
  const client = getInstance();
  checkMissingParams({
    responseFormat,
    summary,
    description,
    organizerEmail,
    attendeesEmails,
    timeZone,
    startTime,
    endTime,
    meetingDate,
    recurring,
  });
  checkParamTypes({ responseFormat }, ["file", "url"]);

  const url = `https://api.apyhub.com/generate/ical/${responseFormat}?output=${output ??
    "invite.ics"}`;
  return await client.request("post", url, {
    summary,
    description,
    organizer_email: organizerEmail,
    attendees_email: attendeesEmails,
    location,
    time_zone: timeZone,
    start_time: startTime,
    end_time: endTime,
    meeting_date: meetingDate,
    recurring,
    recurrence,
  });
}

export { ical };

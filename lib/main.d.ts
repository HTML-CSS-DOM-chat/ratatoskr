/// <reference path="../typings/index.d.ts" />
import { Client as _Client, ConnectionStatus as _ConnectionStatus, MessageSendError as _MessageSendError, MessageSendErrorCause as _MessageSendErrorCause } from './client';
export declare var Client: typeof _Client;
export declare var ConnectionStatus: typeof _ConnectionStatus;
export declare var MessageSendError: typeof _MessageSendError;
export declare var MessageSendErrorCause: typeof _MessageSendErrorCause;
import { resume as _resume } from './extensions/resume';
export declare var resume: typeof _resume;
import { presenceBatch as _presenceBatch } from './extensions/presence-batch';
export declare var presenceBatch: typeof _presenceBatch;

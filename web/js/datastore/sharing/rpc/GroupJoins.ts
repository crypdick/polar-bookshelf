import {JSONRPC} from './JSONRPC';
import {GroupIDStr} from '../../Datastore';

export class GroupJoins {

    public static async exec(request: GroupJoinRequest): Promise<GroupJoinResponse> {
        return await JSONRPC.exec('groupJoin', request);
    }

}

export interface GroupJoinRequest {
    readonly groupID: GroupIDStr;
}

export interface GroupJoinResponse {
}


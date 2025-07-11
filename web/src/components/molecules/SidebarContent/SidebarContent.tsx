import {
	SidebarContent as UiSidebarContent,
	SidebarMenu,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenuItem,
} from '@ui/sidebar';
import { SidebarMenuButton } from '@atoms';

import { type SidebarGroupType } from './types';

type SidebarContentProps = {
	sidebarGroups?: SidebarGroupType[];
};

function SidebarContent({ sidebarGroups }: SidebarContentProps) {
	return (
		<UiSidebarContent>
			{sidebarGroups && sidebarGroups?.length > 0 ? (
				<SidebarGroup>
					{sidebarGroups?.map((sidebarGroup, index) => (
						<div className="mb-2" key={index}>
							{sidebarGroup?.title ? (
								<SidebarGroupLabel>{sidebarGroup?.title}</SidebarGroupLabel>
							) : null}
							<SidebarGroupContent>
								<SidebarMenu>
									{sidebarGroup?.items?.map((sidebarGroupItem) => (
										<SidebarMenuItem key={sidebarGroupItem.id}>
											<SidebarMenuButton
												isActive={
													sidebarGroup.activeItemId === sidebarGroupItem.id
												}
												{...sidebarGroupItem}
											/>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</div>
					))}
				</SidebarGroup>
			) : null}
		</UiSidebarContent>
	);
}

export default SidebarContent;
